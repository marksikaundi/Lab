"use client";

import ProgramSummary from "@/components/FeaturesCards/ProgramSummary";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-xl font-bold mb-10 mt-4 tracking-tight">
                {" "}
                Hello 👋, {user?.fullName}{" "}
              </h1>
              <h1 className="text-4xl font-bold tracking-tight">
                {" "}
                Explore Lupleg's Code Challenges
              </h1>

              <p className="mt-4 text-lg text-primary-foreground/80">
                Discover a world of programming challenges and hone your skills
                with Lupleg.
              </p>
            </div>
            <div className="flex justify-end">
              <Button>Join Now</Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-background">
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Challenges
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore a variety of coding challenges to test and improve your
              skills.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CodeIcon className="w-8 h-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Algorithmic Thinking</CardTitle>
                  <CardDescription>
                    Dive into the world of algorithms and problem-solving.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <DatabaseIcon className="w-8 h-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Database Challenges</CardTitle>
                  <CardDescription>
                    Explore the intricacies of database management and querying.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <WebhookIcon className="w-8 h-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Web Development</CardTitle>
                  <CardDescription>
                    Hone your front-end and back-end web development skills.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CodeIcon className="w-8 h-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Data Structures</CardTitle>
                  <CardDescription>
                    Explore the fundamental building blocks of efficient
                    algorithms.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CpuIcon className="w-8 h-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle>System Design</CardTitle>
                  <CardDescription>
                    Tackle complex system design challenges and optimize
                    performance.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CodeIcon className="w-8 h-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Coding Interviews</CardTitle>
                  <CardDescription>
                    Prepare for technical interviews with real-world coding
                    challenges.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-primary hover:underline"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight">Key Metrics</h2>
            <p className="mt-4 text-muted-foreground">
              Discover the impact of our code challenges and programs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <Card>
                <CardContent>
                  <div className="text-4xl font-bold">10,000+</div>
                  <div className="text-muted-foreground">Participants</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="text-4xl font-bold">85%</div>
                  <div className="text-muted-foreground">Completion Rate</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-muted-foreground">Challenges</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="text-4xl font-bold">100+</div>
                  <div className="text-muted-foreground">Topics Covered</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Ready to Level Up?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Explore our wide range of code challenges and programs to
                  enhance your programming skills.
                </p>
                <div className="mt-6">
                  <Button>Join Now</Button>
                </div>
              </div>
              <div className="flex justify-end">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Coding Illustration"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <ProgramSummary />
    </div>
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

function CpuIcon(props) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function WebhookIcon(props) {
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
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </svg>
  );
}
