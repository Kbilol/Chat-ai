// src/shared/lib/ai-client.ts
//
//
import { GoogleGenAI } from "@google/genai";
export interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export interface SendMessageResponse {
  content: string
}



class AIClient extends GoogleGenAI {


  constructor(
    apiKey: string,
    project: string,
    location: string,
  ) {
    super({
      apiKey: apiKey,
      project: project,
      location: location,
    });
  }

  async sendMessage(
    message: string,
    history: ChatMessage[]
  ): Promise<SendMessageResponse> {
    const response = await this.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
    });


    return {
      content: response.text || "Ops не могу ответить"
    }
  }
}

export const aiClient = new AIClient(
  import.meta.env.VITE_GOOGLE_API_KEY,
  import.meta.env.VITE_GOOGLE_PROJECT_ID,
  import.meta.env.VITE_GOOGLE_LOCATION,
);

