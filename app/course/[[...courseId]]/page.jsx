import React from "react";
import Course from "@/components/CourseComponents/Course";

const getCourses = async () => {
  const res = await fetch("http://localhost:3000/api/courses");
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
};

export default async function CoursePage({ params }) {
  const data = await getCourses();
  const courses = Array.isArray(data.courses) ? data.courses : [];
  const courseId = params.courseId[0];
  const course = courses.find((course) => course._id === courseId);
  let section = course.sections.find(
    (section) => section.section_title === course.sections[0].section_title
  );
  if (params.courseId[1]) {
    section = course.sections.find(
      (section) =>
        section.section_title === decodeURIComponent(params.courseId[1])
    );
  }
  return (
    <div className="h-screen w-full pt-4">
      <Course section={section} sections={course.sections} courseId={courseId} />
    </div>
  );
}
