import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            Python Playground
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="hover:text-primary-foreground/80"
              prefetch={false}
            >
              Lessons
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80"
              prefetch={false}
            >
              Resources
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12 px-6">
        <div className="container mx-auto">
          <section className="mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to Python Playground
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Explore the world of Python programming with our comprehensive
              tutorials and hands-on projects.
            </p>
            <div className="flex justify-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Start Learning
              </Link>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Lessons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">
                    Variables and Data Types
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn how to declare and work with different data types in
                    Python.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Lesson
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Control Structures</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore conditional statements, loops, and decision-making
                    in Python.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Lesson
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Functions and Modules</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn how to create and use functions, as well as organize
                    your code into modules.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Lesson
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Guess the Number</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build a simple number guessing game using Python.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Todo List App</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create a simple todo list application using Python and
                    Flask.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Web Scraper</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build a web scraper to extract data from websites using
                    Python.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Useful Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Python Documentation</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Official Python documentation for language reference,
                    tutorials, and more.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Visit Documentation
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Python Cheatsheet</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Quick reference guide for common Python syntax and concepts.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Cheatsheet
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold">Python Tutorials</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive tutorial series for learning Python from
                    beginner to advanced.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    Visit Tutorials
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">
            &copy; 2023 Python Playground. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4">
            <Link
              href="#"
              className="hover:text-primary-foreground/80"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80"
              prefetch={false}
            >
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
