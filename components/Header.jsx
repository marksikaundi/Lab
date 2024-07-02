"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="flex flex-wrap items-center justify-between bg-white p-6 dark:bg-gray-800">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image src="/lupleg.png" alt="Lupleg" width={300} height={200} />
        </Link>
      </div>

      {/* TODO: Add a beta tag, but remove it when the site is out of beta */}
      <div className="flex items-center space-x-3 bg-[#0F172A] rounded-md border border-white">
        <Link href="#">
          <h1 className="p-2 text-md font-semibold  text-white dark:text-white">
            Beta
          </h1>
        </Link>
      </div>

      <div className="hidden md:block">
        <nav className="flex space-x-6">
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="dashboard"
          >
            Dashboard
          </Link>

          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="courses"
          >
            Courses
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="challenge"
          >
            Challenge
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="roadmap"
          >
            Roadmap
          </Link>
        </nav>
      </div>

      <div
        className="hidden items-center justify-start space-x-4 text-m font-semibold
 text-black md:flex"
      >
        <Link
          href="premium"
          className="rounded border-2 border-green-700 p-3"
        >
          Premium
        </Link>
        <UserButton className="mr-20" />
      </div>

      {/* mobile view */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="dashboard"
              >
                Dashboard
              </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="courses"
              >
                Courses
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="challenge"
              >
                Challenge
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="roadmap"
              >
                Roadmap
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="https://lupleg.website/academy"
              >
                Academy
              </Link>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="https://lupleg.website/podcasts"
              >
                Podcasts
              </Link>
            </SheetTrigger>
            <div className="w-30 flex   items-center rounded-full">
              <Button
                className="text-md text-white font-semibold
"
              >
                <SheetTrigger asChild>
                  <Link href="premium">Premium</Link>
                </SheetTrigger>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
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
