"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, Book, Star, Users } from "lucide-react"
import Link from "next/link"
import { YouTubeEmbed, extractYouTubeVideoId } from "@/components/youtube-embed"
// Add imports for Clerk components
import { SignedIn, SignedOut } from "@clerk/nextjs"

interface CoursePageProps {
  params: {
    courseId: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const [activeChapter, setActiveChapter] = useState(0)

  // In a real app, this would fetch this data from an API
  const course = {
    id: params.courseId,
    title: "Build a YouTube Clone",
    description:
      "Learn how to build a full-featured YouTube clone using Next.js, TypeScript, and Tailwind CSS. This course covers everything from setting up the project to deploying it to production.",
    chapters: [
      {
        id: "1",
        title: "Introduction to the course",
        duration: "10:30",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example YouTube URL
      },
      {
        id: "2",
        title: "Setting up the project",
        duration: "15:45",
        videoUrl: "https://www.youtube.com/watch?v=KYFwcIRx16g",
      },
      {
        id: "3",
        title: "Building the homepage",
        duration: "20:15",
        videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      },
      {
        id: "4",
        title: "Implementing authentication",
        duration: "25:30",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
      {
        id: "5",
        title: "Creating the video player",
        duration: "18:20",
        videoUrl: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
      },
    ],
    instructor: "John Doe",
    rating: 4.8,
    students: 1234,
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  }

  const handleChapterClick = (index: number) => {
    setActiveChapter(index)
    // Scroll to the video player
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Add the handleEnroll function
  const handleEnroll = () => {
    // In a real app, this would make an API call to enroll the user
    alert("You have successfully enrolled in this course!")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 text-sm">{course.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="ml-1 text-sm">{course.students} students</span>
              </div>
              <div className="flex items-center">
                <Book className="h-4 w-4 text-muted-foreground" />
                <span className="ml-1 text-sm">{course.chapters.length} chapters</span>
              </div>
            </div>

            <div className="mb-8">
              {course.chapters[activeChapter] && extractYouTubeVideoId(course.chapters[activeChapter].videoUrl) && (
                <YouTubeEmbed
                  videoId={extractYouTubeVideoId(course.chapters[activeChapter].videoUrl)!}
                  title={course.chapters[activeChapter].title}
                  showInfo={false}
                  showRelated={false}
                />
              )}
              <h2 className="text-xl font-semibold mt-4">
                {activeChapter + 1}. {course.chapters[activeChapter]?.title}
              </h2>
            </div>

            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <h3 className="text-xl font-semibold mb-2">About this course</h3>
                <p className="text-muted-foreground">{course.description}</p>
                <h3 className="text-xl font-semibold mt-6 mb-2">What you&apos;ll learn</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>How to set up a Next.js project with TypeScript</li>
                  <li>Building responsive UI with Tailwind CSS</li>
                  <li>Implementing authentication and authorization</li>
                  <li>Creating a video player with advanced features</li>
                  <li>Deploying your application to production</li>
                </ul>
              </TabsContent>
              <TabsContent value="curriculum" className="mt-4">
                <h3 className="text-xl font-semibold mb-4">Course content</h3>
                <div className="space-y-3">
                  {course.chapters.map((chapter, index) => (
                    <div
                      key={chapter.id}
                      className={`flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${
                        index === activeChapter ? "bg-muted border-primary" : ""
                      }`}
                      onClick={() => handleChapterClick(index)}
                    >
                      <div className="flex items-center">
                        <span className="font-medium mr-2">{index + 1}.</span>
                        <span>{chapter.title}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{chapter.duration}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="instructor" className="mt-4">
                <h3 className="text-xl font-semibold mb-4">Meet your instructor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-xl font-bold">
                    {course.instructor
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{course.instructor}</h4>
                    <p className="text-sm text-muted-foreground">Professional Developer & Instructor</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Experienced developer with a passion for teaching. Has worked with various technologies and
                  frameworks, specializing in React and Next.js development.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Course technologies</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {course.technologies.map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <SignedIn>
                <Button className="w-full mb-3" onClick={() => handleEnroll()}>
                  Enroll in Course
                </Button>
              </SignedIn>
              <SignedOut>
                <Button className="w-full mb-3" asChild>
                  <Link href={`/sign-in?redirect_url=${encodeURIComponent(window.location.pathname)}`}>
                    Sign in to Enroll
                  </Link>
                </Button>
              </SignedOut>
              <Button variant="outline" className="w-full">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

