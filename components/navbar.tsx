"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { CircleUser, Menu, LogOut } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { useUser, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isLoaded } = useUser()

  const navItems = [
    { label: "Browse", href: "/" },
    { label: "Workshops", href: "/workshops" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Leaderboard", href: "/leaderboard" },
  ]

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
            <span className="text-lg font-bold">L<sup>2</sup></span>
            </div>
            <div>
              <h1 className="font-bold text-xl">Lupleg Labs</h1>
              <p className="text-xs text-muted-foreground">Build something great!</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <SignedIn>
            <div className="hidden md:block">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  },
                }}
              />
            </div>
          </SignedIn>

          <SignedOut>
            <div className="hidden md:flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/sign-in">
                  <CircleUser className="mr-2 h-4 w-4" />
                  Sign In
                </Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </div>
          </SignedOut>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <SignedIn>
                  <div className="flex items-center gap-2 mt-4">
                    <UserButton afterSignOutUrl="/" />
                    <span className="font-medium">{user?.fullName || user?.username}</span>
                  </div>
                  <Link href="/dashboard" className="text-lg font-medium hover:text-primary transition-colors">
                    Dashboard
                  </Link>
                  <Button variant="outline" className="mt-2" onClick={() => (window.location.href = "/sign-out")}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </SignedIn>

                <SignedOut>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button asChild>
                      <Link href="/sign-in">
                        <CircleUser className="mr-2 h-4 w-4" />
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/sign-up">Sign Up</Link>
                    </Button>
                  </div>
                </SignedOut>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

