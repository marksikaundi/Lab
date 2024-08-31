"use client";

import { TbPlayerPlay } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { IoBookOutline } from "react-icons/io5";
import Image from "next/image";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function Courses({ courses }) {
  const [courseIndex, setCourseIndex] = useState(0);

  const course = courses[courseIndex] || courses[0];

  useEffect(() => {
    const storedIndex = sessionStorage.getItem("currentCourseIndex");
    if (storedIndex) {
      setCourseIndex(parseInt(storedIndex, 10));
    }
  }, []);

  const handleCourseChange = (newIndex) => {
    setCourseIndex(newIndex);
    sessionStorage.setItem("currentCourseIndex", newIndex);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-5 gap-4 mt-2 w-full flex-wrap space-y-4 lg:space-y-0 h-full">
        <div className="rounded w-full col-span-5 lg:col-span-3">
          {/* <CldVideoPlayer
            width="1920"
            height="1080"
            src="samples/sea-turtle"
            className="rounded block"
          /> */}
          <Image
            src={course.courseImage}
            alt="course image"
            height={100}
            width={400}
            className="rounded block w-full max-h-[350px]"
          />
          <div className="p-4 rounded mt-4 flex flex-col py-4 border">
            <div className="w-40 bg-gray-100 flex space-x-2 items-center py-3 justify-center rounded mb-3">
              <IoBookOutline className="text-green-950" />
              <span>52 Chapters</span>
            </div>
            <h2 className="text-3xl font-bold mb-3">{course.title}</h2>
            <p className="mb-2">{course.description}</p>
            <div className="flex gap-2 flex-wrap justify-start mb-3">
              {course.technologies.map((tech, index) => (
                <button
                  key={index}
                  className="rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100"
                >
                  {tech}
                </button>
              ))}
            </div>
            <div>
              <Progress value={0} className="w-full bg-gray-100 h-2" />
              <span>0% complete</span>
            </div>
          </div>
          <div className="h-10"></div>
        </div>
        <div className="lg:col-span-2 col-span-5">
          <div className="border p-3 rounded-lg mb-4 bg-green-950 w-full text-white">
            <p className="text-2xl font-bold py-2">Ready to start learning?</p>
            <p className="pb-9 text-md py-2">
              Track your progress, watch with subtitles, change quality & speed,
              and more.
            </p>
            <Link
              href={`/course/${course._id}/${course.sections[0].section_title}`}
              className="bg-white text-green-950 w-full rounded-lg py-2 hover:bg-gray-100 flex items-center justify-center space-x-2 mb-3"
            >
              <TbPlayerPlay />
              <span>Start Course</span>
            </Link>
          </div>
          <Link
            href="#"
            className="border p-3 rounded-lg mb-4 w-full h-[100px] text-white flex flex-col items-center justify-center hover:bg-gray-100"
          >
            <FaGithub className="h-40 w-20 text-green-950" />
            <span className="text-gray-400 hover:text-gray-500">
              Source code
            </span>
          </Link>
        </div>
      </div>
      <Pagination
        courseIndex={courseIndex}
        setCourseIndex={handleCourseChange}
        sections={courses}
      />
    </div>
  );
}
