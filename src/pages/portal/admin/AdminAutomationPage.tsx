import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Zap,
  Plus,
  FileSignature,
  Clock,
  Target,
  CheckCircle2,
  MessageSquare,
  Mail,
  Bell,
  Settings2,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";

interface AutomationRule {
  id: string;
  name: string;
  trigger_type: string;
  action_type: string;
  trigger_config: unknown;
  action_config: unknown;
  is_active: boolean;
  created_at: string;
}

const TRIGGER_TYPES = [
  { value: "agreement_signed", label: "Agreement Signed", icon: FileSignature, description: "When a client signs a document" },
  { value: "client_inactive", label: "Client Inactive", icon: Clock, description: "When a client hasn't logged in" },
  { value: "milestone_complete", label: "Milestone Complete", icon: Target, description: "When a milestone is completed" },
  { value: "deliverable_approved", label: "Deliverable Approved", icon: CheckCircle2, description: "When a deliverable is marked done" },
  { value: "message_unanswered", label: "Message Unanswered", icon: MessageSquare, description: "When a message goes unanswered" },
];

const ACTION_TYPES = [
  { value: "send_email", label: "Send Email", icon: Mail },
  { value: "update_status", label: "Update Status", icon: Settings2 },
  { value: "send_notification", label: "Send Notification", icon: Bell },
  { value: "create_task", label: "Create Task", icon: Target },
];

const AdminAutomationPage = () => {
  const [rules, setRules] = useState<AutomationRule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newRule, setNewRule] = useState({
    name: "",
    trigger_type: "",
    action_type: "",
  });

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    try {
      const { data, error } = await supabase
        .from("automation_rules")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRules(data || []);
    } catch (error) {
      console.error("Error fetching rules:", error);
      toast.error("Failed to load automation rules");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleRule = async (ruleId: string, currentActive: boolean) => {
    try {
      const { error } = await supabase
        .from("automation_rules")
        .update({ is_active: !currentActive })
        .eq("id", ruleId);

      if (error) throw error;
      
      setRules((prev) =>
        prev.map((r) => (r.id === ruleId ? { ...r, is_active: !currentActive } : r))
      );
      toast.success(currentActive ? "Rule disabled" : "Rule enabled");
    } catch (error) {
      console.error("Error toggling rule:", error);
      toast.error("Failed to update rule");
    }
  };

  const handleCreateRule = async () => {
    if (!newRule.name || !newRule.trigger_type || !newRule.action_type) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("automation_rules")
        .insert({
          name: newRule.name,
          trigger_type: newRule.trigger_type,
          action_type: newRule.action_type,
          trigger_config: {},
          action_config: {},
          is_active: true,
        })
        .select()
        .single();

      if (error) throw error;

      setRules((prev) => [data, ...prev]);
      setShowCreateDialog(false);
      setNewRule({ name: "", trigger_type: "", action_type: "" });
      toast.success("Automation rule created");
    } catch (error) {
      console.error("Error creating rule:", error);
      toast.error("Failed to create rule");
    }
  };

  const handleDeleteRule = async (ruleId: string) => {
    try {
      const { error } = await supabase
        .from("automation_rules")
        .delete()
        .eq("id", ruleId);

      if (error) throw error;
      
      setRules((prev) => prev.filter((r) => r.id !== ruleId));
      toast.success("Rule deleted");
    } catch (error) {
      console.error("Error deleting rule:", error);
      toast.error("Failed to delete rule");
    }
  };

  const getTriggerIcon = (type: string) => {
    const trigger = TRIGGER_TYPES.find((t) => t.value === type);
    return trigger?.icon || Zap;
  };

  const getActionIcon = (type: string) => {
    const action = ACTION_TYPES.find((a) => a.value === type);
    return action?.icon || Bell;
  };

  return (
    <>
      <Helmet>
        <title>Automation Rules | Admin Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Automation Rules</h1>
            <p className="text-muted-foreground mt-1">
              Set up automated workflows triggered by client actions.
            </p>
          </div>
          <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Rule
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Automation Rule</DialogTitle>
                <DialogDescription>
                  Set up a new automated workflow for your portal.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Rule Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Welcome email on signup"
                    value={newRule.name}
                    onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Trigger</Label>
                  <Select
                    value={newRule.trigger_type}
                    onValueChange={(value) => setNewRule({ ...newRule, trigger_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a trigger" />
                    </SelectTrigger>
                    <SelectContent>
                      {TRIGGER_TYPES.map((trigger) => (
                        <SelectItem key={trigger.value} value={trigger.value}>
                          <div className="flex items-center gap-2">
                            <trigger.icon className="h-4 w-4" />
                            {trigger.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Action</Label>
                  <Select
                    value={newRule.action_type}
                    onValueChange={(value) => setNewRule({ ...newRule, action_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an action" />
                    </SelectTrigger>
                    <SelectContent>
                      {ACTION_TYPES.map((action) => (
                        <SelectItem key={action.value} value={action.value}>
                          <div className="flex items-center gap-2">
                            <action.icon className="h-4 w-4" />
                            {action.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateRule}>Create Rule</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Trigger Types Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TRIGGER_TYPES.map((trigger) => {
            const activeCount = rules.filter(
              (r) => r.trigger_type === trigger.value && r.is_active
            ).length;

            return (
              <Card key={trigger.value} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <trigger.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{trigger.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {activeCount} active rule{activeCount !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Rules List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Active Rules
            </CardTitle>
            <CardDescription>Manage your automation workflows</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-20" />
                ))}
              </div>
            ) : rules.length > 0 ? (
              <div className="space-y-4">
                {rules.map((rule) => {
                  const TriggerIcon = getTriggerIcon(rule.trigger_type);
                  const ActionIcon = getActionIcon(rule.action_type);

                  return (
                    <div
                      key={rule.id}
                      className={`flex items-center justify-between p-4 rounded-lg border ${
                        rule.is_active
                          ? "border-primary/20 bg-primary/5"
                          : "border-border bg-muted/30"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Switch
                          checked={rule.is_active}
                          onCheckedChange={() => handleToggleRule(rule.id, rule.is_active)}
                        />
                        <div>
                          <p className="font-medium">{rule.name}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <TriggerIcon className="h-4 w-4" />
                            <span>{rule.trigger_type.replace("_", " ")}</span>
                            <span>→</span>
                            <ActionIcon className="h-4 w-4" />
                            <span>{rule.action_type.replace("_", " ")}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={rule.is_active ? "default" : "secondary"}>
                          {rule.is_active ? "Active" : "Disabled"}
                        </Badge>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteRule(rule.id)}
                        >
                          <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Zap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="font-medium">No automation rules yet</p>
                <p className="text-sm mt-1">
                  Create your first rule to automate your workflows.
                </p>
                <Button className="mt-4" onClick={() => setShowCreateDialog(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Rule
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Example Automations */}
        <Card>
          <CardHeader>
            <CardTitle>Suggested Automations</CardTitle>
            <CardDescription>Common workflows you might want to set up</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <FileSignature className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Agreement → Project Start</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically activate a project when the client signs the agreement.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Inactivity Reminder</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Send a reminder email when a client hasn't logged in for 7 days.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Unanswered Message Alert</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Notify admin when a client message hasn't been responded to in 24 hours.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-5 w-5 text-primary" />
                  <h4 className="font-medium">Milestone Update Email</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Email the client when a project milestone is marked as complete.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminAutomationPage;