-- Add subscription requests table for pre-account inquiries
CREATE TABLE public.subscription_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  business_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  notes TEXT,
  plan_name TEXT NOT NULL,
  plan_price NUMERIC NOT NULL,
  plan_duration TEXT NOT NULL,
  included_services JSONB DEFAULT '[]'::jsonb,
  status TEXT NOT NULL DEFAULT 'pending_invoice',
  admin_notes TEXT,
  account_number TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  processed_by UUID,
  processed_at TIMESTAMP WITH TIME ZONE
);

-- Add payment proofs table
CREATE TABLE public.payment_proofs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id UUID REFERENCES public.invoices(id) ON DELETE CASCADE NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending_review',
  reviewed_by UUID,
  reviewed_at TIMESTAMP WITH TIME ZONE,
  review_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Update client_profiles for onboarding status
ALTER TABLE public.client_profiles 
ADD COLUMN IF NOT EXISTS onboarding_status TEXT DEFAULT 'pending_invoice',
ADD COLUMN IF NOT EXISTS portal_access_level TEXT DEFAULT 'none',
ADD COLUMN IF NOT EXISTS agreement_required BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS full_access_granted_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS full_access_granted_by UUID;

-- Update secure_pins to track PIN type and usage
ALTER TABLE public.secure_pins
ADD COLUMN IF NOT EXISTS pin_purpose TEXT DEFAULT 'login';

-- Enable RLS
ALTER TABLE public.subscription_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_proofs ENABLE ROW LEVEL SECURITY;

-- Subscription requests policies (admin only for management, public for insert)
CREATE POLICY "Anyone can submit subscription request" 
ON public.subscription_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all requests" 
ON public.subscription_requests 
FOR SELECT 
USING (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Admins can update requests" 
ON public.subscription_requests 
FOR UPDATE 
USING (is_admin_or_moderator(auth.uid()));

-- Payment proofs policies
CREATE POLICY "Clients can upload payment proofs" 
ON public.payment_proofs 
FOR INSERT 
WITH CHECK (
  invoice_id IN (
    SELECT i.id FROM invoices i
    JOIN client_profiles cp ON i.client_id = cp.id
    WHERE cp.user_id = auth.uid()
  )
);

CREATE POLICY "Clients can view their payment proofs" 
ON public.payment_proofs 
FOR SELECT 
USING (
  invoice_id IN (
    SELECT i.id FROM invoices i
    JOIN client_profiles cp ON i.client_id = cp.id
    WHERE cp.user_id = auth.uid()
  ) OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Admins can manage payment proofs" 
ON public.payment_proofs 
FOR ALL 
USING (is_admin_or_moderator(auth.uid()));

-- Create indexes
CREATE INDEX idx_subscription_requests_status ON public.subscription_requests(status);
CREATE INDEX idx_subscription_requests_email ON public.subscription_requests(email);
CREATE INDEX idx_payment_proofs_invoice ON public.payment_proofs(invoice_id);
CREATE INDEX idx_payment_proofs_status ON public.payment_proofs(status);

-- Add trigger for updated_at
CREATE TRIGGER update_subscription_requests_updated_at
BEFORE UPDATE ON public.subscription_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();