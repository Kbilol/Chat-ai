// src/features/chat/ui/chat-header.tsx
import { Button } from "../../../shared/ui/button";
import { Trash2, Sparkles } from "lucide-react";
import { useMessageStore } from "../../../entities/message/model/message-store";

export function ChatHeader() {
  const { clearMessages } = useMessageStore();

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-primary" />
        <h1 className="text-xl font-semibold">AI Chat Assistant</h1>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={clearMessages}
        className="text-muted-foreground hover:text-destructive"
      >
        <Trash2 className="w-4 h-4 mr-2" />
        Clear Chat
      </Button>
    </div>
  );
}
