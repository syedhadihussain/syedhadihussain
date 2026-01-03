-- =============================================
-- PHASE 1: TEAM MANAGEMENT + PIN-BASED SECURITY
-- =============================================

-- 1. Add 'team_member' to app_role enum
ALTER TYPE public.app_role ADD VALUE IF NOT EXISTS 'team_member';

-- 2. Create client_teams table for organizing client teams
CREATE TABLE public.client_teams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES public.client_profiles(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3. Create team_members table for team member assignments
CREATE TABLE public.team_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_id UUID NOT NULL REFERENCES public.client_teams(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('owner', 'manager', 'member')),
    can_view_client_details BOOLEAN NOT NULL DEFAULT false,
    can_view_invoices BOOLEAN NOT NULL DEFAULT false,
    can_view_documents BOOLEAN NOT NULL DEFAULT false,
    invited_by UUID REFERENCES auth.users(id),
    invited_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    joined_at TIMESTAMPTZ,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(team_id, user_id)
);

-- 4. Create chat_participants table for per-chat member assignment
CREATE TABLE public.chat_participants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conversation_id UUID NOT NULL REFERENCES public.conversations(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    can_view_client_name BOOLEAN NOT NULL DEFAULT false,
    added_by UUID REFERENCES auth.users(id),
    added_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(conversation_id, user_id)
);

-- 5. Create secure_pins table for PIN-based onboarding
CREATE TABLE public.secure_pins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    pin_hash TEXT NOT NULL,
    pin_type TEXT NOT NULL CHECK (pin_type IN ('onboarding', 'team_invite', 'sensitive_action', 'recovery')),
    expires_at TIMESTAMPTZ NOT NULL,
    used_at TIMESTAMPTZ,
    is_used BOOLEAN NOT NULL DEFAULT false,
    created_by UUID REFERENCES auth.users(id),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 6. Create login_history table for device tracking
CREATE TABLE public.login_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    ip_address TEXT,
    user_agent TEXT,
    device_info JSONB,
    location TEXT,
    login_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    logout_at TIMESTAMPTZ,
    is_successful BOOLEAN NOT NULL DEFAULT true,
    failure_reason TEXT
);

-- 7. Add onboarding fields to client_profiles
ALTER TABLE public.client_profiles 
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS onboarding_step TEXT DEFAULT 'pin_verification',
ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS approved_by UUID REFERENCES auth.users(id);

-- 8. Enable RLS on all new tables
ALTER TABLE public.client_teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.secure_pins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.login_history ENABLE ROW LEVEL SECURITY;

-- 9. RLS Policies for client_teams
CREATE POLICY "Clients can view their own teams"
ON public.client_teams FOR SELECT
USING (
    client_id IN (SELECT id FROM client_profiles WHERE user_id = auth.uid())
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Clients can create teams"
ON public.client_teams FOR INSERT
WITH CHECK (
    client_id IN (SELECT id FROM client_profiles WHERE user_id = auth.uid())
);

CREATE POLICY "Clients can update their teams"
ON public.client_teams FOR UPDATE
USING (
    client_id IN (SELECT id FROM client_profiles WHERE user_id = auth.uid())
);

CREATE POLICY "Clients can delete their teams"
ON public.client_teams FOR DELETE
USING (
    client_id IN (SELECT id FROM client_profiles WHERE user_id = auth.uid())
);

CREATE POLICY "Admins can manage all teams"
ON public.client_teams FOR ALL
USING (is_admin_or_moderator(auth.uid()));

-- 10. RLS Policies for team_members
CREATE POLICY "Team owners and admins can view members"
ON public.team_members FOR SELECT
USING (
    team_id IN (
        SELECT ct.id FROM client_teams ct
        JOIN client_profiles cp ON ct.client_id = cp.id
        WHERE cp.user_id = auth.uid()
    )
    OR user_id = auth.uid()
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Team owners can manage members"
ON public.team_members FOR ALL
USING (
    team_id IN (
        SELECT ct.id FROM client_teams ct
        JOIN client_profiles cp ON ct.client_id = cp.id
        WHERE cp.user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

-- 11. RLS Policies for chat_participants
CREATE POLICY "Users can view their chat assignments"
ON public.chat_participants FOR SELECT
USING (
    user_id = auth.uid()
    OR conversation_id IN (
        SELECT c.id FROM conversations c
        JOIN client_profiles cp ON c.client_id = cp.id
        WHERE cp.user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Clients and admins can manage chat participants"
ON public.chat_participants FOR ALL
USING (
    conversation_id IN (
        SELECT c.id FROM conversations c
        JOIN client_profiles cp ON c.client_id = cp.id
        WHERE cp.user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

-- 12. RLS Policies for secure_pins
CREATE POLICY "Users can view their own PINs"
ON public.secure_pins FOR SELECT
USING (user_id = auth.uid() OR is_admin_or_moderator(auth.uid()));

CREATE POLICY "System can create PINs"
ON public.secure_pins FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can mark their PINs as used"
ON public.secure_pins FOR UPDATE
USING (user_id = auth.uid() OR is_admin_or_moderator(auth.uid()));

CREATE POLICY "Admins can manage all PINs"
ON public.secure_pins FOR ALL
USING (is_admin_or_moderator(auth.uid()));

-- 13. RLS Policies for login_history
CREATE POLICY "Users can view their own login history"
ON public.login_history FOR SELECT
USING (user_id = auth.uid() OR is_admin_or_moderator(auth.uid()));

CREATE POLICY "System can insert login history"
ON public.login_history FOR INSERT
WITH CHECK (true);

-- 14. Create indexes for performance
CREATE INDEX idx_client_teams_client_id ON public.client_teams(client_id);
CREATE INDEX idx_team_members_team_id ON public.team_members(team_id);
CREATE INDEX idx_team_members_user_id ON public.team_members(user_id);
CREATE INDEX idx_chat_participants_conversation_id ON public.chat_participants(conversation_id);
CREATE INDEX idx_chat_participants_user_id ON public.chat_participants(user_id);
CREATE INDEX idx_secure_pins_user_id ON public.secure_pins(user_id);
CREATE INDEX idx_secure_pins_expires_at ON public.secure_pins(expires_at);
CREATE INDEX idx_login_history_user_id ON public.login_history(user_id);
CREATE INDEX idx_login_history_login_at ON public.login_history(login_at);

-- 15. Update triggers for updated_at
CREATE TRIGGER update_client_teams_updated_at
BEFORE UPDATE ON public.client_teams
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at
BEFORE UPDATE ON public.team_members
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();