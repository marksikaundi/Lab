"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Trophy,
  Medal,
  Award,
  Star,
  Calendar,
  ArrowUpDown,
  Info,
  Loader2,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Define user type
interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  points: number;
  streak: number;
  lastActive: string;
  joinedDate: string;
  level: number;
  badges: string[];
  completedCourses: number;
  completedWorkshops: number;
}

export default function LeaderboardPage() {
  const { user: currentUser, isLoaded } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [timeframe, setTimeframe] = useState("all-time");
  const [sortBy, setSortBy] = useState("points");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");
  const [isLoading, setIsLoading] = useState(true);

  // Initialize with empty array instead of hard-coded users
  const [users, setUsers] = useState<User[]>([]);

  // Fetch users from API or database
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        // Replace this with your actual API call to fetch users
        // const response = await fetch('/api/users/leaderboard');
        // const data = await response.json();
        // setUsers(data);

        // For now, simulate API delay and set empty array
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUsers([]);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Add current user to the list if they're logged in
  useEffect(() => {
    if (isLoaded && currentUser) {
      const userExists = users.some(
        (u) => u.email === currentUser.primaryEmailAddress?.emailAddress
      );

      if (!userExists) {
        // Add current user with default values
        // In a real app, you would typically fetch the user's data from your backend
        setUsers((prevUsers) => [
          ...prevUsers,
          {
            id: currentUser.id,
            name: currentUser.fullName || currentUser.username || "You",
            username: currentUser.username || "you",
            email: currentUser.primaryEmailAddress?.emailAddress || "",
            avatar:
              currentUser.imageUrl || "/placeholder.svg?height=100&width=100",
            points: 0, // Default points for new users
            streak: 0,
            lastActive: "Just now",
            joinedDate: new Date().toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            }),
            level: 1,
            badges: ["New Member"],
            completedCourses: 0,
            completedWorkshops: 0,
          },
        ]);
      }
    }
  }, [isLoaded, currentUser, users]);

  // Filter and sort users
  useEffect(() => {
    let result = [...users];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.username.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
    }

    // Sort users
    result = sortUsers(result, sortBy);

    setFilteredUsers(result);
  }, [searchQuery, sortBy, timeframe, users]);

  // Sort users based on selected sort option
  const sortUsers = (users: User[], sortOption: string) => {
    const sorted = [...users];

    switch (sortOption) {
      case "points":
        return sorted.sort((a, b) => b.points - a.points);
      case "streak":
        return sorted.sort((a, b) => b.streak - a.streak);
      case "level":
        return sorted.sort((a, b) => b.level - a.level);
      case "courses":
        return sorted.sort((a, b) => b.completedCourses - a.completedCourses);
      case "workshops":
        return sorted.sort(
          (a, b) => b.completedWorkshops - a.completedWorkshops
        );
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  };

  // Get badge icon based on badge name
  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case "Streak Master":
        return <Award className="h-3 w-3 mr-1" />;
      case "Top Contributor":
        return <Trophy className="h-3 w-3 mr-1" />;
      case "Course Expert":
        return <Star className="h-3 w-3 mr-1" />;
      case "Workshop Pro":
        return <Medal className="h-3 w-3 mr-1" />;
      case "Community Leader":
        return <Trophy className="h-3 w-3 mr-1" fill="currentColor" />;
      case "Early Adopter":
        return <Calendar className="h-3 w-3 mr-1" />;
      default:
        return <Star className="h-3 w-3 mr-1" />;
    }
  };

  // Get badge color based on badge name
  const getBadgeColor = (
    badge: string
  ): "default" | "secondary" | "outline" => {
    switch (badge) {
      case "Streak Master":
      case "Top Contributor":
      case "Community Leader":
        return "default";
      case "Course Expert":
      case "Workshop Pro":
        return "secondary";
      default:
        return "outline";
    }
  };

  // Check if a user is the current logged-in user
  const isCurrentUser = (user: User) => {
    if (!isLoaded || !currentUser) return false;
    return user.email === currentUser.primaryEmailAddress?.emailAddress;
  };

  // Get rank medal for top 3 users
  const getRankMedal = (index: number) => {
    if (index === 0) return <Trophy className="h-5 w-5 text-yellow-500" />;
    if (index === 1) return <Medal className="h-5 w-5 text-gray-400" />;
    if (index === 2) return <Medal className="h-5 w-5 text-amber-700" />;
    return <span className="font-bold">{index + 1}</span>;
  };

  // Loading state UI
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-3xl font-bold">Leaderboard</h1>
            <p className="text-muted-foreground">
              See how you rank among other learners on the platform.
            </p>
          </div>
          <div className="flex items-center justify-center h-[50vh]">
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">
                Loading leaderboard data...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (users.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-3xl font-bold">Leaderboard</h1>
            <p className="text-muted-foreground">
              See how you rank among other learners on the platform.
            </p>
          </div>
          <div className="flex items-center justify-center h-[50vh]">
            <div className="text-center max-w-md">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">No users yet!</h2>
              <p className="text-muted-foreground mb-4">
                Be the first to join the leaderboard by completing courses and
                earning points.
              </p>
              <Button>Start Learning</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-2 mb-8">
          <h1 className="text-3xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">
            See how you rank among other learners on the platform.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search users"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All Time</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <div className="flex items-center">
                  <ArrowUpDown className="mr-2 h-3.5 w-3.5" />
                  <span>Sort By</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="points">Points</SelectItem>
                <SelectItem value="streak">Streak</SelectItem>
                <SelectItem value="level">Level</SelectItem>
                <SelectItem value="courses">Completed Courses</SelectItem>
                <SelectItem value="workshops">Completed Workshops</SelectItem>
                <SelectItem value="name">Name (A-Z)</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex border rounded-md overflow-hidden">
              <Button
                variant={viewMode === "table" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("table")}
                className="rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M3 15h18" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                </svg>
              </Button>
              <Button
                variant={viewMode === "cards" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("cards")}
                className="rounded-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* User stats cards for top 3 */}
        {filteredUsers.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {filteredUsers.slice(0, 3).map((user, index) => (
              <Card
                key={user.id}
                className={`overflow-hidden ${
                  isCurrentUser(user) ? "border-primary border-2" : ""
                }`}
              >
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
                        {getRankMedal(index)}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">
                          {user.name} {isCurrentUser(user) && "(You)"}
                        </h3>
                        <Badge variant="outline">Level {user.level}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        @{user.username}
                      </p>
                      <div className="flex items-center mt-1">
                        <Trophy className="h-4 w-4 text-primary mr-1" />
                        <span className="font-semibold">
                          {user.points} points
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {user.badges.slice(0, 3).map((badge) => (
                        <Badge
                          key={badge}
                          variant={getBadgeColor(badge)}
                          className="flex items-center text-xs"
                        >
                          {getBadgeIcon(badge)}
                          {badge}
                        </Badge>
                      ))}
                      {user.badges.length > 3 && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge
                                variant="outline"
                                className="flex items-center text-xs cursor-help"
                              >
                                +{user.badges.length - 3} more
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="space-y-1">
                                {user.badges.slice(3).map((badge) => (
                                  <div
                                    key={badge}
                                    className="flex items-center"
                                  >
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
                        <span className="font-semibold">
                          {user.streak} days
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground">Courses</span>
                        <span className="font-semibold">
                          {user.completedCourses}
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground">Workshops</span>
                        <span className="font-semibold">
                          {user.completedWorkshops}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Table view for all users */}
        {viewMode === "table" ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">Rank</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead className="text-center">Level</TableHead>
                  <TableHead className="text-center">Points</TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Streak
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Courses
                  </TableHead>
                  <TableHead className="hidden md:table-cell text-center">
                    Workshops
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Badges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user, index) => (
                  <TableRow
                    key={user.id}
                    className={isCurrentUser(user) ? "bg-primary/5" : undefined}
                  >
                    <TableCell className="text-center font-medium">
                      {index < 3 ? (
                        <div className="flex justify-center">
                          {getRankMedal(index)}
                        </div>
                      ) : (
                        index + 1
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">
                            {user.name} {isCurrentUser(user) && "(You)"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            @{user.username}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{user.level}</TableCell>
                    <TableCell className="text-center font-semibold">
                      {user.points}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-center">
                      {user.streak} days
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-center">
                      {user.completedCourses}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-center">
                      {user.completedWorkshops}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {user.badges.slice(0, 2).map((badge) => (
                          <Badge
                            key={badge}
                            variant={getBadgeColor(badge)}
                            className="flex items-center text-xs"
                          >
                            {getBadgeIcon(badge)}
                            {badge}
                          </Badge>
                        ))}
                        {user.badges.length > 2 && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge
                                  variant="outline"
                                  className="flex items-center text-xs cursor-help"
                                >
                                  +{user.badges.length - 2} more
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="space-y-1">
                                  {user.badges.slice(2).map((badge) => (
                                    <div
                                      key={badge}
                                      className="flex items-center"
                                    >
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          // Card view for all users
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.slice(3).map((user, index) => (
              <Card
                key={user.id}
                className={`overflow-hidden ${
                  isCurrentUser(user) ? "border-primary border-2" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2 bg-muted text-muted-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                        {index + 4}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">
                          {user.name} {isCurrentUser(user) && "(You)"}
                        </h3>
                        <Badge variant="outline">Level {user.level}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        @{user.username}
                      </p>
                      <div className="flex items-center mt-1">
                        <Trophy className="h-4 w-4 text-primary mr-1" />
                        <span className="font-semibold">
                          {user.points} points
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {user.badges.slice(0, 2).map((badge) => (
                        <Badge
                          key={badge}
                          variant={getBadgeColor(badge)}
                          className="flex items-center text-xs"
                        >
                          {getBadgeIcon(badge)}
                          {badge}
                        </Badge>
                      ))}
                      {user.badges.length > 2 && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge
                                variant="outline"
                                className="flex items-center text-xs cursor-help"
                              >
                                +{user.badges.length - 2} more
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div className="space-y-1">
                                {user.badges.slice(2).map((badge) => (
                                  <div
                                    key={badge}
                                    className="flex items-center"
                                  >
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
                        <span className="font-semibold">
                          {user.streak} days
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground">Courses</span>
                        <span className="font-semibold">
                          {user.completedCourses}
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted rounded-md">
                        <span className="text-muted-foreground">Workshops</span>
                        <span className="font-semibold">
                          {user.completedWorkshops}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* How points are calculated */}
        <div className="mt-12 p-6 border rounded-lg bg-muted/50">
          <div className="flex items-start gap-4">
            <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2">
                How Points are Calculated
              </h3>
              <p className="text-muted-foreground mb-4">
                Points are awarded based on your activity and achievements on
                the platform. Here&apos;s how you can earn points:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Daily Login</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">10 points</span> for each
                    day you log in. Maintain a streak for bonus points!
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Completing Courses</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">100 points</span> for each
                    course you complete.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Attending Workshops</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">50 points</span> for each
                    workshop you attend.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Completing Exercises</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">20 points</span> for each
                    exercise you complete successfully.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Providing Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">15 points</span> for each
                    helpful review or feedback you provide.
                  </p>
                </div>
                <div className="bg-background p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Earning Badges</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">25-100 points</span> for
                    each badge you earn, depending on the badge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
