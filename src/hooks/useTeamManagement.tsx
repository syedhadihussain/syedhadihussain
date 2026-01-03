import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export interface Team {
  id: string;
  client_id: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  team_id: string;
  user_id: string;
  role: string;
  can_view_client_details: boolean;
  can_view_invoices: boolean;
  can_view_documents: boolean;
  invited_by: string | null;
  invited_at: string;
  joined_at: string | null;
  status: string;
  profiles?: {
    full_name: string | null;
    email: string | null;
  };
}

export const useTeamManagement = () => {
  const { user } = useAuth();
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [clientProfileId, setClientProfileId] = useState<string | null>(null);

  const fetchClientProfile = useCallback(async () => {
    if (!user) return null;
    
    const { data, error } = await supabase
      .from("client_profiles")
      .select("id")
      .eq("user_id", user.id)
      .maybeSingle();
    
    if (error) {
      console.error("Error fetching client profile:", error);
      return null;
    }
    
    setClientProfileId(data?.id || null);
    return data?.id;
  }, [user]);

  const fetchTeams = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const profileId = await fetchClientProfile();
      if (!profileId) {
        setTeams([]);
        return;
      }

      const { data, error } = await supabase
        .from("client_teams")
        .select("*")
        .eq("client_id", profileId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTeams(data || []);
    } catch (error) {
      console.error("Error fetching teams:", error);
      toast.error("Failed to load teams");
    } finally {
      setLoading(false);
    }
  }, [user, fetchClientProfile]);

  const fetchTeamMembers = useCallback(async (teamId: string) => {
    try {
      // Fetch team members first
      const { data: membersData, error: membersError } = await supabase
        .from("team_members")
        .select("*")
        .eq("team_id", teamId)
        .order("created_at", { ascending: true });

      if (membersError) throw membersError;

      // Then fetch profiles for each member
      const membersWithProfiles: TeamMember[] = await Promise.all(
        (membersData || []).map(async (member) => {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("full_name, email")
            .eq("id", member.user_id)
            .maybeSingle();

          return {
            ...member,
            profiles: profileData || undefined,
          } as TeamMember;
        })
      );

      setTeamMembers(membersWithProfiles);
      return membersWithProfiles;
    } catch (error) {
      console.error("Error fetching team members:", error);
      toast.error("Failed to load team members");
      return [];
    }
  }, []);

  const createTeam = useCallback(async (name: string, description?: string) => {
    if (!clientProfileId) {
      toast.error("Client profile not found");
      return null;
    }

    try {
      const { data, error } = await supabase
        .from("client_teams")
        .insert({
          client_id: clientProfileId,
          name,
          description: description || null,
        })
        .select()
        .single();

      if (error) throw error;
      
      setTeams((prev) => [data, ...prev]);
      toast.success("Team created successfully");
      return data;
    } catch (error) {
      console.error("Error creating team:", error);
      toast.error("Failed to create team");
      return null;
    }
  }, [clientProfileId]);

  const updateTeam = useCallback(async (teamId: string, updates: Partial<Team>) => {
    try {
      const { data, error } = await supabase
        .from("client_teams")
        .update(updates)
        .eq("id", teamId)
        .select()
        .single();

      if (error) throw error;
      
      setTeams((prev) => prev.map((t) => (t.id === teamId ? data : t)));
      toast.success("Team updated successfully");
      return data;
    } catch (error) {
      console.error("Error updating team:", error);
      toast.error("Failed to update team");
      return null;
    }
  }, []);

  const deleteTeam = useCallback(async (teamId: string) => {
    try {
      const { error } = await supabase
        .from("client_teams")
        .delete()
        .eq("id", teamId);

      if (error) throw error;
      
      setTeams((prev) => prev.filter((t) => t.id !== teamId));
      toast.success("Team deleted successfully");
      return true;
    } catch (error) {
      console.error("Error deleting team:", error);
      toast.error("Failed to delete team");
      return false;
    }
  }, []);

  const inviteTeamMember = useCallback(async (
    teamId: string,
    email: string,
    role: "manager" | "member" = "member",
    permissions: {
      canViewClientDetails?: boolean;
      canViewInvoices?: boolean;
      canViewDocuments?: boolean;
    } = {}
  ) => {
    if (!user) return null;

    try {
      // First, check if user exists
      const { data: existingProfile, error: profileError } = await supabase
        .from("profiles")
        .select("id")
        .eq("email", email)
        .maybeSingle();

      if (profileError) throw profileError;

      if (!existingProfile) {
        toast.error("User with this email not found. They need to sign up first.");
        return null;
      }

      // Check if already a member
      const { data: existingMember } = await supabase
        .from("team_members")
        .select("id")
        .eq("team_id", teamId)
        .eq("user_id", existingProfile.id)
        .maybeSingle();

      if (existingMember) {
        toast.error("User is already a team member");
        return null;
      }

      const { data, error } = await supabase
        .from("team_members")
        .insert({
          team_id: teamId,
          user_id: existingProfile.id,
          role,
          can_view_client_details: permissions.canViewClientDetails || false,
          can_view_invoices: permissions.canViewInvoices || false,
          can_view_documents: permissions.canViewDocuments || false,
          invited_by: user.id,
          status: "pending",
        })
        .select()
        .single();

      if (error) throw error;

      // Fetch profile for the new member
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, email")
        .eq("id", existingProfile.id)
        .maybeSingle();

      const memberWithProfile: TeamMember = {
        ...data,
        profiles: profileData || undefined,
      };
      
      setTeamMembers((prev) => [...prev, memberWithProfile]);
      toast.success("Team member invited successfully");
      return memberWithProfile;
    } catch (error) {
      console.error("Error inviting team member:", error);
      toast.error("Failed to invite team member");
      return null;
    }
  }, [user]);

  const updateTeamMember = useCallback(async (
    memberId: string,
    updates: Partial<Pick<TeamMember, "role" | "can_view_client_details" | "can_view_invoices" | "can_view_documents" | "status">>
  ) => {
    try {
      const { data, error } = await supabase
        .from("team_members")
        .update(updates)
        .eq("id", memberId)
        .select()
        .single();

      if (error) throw error;

      // Fetch updated profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, email")
        .eq("id", data.user_id)
        .maybeSingle();

      const memberWithProfile: TeamMember = {
        ...data,
        profiles: profileData || undefined,
      };
      
      setTeamMembers((prev) => prev.map((m) => (m.id === memberId ? memberWithProfile : m)));
      toast.success("Team member updated successfully");
      return memberWithProfile;
    } catch (error) {
      console.error("Error updating team member:", error);
      toast.error("Failed to update team member");
      return null;
    }
  }, []);

  const removeTeamMember = useCallback(async (memberId: string) => {
    try {
      const { error } = await supabase
        .from("team_members")
        .delete()
        .eq("id", memberId);

      if (error) throw error;
      
      setTeamMembers((prev) => prev.filter((m) => m.id !== memberId));
      toast.success("Team member removed successfully");
      return true;
    } catch (error) {
      console.error("Error removing team member:", error);
      toast.error("Failed to remove team member");
      return false;
    }
  }, []);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return {
    teams,
    teamMembers,
    loading,
    clientProfileId,
    fetchTeams,
    fetchTeamMembers,
    createTeam,
    updateTeam,
    deleteTeam,
    inviteTeamMember,
    updateTeamMember,
    removeTeamMember,
  };
};
