import { Routes, Route, Navigate } from "react-router-dom"

import { AuthForm } from "../../Shadcn-react/src/Auth/AuthForm"
import { BackgroundBeams } from "../../Shadcn-react/src/components/ui/background-beams"
import { Toaster } from "sonner"


function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <BackgroundBeams />

      <AuthForm />
      <Toaster/>

    </main>
  )
}

export default App
