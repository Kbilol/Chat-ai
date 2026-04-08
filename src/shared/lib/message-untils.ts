// src/shared/lib/message-utils.ts

import type { ChatMessage } from "./ai-client";


export function createUserMessage(content: string): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "user",
    content,
    timestamp: new Date(),
  };
}

export function createAssistantMessage(content: string): ChatMessage {
  return {
    id: crypto.randomUUID(),
    role: "assistant",
    content,
    timestamp: new Date(),
  };
}