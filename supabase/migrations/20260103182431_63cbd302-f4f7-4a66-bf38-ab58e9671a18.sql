-- Create sitemap submission history table
CREATE TABLE public.sitemap_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  source TEXT NOT NULL DEFAULT 'manual',
  triggered_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  total_sitemaps INTEGER NOT NULL DEFAULT 0,
  successful_pings INTEGER NOT NULL DEFAULT 0,
  failed_pings INTEGER NOT NULL DEFAULT 0,
  success_rate NUMERIC(5,2),
  results JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.sitemap_submissions ENABLE ROW LEVEL SECURITY;

-- Only admins can view submission history
CREATE POLICY "Admins can view sitemap submissions"
  ON public.sitemap_submissions
  FOR SELECT
  USING (is_admin_or_moderator(auth.uid()));

-- System can insert submissions (via service role)
CREATE POLICY "System can insert submissions"
  ON public.sitemap_submissions
  FOR INSERT
  WITH CHECK (true);

-- Add index for faster queries
CREATE INDEX idx_sitemap_submissions_triggered_at ON public.sitemap_submissions(triggered_at DESC);