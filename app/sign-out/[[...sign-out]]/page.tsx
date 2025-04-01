import { SignOutButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function SignOutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-3xl font-bold mb-4">Sign Out</h1>
        <p className="text-muted-foreground mb-8 text-center">Are you sure you want to sign out of your account?</p>
        <div className="flex gap-4">
          <Button variant="outline" asChild>
            <Link href="/">Cancel</Link>
          </Button>
          <SignOutButton>
            <Button>Sign Out</Button>
          </SignOutButton>
        </div>
      </div>
    </div>
  )
}

