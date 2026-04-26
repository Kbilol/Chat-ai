import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./app/index.css"

import { ThemeProvider } from "@/shared/providers/theme-provider.tsx"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/Home.page";
import { ChatPage } from "./pages/Chat.page";




let router = createBrowserRouter([
  {
    path: "/",
    Component:HomePage,
  },
  {
    path:"/chat",
    Component:ChatPage,
    
  },
  

]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    
    </ThemeProvider>
  </StrictMode>
)
