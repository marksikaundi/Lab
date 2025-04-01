"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Calendar, Clock, Users, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { YouTubeEmbed, extractYouTubeVideoId } from "@/components/youtube-embed"
import Image from "next/image"
import Link from "next/link"

interface WorkshopPageProps {
  params: {
    workshopId: string
  }
}

export default function WorkshopPage({ params }: WorkshopPageProps) {
  const [isRegistering, setIsRegistering] = useState(false)

  // In a real app, you would fetch this data from an API
  const workshop = {
    id: params.workshopId,
    title: "Building Real-time Applications with WebSockets",
    description:
      "Learn how to build real-time applications using WebSockets and Next.js. We'll create a live chat application from scratch.",
    longDescription: `
      In this intensive workshop, you'll learn how to build real-time applications using WebSockets and Next.js. 
      
      We'll start by understanding the fundamentals of WebSockets and how they differ from traditional HTTP requests. Then, we'll dive into implementing WebSockets in a Next.js application.
      
      By the end of this workshop, you'll have built a fully functional live chat application with features like:
      
      - Real-time messaging
      - User presence indicators
      - Typing indicators
      - Message history
      - User authentication
      
      This workshop is perfect for developers who want to add real-time capabilities to their applications and take their skills to the next level.
    `,
    date: "2025-04-15",
    time: "10:00 AM",
    duration: "3 hours",
    instructor: {
      name: "Sarah Johnson",
      bio: "Sarah is a senior software engineer with over 8 years of experience building real-time applications. She has worked at companies like Slack and Discord, where she specialized in WebSocket implementations and real-time data synchronization.",
      image: "/placeholder.svg?height=200&width=200",
    },
    price: 49.99,
    level: "Intermediate",
    category: "Next.js",
    tags: ["WebSockets", "Real-time", "Next.js"],
    seats: {
      total: 50,
      booked: 32,
    },
    location: "Online (Zoom)",
    image: "/placeholder.svg?height=600&width=1200",
    previewVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    isLive: true,
    isFeatured: true,
    whatYouWillLearn: [
      "Understanding WebSocket fundamentals",
      "Setting up a WebSocket server with Node.js",
      "Integrating WebSockets with Next.js",
      "Building a real-time chat interface",
      "Handling connection states and errors",
      "Implementing user presence and typing indicators",
      "Optimizing WebSocket performance",
      "Deploying WebSocket applications",
    ],
    prerequisites: [
      "Basic knowledge of JavaScript and React",
      "Familiarity with Next.js",
      "Understanding of HTTP requests",
    ],
    agenda: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Introduction to WebSockets",
        description: "Understanding the differences between HTTP and WebSockets, and when to use each.",
      },
      {
        time: "10:30 AM - 11:15 AM",
        title: "Setting up a WebSocket Server",
        description: "Creating a basic WebSocket server using Node.js and the ws library.",
      },
      {
        time: "11:15 AM - 11:30 AM",
        title: "Break",
        description: "Short break for questions and refreshments.",
      },
      {
        time: "11:30 AM - 12:15 PM",
        title: "Integrating WebSockets with Next.js",
        description: "Connecting our Next.js frontend to the WebSocket server and handling events.",
      },
      {
        time: "12:15 PM - 1:00 PM",
        title: "Building the Chat Interface",
        description: "Creating a responsive and accessible chat interface with React and Tailwind CSS.",
      },
    ],
  }

  // Format date to display in a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Calculate seats remaining and percentage filled
  const seatsRemaining = workshop.seats.total - workshop.seats.booked
  const percentageFilled = (workshop.seats.booked / workshop.seats.total) * 100

  // Determine if the workshop is almost full (less than 20% seats remaining)
  const isAlmostFull = percentageFilled >= 80

  const handleRegister = () => {
    setIsRegistering(true)

    // Simulate API call
    setTimeout(() => {
      setIsRegistering(false)
      alert("Registration successful! You will receive a confirmation email shortly.")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/workshops"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to workshops
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {workshop.isLive && (
                  <Badge variant="destructive" className="font-medium flex items-center">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    LIVE
                  </Badge>
                )}
                <Badge variant="secondary" className="font-medium">
                  {workshop.level}
                </Badge>
                <Badge variant="outline" className="font-medium">
                  {workshop.category}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4">{workshop.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>{formatDate(workshop.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>
                    {workshop.time} ({workshop.duration})
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>{workshop.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span>{seatsRemaining} seats remaining</span>
                </div>
              </div>
            </div>

            {workshop.previewVideo && extractYouTubeVideoId(workshop.previewVideo) && (
              <div className="mb-8">
                <YouTubeEmbed
                  videoId={extractYouTubeVideoId(workshop.previewVideo)!}
                  title={workshop.title}
                  showInfo={false}
                  showRelated={false}
                />
              </div>
            )}

            <Tabs defaultValue="overview" className="mb-8">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="agenda">Agenda</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">About this workshop</h3>
                  <div className="text-muted-foreground whitespace-pre-line">{workshop.longDescription}</div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">What you&apos;ll learn</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {workshop.whatYouWillLearn.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Prerequisites</h3>
                  <ul className="space-y-2">
                    {workshop.prerequisites.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="agenda" className="mt-4">
                <h3 className="text-xl font-semibold mb-4">Workshop Agenda</h3>
                <div className="space-y-4">
                  {workshop.agenda.map((item, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                      <h4 className="font-medium">{item.time}</h4>
                      <h5 className="font-semibold mt-1">{item.title}</h5>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-4">
                <h3 className="text-xl font-semibold mb-4">Meet Your Instructor</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src={workshop.instructor.image || "/placeholder.svg"}
                      alt={workshop.instructor.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{workshop.instructor.name}</h4>
                    <p className="text-muted-foreground mt-2">{workshop.instructor.bio}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardHeader>
                  <CardTitle>Workshop Details</CardTitle>
                  <CardDescription>Secure your spot today</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                      {typeof workshop.price === "number" ? `$${workshop.price}` : workshop.price}
                    </span>
                    <Badge variant={isAlmostFull ? "destructive" : "outline"}>
                      {isAlmostFull ? "Almost Full" : `${seatsRemaining} seats left`}
                    </Badge>
                  </div>

                  {/* Seats progress bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${isAlmostFull ? "bg-red-500" : "bg-primary"}`}
                      style={{ width: `${percentageFilled}%` }}
                    ></div>
                  </div>

                  <div className="pt-2">
                    <h4 className="font-medium mb-2">Workshop includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>Live interactive session</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>Workshop materials and code samples</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>30-day access to recording</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" onClick={handleRegister} disabled={isRegistering}>
                    {isRegistering ? "Processing..." : "Register Now"}
                  </Button>
                </CardFooter>
              </Card>

              <div className="mt-6 flex flex-col gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Date and Time</h4>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(workshop.date)} at {workshop.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">{workshop.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-wrap gap-2">
                  {workshop.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

