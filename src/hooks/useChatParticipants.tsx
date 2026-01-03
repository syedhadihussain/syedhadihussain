import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export interface ChatParticipant {
  id: string;
  conversation_id: string;
  user_id: string;
  can_view_client_name: boolean;
  added_by: string | null;
  added_at: string;
  profile?: {
    full_name: string | null;
    email: string | null;
  };
}

export const useChatParticipants = (conversationId: string | null) => {
  const { user } = useAuth();
  const [participants, setParticipants] = useState<ChatParticipant[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchParticipants = useCallback(async () => {
    if (!conversationId) return;

    setLoading(true);
    try {
      // Fetch chat participants
      const { data: participantsData, error } = await supabase
        .from("chat_participants")
        .select("*")
        .eq("conversation_id", conversationId);

      if (error) throw error;

      // Fetch profiles for each participant
      const participantsWithProfiles: ChatParticipant[] = await Promise.all(
        (participantsData || []).map(async (participant) => {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("full_name, email")
            .eq("id", participant.user_id)
            .maybeSingle();

          return {
            ...participant,
            profile: profileData || undefined,
          } as ChatParticipant;
        })
      );

      setParticipants(participantsWithProfiles);
    } catch (error) {
      console.error("Error fetching chat participants:", error);
    } finally {
      setLoading(false);
    }
  }, [conversationId]);

  const addParticipant = useCallback(async (
    userId: string,
    canViewClientName: boolean = false
  ) => {
    if (!conversationId || !user) return null;

    try {
      // Check if already a participant
      const existing = participants.find((p) => p.user_id === userId);
      if (existing) {
        toast.error("User is already a participant");
        return null;
      }

      const { data, error } = await supabase
        .from("chat_participants")
        .insert({
          conversation_id: conversationId,
          user_id: userId,
          can_view_client_name: canViewClientName,
          added_by: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      // Fetch profile for new participant
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, email")
        .eq("id", userId)
        .maybeSingle();

      const participantWithProfile: ChatParticipant = {
        ...data,
        profile: profileData || undefined,
      };

      setParticipants((prev) => [...prev, participantWithProfile]);
      toast.success("Participant added to chat");
      return participantWithProfile;
    } catch (error) {
      console.error("Error adding participant:", error);
      toast.error("Failed to add participant");
      return null;
    }
  }, [conversationId, user, participants]);

  const removeParticipant = useCallback(async (participantId: string) => {
    try {
      const { error } = await supabase
        .from("chat_participants")
        .delete()
        .eq("id", participantId);

      if (error) throw error;

      setParticipants((prev) => prev.filter((p) => p.id !== participantId));
      toast.success("Participant removed from chat");
      return true;
    } catch (error) {
      console.error("Error removing participant:", error);
      toast.error("Failed to remove participant");
      return false;
    }
  }, []);

  const updateParticipantVisibility = useCallback(async (
    participantId: string,
    canViewClientName: boolean
  ) => {
    try {
      const { data, error } = await supabase
        .from("chat_participants")
        .update({ can_view_client_name: canViewClientName })
        .eq("id", participantId)
        .select()
        .single();

      if (error) throw error;

      setParticipants((prev) =>
        prev.map((p) =>
          p.id === participantId
            ? { ...p, can_view_client_name: canViewClientName }
            : p
        )
      );

      toast.success(
        canViewClientName
          ? "Client name visibility enabled"
          : "Client name hidden from participant"
      );
      return data;
    } catch (error) {
      console.error("Error updating participant visibility:", error);
      toast.error("Failed to update visibility");
      return null;
    }
  }, []);

  const checkUserAccess = useCallback(async (userId: string): Promise<boolean> => {
    if (!conversationId) return false;

    const { data, error } = await supabase
      .from("chat_participants")
      .select("id")
      .eq("conversation_id", conversationId)
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      console.error("Error checking user access:", error);
      return false;
    }

    return !!data;
  }, [conversationId]);

  const canUserViewClientName = useCallback(async (userId: string): Promise<boolean> => {
    if (!conversationId) return false;

    const { data, error } = await supabase
      .from("chat_participants")
      .select("can_view_client_name")
      .eq("conversation_id", conversationId)
      .eq("user_id", userId)
      .maybeSingle();

    if (error) {
      console.error("Error checking client name visibility:", error);
      return false;
    }

    return data?.can_view_client_name || false;
  }, [conversationId]);

  return {
    participants,
    loading,
    fetchParticipants,
    addParticipant,
    removeParticipant,
    updateParticipantVisibility,
    checkUserAccess,
    canUserViewClientName,
  };
};
