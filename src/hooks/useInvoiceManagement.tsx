import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from '@/hooks/use-toast';

interface Invoice {
  id: string;
  client_id: string;
  subscription_id: string | null;
  project_id: string | null;
  amount: number;
  currency: string | null;
  status: string | null;
  invoice_date: string;
  due_date: string | null;
  paid_at: string | null;
  invoice_url: string | null;
  receipt_url: string | null;
  reminder_sent_at: string | null;
  reminder_count: number | null;
  notes: string | null;
  created_at: string;
}

interface PaymentReminder {
  id: string;
  invoice_id: string;
  sent_at: string;
  reminder_type: string;
  status: string;
  metadata: unknown;
}

export const useInvoiceManagement = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const fetchInvoices = useCallback(async (clientId?: string) => {
    setLoading(true);
    try {
      let query = supabase
        .from('invoices')
        .select('*')
        .order('invoice_date', { ascending: false });

      if (clientId) {
        query = query.eq('client_id', clientId);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching invoices:', error);
        toast({
          title: 'Error',
          description: 'Failed to load invoices',
          variant: 'destructive'
        });
      } else {
        setInvoices(data || []);
      }
    } finally {
      setLoading(false);
    }
  }, [toast]);

  const createInvoice = async (invoiceData: {
    clientId: string;
    projectId?: string;
    amount: number;
    currency?: string;
    dueDate?: string;
    notes?: string;
    invoiceUrl?: string;
  }) => {
    if (!user) return null;

    const { data, error } = await supabase
      .from('invoices')
      .insert({
        client_id: invoiceData.clientId,
        project_id: invoiceData.projectId,
        amount: invoiceData.amount,
        currency: invoiceData.currency || 'USD',
        due_date: invoiceData.dueDate,
        notes: invoiceData.notes,
        invoice_url: invoiceData.invoiceUrl,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating invoice:', error);
      toast({
        title: 'Error',
        description: 'Failed to create invoice',
        variant: 'destructive'
      });
      return null;
    }

    toast({
      title: 'Success',
      description: 'Invoice created successfully'
    });

    return data;
  };

  const updateInvoiceStatus = async (invoiceId: string, status: string, paidAt?: string) => {
    const updateData: Record<string, unknown> = { status };
    if (status === 'paid' && paidAt) {
      updateData.paid_at = paidAt;
    }

    const { error } = await supabase
      .from('invoices')
      .update(updateData)
      .eq('id', invoiceId);

    if (error) {
      console.error('Error updating invoice:', error);
      toast({
        title: 'Error',
        description: 'Failed to update invoice status',
        variant: 'destructive'
      });
      return false;
    }

    toast({
      title: 'Success',
      description: `Invoice marked as ${status}`
    });

    return true;
  };

  const uploadInvoicePDF = async (file: File, invoiceId: string): Promise<string | null> => {
    if (!user) return null;

    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filePath = `invoices/${invoiceId}/${timestamp}_${sanitizedFileName}`;

    const { error: uploadError } = await supabase.storage
      .from('project-files')
      .upload(filePath, file, { cacheControl: '3600', upsert: false });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      toast({
        title: 'Error',
        description: 'Failed to upload invoice PDF',
        variant: 'destructive'
      });
      return null;
    }

    const { data: urlData } = supabase.storage
      .from('project-files')
      .getPublicUrl(filePath);

    // Update invoice with URL
    await supabase
      .from('invoices')
      .update({ invoice_url: urlData.publicUrl })
      .eq('id', invoiceId);

    toast({
      title: 'Success',
      description: 'Invoice PDF uploaded successfully'
    });

    return urlData.publicUrl;
  };

  const uploadReceipt = async (file: File, invoiceId: string): Promise<string | null> => {
    if (!user) return null;

    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const filePath = `receipts/${invoiceId}/${timestamp}_${sanitizedFileName}`;

    const { error: uploadError } = await supabase.storage
      .from('project-files')
      .upload(filePath, file, { cacheControl: '3600', upsert: false });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      toast({
        title: 'Error',
        description: 'Failed to upload receipt',
        variant: 'destructive'
      });
      return null;
    }

    const { data: urlData } = supabase.storage
      .from('project-files')
      .getPublicUrl(filePath);

    // Update invoice with receipt URL
    await supabase
      .from('invoices')
      .update({ receipt_url: urlData.publicUrl, status: 'paid', paid_at: new Date().toISOString() })
      .eq('id', invoiceId);

    toast({
      title: 'Success',
      description: 'Receipt uploaded and invoice marked as paid'
    });

    return urlData.publicUrl;
  };

  const sendReminder = async (invoiceId: string): Promise<boolean> => {
    // Get invoice details
    const { data: invoice } = await supabase
      .from('invoices')
      .select('*, client_profiles(user_id)')
      .eq('id', invoiceId)
      .single();

    if (!invoice) return false;

    // Log the reminder
    const { error: reminderError } = await supabase
      .from('payment_reminders')
      .insert({
        invoice_id: invoiceId,
        reminder_type: 'email',
        status: 'sent',
        metadata: { triggered_by: user?.id }
      });

    if (reminderError) {
      console.error('Error logging reminder:', reminderError);
    }

    // Update invoice reminder count
    await supabase
      .from('invoices')
      .update({
        reminder_sent_at: new Date().toISOString(),
        reminder_count: (invoice.reminder_count || 0) + 1
      })
      .eq('id', invoiceId);

    toast({
      title: 'Reminder Sent',
      description: 'Payment reminder has been sent to the client'
    });

    return true;
  };

  const getReminders = async (invoiceId: string): Promise<PaymentReminder[]> => {
    const { data, error } = await supabase
      .from('payment_reminders')
      .select('*')
      .eq('invoice_id', invoiceId)
      .order('sent_at', { ascending: false });

    if (error) {
      console.error('Error fetching reminders:', error);
      return [];
    }

    return data || [];
  };

  return {
    invoices,
    loading,
    fetchInvoices,
    createInvoice,
    updateInvoiceStatus,
    uploadInvoicePDF,
    uploadReceipt,
    sendReminder,
    getReminders
  };
};
