// src/app/App.tsx

import { ChatWidget } from "@/widgets/chat/ui/chat-widgets";


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <ChatWidget />
    </div>
  );
}

export default App;
