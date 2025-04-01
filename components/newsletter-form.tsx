"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface NewsletterFormProps {
  className?: string
  variant?: "default" | "compact"
  title?: string
  description?: string
  defaultEmail?: string
  onSuccess?: () => void
}

export function NewsletterForm({
  className,
  variant = "default",
  title = "Subscribe to our newsletter",
  description = "Get the latest updates and news delivered to your inbox.",
  defaultEmail = "",
  onSuccess,
}: NewsletterFormProps) {
  const { toast } = useToast()
  const [email, setEmail] = useState(defaultEmail)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, you would send this to your API
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Subscription successful!",
        description: "You've been added to our newsletter.",
      })

      setSubscribed(true)
      onSuccess?.()
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "compact") {
    return (
      <div className={className}>
        {subscribed ? (
          <div className="flex items-center text-primary">
            <Mail className="h-5 w-5 mr-2" />
            <span>Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="max-w-xs"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </div>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {subscribed ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="bg-primary/10 rounded-full p-3 mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
            <p className="text-muted-foreground mb-4">You'll start receiving our newsletter at {email}</p>
            <Button variant="outline" onClick={() => setSubscribed(false)}>
              Subscribe another email
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-start space-x-2">
              <input type="checkbox" id="consent" className="mt-1" required />
              <label htmlFor="consent" className="text-sm text-muted-foreground">
                I agree to receive the newsletter and understand I can unsubscribe at any time.
              </label>
            </div>
          </form>
        )}
      </CardContent>
      {!subscribed && (
        <CardFooter>
          <Button type="submit" className="w-full" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Subscribing...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                Subscribe
              </span>
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

