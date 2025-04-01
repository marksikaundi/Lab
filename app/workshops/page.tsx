"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { WorkshopCard } from "@/components/workshop-card"

// Workshop type definition
interface Workshop {
  id: string
  title: string
  description: string
  date: string
  time: string
  duration: string
  instructor: string
  price: number | "Free"
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels"
  category: string
  tags: string[]
  seats: {
    total: number
    booked: number
  }
  image: string
  isLive: boolean
  isFeatured: boolean
}

export default function WorkshopsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")
  const [sortBy, setSortBy] = useState("date-asc")
  const [filteredWorkshops, setFilteredWorkshops] = useState<Workshop[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Mock data for workshops
  const workshops: Workshop[] = [
    {
      id: "1",
      title: "Building Real-time Applications with WebSockets",
      description:
        "Learn how to build real-time applications using WebSockets and Next.js. We'll create a live chat application from scratch.",
      date: "2025-04-15",
      time: "10:00 AM",
      duration: "3 hours",
      instructor: "Sarah Johnson",
      price: 49.99,
      level: "Intermediate",
      category: "Next.js",
      tags: ["WebSockets", "Real-time", "Next.js"],
      seats: {
        total: 50,
        booked: 32,
      },
      image: "/placeholder.svg?height=400&width=600",
      isLive: true,
      isFeatured: true,
    },
    {
      id: "2",
      title: "Advanced State Management with Redux Toolkit",
      description: "Master advanced state management techniques using Redux Toolkit and TypeScript.",
      date: "2025-04-22",
      time: "2:00 PM",
      duration: "4 hours",
      instructor: "Michael Chen",
      price: 59.99,
      level: "Advanced",
      category: "React.js",
      tags: ["Redux", "State Management", "TypeScript"],
      seats: {
        total: 40,
        booked: 28,
      },
      image: "/placeholder.svg?height=400&width=600",
      isLive: true,
      isFeatured: true,
    },
    {
      id: "3",
      title: "Building a Serverless API with Next.js",
      description: "Learn how to build a serverless API using Next.js API routes and deploy it to Vercel.",
      date: "2025-05-05",
      time: "11:00 AM",
      duration: "2.5 hours",
      instructor: "Alex Rodriguez",
      price: 39.99,
      level: "Intermediate",
      category: "Next.js",
      tags: ["Serverless", "API", "Vercel"],
      seats: {
        total: 60,
        booked: 45,
      },
      image: "/placeholder.svg?height=400&width=600",
      isLive: false,
      isFeatured: true,
    },
    {
      id: "4",
      title: "Introduction to Tailwind CSS",
      description:
        "Get started with Tailwind CSS and learn how to build beautiful, responsive UIs without writing custom CSS.",
      date: "2025-05-10",
      time: "1:00 PM",
      duration: "2 hours",
      instructor: "Emily Parker",
      price: "Free",
      level: "Beginner",
      category: "Tailwind",
      tags: ["CSS", "UI Design", "Responsive"],
      seats: {
        total: 100,
        booked: 78,
      },
      image: "/placeholder.svg?height=400&width=600",
      isLive: false,
      isFeatured: false,
    },
    {
      id: "5",
      title: "Building a Full-Stack App with Next.js and Prisma",
      description: "Learn how to build a full-stack application using Next.js, Prisma, and PostgreSQL.",
      date: "2025-05-18",
      time: "10:00 AM",
      duration: "6 hours",
      instructor: "David Wilson",
      price: 79.99,
      level: "Advanced",
      category: "Next.js",
      tags: ["Prisma", "PostgreSQL", "Full-Stack"],
      seats: {
        total: 30,
        booked: 25,
      },
      image: "/placeholder.svg?height=400&width=600",
      isLive: false,
      isFeatured: true,
    },
    {
      id: "6",
      title: "Mastering React Hooks",
      description: "Deep dive into React Hooks and learn how to build custom hooks for your applications.",
      date: "2025-05-25",
      time: "3:00 PM",
      duration: "3 hours",
      instructor: "Sophia Lee",
      price: 49.99,
      level: "Intermediate",
      category: "React.js",
      tags: ["Hooks", "Custom Hooks", "Functional Components"],
      seats: {
        total: 45,
        booked: 20,
      },
      image: "/placeholder.svg?height=400&width=600",
      isLive: false,
      isFeatured: false,
    },
  ]

  // Extract unique categories and levels for filters
  const categories = ["All", ...Array.from(new Set(workshops.map((workshop) => workshop.category)))]
  const levels = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"]

  // Filter workshops based on search query, category, and level
  useEffect(() => {
    let result = [...workshops]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (workshop) =>
          workshop.title.toLowerCase().includes(query) ||
          workshop.description.toLowerCase().includes(query) ||
          workshop.instructor.toLowerCase().includes(query) ||
          workshop.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((workshop) => workshop.category === selectedCategory)
    }

    // Filter by level
    if (selectedLevel !== "All") {
      result = result.filter((workshop) => workshop.level === selectedLevel)
    }

    // Sort workshops
    result = sortWorkshops(result, sortBy)

    setFilteredWorkshops(result)
  }, [searchQuery, selectedCategory, selectedLevel, sortBy])

  // Sort workshops based on selected sort option
  const sortWorkshops = (workshops: Workshop[], sortOption: string) => {
    const sorted = [...workshops]

    switch (sortOption) {
      case "date-asc":
        return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      case "date-desc":
        return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      case "price-asc":
        return sorted.sort((a, b) => {
          if (a.price === "Free") return -1
          if (b.price === "Free") return 1
          return (a.price as number) - (b.price as number)
        })
      case "price-desc":
        return sorted.sort((a, b) => {
          if (a.price === "Free") return 1
          if (b.price === "Free") return -1
          return (b.price as number) - (a.price as number)
        })
      case "name-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title))
      case "name-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title))
      default:
        return sorted
    }
  }

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

  // Format date to display in a more readable format
  // Removed unused formatDate function to resolve the error

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-2 mb-8">
          <h1 className="text-3xl font-bold">Workshops</h1>
          <p className="text-muted-foreground">
            Join our live and on-demand workshops to learn new skills and advance your career.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search workshops"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <div className="flex items-center">
                  <ArrowUpDown className="mr-2 h-3.5 w-3.5" />
                  <span>Sort By</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-asc">Date (Earliest)</SelectItem>
                <SelectItem value="date-desc">Date (Latest)</SelectItem>
                <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="default" onClick={handleSearch} className="whitespace-nowrap">
              Search
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="mb-6 p-4 border rounded-lg bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Category</h3>
                <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                  <TabsList className="w-full overflow-x-auto flex justify-start h-auto py-2 bg-transparent">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="px-3 py-1.5 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Level</h3>
                <Tabs value={selectedLevel} onValueChange={setSelectedLevel} className="w-full">
                  <TabsList className="w-full overflow-x-auto flex justify-start h-auto py-2 bg-transparent">
                    {levels.map((level) => (
                      <TabsTrigger
                        key={level}
                        value={level}
                        className="px-3 py-1.5 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        {level}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
        )}

        {/* Featured Workshops */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops
              .filter((workshop) => workshop.isFeatured)
              .slice(0, 3)
              .map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
          </div>
        </div>

        {/* All Workshops */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Workshops</h2>
          {filteredWorkshops.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkshops.map((workshop) => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No workshops found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

