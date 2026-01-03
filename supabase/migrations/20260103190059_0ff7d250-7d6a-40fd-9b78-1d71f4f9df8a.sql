-- Add columns to document_agreements for enhanced functionality
ALTER TABLE public.document_agreements 
ADD COLUMN IF NOT EXISTS is_locked boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS client_can_edit boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS terms_and_conditions text,
ADD COLUMN IF NOT EXISTS services_included jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS payment_amount numeric,
ADD COLUMN IF NOT EXISTS payment_schedule text,
ADD COLUMN IF NOT EXISTS extra_services_rules text,
ADD COLUMN IF NOT EXISTS late_payment_terms text,
ADD COLUMN IF NOT EXISTS agreement_type text DEFAULT 'primary',
ADD COLUMN IF NOT EXISTS parent_agreement_id uuid REFERENCES public.document_agreements(id);

-- Add columns to invoices for receipts and reminders
ALTER TABLE public.invoices 
ADD COLUMN IF NOT EXISTS receipt_url text,
ADD COLUMN IF NOT EXISTS reminder_sent_at timestamp with time zone,
ADD COLUMN IF NOT EXISTS reminder_count integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS notes text,
ADD COLUMN IF NOT EXISTS project_id uuid REFERENCES public.projects(id);

-- Create payment reminders tracking table
CREATE TABLE IF NOT EXISTS public.payment_reminders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id uuid REFERENCES public.invoices(id) ON DELETE CASCADE NOT NULL,
  sent_at timestamp with time zone NOT NULL DEFAULT now(),
  reminder_type text NOT NULL DEFAULT 'email',
  status text DEFAULT 'sent',
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Enable RLS on payment_reminders
ALTER TABLE public.payment_reminders ENABLE ROW LEVEL SECURITY;

-- RLS policies for payment_reminders
CREATE POLICY "Admins can manage reminders" ON public.payment_reminders
FOR ALL USING (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Clients can view their reminders" ON public.payment_reminders
FOR SELECT USING (
  invoice_id IN (
    SELECT i.id FROM invoices i
    JOIN client_profiles cp ON i.client_id = cp.id
    WHERE cp.user_id = auth.uid()
  )
);

-- Add plan info display column to client_profiles
ALTER TABLE public.client_profiles
ADD COLUMN IF NOT EXISTS active_plan_details jsonb DEFAULT '{}'::jsonb;

-- Create project_subscriptions junction table for multi-project subscription management
CREATE TABLE IF NOT EXISTS public.project_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  subscription_id uuid REFERENCES public.subscription_info(id) ON DELETE SET NULL,
  status text DEFAULT 'active',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on project_subscriptions
ALTER TABLE public.project_subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS policies for project_subscriptions
CREATE POLICY "Admins can manage project subscriptions" ON public.project_subscriptions
FOR ALL USING (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Clients can view their project subscriptions" ON public.project_subscriptions
FOR SELECT USING (
  project_id IN (
    SELECT p.id FROM projects p
    JOIN client_profiles cp ON p.client_id = cp.id
    WHERE cp.user_id = auth.uid()
  )
);

-- Update trigger for project_subscriptions
CREATE TRIGGER update_project_subscriptions_updated_at
BEFORE UPDATE ON public.project_subscriptions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();