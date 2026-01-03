import { useState, useEffect } from "react";
import { useTeamManagement, Team, TeamMember } from "@/hooks/useTeamManagement";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, Plus, MoreHorizontal, UserPlus, Trash2, Edit, Shield, Eye, FileText, Receipt } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PortalTeamPage = () => {
  const { user } = useAuth();
  const {
    teams,
    teamMembers,
    loading,
    fetchTeamMembers,
    createTeam,
    updateTeam,
    deleteTeam,
    inviteTeamMember,
    updateTeamMember,
    removeTeamMember,
  } = useTeamManagement();

  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [showCreateTeam, setShowCreateTeam] = useState(false);
  const [showInviteMember, setShowInviteMember] = useState(false);
  const [showEditMember, setShowEditMember] = useState<TeamMember | null>(null);

  // Create team form
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamDescription, setNewTeamDescription] = useState("");

  // Invite member form
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"manager" | "member">("member");
  const [canViewClientDetails, setCanViewClientDetails] = useState(false);
  const [canViewInvoices, setCanViewInvoices] = useState(false);
  const [canViewDocuments, setCanViewDocuments] = useState(false);

  useEffect(() => {
    if (selectedTeam) {
      fetchTeamMembers(selectedTeam.id);
    }
  }, [selectedTeam, fetchTeamMembers]);

  const handleCreateTeam = async () => {
    if (!newTeamName.trim()) return;
    
    const team = await createTeam(newTeamName.trim(), newTeamDescription.trim());
    if (team) {
      setShowCreateTeam(false);
      setNewTeamName("");
      setNewTeamDescription("");
      setSelectedTeam(team);
    }
  };

  const handleInviteMember = async () => {
    if (!selectedTeam || !inviteEmail.trim()) return;

    await inviteTeamMember(selectedTeam.id, inviteEmail.trim(), inviteRole, {
      canViewClientDetails,
      canViewInvoices,
      canViewDocuments,
    });

    setShowInviteMember(false);
    setInviteEmail("");
    setInviteRole("member");
    setCanViewClientDetails(false);
    setCanViewInvoices(false);
    setCanViewDocuments(false);
  };

  const handleUpdateMember = async () => {
    if (!showEditMember) return;

    await updateTeamMember(showEditMember.id, {
      role: showEditMember.role,
      can_view_client_details: showEditMember.can_view_client_details,
      can_view_invoices: showEditMember.can_view_invoices,
      can_view_documents: showEditMember.can_view_documents,
      status: showEditMember.status,
    });

    setShowEditMember(null);
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "owner":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "manager":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32 w-full" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Team Management | Client Portal</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Team Management</h1>
            <p className="text-muted-foreground">Create and manage your teams</p>
          </div>
          <Dialog open={showCreateTeam} onOpenChange={setShowCreateTeam}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Team
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Team</DialogTitle>
                <DialogDescription>
                  Create a team to organize your team members
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="team-name">Team Name</Label>
                  <Input
                    id="team-name"
                    value={newTeamName}
                    onChange={(e) => setNewTeamName(e.target.value)}
                    placeholder="e.g., Marketing Team"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team-description">Description (Optional)</Label>
                  <Textarea
                    id="team-description"
                    value={newTeamDescription}
                    onChange={(e) => setNewTeamDescription(e.target.value)}
                    placeholder="Describe the team's purpose"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowCreateTeam(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateTeam} disabled={!newTeamName.trim()}>
                  Create Team
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {teams.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Users className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">No Teams Yet</h3>
              <p className="text-muted-foreground text-center max-w-sm mt-2">
                Create your first team to start inviting team members
              </p>
              <Button className="mt-4" onClick={() => setShowCreateTeam(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Create Your First Team
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Teams List */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Your Teams</h2>
              {teams.map((team) => (
                <Card
                  key={team.id}
                  className={`cursor-pointer transition-colors ${
                    selectedTeam?.id === team.id
                      ? "border-primary bg-primary/5"
                      : "hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedTeam(team)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{team.name}</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setSelectedTeam(team)}>
                            <Edit className="mr-2 h-4 w-4" />
                            View Members
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={async (e) => {
                              e.stopPropagation();
                              if (confirm("Are you sure you want to delete this team?")) {
                                await deleteTeam(team.id);
                                if (selectedTeam?.id === team.id) {
                                  setSelectedTeam(null);
                                }
                              }
                            }}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Team
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    {team.description && (
                      <CardDescription className="line-clamp-2">
                        {team.description}
                      </CardDescription>
                    )}
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Team Members */}
            <div className="lg:col-span-2">
              {selectedTeam ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{selectedTeam.name} Members</CardTitle>
                        <CardDescription>
                          Manage team members and their permissions
                        </CardDescription>
                      </div>
                      <Dialog open={showInviteMember} onOpenChange={setShowInviteMember}>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Invite
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Invite Team Member</DialogTitle>
                            <DialogDescription>
                              Invite a user to join this team
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="invite-email">Email Address</Label>
                              <Input
                                id="invite-email"
                                type="email"
                                value={inviteEmail}
                                onChange={(e) => setInviteEmail(e.target.value)}
                                placeholder="team@example.com"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Role</Label>
                            <Select value={inviteRole} onValueChange={(v) => setInviteRole(v as "manager" | "member")}>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="manager">Manager</SelectItem>
                                  <SelectItem value="member">Member</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-3">
                              <Label>Permissions</Label>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">View Client Details</span>
                                </div>
                                <Switch
                                  checked={canViewClientDetails}
                                  onCheckedChange={setCanViewClientDetails}
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Receipt className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">View Invoices</span>
                                </div>
                                <Switch
                                  checked={canViewInvoices}
                                  onCheckedChange={setCanViewInvoices}
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">View Documents</span>
                                </div>
                                <Switch
                                  checked={canViewDocuments}
                                  onCheckedChange={setCanViewDocuments}
                                />
                              </div>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setShowInviteMember(false)}>
                              Cancel
                            </Button>
                            <Button onClick={handleInviteMember} disabled={!inviteEmail.trim()}>
                              Send Invitation
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {teamMembers.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-8">
                        <Users className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No team members yet</p>
                        <Button
                          variant="outline"
                          className="mt-4"
                          onClick={() => setShowInviteMember(true)}
                        >
                          Invite First Member
                        </Button>
                      </div>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Member</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Permissions</TableHead>
                            <TableHead className="w-[80px]"></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {teamMembers.map((member) => (
                            <TableRow key={member.id}>
                              <TableCell>
                                <div>
                                  <p className="font-medium">
                                    {member.profiles?.full_name || "Unknown"}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {member.profiles?.email}
                                  </p>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge className={getRoleColor(member.role)}>
                                  {member.role}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Badge className={getStatusColor(member.status)}>
                                  {member.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-1">
                                  {member.can_view_client_details && (
                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  {member.can_view_invoices && (
                                    <Receipt className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  {member.can_view_documents && (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => setShowEditMember(member)}>
                                      <Shield className="mr-2 h-4 w-4" />
                                      Edit Permissions
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                      className="text-destructive"
                                      onClick={() => {
                                        if (confirm("Remove this team member?")) {
                                          removeTeamMember(member.id);
                                        }
                                      }}
                                    >
                                      <Trash2 className="mr-2 h-4 w-4" />
                                      Remove
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Users className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Select a team to view members</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Edit Member Dialog */}
        <Dialog open={!!showEditMember} onOpenChange={(open) => !open && setShowEditMember(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Member Permissions</DialogTitle>
              <DialogDescription>
                Update role and permissions for {showEditMember?.profiles?.full_name}
              </DialogDescription>
            </DialogHeader>
            {showEditMember && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Role</Label>
                  <Select
                    value={showEditMember.role}
                    onValueChange={(v) =>
                      setShowEditMember({ ...showEditMember, role: v })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="member">Member</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select
                    value={showEditMember.status}
                    onValueChange={(v) =>
                      setShowEditMember({ ...showEditMember, status: v })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-3">
                  <Label>Permissions</Label>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">View Client Details</span>
                    </div>
                    <Switch
                      checked={showEditMember.can_view_client_details}
                      onCheckedChange={(v) =>
                        setShowEditMember({ ...showEditMember, can_view_client_details: v })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Receipt className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">View Invoices</span>
                    </div>
                    <Switch
                      checked={showEditMember.can_view_invoices}
                      onCheckedChange={(v) =>
                        setShowEditMember({ ...showEditMember, can_view_invoices: v })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">View Documents</span>
                    </div>
                    <Switch
                      checked={showEditMember.can_view_documents}
                      onCheckedChange={(v) =>
                        setShowEditMember({ ...showEditMember, can_view_documents: v })
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowEditMember(null)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateMember}>Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PortalTeamPage;
