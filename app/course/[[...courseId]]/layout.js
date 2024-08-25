import { Inter } from "next/font/google";
import "../../globals.css";
import DashNav from "@/components/DashComponents/DashNav";
import { ClerkProvider } from "@clerk/nextjs";
import FooterSidebar from "@/components/DashComponents/FooterSidebar";
import Link from "next/link";

const getCourses = async () => {
  const res = await fetch("http://localhost:3000/api/courses");
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
};

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Building Africa's Tech Future",
  description:
    "Join us in shaping the future of technology in Africa! Our developer community empowers Africans with the skills and resources to solve problems, drive innovation, and create a more sustainable future.",
};

export default async function RootLayout({ children, params }) {
  const data = await getCourses();
  const courses = Array.isArray(data.courses) ? data.courses : [];
  const courseId = params.courseId[0];
  const sectionTitle = decodeURIComponent(params.courseId[1]);
  const course = courses.find((course) => course._id === courseId);
  const courseSections = course.sections;
  const courseTitle = course.title;
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <DashNav />
          <div className="h-full w-full grid grid-cols-12 pt-20">
            <div className="lg:col-span-3 hidden lg:block">
              <div className="w-72 lg:flex flex-col justify-start items-center fixed space-y-2 pt-2 left-0 top-20 z-40 overflow-y-scroll hidden h-[86%]">
                <div className="flex flex-col space-y-2 w-full pt-2 pb-2 px-3">
                  <h1 className="text-2xl font-">{courseTitle}</h1>

                  {courseSections.map((section) => (
                    <Link
                      href={`/course/${courseId}/${section.section_title}`}
                      className={`rounded-lg  w-full flex px-2 h-12 justify-start items-center space-x-2 hover:bg-gray-100 text-sm ${
                        section.section_title == sectionTitle &&
                        `border-l-4 border-green-900`
                      } `}
                    >
                      <span className="">
                        {section.section_title.length > 30
                          ? section.section_title.substring(0, 30) + "..."
                          : section.section_title}
                      </span>
                    </Link>
                  ))}
                </div>
                <FooterSidebar />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 w-full px-2">{children}</div>
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
