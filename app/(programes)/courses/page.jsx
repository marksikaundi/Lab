import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Courses() {
  return (
    <div className="mb-20">
      <div className="flex justify-center my-10">
        <h2 className="text-2xl font-bold">Our Courses</h2>
      </div>
      <p className="text-center text-xl px-20">
        Interactive, hands-on learning experience that's as fun as it is
        educational! These paths are all about practicing the concepts, making
        learning engaging, and guiding you toward mastering specific topics.
      </p>
      <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3 md:p-6">
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Course</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Course 1"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4 bg-background">
            <h3 className="text-xl font-bold">Web Development Fundamentals</h3>
            <p className="text-sm text-muted-foreground">
              Learn the basics of HTML, CSS, and JavaScript to build modern web
              applications.
            </p>
            <Button size="sm" className="mt-4">
              View Course
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Course</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Course 2"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4 bg-background">
            <h3 className="text-xl font-bold">React.js Mastery</h3>
            <p className="text-sm text-muted-foreground">
              Dive deep into React.js and learn how to build complex, scalable
              web applications.
            </p>
            <Button size="sm" className="mt-4">
              View Course
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Course</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Course 3"
            width={500}
            height={300}
            className="object-cover w-full h-48"
          />
          <div className="p-4 bg-background">
            <h3 className="text-xl font-bold">
              Data Structures and Algorithms
            </h3>
            <p className="text-sm text-muted-foreground">
              Enhance your problem-solving skills and master the fundamentals of
              computer science.
            </p>
            <Button size="sm" className="mt-4">
              View Course
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
