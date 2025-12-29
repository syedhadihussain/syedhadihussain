-- Create announcements table for admin broadcasts
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  is_active BOOLEAN DEFAULT true,
  target_audience TEXT DEFAULT 'all' CHECK (target_audience IN ('all', 'clients', 'admins')),
  created_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  expires_at TIMESTAMP WITH TIME ZONE
);

-- Create announcement_reads to track who has seen announcements
CREATE TABLE public.announcement_reads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  announcement_id UUID NOT NULL REFERENCES public.announcements(id) ON DELETE CASCADE,
  user_id UUID NOT NULL,
  read_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(announcement_id, user_id)
);

-- Create push_tokens table for push notifications
CREATE TABLE public.push_tokens (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  token TEXT NOT NULL,
  platform TEXT DEFAULT 'web',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, token)
);

-- Enable RLS
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcement_reads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.push_tokens ENABLE ROW LEVEL SECURITY;

-- Announcements policies
CREATE POLICY "Admins can manage announcements" ON public.announcements
  FOR ALL USING (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Users can view active announcements" ON public.announcements
  FOR SELECT USING (
    is_active = true 
    AND (expires_at IS NULL OR expires_at > now())
    AND (target_audience = 'all' OR 
         (target_audience = 'clients' AND NOT is_admin_or_moderator(auth.uid())) OR
         (target_audience = 'admins' AND is_admin_or_moderator(auth.uid())))
  );

-- Announcement reads policies
CREATE POLICY "Users can mark announcements as read" ON public.announcement_reads
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can view their own reads" ON public.announcement_reads
  FOR SELECT USING (user_id = auth.uid() OR is_admin_or_moderator(auth.uid()));

-- Push tokens policies
CREATE POLICY "Users can manage their own tokens" ON public.push_tokens
  FOR ALL USING (user_id = auth.uid());

-- Add updated_at trigger for push_tokens
CREATE TRIGGER update_push_tokens_updated_at
  BEFORE UPDATE ON public.push_tokens
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();