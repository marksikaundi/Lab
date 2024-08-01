import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="w-full bg-muted py-10 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Introduction to Web Development
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  <span>John Doe</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>12 Lessons</span>
                </div>
              </div>
              <p className="text-muted-foreground md:text-lg">
                Learn the fundamentals of web development, including HTML, CSS,
                and JavaScript. This course is designed for beginners and covers
                everything you need to build your first website.
              </p>
            </div>
            <div className="grid gap-4">
              <Card>
                <CardHeader className="bg-muted/50 px-6 py-4">
                  <CardTitle>Course Details</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Enrolled</span>
                    <span>125</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span>6 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span>2023-04-15</span>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50 px-6 py-4">
                  <Button size="sm" variant="outline" className="w-full">
                    Enroll Now
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="bg-muted/50 px-6 py-4">
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 p-6">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <BookIcon className="h-5 w-5" />
                    <span>Course Syllabus</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <VideoIcon className="h-5 w-5" />
                    <span>Video Lectures</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <CodeIcon className="h-5 w-5" />
                    <span>Code Examples</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    prefetch={false}
                  >
                    <FileQuestionIcon className="h-5 w-5" />
                    <span>Q&A Forum</span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </header>
      <main className="container px-4 py-10 md:px-6 md:py-16 lg:py-20">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Course Modules</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="bg-muted/50 px-6 py-4">
              <CardTitle>Introduction to HTML</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6">
              <p className="text-muted-foreground">
                Learn the basics of HTML, including tags, elements, and
                structure.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Progress</span>
                <Progress value={50} aria-label="50% complete" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-muted/50 px-6 py-4">
              <CardTitle>CSS Fundamentals</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6">
              <p className="text-muted-foreground">
                Dive into the world of CSS and learn how to style your web
                pages.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Progress</span>
                <Progress value={75} aria-label="75% complete" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-muted/50 px-6 py-4">
              <CardTitle>JavaScript Basics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6">
              <p className="text-muted-foreground">
                Explore the fundamentals of JavaScript and learn how to add
                interactivity to your web pages.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Progress</span>
                <Progress value={30} aria-label="30% complete" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-muted/50 px-6 py-4">
              <CardTitle>Responsive Design</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6">
              <p className="text-muted-foreground">
                Learn how to create responsive web designs that work on any
                device.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Progress</span>
                <Progress value={60} aria-label="60% complete" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-muted/50 px-6 py-4">
              <CardTitle>Web Accessibility</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6">
              <p className="text-muted-foreground">
                Understand the importance of web accessibility and learn
                techniques to make your websites more inclusive.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Progress</span>
                <Progress value={40} aria-label="40% complete" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-muted/50 px-6 py-4">
              <CardTitle>Git and Version Control</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6">
              <p className="text-muted-foreground">
                Explore the world of version control and learn how to use Git to
                manage your web development projects.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Progress</span>
                <Progress value={65} aria-label="65% complete" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FileQuestionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  );
}
