/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server"

// In a real app, you would use a database
// This is just a mock implementation
const courses = [
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
]

export async function GET(request: Request) {
  // In a real app, you would fetch from a database
  return NextResponse.json({ courses })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.title || !data.videoUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, you would save to a database
    const newCourse = {
      id: (courses.length + 1).toString(),
      title: data.title,
      image: data.thumbnailUrl || "/placeholder.svg?height=400&width=600",
      year: new Date().getFullYear().toString(),
      chapters: data.chapters?.length || 1,
      technologies: data.technologies || ["Next.js"],
      featured: false,
    }

    courses.push(newCourse)

    return NextResponse.json({ course: newCourse })
  } catch (error) {
    console.error("Error creating course:", error)
    return NextResponse.json({ error: "Error creating course" }, { status: 500 })
  }
}

