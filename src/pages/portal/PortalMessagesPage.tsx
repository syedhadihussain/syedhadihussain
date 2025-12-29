import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  MessageSquare, 
  Search, 
  Send, 
  Check, 
  CheckCheck,
  Pin,
  Smile,
  Sparkles,
  Languages,
  MoreVertical,
  FileText,
  Paperclip,
  Loader2,
  X,
} from "lucide-react";
import { useRealtimeMessages, useConversations } from "@/hooks/useRealtimeMessages";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { toast } from "sonner";

const EMOJI_REACTIONS = ["👍", "❤️", "😊", "🎉", "👀", "🙏"];

interface ChatSummary {
  summary: string;
  key_points: string[];
  action_items: string[];
  sentiment: string;
}

const PortalMessagesPage = () => {
  const { user } = useAuth();
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [messageSearchQuery, setMessageSearchQuery] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [summary, setSummary] = useState<ChatSummary | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [smartReplies, setSmartReplies] = useState<string[]>([]);
  const [isLoadingReplies, setIsLoadingReplies] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { conversations, loading: conversationsLoading } = useConversations();
  const {
    messages,
    typingUsers,
    loading: messagesLoading,
    sendMessage,
    markAsRead,
    sendTypingIndicator
  } = useRealtimeMessages(selectedConversationId);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Mark unread messages as read when viewing conversation
  useEffect(() => {
    if (selectedConversationId && messages.length > 0) {
      const unreadMessages = messages
        .filter((m) => !m.is_read && m.sender_id !== user?.id)
        .map((m) => m.id);
      if (unreadMessages.length > 0) {
        markAsRead(unreadMessages);
      }
    }
  }, [selectedConversationId, messages, user?.id, markAsRead]);

  // Load smart replies when new message arrives from others
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender_id !== user?.id && messages.length > 0) {
      loadSmartReplies();
    }
  }, [messages.length]);

  const handleTyping = (value: string) => {
    setMessage(value);

    if (!isTyping) {
      setIsTyping(true);
      sendTypingIndicator(true);
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      sendTypingIndicator(false);
    }, 2000);
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    try {
      await sendMessage(message);
      setMessage("");
      setIsTyping(false);
      sendTypingIndicator(false);
      setSmartReplies([]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const loadSmartReplies = async () => {
    if (messages.length < 2) return;
    
    setIsLoadingReplies(true);
    try {
      const context = messages.slice(-5).map(m => `${m.sender_id === user?.id ? 'Me' : 'Them'}: ${m.content}`).join('\n');
      const lastMessage = messages[messages.length - 1]?.content || '';

      const { data, error } = await supabase.functions.invoke('smart-reply', {
        body: { conversationContext: context, lastMessage }
      });

      if (error) throw error;
      setSmartReplies(data.suggestions || []);
    } catch (error) {
      console.error("Error loading smart replies:", error);
    } finally {
      setIsLoadingReplies(false);
    }
  };

  const handleSummarize = async () => {
    if (messages.length < 3) {
      toast.error("Need at least 3 messages to summarize");
      return;
    }

    setIsSummarizing(true);
    setShowSummary(true);
    
    try {
      const formattedMessages = messages.map(m => ({
        role: m.sender_id === user?.id ? 'user' : 'assistant',
        content: m.content,
        created_at: m.created_at
      }));

      const { data, error } = await supabase.functions.invoke('summarize-chat', {
        body: { messages: formattedMessages, conversationId: selectedConversationId }
      });

      if (error) throw error;
      setSummary(data);
    } catch (error) {
      console.error("Error summarizing:", error);
      toast.error("Failed to summarize conversation");
      setShowSummary(false);
    } finally {
      setIsSummarizing(false);
    }
  };

  const handlePinMessage = async (messageId: string, currentlyPinned: boolean) => {
    try {
      const { error } = await supabase
        .from('messages')
        .update({ is_pinned: !currentlyPinned })
        .eq('id', messageId);

      if (error) throw error;
      toast.success(currentlyPinned ? "Message unpinned" : "Message pinned");
    } catch (error) {
      console.error("Error pinning message:", error);
      toast.error("Failed to pin message");
    }
  };

  const handleReaction = async (messageId: string, emoji: string) => {
    try {
      const targetMessage = messages.find(m => m.id === messageId);
      const currentReactions = (targetMessage as any)?.reactions || {};
      const userId = user?.id || '';
      
      // Toggle reaction
      if (currentReactions[emoji]?.includes(userId)) {
        currentReactions[emoji] = currentReactions[emoji].filter((id: string) => id !== userId);
        if (currentReactions[emoji].length === 0) delete currentReactions[emoji];
      } else {
        if (!currentReactions[emoji]) currentReactions[emoji] = [];
        currentReactions[emoji].push(userId);
      }

      const { error } = await supabase
        .from('messages')
        .update({ reactions: currentReactions })
        .eq('id', messageId);

      if (error) throw error;
      setShowEmojiPicker(null);
    } catch (error) {
      console.error("Error adding reaction:", error);
    }
  };

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.title?.toLowerCase().includes(searchQuery.toLowerCase()) || !searchQuery
  );

  const filteredMessages = messageSearchQuery
    ? messages.filter(m => m.content.toLowerCase().includes(messageSearchQuery.toLowerCase()))
    : messages;

  const selectedConversation = conversations.find(
    (c) => c.id === selectedConversationId
  );

  const pinnedMessages = messages.filter((m: any) => m.is_pinned);

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
          <Card className="lg:col-span-1 flex flex-col">
            <CardHeader className="pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-y-auto">
              {conversationsLoading ? (
                <div className="p-4 space-y-3">
                  {[1,2,3].map(i => <Skeleton key={i} className="h-16" />)}
                </div>
              ) : filteredConversations.length > 0 ? (
                <div className="divide-y divide-border">
                  {filteredConversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedConversationId(conv.id)}
                      className={`w-full p-4 text-left hover:bg-muted/50 transition-colors ${
                        selectedConversationId === conv.id ? "bg-muted/50 border-l-2 border-primary" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1 min-w-0">
                          <p className="font-medium flex items-center gap-2 truncate">
                            {conv.title || "Support Team"}
                          </p>
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            Click to view messages
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                          {format(new Date(conv.last_message_at), "MMM d")}
                        </span>
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
            {selectedConversationId ? (
              <>
                <CardHeader className="border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">
                        {selectedConversation?.title || "Support Team"}
                      </CardTitle>
                      <CardDescription>
                        {typingUsers.length > 0
                          ? "Someone is typing..."
                          : "Online • Usually responds within 2 hours"}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={handleSummarize} disabled={isSummarizing}>
                        <Sparkles className="h-4 w-4 mr-1" />
                        Summarize
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setMessageSearchQuery("")}>
                            <Search className="h-4 w-4 mr-2" />
                            Search Messages
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            View Pinned ({pinnedMessages.length})
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  {messageSearchQuery !== null && (
                    <div className="relative mt-2">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search in conversation..."
                        className="pl-10 pr-8"
                        value={messageSearchQuery}
                        onChange={(e) => setMessageSearchQuery(e.target.value)}
                        autoFocus
                      />
                      {messageSearchQuery && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1 h-7 w-7"
                          onClick={() => setMessageSearchQuery("")}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="flex-1 p-4 overflow-y-auto">
                  {messagesLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : filteredMessages.length === 0 ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-muted-foreground">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>{messageSearchQuery ? "No messages found" : "No messages yet. Start the conversation!"}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredMessages.map((msg: any) => {
                        const isOwnMessage = msg.sender_id === user?.id;
                        const reactions = msg.reactions || {};
                        
                        return (
                          <div
                            key={msg.id}
                            className={`flex ${isOwnMessage ? "justify-end" : "justify-start"} group`}
                          >
                            <div className="relative max-w-[80%]">
                              {msg.is_pinned && (
                                <Pin className="absolute -top-2 -right-2 h-4 w-4 text-primary" />
                              )}
                              <div
                                className={`rounded-lg p-3 ${
                                  isOwnMessage
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted"
                                }`}
                              >
                                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                                <div
                                  className={`flex items-center gap-1 mt-1 ${
                                    isOwnMessage ? "justify-end" : ""
                                  }`}
                                >
                                  <span
                                    className={`text-xs ${
                                      isOwnMessage
                                        ? "text-primary-foreground/70"
                                        : "text-muted-foreground"
                                    }`}
                                  >
                                    {format(new Date(msg.created_at), "h:mm a")}
                                  </span>
                                  {isOwnMessage && (
                                    <span className="text-primary-foreground/70">
                                      {msg.is_read ? (
                                        <CheckCheck className="h-3.5 w-3.5" />
                                      ) : (
                                        <Check className="h-3.5 w-3.5" />
                                      )}
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              {/* Reactions display */}
                              {Object.keys(reactions).length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {Object.entries(reactions).map(([emoji, users]) => (
                                    <Badge key={emoji} variant="secondary" className="text-xs px-1.5 py-0.5">
                                      {emoji} {(users as string[]).length}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                              
                              {/* Message actions */}
                              <div className={`absolute ${isOwnMessage ? '-left-20' : '-right-20'} top-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1`}>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => setShowEmojiPicker(showEmojiPicker === msg.id ? null : msg.id)}
                                >
                                  <Smile className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-7 w-7"
                                  onClick={() => handlePinMessage(msg.id, msg.is_pinned)}
                                >
                                  <Pin className={`h-4 w-4 ${msg.is_pinned ? 'text-primary' : ''}`} />
                                </Button>
                              </div>
                              
                              {/* Emoji picker */}
                              {showEmojiPicker === msg.id && (
                                <div className={`absolute ${isOwnMessage ? 'right-0' : 'left-0'} -bottom-10 bg-popover border rounded-lg p-2 flex gap-1 shadow-lg z-10`}>
                                  {EMOJI_REACTIONS.map(emoji => (
                                    <button
                                      key={emoji}
                                      className="hover:bg-muted rounded p-1 text-lg"
                                      onClick={() => handleReaction(msg.id, emoji)}
                                    >
                                      {emoji}
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      <div ref={messagesEndRef} />
                    </div>
                  )}
                </CardContent>
                
                {/* Smart Replies */}
                {smartReplies.length > 0 && (
                  <div className="px-4 py-2 border-t border-border flex gap-2 flex-wrap">
                    {isLoadingReplies ? (
                      <Skeleton className="h-8 w-32" />
                    ) : (
                      smartReplies.map((reply, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={() => {
                            setMessage(reply);
                            setSmartReplies([]);
                          }}
                        >
                          <Sparkles className="h-3 w-3 mr-1" />
                          {reply.length > 40 ? reply.substring(0, 40) + "..." : reply}
                        </Button>
                      ))
                    )}
                  </div>
                )}
                
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => handleTyping(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1"
                    />
                    <Button size="icon" onClick={handleSendMessage} disabled={!message.trim()}>
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

      {/* Summary Dialog */}
      <Dialog open={showSummary} onOpenChange={setShowSummary}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Conversation Summary
            </DialogTitle>
            <DialogDescription>AI-generated summary of this conversation</DialogDescription>
          </DialogHeader>
          {isSummarizing ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : summary ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Summary</h4>
                <p className="text-sm text-muted-foreground">{summary.summary}</p>
              </div>
              
              {summary.key_points.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Key Points</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {summary.key_points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {summary.action_items.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Action Items</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {summary.action_items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCheck className="h-4 w-4 text-green-500 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h4 className="font-medium mb-2">Sentiment</h4>
                <Badge variant={
                  summary.sentiment === 'positive' ? 'default' :
                  summary.sentiment === 'negative' ? 'destructive' : 'secondary'
                }>
                  {summary.sentiment}
                </Badge>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortalMessagesPage;