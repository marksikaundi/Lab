"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseCard } from "@/components/course-card"
import { Navbar } from "@/components/navbar"
import { Search } from "lucide-react"
import { SignedIn } from "@clerk/nextjs"
import Link from "next/link"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredCourses, setFilteredCourses] = useState<typeof courses>([])

  // Mock data for courses
  const courses = useMemo(
    () => [
      {
        id: "1",
        title: "Build a YouTube Clone",
        image: "/placeholder.svg?height=400&width=600",
        year: "2025",
        chapters: 39,
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        featured: true,
      },
      {
        id: "2",
        title: "Build a Google Docs Clone",
        image: "/placeholder.svg?height=400&width=600",
        year: "2024",
        chapters: 33,
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        featured: true,
      },
      {
        id: "3",
        title: "Build a Jira Clone",
        image: "/placeholder.svg?height=400&width=600",
        year: "2024",
        chapters: 41,
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        featured: true,
      },
      {
        id: "4",
        title: "Build a Slack Clone",
        image: "/placeholder.svg?height=400&width=600",
        year: "2024",
        chapters: 42,
        technologies: ["Next.js", "TypeScript", "React"],
        featured: false,
      },
      {
        id: "5",
        title: "Build a Canva Clone",
        image: "/placeholder.svg?height=400&width=600",
        year: "2024",
        chapters: 52,
        technologies: ["Next.js", "TypeScript", "Canvas API"],
        featured: false,
      },
      {
        id: "6",
        title: "Build a Finance Platform",
        image: "/placeholder.svg?height=400&width=600",
        year: "2024",
        chapters: 31,
        technologies: ["React.js", "TypeScript", "Node.js"],
        featured: false,
      },
    ],
    []
  )

  // Filter categories
  const categories = ["All", "Next.js", "React.js", "MySQL", "MongoDB", "Prisma", "Tailwind", "Node.js", "Supabase"]

  // Filter courses based on search query and selected category
  useEffect(() => {
    let result = [...courses]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.technologies.some((tech: string) => tech.toLowerCase().includes(query)),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((course) => course.technologies.some((tech: string) => tech === selectedCategory))
    }

    setFilteredCourses(result)
  }, [searchQuery, selectedCategory, courses])

  // Handle search submission
  const handleSearch = () => {
    // The filtering is already handled by the useEffect
    console.log("Searching for:", searchQuery)
  }

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <SignedIn>
        <div className="bg-primary/10 p-4 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Continue learning where you left off or explore new courses.</p>
          <div className="mt-4">
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </SignedIn>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for a course"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <Button variant="default" onClick={handleSearch}>
            Search
          </Button>
        </div>

        <Tabs defaultValue="All" className="mb-8" value={selectedCategory} onValueChange={setSelectedCategory}>
          <TabsList className="overflow-x-auto flex w-full h-auto py-2 bg-transparent justify-start">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="px-4 py-2 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

