"use client"

import { Calendar } from "@/components/ui/calendar"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Mail, Send, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useUser } from "@clerk/nextjs"

export default function NewsletterPage() {
  const { toast } = useToast()
  const { user, isLoaded } = useUser()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  // Mock data for past newsletters
  const pastNewsletters = [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      date: "October 2024",
      description: "Learn about the latest features in Next.js 15 and how to upgrade your projects.",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Building Accessible UIs with React",
      date: "September 2024",
      description: "Best practices for creating accessible user interfaces in React applications.",
      readTime: "7 min read",
    },
    {
      id: "3",
      title: "The Future of Web Development",
      date: "August 2024",
      description: "Exploring upcoming trends and technologies that will shape web development.",
      readTime: "6 min read",
    },
    {
      id: "4",
      title: "Optimizing Performance in React Applications",
      date: "July 2024",
      description: "Tips and tricks to improve the performance of your React applications.",
      readTime: "8 min read",
    },
  ]

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
    } catch {
      toast({
        title: "Subscription failed",
        description: "There was an error subscribing to the newsletter.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Pre-fill email if user is logged in
  if (isLoaded && user && user.primaryEmailAddress && email === "") {
    setEmail(user.primaryEmailAddress.emailAddress)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Developer Newsletter</h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest tutorials, coding tips, and industry news.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Subscribe?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Exclusive Tutorials</h3>
                    <p className="text-muted-foreground">
                      Get access to tutorials and guides not available on our public platform.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Early Access</h3>
                    <p className="text-muted-foreground">
                      Be the first to know about new courses and workshops before they&apos;re released.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Industry Insights</h3>
                    <p className="text-muted-foreground">
                      Stay informed about the latest trends and technologies in web development.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Special Offers</h3>
                    <p className="text-muted-foreground">
                      Receive exclusive discounts on premium courses and workshops.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Subscribe to Our Newsletter</CardTitle>
                  <CardDescription>Join thousands of developers receiving our weekly newsletter.</CardDescription>
                </CardHeader>
                <CardContent>
                  {subscribed ? (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <div className="bg-primary/10 rounded-full p-3 mb-4">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Thank you for subscribing!</h3>
                      <p className="text-muted-foreground mb-4">You&apos;ll start receiving our newsletter at {email}</p>
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
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
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
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">What Our Subscribers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground mb-4">
                  &apos;The newsletter has been incredibly helpful for staying up-to-date with the latest web development
                    trends. The tutorials are concise and practical.&apos;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                      JD
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">Frontend Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground mb-4">
                  &apos;I&apos;ve learned so much from the exclusive tutorials. The early access to new courses has been a game
                    changer for my learning journey.&apos;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                      AS
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Alice Smith</p>
                      <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground mb-4">
                  &apos;The industry insights have helped me make better technology choices for my projects. Highly
                    recommend subscribing!&apos;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                      RJ
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Robert Johnson</p>
                      <p className="text-sm text-muted-foreground">Senior Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Past Newsletters</h2>
            <Tabs defaultValue="featured" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
              <TabsContent value="featured" className="space-y-4">
                {pastNewsletters.slice(0, 3).map((newsletter) => (
                  <Card key={newsletter.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 flex-1">
                        <CardTitle className="mb-2">{newsletter.title}</CardTitle>
                        <CardDescription className="mb-4">{newsletter.description}</CardDescription>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="mr-4">{newsletter.readTime}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{newsletter.date}</span>
                        </div>
                      </div>
                      <div className="bg-muted p-6 flex flex-col justify-center items-center md:w-48">
                        <Button variant="secondary" className="w-full">
                          Read Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="recent" className="space-y-4">
                {pastNewsletters.map((newsletter) => (
                  <Card key={newsletter.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 flex-1">
                        <CardTitle className="mb-2">{newsletter.title}</CardTitle>
                        <CardDescription className="mb-4">{newsletter.description}</CardDescription>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="mr-4">{newsletter.readTime}</span>
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{newsletter.date}</span>
                        </div>
                      </div>
                      <div className="bg-muted p-6 flex flex-col justify-center items-center md:w-48">
                        <Button variant="secondary" className="w-full">
                          Read Now
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="popular" className="space-y-4">
                {[...pastNewsletters]
                  .sort(() => 0.5 - Math.random())
                  .map((newsletter) => (
                    <Card key={newsletter.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="p-6 flex-1">
                          <CardTitle className="mb-2">{newsletter.title}</CardTitle>
                          <CardDescription className="mb-4">{newsletter.description}</CardDescription>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            <span className="mr-4">{newsletter.readTime}</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{newsletter.date}</span>
                          </div>
                        </div>
                        <div className="bg-muted p-6 flex flex-col justify-center items-center md:w-48">
                          <Button variant="secondary" className="w-full">
                            Read Now
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16 bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and become part of a thriving community of developers learning and growing
              together.
            </p>
            {!subscribed ? (
              <Button size="lg" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </Button>
            ) : (
              <div className="flex items-center justify-center text-primary">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>You&apos;re subscribed!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

