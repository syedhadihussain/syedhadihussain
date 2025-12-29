import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell, Send, Megaphone, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminAnnouncementsPage = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState("all");
  const [isSending, setIsSending] = useState(false);

  // Placeholder announcements
  const recentAnnouncements = [
    {
      id: "1",
      title: "System Maintenance Scheduled",
      message: "We will be performing scheduled maintenance on Sunday, 2 AM - 4 AM EST.",
      audience: "all",
      sentAt: "2024-01-15T10:00:00Z",
      readCount: 45,
    },
    {
      id: "2",
      title: "New Feature: Document Signing",
      message: "You can now sign documents directly in the portal. Check it out!",
      audience: "clients",
      sentAt: "2024-01-10T14:30:00Z",
      readCount: 38,
    },
  ];

  const handleSendAnnouncement = async () => {
    if (!title || !message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Announcement Sent",
      description: `Your announcement has been sent to ${
        audience === "all" ? "all users" : audience
      }.`,
    });

    setTitle("");
    setMessage("");
    setAudience("all");
    setIsSending(false);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <Helmet>
        <title>Announcements | Admin Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Announcements</h1>
          <p className="text-muted-foreground mt-1">
            Send announcements and updates to your clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Create Announcement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5" />
                New Announcement
              </CardTitle>
              <CardDescription>
                Create and send a new announcement to your users.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Announcement title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your announcement message..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Audience</Label>
                <Select value={audience} onValueChange={setAudience}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="clients">Clients Only</SelectItem>
                    <SelectItem value="admins">Admins & Moderators</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSendAnnouncement}
                disabled={isSending || !title || !message}
                className="w-full"
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Announcement
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Recent Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Recent Announcements
              </CardTitle>
              <CardDescription>Previously sent announcements.</CardDescription>
            </CardHeader>
            <CardContent>
              {recentAnnouncements.length > 0 ? (
                <div className="space-y-4">
                  {recentAnnouncements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="p-4 rounded-lg border border-border bg-card"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">{announcement.title}</h4>
                        <Badge variant="outline" className="capitalize">
                          {announcement.audience}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {announcement.message}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(announcement.sentAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {announcement.readCount} read
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Megaphone className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No announcements sent yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AdminAnnouncementsPage;
