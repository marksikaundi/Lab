import Image from "next/image";
import Link from "next/link";


export default function ReactBasics() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-20">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                New Course
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Mastering React: A Comprehensive Course
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Dive deep into the world of React, the popular JavaScript
                library for building user interfaces. This course covers
                everything from the fundamentals to advanced concepts, equipping
                you with the skills to create dynamic and responsive web
                applications.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Enroll Now
                </Link>
                <Link
                  href="courses"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
            <Image
              src="https://utfs.io/f/1061b5aa-16f5-4812-8b0e-3f9e6921e33b-8pkox5.jpg"
              width="100"
              height="100"
              alt="React Basics"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square h-[400px] mt-10"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-xl">
                  Course Curriculum
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What You'll Learn
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl sm:text-lg">
                  This comprehensive course covers a wide range of topics, from
                  the fundamentals of React to advanced concepts and best
                  practices. You'll gain a deep understanding of the library and
                  be able to build complex, production-ready applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">React Fundamentals</h3>
                <p className="text-muted-foreground text-lg">
                  Learn the core concepts of React, including components, state,
                  and props.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Advanced React Concepts</h3>
                <p className="text-muted-foreground text-lg">
                  Dive into more advanced topics like hooks, context, and
                  performance optimization.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">React Ecosystem</h3>
                <p className="text-muted-foreground text-lg">
                  Explore the wider React ecosystem, including popular libraries
                  and tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Project-based Learning</h3>
                <p className="text-muted-foreground text-xl">
                  Apply your knowledge by building real-world projects and
                  applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Best Practices</h3>
                <p className="text-muted-foreground text-xl">
                  Learn industry-standard best practices for writing clean,
                  maintainable React code.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Deployment and Hosting</h3>
                <p className="text-muted-foreground text-lg">
                  Understand how to deploy your React applications to various
                  hosting platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About the Course
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Learning Objectives
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  By the end of this course, you'll be able to:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Understand React Fundamentals
                </h3>
                <p className="text-muted-foreground text-lg">
                  Gain a solid understanding of React's core concepts, including
                  components, state, and props.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Build Complex Applications
                </h3>
                <p className="text-muted-foreground text-lg">
                  Learn how to build complex, production-ready web applications
                  using React.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Optimize Performance</h3>
                <p className="text-muted-foreground text-lg">
                  Understand best practices for optimizing the performance of
                  your React applications.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Integrate with APIs</h3>
                <p className="text-muted-foreground text-lg">
                  Learn how to integrate your React applications with various
                  APIs and data sources.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Deploy and Host Applications
                </h3>
                <p className="text-muted-foreground text-lg">
                  Understand how to deploy your React applications to different
                  hosting platforms.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Become a React Expert</h3>
                <p className="text-muted-foreground text-lg">
                  Gain the skills and knowledge to become a proficient React
                  developer.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About the Instructor
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet Your Instructor
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  This course is taught by Mark Sikaundi, a seasoned software
                  engineer with over 10 years of experience in the industry.
                  John is passionate about teaching and has helped countless
                  students become proficient in React.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <img
                src="https://utfs.io/f/ff7c57f5-a1b0-4c0c-afde-390ecdf9c87e-6uzm02.jpg"
                width="300"
                height="300"
                alt="Instructor"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full"
              />
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Mark Sikaundi</h3>
                <p className="text-muted-foreground">
                  Senior Software Engineer
                </p>
                <p className="text-muted-foreground">
                  10+ years of experience in the industry
                </p>
                <p className="text-muted-foreground">
                  Passionate about teaching and mentoring
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Expertise</h3>
                <p className="text-muted-foreground">
                  React, JavaScript, Node.js, AWS, DevOps
                </p>
                <p className="text-muted-foreground">
                  Proven track record of building scalable web applications
                </p>
                <p className="text-muted-foreground">
                  Regularly speaks at industry conferences and meetups
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}