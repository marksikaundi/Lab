"use client"
import Image from "next/image"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Clock, Settings, Star, BookMarked, Calendar } from "lucide-react"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"

export default function Dashboard() {
  const { user, isLoaded } = useUser()
  const [activeTab, setActiveTab] = useState("courses")

  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: "1",
      title: "Build a YouTube Clone",
      progress: 45,
      lastAccessed: "2 days ago",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "2",
      title: "Build a Google Docs Clone",
      progress: 20,
      lastAccessed: "1 week ago",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  // Mock data for upcoming workshops
  const upcomingWorkshops = [
    {
      id: "1",
      title: "Building Real-time Applications with WebSockets",
      date: "April 15, 2025",
      time: "10:00 AM",
      instructor: "Sarah Johnson",
    },
  ]

  // Mock data for saved courses
  const savedCourses = [
    {
      id: "3",
      title: "Build a Jira Clone",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "4",
      title: "Build a Slack Clone",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user?.imageUrl} alt={user?.fullName || ""} />
              <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{user?.fullName || user?.username}</h1>
              <p className="text-muted-foreground">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/user-profile">
              <Settings className="mr-2 h-4 w-4" />
              Account Settings
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="courses" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="workshops">My Workshops</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-4">
            <h2 className="text-2xl font-bold">Enrolled Courses</h2>
            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Link href={`/courses/${course.id}`} key={course.id}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative aspect-video">
                        
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="text-white font-semibold">{course.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-sm text-muted-foreground">{course.lastAccessed}</span>
                          </div>
                          <span className="text-sm font-medium">{course.progress}% complete</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="outline" className="w-full">
                          Continue Learning
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    You haven&apos;t enrolled in any courses yet. Browse our catalog to find courses that interest you.
                  </p>
                  <Button asChild>
                    <Link href="/">Browse Courses</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="workshops" className="space-y-4">
            <h2 className="text-2xl font-bold">Upcoming Workshops</h2>
            {upcomingWorkshops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingWorkshops.map((workshop) => (
                  <Card key={workshop.id}>
                    <CardHeader>
                      <CardTitle>{workshop.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>
                            {workshop.date} at {workshop.time}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Instructor: {workshop.instructor}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" asChild>
                        <Link href={`/workshops/${workshop.id}`}>View Details</Link>
                      </Button>
                      <Button>Join Workshop</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No upcoming workshops</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    You haven&apos;t registered for any workshops yet. Browse our workshops to find events that interest you.
                  </p>
                  <Button asChild>
                    <Link href="/workshops">Browse Workshops</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <h2 className="text-2xl font-bold">Saved Courses</h2>
            {savedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedCourses.map((course) => (
                  <Link href={`/courses/${course.id}`} key={course.id}>
                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative aspect-video">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="w-full h-full object-cover"
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                          <h3 className="text-white font-semibold">{course.title}</h3>
                        </div>
                      </div>
                      <CardFooter className="p-4">
                        <Button className="w-full">Enroll Now</Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <BookMarked className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No saved courses</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    You haven&apos;t saved any courses yet. Browse our catalog and save courses for later.
                  </p>
                  <Button asChild>
                    <Link href="/">Browse Courses</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="certificates" className="space-y-4">
            <h2 className="text-2xl font-bold">My Certificates</h2>
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Star className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No certificates yet</h3>
                <p className="text-muted-foreground text-center mb-4">
                  Complete courses to earn certificates that showcase your skills.
                </p>
                <Button asChild>
                  <Link href="/">Browse Courses</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

