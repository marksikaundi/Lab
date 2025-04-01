import { Card, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Book } from "lucide-react"

interface CourseCardProps {
  course: {
    id: string
    title: string
    image: string
    year: string
    chapters: number
    technologies: string[]
    featured: boolean
  }
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative">
          <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-medium">
            {course.year}
          </div>
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            width={600}
            height={400}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
            <div className="flex flex-wrap gap-2">
              {course.technologies.map((tech) => (
                <span key={tech} className="bg-primary/80 text-primary-foreground text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <CardFooter className="p-4 flex items-center gap-2">
          <Book className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{course.chapters} Chapters</span>
        </CardFooter>
      </Card>
    </Link>
  )
}

