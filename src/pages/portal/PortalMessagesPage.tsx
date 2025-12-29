import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Search, Send } from "lucide-react";

const PortalMessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  // Placeholder chats
  const chats = [
    {
      id: "1",
      name: "Support Team",
      lastMessage: "We'll review your request shortly.",
      time: "2 hours ago",
      unread: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Messages | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Messages</h1>
          <p className="text-muted-foreground mt-1">
            Communicate with your project team in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-16rem)]">
          {/* Chat List */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {chats.length > 0 ? (
                <div className="divide-y divide-border">
                  {chats.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`w-full p-4 text-left hover:bg-muted/50 transition-colors ${
                        selectedChat === chat.id ? "bg-muted/50" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <p className="font-medium flex items-center gap-2">
                            {chat.name}
                            {chat.unread && (
                              <span className="h-2 w-2 rounded-full bg-primary" />
                            )}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {chat.lastMessage}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-muted-foreground">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No conversations yet</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 flex flex-col">
            {selectedChat ? (
              <>
                <CardHeader className="border-b border-border">
                  <CardTitle className="text-lg">Support Team</CardTitle>
                  <CardDescription>Online • Usually responds within 2 hours</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">Hello! How can we help you today?</p>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          10:30 AM
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Hi, I have a question about my project timeline.
                        </p>
                        <span className="text-xs text-primary-foreground/70 mt-1 block">
                          10:32 AM
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          We'll review your request shortly. Is there anything specific
                          you'd like to know?
                        </p>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          10:35 AM
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && message && setMessage("")}
                    />
                    <Button size="icon" disabled={!message}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Select a conversation</p>
                  <p className="text-sm">Choose a chat from the list to start messaging</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
};

export default PortalMessagesPage;
