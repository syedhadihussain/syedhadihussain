import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

interface DocumentAgreement {
  id: string;
  project_id: string;
  title: string;
  description: string | null;
  document_url: string;
  status: string;
  sent_at: string | null;
  viewed_at: string | null;
  signed_at: string | null;
  signature_data: string | null;
  created_at: string;
}

interface AuditLogEntry {
  id: string;
  agreement_id: string;
  action: string;
  actor_id: string | null;
  ip_address: string | null;
  user_agent: string | null;
  metadata: unknown;
  created_at: string;
}

export const useDocumentSigning = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [agreements, setAgreements] = useState<DocumentAgreement[]>([]);

  const fetchAgreements = useCallback(async (projectId?: string) => {
    setLoading(true);
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
      setAgreements(data || []);
    }
    setLoading(false);
  }, [toast]);

  const createAgreement = async (
    projectId: string,
    title: string,
    documentUrl: string,
    description?: string
  ) => {
    if (!user) return null;

    const { data, error } = await supabase
      .from('document_agreements')
      .insert({
        project_id: projectId,
        title,
        description,
        document_url: documentUrl,
        created_by: user.id,
        status: 'pending'
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

    // Log creation
    await logAuditEvent(data.id, 'created', { title });

    toast({
      title: 'Success',
      description: 'Agreement created successfully'
    });

    return data;
  };

  const sendAgreement = async (agreementId: string) => {
    const { error } = await supabase
      .from('document_agreements')
      .update({
        status: 'sent',
        sent_at: new Date().toISOString()
      })
      .eq('id', agreementId);

    if (error) {
      console.error('Error sending agreement:', error);
      toast({
        title: 'Error',
        description: 'Failed to send agreement',
        variant: 'destructive'
      });
      return false;
    }

    await logAuditEvent(agreementId, 'sent');

    toast({
      title: 'Success',
      description: 'Agreement sent to client'
    });

    return true;
  };

  const markAsViewed = async (agreementId: string) => {
    const { data: agreement } = await supabase
      .from('document_agreements')
      .select('viewed_at')
      .eq('id', agreementId)
      .single();

    // Only update if not already viewed
    if (!agreement?.viewed_at) {
      await supabase
        .from('document_agreements')
        .update({
          status: 'viewed',
          viewed_at: new Date().toISOString()
        })
        .eq('id', agreementId);

      await logAuditEvent(agreementId, 'viewed');
    }
  };

  const signAgreement = async (
    agreementId: string,
    signatureData: string
  ) => {
    if (!user) return false;

    const { error } = await supabase
      .from('document_agreements')
      .update({
        status: 'signed',
        signed_at: new Date().toISOString(),
        signature_data: signatureData,
        signer_ip: 'client-ip', // In production, get from edge function
        signer_user_agent: navigator.userAgent
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

    await logAuditEvent(agreementId, 'signed', {
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });

    toast({
      title: 'Success',
      description: 'Agreement signed successfully'
    });

    return true;
  };

  const rejectAgreement = async (agreementId: string, reason?: string) => {
    const { error } = await supabase
      .from('document_agreements')
      .update({ status: 'rejected' })
      .eq('id', agreementId);

    if (error) {
      console.error('Error rejecting agreement:', error);
      return false;
    }

    await logAuditEvent(agreementId, 'rejected', { reason });

    return true;
  };

  const logAuditEvent = async (
    agreementId: string,
    action: string,
    metadata?: Record<string, any>
  ) => {
    await supabase.from('agreement_audit_log').insert({
      agreement_id: agreementId,
      action,
      actor_id: user?.id,
      ip_address: null, // Would be captured server-side
      user_agent: navigator.userAgent,
      metadata
    });
  };

  const getAuditLog = async (agreementId: string): Promise<AuditLogEntry[]> => {
    const { data, error } = await supabase
      .from('agreement_audit_log')
      .select('*')
      .eq('agreement_id', agreementId)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error fetching audit log:', error);
      return [];
    }

    return data || [];
  };

  return {
    agreements,
    loading,
    fetchAgreements,
    createAgreement,
    sendAgreement,
    markAsViewed,
    signAgreement,
    rejectAgreement,
    getAuditLog
  };
};
