"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "./Pagination";

function Course({ section, sections, courseId }) {
  const [sectionIndex, setSectionIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Set the sectionIndex based on the current section's title
    const currentIndex = sections.findIndex((sec) => sec.section_title === section.section_title);
    setSectionIndex(currentIndex);
  }, [section.section_title, sections]);

  const handleSectionChange = (newIndex) => {
    setSectionIndex(newIndex);
    router.push(`/course/${courseId}/${sections[newIndex].section_title}`);
  };

  return (
    <div className="w-full mt-10">
      <h1 className="w-full bg-gray-50 border-l-4 border-green-900 text-xl md:text-4xl mb-8 pl-4">
        {section.section_title}
      </h1>
      {section.section_description ? (
        <p className="text-md md:text-lg p-4 bg-gray-50 rounded-xl">
          {section.section_description}
        </p>
      ) : (
        ""
      )}
      <div className="my-6 p-4">
        {section.section_list
          ? section.section_list.map((item, index) => (
              <div key={index}>
                ✅{" "}
                <span className=" text-sm lg:text-lg font-semibold">
                  {item.list_item_title}
                </span>
                <span className="lg:text-lg text-sm">
                  {item.list_item_disc}
                </span>
              </div>
            ))
          : ""}
      </div>
      <Pagination
        courseIndex={sectionIndex}
        setCourseIndex={handleSectionChange}
        courses={sections}
        sections={sections}
        courseId={courseId}
      />
    </div>
  );
}

export default Course;
