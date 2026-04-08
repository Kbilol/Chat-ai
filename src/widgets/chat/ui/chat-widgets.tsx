// src/widgets/chat/ui/chat-widget.tsx
import { ScrollArea } from "../../../shared/ui/scroll-area";
import { Card, CardContent } from "../../../shared/ui/card";
import { ChatHeader } from "../../../features/chat/ui/chat-header";
import { ChatInput } from "../../../features/chat/ui/chat-input";
import { MessageBubble } from "../../../entities/message/ui/message-bubble";
import { useMessageStore } from "../../../entities/message/model/message-store";
import { Loader2 } from "lucide-react";

export function ChatWidget() {
  const { messages, isLoading } = useMessageStore();

  return (
    <Card className="w-full max-w-4xl h-[600px] flex flex-col shadow-xl">
      <ChatHeader />
      <CardContent className="flex-1 p-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex flex-col">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start py-4 px-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                  </div>
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <ChatInput />
    </Card>
  );
}
