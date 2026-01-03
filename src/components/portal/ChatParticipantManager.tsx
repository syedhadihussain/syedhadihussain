import { useState, useEffect } from "react";
import { useChatParticipants, ChatParticipant } from "@/hooks/useChatParticipants";
import { useTeamManagement, TeamMember } from "@/hooks/useTeamManagement";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { UserPlus, X, Eye, EyeOff, Users, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface ChatParticipantManagerProps {
  conversationId: string;
  isOpen: boolean;
  onClose: () => void;
}

const ChatParticipantManager = ({
  conversationId,
  isOpen,
  onClose,
}: ChatParticipantManagerProps) => {
  const { user, isAdmin, isModerator } = useAuth();
  const {
    participants,
    loading: participantsLoading,
    fetchParticipants,
    addParticipant,
    removeParticipant,
    updateParticipantVisibility,
  } = useChatParticipants(conversationId);

  const { teams, teamMembers, fetchTeamMembers } = useTeamManagement();

  const [selectedTeamId, setSelectedTeamId] = useState<string>("");
  const [availableMembers, setAvailableMembers] = useState<TeamMember[]>([]);
  const [selectedMemberId, setSelectedMemberId] = useState<string>("");
  const [canViewClientName, setCanViewClientName] = useState(false);

  useEffect(() => {
    if (isOpen && conversationId) {
      fetchParticipants();
    }
  }, [isOpen, conversationId, fetchParticipants]);

  useEffect(() => {
    if (selectedTeamId) {
      fetchTeamMembers(selectedTeamId).then((members) => {
        if (members) {
          // Filter out members who are already participants
          const participantUserIds = participants.map((p) => p.user_id);
          const available = members.filter(
            (m) => !participantUserIds.includes(m.user_id) && m.status === "active"
          );
          setAvailableMembers(available);
        }
      });
    }
  }, [selectedTeamId, fetchTeamMembers, participants]);

  const handleAddParticipant = async () => {
    if (!selectedMemberId) return;

    await addParticipant(selectedMemberId, canViewClientName);
    setSelectedMemberId("");
    setCanViewClientName(false);
  };

  const handleRemoveParticipant = async (participantId: string) => {
    if (confirm("Remove this participant from the chat?")) {
      await removeParticipant(participantId);
    }
  };

  const handleToggleVisibility = async (
    participantId: string,
    currentValue: boolean
  ) => {
    await updateParticipantVisibility(participantId, !currentValue);
  };

  const getInitials = (name: string | null | undefined, email: string | null | undefined) => {
    if (name) return name.slice(0, 2).toUpperCase();
    if (email) return email.slice(0, 2).toUpperCase();
    return "??";
  };

  const canManageParticipants = isAdmin || isModerator;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Chat Participants
          </DialogTitle>
          <DialogDescription>
            Manage who can access this chat and what they can see
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Current Participants */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Current Participants</Label>
            {participantsLoading ? (
              <div className="space-y-2">
                {[1, 2].map((i) => (
                  <Skeleton key={i} className="h-14 w-full" />
                ))}
              </div>
            ) : participants.length === 0 ? (
              <div className="flex items-center gap-2 p-4 rounded-lg border border-dashed text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">No team members added yet</span>
              </div>
            ) : (
              <ScrollArea className="h-48">
                <div className="space-y-2 pr-4">
                  {participants.map((participant) => (
                    <div
                      key={participant.id}
                      className="flex items-center justify-between p-3 rounded-lg border bg-card"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary/10 text-primary text-sm">
                            {getInitials(
                              participant.profile?.full_name,
                              participant.profile?.email
                            )}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">
                            {participant.profile?.full_name || "Unknown"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {participant.profile?.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Client Name Visibility Toggle */}
                        <div className="flex items-center gap-1.5">
                          {participant.can_view_client_name ? (
                            <Eye className="h-3.5 w-3.5 text-green-600" />
                          ) : (
                            <EyeOff className="h-3.5 w-3.5 text-muted-foreground" />
                          )}
                          <Switch
                            checked={participant.can_view_client_name}
                            onCheckedChange={() =>
                              handleToggleVisibility(
                                participant.id,
                                participant.can_view_client_name
                              )
                            }
                            disabled={!canManageParticipants}
                          />
                        </div>

                        {canManageParticipants && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => handleRemoveParticipant(participant.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>

          {/* Add Participant */}
          {canManageParticipants && (
            <div className="space-y-3 pt-4 border-t">
              <Label className="text-sm font-medium">Add Team Member</Label>

              {teams.length === 0 ? (
                <div className="flex items-center gap-2 p-4 rounded-lg border border-dashed text-muted-foreground">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">No teams available</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Team</Label>
                      <Select value={selectedTeamId} onValueChange={setSelectedTeamId}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select team" />
                        </SelectTrigger>
                        <SelectContent>
                          {teams.map((team) => (
                            <SelectItem key={team.id} value={team.id}>
                              {team.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs text-muted-foreground">Member</Label>
                      <Select
                        value={selectedMemberId}
                        onValueChange={setSelectedMemberId}
                        disabled={!selectedTeamId || availableMembers.length === 0}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              !selectedTeamId
                                ? "Select team first"
                                : availableMembers.length === 0
                                ? "No members available"
                                : "Select member"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {availableMembers.map((member) => (
                            <SelectItem key={member.id} value={member.user_id}>
                              {member.profiles?.full_name || member.profiles?.email || "Unknown"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      {canViewClientName ? (
                        <Eye className="h-4 w-4 text-green-600" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      )}
                      <div>
                        <p className="text-sm font-medium">View Client Name</p>
                        <p className="text-xs text-muted-foreground">
                          {canViewClientName
                            ? "Member can see client details"
                            : "Client name will be hidden"}
                        </p>
                      </div>
                    </div>
                    <Switch
                      checked={canViewClientName}
                      onCheckedChange={setCanViewClientName}
                    />
                  </div>

                  <Button
                    className="w-full"
                    onClick={handleAddParticipant}
                    disabled={!selectedMemberId}
                  >
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add to Chat
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Info */}
          <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
            <div className="flex gap-2">
              <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="text-xs text-blue-700 dark:text-blue-300">
                <p className="font-medium">Client Name Visibility</p>
                <p className="mt-0.5 opacity-80">
                  When disabled, team members will see "Client" instead of the actual
                  client name, protecting client privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatParticipantManager;
