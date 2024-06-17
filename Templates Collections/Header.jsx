"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between bg-white p-6 dark:bg-gray-800">
      <div className="flex items-center space-x-3">
        <Link href="/">
          <Image src="/lupleg.png" alt="Lupleg" width={300} height={200} />
        </Link>
      </div>
      <div className="hidden md:block">
        <nav className="flex space-x-6">
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="services"
          >
            Services
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="features"
          >
            Features
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="for-orgs"
          >
            For ORGs
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="academy"
          >
            Academy
          </Link>
          <Link
            className="text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
            href="podcasts"
          >
            Podcasts
          </Link>
        </nav>
      </div>
      <div className="text-md hidden rounded border-2 border-green-700  p-3 text-black  md:block">
        <Link href="partner">Partner with us</Link>
      </div>

       <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="services"
            >
              Services
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="features"
            >
              Features
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="for-orgs"
            >
              For ORGs
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="academy"
            >
              Academy
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold"
              href="podcasts"
            >
              Podcasts
            </Link>
            <div className="w-30 flex   items-center rounded-full">
              <Button className="text-md text-white">
                <Link href="partner">Partner with us</Link>
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
