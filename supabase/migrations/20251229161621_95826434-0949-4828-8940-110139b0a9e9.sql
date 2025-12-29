-- Add chat enhancement columns to messages table
ALTER TABLE public.messages 
ADD COLUMN IF NOT EXISTS is_pinned BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS reactions JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS reply_to_id UUID REFERENCES public.messages(id),
ADD COLUMN IF NOT EXISTS attachment_url TEXT,
ADD COLUMN IF NOT EXISTS attachment_type TEXT,
ADD COLUMN IF NOT EXISTS is_voice_note BOOLEAN DEFAULT false;

-- Create notification preferences table
CREATE TABLE IF NOT EXISTS public.notification_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    email_new_message BOOLEAN DEFAULT true,
    email_agreement_request BOOLEAN DEFAULT true,
    email_project_update BOOLEAN DEFAULT true,
    push_enabled BOOLEAN DEFAULT true,
    quiet_hours_start TIME,
    quiet_hours_end TIME,
    digest_mode TEXT DEFAULT 'instant' CHECK (digest_mode IN ('instant', 'daily', 'weekly')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(user_id)
);

-- Create AI chat summaries table
CREATE TABLE IF NOT EXISTS public.chat_summaries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
    summary TEXT NOT NULL,
    key_points JSONB DEFAULT '[]',
    action_items JSONB DEFAULT '[]',
    sentiment TEXT,
    generated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    message_range_start TIMESTAMPTZ,
    message_range_end TIMESTAMPTZ
);

-- Create automation rules table
CREATE TABLE IF NOT EXISTS public.automation_rules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    trigger_type TEXT NOT NULL CHECK (trigger_type IN ('agreement_signed', 'client_inactive', 'milestone_complete', 'deliverable_approved', 'message_unanswered')),
    action_type TEXT NOT NULL CHECK (action_type IN ('send_email', 'update_status', 'create_task', 'send_notification')),
    trigger_config JSONB DEFAULT '{}',
    action_config JSONB DEFAULT '{}',
    is_active BOOLEAN DEFAULT true,
    created_by UUID REFERENCES auth.users(id),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create client activity log for analytics
CREATE TABLE IF NOT EXISTS public.client_activity_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    client_id UUID REFERENCES public.client_profiles(id),
    activity_type TEXT NOT NULL,
    activity_data JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on new tables
ALTER TABLE public.notification_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.automation_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_activity_log ENABLE ROW LEVEL SECURITY;

-- Notification preferences policies
CREATE POLICY "Users can view own preferences"
ON public.notification_preferences FOR SELECT
USING (user_id = auth.uid());

CREATE POLICY "Users can update own preferences"
ON public.notification_preferences FOR UPDATE
USING (user_id = auth.uid());

CREATE POLICY "Users can insert own preferences"
ON public.notification_preferences FOR INSERT
WITH CHECK (user_id = auth.uid());

-- Chat summaries policies
CREATE POLICY "Users can view summaries for their conversations"
ON public.chat_summaries FOR SELECT
USING (
    conversation_id IN (
        SELECT conversation_id FROM conversation_participants WHERE user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Admins can manage summaries"
ON public.chat_summaries FOR ALL
USING (is_admin_or_moderator(auth.uid()));

-- Automation rules policies (admin only)
CREATE POLICY "Admins can view automation rules"
ON public.automation_rules FOR SELECT
USING (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Admins can manage automation rules"
ON public.automation_rules FOR ALL
USING (has_role(auth.uid(), 'admin'));

-- Activity log policies
CREATE POLICY "Users can view own activity"
ON public.client_activity_log FOR SELECT
USING (user_id = auth.uid() OR is_admin_or_moderator(auth.uid()));

CREATE POLICY "System can insert activity"
ON public.client_activity_log FOR INSERT
WITH CHECK (true);

-- Add triggers
CREATE TRIGGER update_notification_preferences_updated_at
BEFORE UPDATE ON public.notification_preferences
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_automation_rules_updated_at
BEFORE UPDATE ON public.automation_rules
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for chat summaries
ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_summaries;