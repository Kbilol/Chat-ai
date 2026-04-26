import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { NavLink } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      
      <nav className="border-b">
        <div className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold">Logo</h1>

          <div className="flex gap-6">
            <a className="hover:text-primary cursor-pointer">Home</a>
            <a className="hover:text-primary cursor-pointer">Features</a>
            <a className="hover:text-primary cursor-pointer">Pricing</a>
            <a className="hover:text-primary cursor-pointer">Contact</a>
          </div>

          <NavLink to="/" className="rounded-md">Login</NavLink>
        </div>
      </nav>

      
      <section className="container mx-auto py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Build Modern Apps Faster
        </h1>

        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Create powerful web applications with React, Tailwind and Shadcn UI.
          Beautiful components and scalable architecture.
        </p>

        <div className="flex justify-center gap-4">
          <NavLink to="/chat" className="rounded-md">Get started</NavLink>
          <NavLink to="/loginform" className="rounded-md">Login</NavLink>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Card>
            <CardHeader>
              <CardTitle>Fast</CardTitle>
              <CardDescription>
                Optimized performance and modern stack.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Build lightning fast applications with React and Vite.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scalable</CardTitle>
              <CardDescription>
                Clean architecture for large apps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Easily scale your project structure as it grows.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Beautiful UI</CardTitle>
              <CardDescription>
                Ready-to-use modern components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Shadcn UI gives you powerful and customizable UI blocks.
            </CardContent>
          </Card>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted py-20">
        <div className="container mx-auto grid md:grid-cols-3 text-center gap-8">

          <div>
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="text-muted-foreground">Users</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-muted-foreground">Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">99%</h3>
            <p className="text-muted-foreground">Satisfaction</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to build something amazing?
        </h2>

        <p className="text-muted-foreground mb-8">
          Start your project today with our modern stack.
        </p>

        <Button size="lg">
          Start Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="container mx-auto flex justify-between text-sm text-muted-foreground">
          <p>© 2026 MyApp</p>

          <div className="flex gap-4">
            <a className="hover:text-primary">Privacy</a>
            <a className="hover:text-primary">Terms</a>
            <a className="hover:text-primary">Support</a>
          </div>
        </div>
      </footer>

    </div>
  )
}