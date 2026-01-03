import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

export interface EnhancedAgreement {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  document_url: string;
  status: string;
  is_locked: boolean;
  client_can_edit: boolean;
  terms_and_conditions: string | null;
  services_included: any[];
  payment_amount: number | null;
  payment_schedule: string | null;
  extra_services_rules: string | null;
  late_payment_terms: string | null;
  agreement_type: string;
  parent_agreement_id: string | null;
  sent_at: string | null;
  viewed_at: string | null;
  signed_at: string | null;
  signature_data: string | null;
  signer_ip: string | null;
  signer_user_agent: string | null;
  created_at: string;
  created_by: string;
}

interface CreateAgreementData {
  projectId: string;
  title: string;
  description?: string;
  documentUrl: string;
  termsAndConditions?: string;
  servicesIncluded?: string[];
  paymentAmount?: number;
  paymentSchedule?: string;
  extraServicesRules?: string;
  latePaymentTerms?: string;
  agreementType?: string;
  parentAgreementId?: string;
}

export const useEnhancedAgreements = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [agreements, setAgreements] = useState<EnhancedAgreement[]>([]);

  const fetchAgreements = useCallback(async (projectId?: string) => {
    setLoading(true);
    try {
      let query = supabase
        .from('document_agreements')
        .select('*')
        .order('created_at', { ascending: false });

      if (projectId) {
        query = query.eq('project_id', projectId);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching agreements:', error);
        toast({
          title: 'Error',
          description: 'Failed to load agreements',
          variant: 'destructive'
        });
      } else {
        // Type assertion for the new columns
        const enhancedData = (data || []).map(item => ({
          ...item,
          is_locked: item.is_locked ?? false,
          client_can_edit: item.client_can_edit ?? false,
          terms_and_conditions: item.terms_and_conditions ?? null,
          services_included: (item.services_included as any[]) ?? [],
          payment_amount: item.payment_amount ?? null,
          payment_schedule: item.payment_schedule ?? null,
          extra_services_rules: item.extra_services_rules ?? null,
          late_payment_terms: item.late_payment_terms ?? null,
          agreement_type: item.agreement_type ?? 'primary',
          parent_agreement_id: item.parent_agreement_id ?? null,
          signer_ip: item.signer_ip ?? null,
          signer_user_agent: item.signer_user_agent ?? null,
        })) as EnhancedAgreement[];
        setAgreements(enhancedData);
      }
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const createAgreement = async (data: CreateAgreementData) => {
    if (!user) return null;

    const { data: result, error } = await supabase
      .from('document_agreements')
      .insert({
        project_id: data.projectId,
        title: data.title,
        description: data.description,
        document_url: data.documentUrl,
        created_by: user.id,
        status: 'pending',
        terms_and_conditions: data.termsAndConditions,
        services_included: data.servicesIncluded || [],
        payment_amount: data.paymentAmount,
        payment_schedule: data.paymentSchedule,
        extra_services_rules: data.extraServicesRules,
        late_payment_terms: data.latePaymentTerms,
        agreement_type: data.agreementType || 'primary',
        parent_agreement_id: data.parentAgreementId
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating agreement:', error);
      toast({
        title: 'Error',
        description: 'Failed to create agreement',
        variant: 'destructive'
      });
      return null;
    }

    // Log audit
    await supabase.from('agreement_audit_log').insert({
      agreement_id: result.id,
      action: 'created',
      actor_id: user.id,
      user_agent: navigator.userAgent,
      metadata: { title: data.title }
    });

    toast({
      title: 'Success',
      description: 'Agreement created successfully'
    });

    return result;
  };

  const updateAgreement = async (
    agreementId: string,
    updates: Partial<Omit<EnhancedAgreement, 'id' | 'created_at' | 'created_by'>>
  ) => {
    const { error } = await supabase
      .from('document_agreements')
      .update(updates)
      .eq('id', agreementId);

    if (error) {
      console.error('Error updating agreement:', error);
      toast({
        title: 'Error',
        description: 'Failed to update agreement',
        variant: 'destructive'
      });
      return false;
    }

    // Log audit
    await supabase.from('agreement_audit_log').insert({
      agreement_id: agreementId,
      action: 'updated',
      actor_id: user?.id,
      user_agent: navigator.userAgent,
      metadata: { updates: Object.keys(updates) }
    });

    toast({
      title: 'Success',
      description: 'Agreement updated successfully'
    });

    return true;
  };

  const lockAgreement = async (agreementId: string) => {
    return updateAgreement(agreementId, { is_locked: true });
  };

  const toggleClientEdit = async (agreementId: string, canEdit: boolean) => {
    return updateAgreement(agreementId, { client_can_edit: canEdit });
  };

  const signAgreement = async (agreementId: string, signatureData: string) => {
    if (!user) return false;

    // Check if agreement is already signed
    const { data: existing } = await supabase
      .from('document_agreements')
      .select('status, is_locked')
      .eq('id', agreementId)
      .single();

    if (existing?.status === 'signed') {
      toast({
        title: 'Already Signed',
        description: 'This agreement has already been signed',
        variant: 'destructive'
      });
      return false;
    }

    const { error } = await supabase
      .from('document_agreements')
      .update({
        status: 'signed',
        signed_at: new Date().toISOString(),
        signature_data: signatureData,
        signer_user_agent: navigator.userAgent,
        is_locked: true // Lock after signing
      })
      .eq('id', agreementId);

    if (error) {
      console.error('Error signing agreement:', error);
      toast({
        title: 'Error',
        description: 'Failed to sign agreement',
        variant: 'destructive'
      });
      return false;
    }

    // Log audit
    await supabase.from('agreement_audit_log').insert({
      agreement_id: agreementId,
      action: 'signed',
      actor_id: user.id,
      user_agent: navigator.userAgent,
      metadata: { timestamp: new Date().toISOString() }
    });

    toast({
      title: 'Success',
      description: 'Agreement signed and locked successfully'
    });

    return true;
  };

  const addSecondaryAgreement = async (parentAgreementId: string, data: Omit<CreateAgreementData, 'parentAgreementId'>) => {
    // Get parent agreement to get project_id
    const { data: parent } = await supabase
      .from('document_agreements')
      .select('project_id')
      .eq('id', parentAgreementId)
      .single();

    if (!parent) {
      toast({
        title: 'Error',
        description: 'Parent agreement not found',
        variant: 'destructive'
      });
      return null;
    }

    return createAgreement({
      ...data,
      projectId: parent.project_id,
      agreementType: 'secondary',
      parentAgreementId
    });
  };

  return {
    agreements,
    loading,
    fetchAgreements,
    createAgreement,
    updateAgreement,
    lockAgreement,
    toggleClientEdit,
    signAgreement,
    addSecondaryAgreement
  };
};
