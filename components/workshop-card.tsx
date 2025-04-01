import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

interface WorkshopCardProps {
  workshop: Workshop
}

export function WorkshopCard({ workshop }: WorkshopCardProps) {
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

  return (
    <Link href={`/workshops/${workshop.id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
        <div className="relative">
          {workshop.isLive && (
            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center">
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              LIVE
            </div>
          )}
          <Image
            src={workshop.image || "/placeholder.svg"}
            alt={workshop.title}
            width={600}
            height={400}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">{workshop.title}</h3>
            <div className="flex items-center text-white text-sm mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(workshop.date)} • {workshop.time}
            </div>
          </div>
        </div>
        <CardContent className="p-4 flex-grow">
          <div className="flex items-center justify-between mb-3">
            <Badge variant={workshop.price === "Free" ? "outline" : "default"} className="font-medium">
              {workshop.price === "Free" ? "Free" : `$${workshop.price}`}
            </Badge>
            <Badge variant="secondary" className="font-medium">
              {workshop.level}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{workshop.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {workshop.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-muted-foreground">{workshop.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-muted-foreground">{seatsRemaining} seats left</span>
            </div>
          </div>
          {/* Seats progress bar */}
          <div className="w-full bg-muted rounded-full h-1.5 mt-3">
            <div
              className={`h-1.5 rounded-full ${isAlmostFull ? "bg-red-500" : "bg-primary"}`}
              style={{ width: `${percentageFilled}%` }}
            ></div>
          </div>
        </CardContent>
        <CardFooter className="p-4 border-t">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                {workshop.instructor
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <span className="ml-2 text-sm font-medium">{workshop.instructor}</span>
            </div>
            <Button size="sm">Register</Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

