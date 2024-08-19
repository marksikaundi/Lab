
import { RxHome } from "react-icons/rx";
import Link from "next/link";
import FooterSidebar from "../DashComponents/FooterSidebar";

function CourseSideBar({ courseTitle, courseSections, courseId }) {
  return (
    <div className="w-72 lg:flex flex-col justify-start items-center fixed space-y-2 pt-2 left-0 top-20 z-40 overflow-y-scroll hidden h-[86%]">
      <div className="flex flex-col space-y-2 w-full pt-2 pb-2 px-3">
      <h1 className="text-2xl font-">{courseTitle}</h1>

      {courseSections.map((section) => (
      <Link
      href={`/course/${courseId}/${section.section_title}`}
      className="rounded-lg  w-full flex px-2 h-12 justify-start items-center space-x-2 hover:bg-gray-100 text-sm"
      >
      <span className="">{section.section_title.length > 30 ? section.section_title.substring(0, 30) + '...' : section.section_title}</span>
      </Link>
      ))}
      </div>
      <FooterSidebar />
    </div>
    );
}

export default CourseSideBar;
