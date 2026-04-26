import { useState } from "react";
import { ChatWidget } from "@/widgets/chat/ui/chat-widgets";
import { MessageSquare, Plus, Trash2 } from "lucide-react";

type Chat = {
  id: number;
  title: string;
};

export function ChatPage () {
  const [chats, setChats] = useState<Chat[]>([
    { id: 1, title: "New Chat 1" },
    { id: 2, title: "New Chat 2" },
  ]);

  const [activeChat, setActiveChat] = useState<number>(1);

  function createChat() {
    const newChat = {
      id: Date.now(),
      title: `New Chat ${chats.length + 1}`,
    };
    setChats([newChat, ...chats]);
    setActiveChat(newChat.id);
  }

  function deleteChat(id: number) {
    setChats(chats.filter((chat) => chat.id !== id));
    if (activeChat === id && chats.length > 1) {
      setActiveChat(chats[0].id);
    }
  }

  return (
    <div className="flex h-screen bg-black text-white">
      
      {/* SIDEBAR */}
      <aside className=" bg-zinc-900 border-r border-zinc-800 flex flex-col">
        
        {/* HEADER */}
        <div className="p-4 border-b border-zinc-800">
          <button
            onClick={createChat}
            className="w-full flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg hover:bg-zinc-200 transition"
          >
            <Plus size={16} />
            New Chat
          </button>
        </div>

        {/* CHAT LIST */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer group ${
                activeChat === chat.id
                  ? "bg-zinc-800"
                  : "hover:bg-zinc-800/60"
              }`}
              onClick={() => setActiveChat(chat.id)}
            >
              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span className="text-sm">{chat.title}</span>
              </div>

              <Trash2
                size={14}
                className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteChat(chat.id);
                }}
              />
            </div>
          ))}
        </div>

      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col">
        
        {/* HEADER */}
        <div className="p-4 border-b border-zinc-800">
          <h1 className="text-lg font-semibold">Chat</h1>
        </div>

        {/* CHAT AREA */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl h-full bg-zinc-900 rounded-2xl shadow-lg overflow-hidden">
            <ChatWidget key={activeChat} />
          </div>
        </div>

      </main>
    </div>
  );
}