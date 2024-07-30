"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { TbPlayerPlay } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { IoBookOutline } from "react-icons/io5";

export default function page() {
  return (
    <div className="flex gap-4 mt-2 w-full flex-wrap space-y-4 lg:space-y-0 h-full">
      <div className="rounded lg:w-[535px] w-full">
        <CldVideoPlayer
          width="1920"
          height="1080"
          src="samples/sea-turtle"
          className="rounded block"
        />
        <div className="p-4 rounded mt-8 flex flex-col py-4 border">
          <div className="w-40 bg-gray-100 flex space-x-2 items-center justify-center rounded mb-3">
            <IoBookOutline className="text-green-950" />
            <span>52 Chapters</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Build a Canva Clone</h2>
          <p className="mb-2">
            In this 18 hour course, we'll build a feature-rich graphic design
            SaaS platform from the ground up. You’ll learn how to create an
            intuitive editor that allows users to customize templates,
            manipulate text and shapes, and integrate advanced drawing tools. To
            handle authentication, we will use Auth.js, a new name for
            Next-Auth. We will master social providers like Google and Github,
            as well as regular credential providers using email and password.
            You will learn how to use AI technologies to remove backgrounds, and
            generate images from text using software like Replicate. We'll also
            implement a secure subscription & billing system using Stripe.
          </p>
          <div className="flex gap-2 flex-wrap justify-start mb-3">
            <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">
              Tailwind
            </button>
            <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">
              Frontend
            </button>
            <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">
              Backend
            </button>
            <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">
              Fullstack
            </button>
            <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">
              DevOps
            </button>
            <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">
              Design
            </button>
            <button className=" rounded-md px-2 py-2 border h-8 flex justify-center items-center min-w-[130px] hover:bg-gray-100">
              Data Science
            </button>
            <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">
              Mobile
            </button>
          </div>
          <div>
            <Progress value={0} className="w-full bg-gray-100 h-2" />
            <span>0% complete</span>
          </div>
        </div>
        <div className="h-10"></div>
      </div>

      <div className="lg:w-[300px] w-full">
        <div className="border p-3 rounded-lg mb-4 bg-green-950  lg:w-[400px] w-full h-[220px] text-white">
          <h2 className="text-2xl font-bold py-2">Ready to start learning?</h2>
          <p className="pb-9 text-md py-2">
            Track your progress, watch with subtitles, change quality & speed,
            and more.
          </p>
          <button className="bg-white text-green-950 w-full rounded-lg py-2 hover:bg-gray-100 flex items-center justify-center space-x-2">
            <TbPlayerPlay />
            <span>Start Watching</span>
          </button>
        </div>
        <Link
          href="#"
          className="border p-3 rounded-lg mb-4  lg:w-[400px] w-full h-[100px] text-white flex flex-col items-center justify-center hover:bg-gray-100"
        >
          <FaGithub className="h-20 w-20 text-green-950"/>
          <span className="text-gray-400 hover:text-gray-500">Source code</span>
        </Link>
      </div>
    </div>
  );
}
