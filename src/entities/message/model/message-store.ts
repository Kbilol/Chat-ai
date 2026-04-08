// src/entities/message/model/message-store.ts
import { create } from "zustand";
import { aiClient, type ChatMessage } from "../../../shared/lib/ai-client";
import { createAssistantMessage, createUserMessage } from "@/shared/lib/message-untils";


interface MessageStore {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export const useMessageStore = create<MessageStore>((set, get) => ({
  messages: [
    createAssistantMessage("Hello! I'm your AI assistant. How can I help you today?")
  ],
  isLoading: false,
  error: null,

  sendMessage: async (content: string) => {
    if (!content.trim()) return;

    const userMessage = createUserMessage(content);
    set((state) => ({
      messages: [...state.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    try {
      const history = get().messages;
      const response = await aiClient.sendMessage(content, history);
      const assistantMessage = createAssistantMessage(response.content);
      
      set((state) => ({
        messages: [...state.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : "Failed to send message",
      });
    }
  },

  clearMessages: () => {
    set({
      messages: [createAssistantMessage("Hello! I'm your AI assistant. How can I help you today?")],
      error: null,
    });
  },
}));
