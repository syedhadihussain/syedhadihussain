import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { RealtimeChannel } from '@supabase/supabase-js';
import { Json } from '@/integrations/supabase/types';

interface Message {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  is_read: boolean | null;
  read_at: string | null;
  created_at: string;
  updated_at: string;
  is_pinned?: boolean | null;
  reactions?: Json | null;
  attachment_url?: string | null;
  attachment_type?: string | null;
  is_voice_note?: boolean | null;
  reply_to_id?: string | null;
}

interface Conversation {
  id: string;
  client_id: string;
  title: string | null;
  last_message_at: string;
  created_at: string;
  client_name?: string | null;
  can_view_client_name?: boolean;
}

interface TypingUser {
  user_id: string;
  conversation_id: string;
}

export const useRealtimeMessages = (conversationId: string | null) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [typingUsers, setTypingUsers] = useState<TypingUser[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch messages for a conversation
  const fetchMessages = useCallback(async () => {
    if (!conversationId) return;
    
    setLoading(true);
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (!error && data) {
      setMessages(data);
    }
    setLoading(false);
  }, [conversationId]);

  // Subscribe to realtime messages
  useEffect(() => {
    if (!conversationId) return;

    fetchMessages();

    const channel: RealtimeChannel = supabase
      .channel(`messages:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => [...prev, newMessage]);
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => {
          const updatedMessage = payload.new as Message;
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === updatedMessage.id ? updatedMessage : msg
            )
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId, fetchMessages]);

  // Typing indicator presence
  useEffect(() => {
    if (!conversationId || !user) return;

    const presenceChannel = supabase.channel(`typing:${conversationId}`);

    presenceChannel
      .on('presence', { event: 'sync' }, () => {
        const state = presenceChannel.presenceState();
        const typing: TypingUser[] = [];
        Object.values(state).forEach((presences: any[]) => {
          presences.forEach((presence) => {
            if (presence.user_id !== user.id && presence.is_typing) {
              typing.push({
                user_id: presence.user_id,
                conversation_id: conversationId
              });
            }
          });
        });
        setTypingUsers(typing);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(presenceChannel);
    };
  }, [conversationId, user]);

  // Send message
  const sendMessage = async (content: string) => {
    if (!conversationId || !user || !content.trim()) return;

    const { error } = await supabase.from('messages').insert({
      conversation_id: conversationId,
      sender_id: user.id,
      content: content.trim()
    });

    if (error) {
      console.error('Error sending message:', error);
      throw error;
    }

    // Update conversation last_message_at
    await supabase
      .from('conversations')
      .update({ last_message_at: new Date().toISOString() })
      .eq('id', conversationId);
  };

  // Mark messages as read
  const markAsRead = async (messageIds: string[]) => {
    if (!messageIds.length) return;

    const { error } = await supabase
      .from('messages')
      .update({ is_read: true, read_at: new Date().toISOString() })
      .in('id', messageIds);

    if (error) {
      console.error('Error marking messages as read:', error);
    }
  };

  // Send typing indicator
  const sendTypingIndicator = async (isTyping: boolean) => {
    if (!conversationId || !user) return;

    const channel = supabase.channel(`typing:${conversationId}`);
    await channel.track({
      user_id: user.id,
      is_typing: isTyping
    });
  };

  return {
    messages,
    typingUsers,
    loading,
    sendMessage,
    markAsRead,
    sendTypingIndicator,
    refetch: fetchMessages
  };
};

export const useConversations = () => {
  const { user, isAdmin, isModerator } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchConversations = useCallback(async () => {
    if (!user) return;

    setLoading(true);
    try {
      // For admins/moderators, fetch all conversations
      // For regular users, fetch only conversations they're participants in
      if (isAdmin || isModerator) {
        const { data, error } = await supabase
          .from('conversations')
          .select(`
            *,
            client_profiles:client_id (
              company_name,
              user_id
            )
          `)
          .order('last_message_at', { ascending: false });

        if (!error && data) {
          const conversationsWithClientName = data.map((conv: any) => ({
            ...conv,
            client_name: conv.client_profiles?.company_name || 'Client',
            can_view_client_name: true,
          }));
          setConversations(conversationsWithClientName);
        }
      } else {
        // Check if user is a client (owns the conversation)
        const { data: clientProfile } = await supabase
          .from('client_profiles')
          .select('id')
          .eq('user_id', user.id)
          .maybeSingle();

        if (clientProfile) {
          // User is a client - fetch their own conversations
          const { data, error } = await supabase
            .from('conversations')
            .select('*')
            .eq('client_id', clientProfile.id)
            .order('last_message_at', { ascending: false });

          if (!error && data) {
            const conversationsWithAccess = data.map((conv) => ({
              ...conv,
              client_name: null, // Clients see their own name
              can_view_client_name: true,
            }));
            setConversations(conversationsWithAccess);
          }
        } else {
          // User is a team member - fetch conversations they're participants in
          const { data: participantData, error: participantError } = await supabase
            .from('chat_participants')
            .select('conversation_id, can_view_client_name')
            .eq('user_id', user.id);

          if (participantError || !participantData || participantData.length === 0) {
            setConversations([]);
            setLoading(false);
            return;
          }

          // Create a map for visibility
          const visibilityMap = new Map<string, boolean>();
          participantData.forEach((p) => {
            visibilityMap.set(p.conversation_id, p.can_view_client_name);
          });

          const conversationIds = participantData.map((p) => p.conversation_id);

          const { data: conversationsData, error: conversationsError } = await supabase
            .from('conversations')
            .select(`
              *,
              client_profiles:client_id (
                company_name
              )
            `)
            .in('id', conversationIds)
            .order('last_message_at', { ascending: false });

          if (!conversationsError && conversationsData) {
            const conversationsWithVisibility = conversationsData.map((conv: any) => {
              const canViewClientName = visibilityMap.get(conv.id) || false;
              return {
                ...conv,
                client_name: canViewClientName ? conv.client_profiles?.company_name : null,
                can_view_client_name: canViewClientName,
              };
            });
            setConversations(conversationsWithVisibility);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoading(false);
    }
  }, [user, isAdmin, isModerator]);

  useEffect(() => {
    fetchConversations();

    const channel = supabase
      .channel('conversations-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'conversations'
        },
        () => {
          fetchConversations();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchConversations]);

  const createConversation = async (clientId: string, title?: string) => {
    if (!user) return null;

    const { data: conversation, error: convError } = await supabase
      .from('conversations')
      .insert({
        client_id: clientId,
        title: title || 'New Conversation'
      })
      .select()
      .single();

    if (convError || !conversation) {
      console.error('Error creating conversation:', convError);
      return null;
    }

    // Add current user as participant
    await supabase.from('conversation_participants').insert({
      conversation_id: conversation.id,
      user_id: user.id
    });

    // Also add to chat_participants for team member access control
    await supabase.from('chat_participants').insert({
      conversation_id: conversation.id,
      user_id: user.id,
      can_view_client_name: true, // Creator can always see client name
      added_by: user.id,
    });

    return conversation;
  };

  return {
    conversations,
    loading,
    createConversation,
    refetch: fetchConversations
  };
};
