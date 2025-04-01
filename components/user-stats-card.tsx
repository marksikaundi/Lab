import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Medal, Award, Star, Calendar } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface User {
  id: string
  name: string
  username: string
  email: string
  avatar: string
  points: number
  streak: number
  lastActive: string
  joinedDate: string
  level: number
  badges: string[]
  completedCourses: number
  completedWorkshops: number
}

interface UserStatsCardProps {
  user: User
  rank: number
  isCurrentUser: boolean
  compact?: boolean
}

export function UserStatsCard({ user, rank, isCurrentUser, compact = false }: UserStatsCardProps) {
  // Get rank medal for top 3 users
  const getRankMedal = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />
    if (rank === 3) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="font-bold">{rank}</span>
  }

  // Get badge icon based on badge name
  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Streak Master":
        return <Award className="h-3 w-3 mr-1" />
      case "Top Contributor":
        return <Trophy className="h-3 w-3 mr-1" />
      case "Course Expert":
        return <Star className="h-3 w-3 mr-1" />
      case "Workshop Pro":
        return <Medal className="h-3 w-3 mr-1" />
      case "Community Leader":
        return <Trophy className="h-3 w-3 mr-1" fill="currentColor" />
      case "Early Adopter":
        return <Calendar className="h-3 w-3 mr-1" />
      default:
        return <Star className="h-3 w-3 mr-1" />
    }
  }

  // Get badge color based on badge name
  const getBadgeColor = (badge: string): "default" | "secondary" | "outline" => {
    switch (badge) {
      case "Streak Master":
      case "Top Contributor":
      case "Community Leader":
        return "default"
      case "Course Expert":
      case "Workshop Pro":
        return "secondary"
      default:
        return "outline"
    }
  }

  if (compact) {
    return (
      <Card className={`overflow-hidden ${isCurrentUser ? "border-primary border-2" : ""}`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -top-1 -right-1 bg-muted text-muted-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                {rank}
              </div>
            </div>
            <div>
              <div className="font-medium">
                {user.name} {isCurrentUser && "(You)"}
              </div>
              <div className="flex items-center text-sm">
                <Trophy className="h-3 w-3 text-primary mr-1" />
                <span>{user.points} pts</span>
                <span className="mx-1">•</span>
                <span>Lvl {user.level}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`overflow-hidden ${isCurrentUser ? "border-primary border-2" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center">
              {getRankMedal(rank)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">
                {user.name} {isCurrentUser && "(You)"}
              </h3>
              <Badge variant="outline">Level {user.level}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
            <div className="flex items-center mt-1">
              <Trophy className="h-4 w-4 text-primary mr-1" />
              <span className="font-semibold">{user.points} points</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap gap-1 mb-3">
            {user.badges.slice(0, 3).map((badge) => (
              <Badge key={badge} variant={getBadgeColor(badge)} className="flex items-center text-xs">
                {getBadgeIcon(badge)}
                {badge}
              </Badge>
            ))}
            {user.badges.length > 3 && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge variant="outline" className="flex items-center text-xs cursor-help">
                      +{user.badges.length - 3} more
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="space-y-1">
                      {user.badges.slice(3).map((badge) => (
                        <div key={badge} className="flex items-center">
                          {getBadgeIcon(badge)}
                          {badge}
                        </div>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="flex flex-col items-center p-2 bg-muted rounded-md">
              <span className="text-muted-foreground">Streak</span>
              <span className="font-semibold">{user.streak} days</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted rounded-md">
              <span className="text-muted-foreground">Courses</span>
              <span className="font-semibold">{user.completedCourses}</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-muted rounded-md">
              <span className="text-muted-foreground">Workshops</span>
              <span className="font-semibold">{user.completedWorkshops}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

