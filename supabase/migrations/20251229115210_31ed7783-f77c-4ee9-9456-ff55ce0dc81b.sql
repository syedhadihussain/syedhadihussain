-- Create messages table for real-time chat
CREATE TABLE public.messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    conversation_id UUID NOT NULL,
    sender_id UUID NOT NULL,
    content TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    read_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create conversations table
CREATE TABLE public.conversations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    client_id UUID REFERENCES public.client_profiles(id) ON DELETE CASCADE NOT NULL,
    title TEXT,
    last_message_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create conversation_participants table
CREATE TABLE public.conversation_participants (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    conversation_id UUID REFERENCES public.conversations(id) ON DELETE CASCADE NOT NULL,
    user_id UUID NOT NULL,
    joined_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(conversation_id, user_id)
);

-- Create document_agreements table for signing system
CREATE TABLE public.document_agreements (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    document_url TEXT NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'viewed', 'signed', 'expired', 'rejected')),
    sent_at TIMESTAMP WITH TIME ZONE,
    viewed_at TIMESTAMP WITH TIME ZONE,
    signed_at TIMESTAMP WITH TIME ZONE,
    signature_data TEXT,
    signer_ip TEXT,
    signer_user_agent TEXT,
    created_by UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create agreement_audit_log for timestamp logging
CREATE TABLE public.agreement_audit_log (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    agreement_id UUID REFERENCES public.document_agreements(id) ON DELETE CASCADE NOT NULL,
    action TEXT NOT NULL,
    actor_id UUID,
    ip_address TEXT,
    user_agent TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add foreign key to messages
ALTER TABLE public.messages 
ADD CONSTRAINT messages_conversation_id_fkey 
FOREIGN KEY (conversation_id) REFERENCES public.conversations(id) ON DELETE CASCADE;

-- Enable RLS on all tables
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversation_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.document_agreements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agreement_audit_log ENABLE ROW LEVEL SECURITY;

-- Messages policies
CREATE POLICY "Users can view messages in their conversations"
ON public.messages FOR SELECT
USING (
    conversation_id IN (
        SELECT conversation_id FROM public.conversation_participants
        WHERE user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Users can send messages in their conversations"
ON public.messages FOR INSERT
WITH CHECK (
    sender_id = auth.uid()
    AND conversation_id IN (
        SELECT conversation_id FROM public.conversation_participants
        WHERE user_id = auth.uid()
    )
);

CREATE POLICY "Users can update their own messages"
ON public.messages FOR UPDATE
USING (sender_id = auth.uid() OR is_admin_or_moderator(auth.uid()));

-- Conversations policies
CREATE POLICY "Users can view their conversations"
ON public.conversations FOR SELECT
USING (
    id IN (
        SELECT conversation_id FROM public.conversation_participants
        WHERE user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Admins can create conversations"
ON public.conversations FOR INSERT
WITH CHECK (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Admins can update conversations"
ON public.conversations FOR UPDATE
USING (is_admin_or_moderator(auth.uid()));

-- Conversation participants policies
CREATE POLICY "Users can view participants in their conversations"
ON public.conversation_participants FOR SELECT
USING (
    conversation_id IN (
        SELECT conversation_id FROM public.conversation_participants cp
        WHERE cp.user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Admins can manage participants"
ON public.conversation_participants FOR ALL
USING (is_admin_or_moderator(auth.uid()));

-- Document agreements policies
CREATE POLICY "Clients can view their project agreements"
ON public.document_agreements FOR SELECT
USING (
    project_id IN (
        SELECT p.id FROM projects p
        JOIN client_profiles cp ON p.client_id = cp.id
        WHERE cp.user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Clients can sign agreements"
ON public.document_agreements FOR UPDATE
USING (
    project_id IN (
        SELECT p.id FROM projects p
        JOIN client_profiles cp ON p.client_id = cp.id
        WHERE cp.user_id = auth.uid()
    )
);

CREATE POLICY "Admins can manage agreements"
ON public.document_agreements FOR ALL
USING (is_admin_or_moderator(auth.uid()));

-- Audit log policies
CREATE POLICY "Users can view audit logs for their agreements"
ON public.agreement_audit_log FOR SELECT
USING (
    agreement_id IN (
        SELECT da.id FROM document_agreements da
        JOIN projects p ON da.project_id = p.id
        JOIN client_profiles cp ON p.client_id = cp.id
        WHERE cp.user_id = auth.uid()
    )
    OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "System can insert audit logs"
ON public.agreement_audit_log FOR INSERT
WITH CHECK (true);

-- Enable realtime for messages
ALTER PUBLICATION supabase_realtime ADD TABLE public.messages;
ALTER PUBLICATION supabase_realtime ADD TABLE public.conversations;

-- Create updated_at triggers
CREATE TRIGGER update_messages_updated_at
BEFORE UPDATE ON public.messages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_conversations_updated_at
BEFORE UPDATE ON public.conversations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_document_agreements_updated_at
BEFORE UPDATE ON public.document_agreements
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();