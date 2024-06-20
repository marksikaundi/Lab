"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

export default function Component() {
  return (
    <div className="w-full">
      <header className=" py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Coding Challenges
          </h1>
          <p className="mt-4 text-black sm:text-lg md:text-xl">
            Explore a variety of coding challenges and test your skills.
          </p>
        </div>
      </header>
      <main className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 1"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 1</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 2"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 2</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 3"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 3</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 4"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 4</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 5"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 5</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 6"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 6</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 7"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 7</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Challenge 8"
                width={400}
                height={300}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Challenge 8</h3>
                <p className="mt-2 text-gray-500">
                  Solve this coding challenge to test your problem-solving
                  skills.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  );
}
