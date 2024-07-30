import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-primary to-primary-foreground py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 lg:gap-12">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                Introduction to Web Development
              </h1>
              <p className="text-primary-foreground/80 md:text-lg lg:text-xl">
                Learn the fundamentals of web development, from HTML and CSS to
                JavaScript and modern frameworks. This course will take you from
                beginner to intermediate level.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-primary-foreground"
                >
                  Enroll Now
                </Button>
                <div className="flex items-center gap-2 text-primary-foreground">
                  <UsersIcon className="h-5 w-5" />
                  <span className="font-medium">1,234 students enrolled</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:justify-self-end">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-primary-foreground/10 p-4">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Course Duration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12 weeks</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary-foreground/10 p-4">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Difficulty Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Beginner</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary-foreground/10 p-4">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Completion Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85%</div>
                  </CardContent>
                </Card>
                <Card className="bg-primary-foreground/10 p-4">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Instructor Rating
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.8/5</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="container px-4 md:px-6 py-12 md:py-20 lg:py-24 grid gap-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card className="bg-muted p-4">
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                HTML and CSS Basics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn the fundamentals of HTML and CSS to build responsive and
                accessible web pages.
              </p>
            </CardContent>
            <CardFooter>
              <Progress value={75} aria-label="75% complete" />
            </CardFooter>
          </Card>
          <Card className="bg-muted p-4">
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                JavaScript Essentials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dive into the world of JavaScript and learn how to add
                interactivity to your web pages.
              </p>
            </CardContent>
            <CardFooter>
              <Progress value={50} aria-label="50% complete" />
            </CardFooter>
          </Card>
          <Card className="bg-muted p-4">
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                Responsive Design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore techniques to create websites that adapt seamlessly to
                different devices and screen sizes.
              </p>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% complete" />
            </CardFooter>
          </Card>
          <Card className="bg-muted p-4">
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                Modern Frameworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about popular front-end frameworks like React, Angular,
                and Vue.js to build complex web applications.
              </p>
            </CardContent>
            <CardFooter>
              <Progress value={10} aria-label="10% complete" />
            </CardFooter>
          </Card>
          <Card className="bg-muted p-4">
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore server-side technologies like Node.js, PHP, and Ruby on
                Rails to build full-stack web applications.
              </p>
            </CardContent>
            <CardFooter>
              <Progress value={5} aria-label="5% complete" />
            </CardFooter>
          </Card>
          <Card className="bg-muted p-4">
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                Web Deployment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn how to deploy your web applications to popular hosting
                platforms like Vercel, Netlify, and AWS.
              </p>
            </CardContent>
            <CardFooter>
              <Progress value={15} aria-label="15% complete" />
            </CardFooter>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="bg-muted p-4">
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  Course Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-medium hover:underline"
                      prefetch={false}
                    >
                      <BookIcon className="h-5 w-5 text-muted-foreground" />
                      Course Syllabus
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-medium hover:underline"
                      prefetch={false}
                    >
                      <VideoIcon className="h-5 w-5 text-muted-foreground" />
                      Video Lectures
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-medium hover:underline"
                      prefetch={false}
                    >
                      <CodeIcon className="h-5 w-5 text-muted-foreground" />
                      Code Examples
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-medium hover:underline"
                      prefetch={false}
                    >
                      <ClipboardIcon className="h-5 w-5 text-muted-foreground" />
                      Assignments
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6">
            <Card className="bg-muted p-4">
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  Course Discussions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-medium hover:underline"
                      prefetch={false}
                    >
                      <WebcamIcon className="h-5 w-5 text-muted-foreground" />
                      General Discussion
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-medium hover:underline"
                      prefetch={false}
                    >
                      <FileQuestionIcon className="h-5 w-5 text-muted-foreground" />
                      Q&A Forum
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-2 font-medium hover:underline"
                      prefetch={false}
                    >
                      <AnvilIcon className="h-5 w-5 text-muted-foreground" />
                      Announcements
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-muted p-4">
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span>Course Completion</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <Progress value={45} aria-label="45% complete" />
                  <div className="flex items-center justify-between">
                    <span>Assignments Completed</span>
                    <span className="font-medium">12/20</span>
                  </div>
                  <Progress value={60} aria-label="60% complete" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function AnvilIcon(props) {
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
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
      <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </svg>
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

function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
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

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

function WebcamIcon(props) {
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
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}
