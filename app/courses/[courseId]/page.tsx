import { Navbar } from "@/components/navbar";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import CourseContent from "./course-content";

// In Next.js 13+ with App Router, you don't need to define PageProps like this
type PageProps = {
  params: { courseId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function CoursePage({ params }: PageProps) {
  // In a real app, this would fetch this data from an API
  const course = {
    id: params.courseId,
    title: "Build a YouTube Clone",
    description:
      "Learn how to build a full-featured YouTube clone using Next.js, TypeScript, and Tailwind CSS. This course covers everything from setting up the project to deploying it to production.",
    chapters: [
      {
        id: "1",
        title: "Introduction to the course",
        duration: "10:30",
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Example YouTube URL
      },
      {
        id: "2",
        title: "Setting up the project",
        duration: "15:45",
        videoUrl: "https://www.youtube.com/watch?v=KYFwcIRx16g",
      },
      {
        id: "3",
        title: "Building the homepage",
        duration: "20:15",
        videoUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      },
      {
        id: "4",
        title: "Implementing authentication",
        duration: "25:30",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
      {
        id: "5",
        title: "Creating the video player",
        duration: "18:20",
        videoUrl: "https://www.youtube.com/watch?v=DHjqpvDnNGE",
      },
    ],
    instructor: "John Doe",
    rating: 4.8,
    students: 1234,
    technologies: ["Next.js", "TypeScript", "Tailwind"],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to courses
        </Link>

        <CourseContent course={course} />
      </div>
    </div>
  );
}
