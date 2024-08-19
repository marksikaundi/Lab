
import Courses from "../../components/CourseComponents/Courses";

const getCourses = async () => {
  const res = await fetch("http://localhost:3000/api/courses");
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
};

export default async function CoursesPage() {
  const data = await getCourses();
  const courses = Array.isArray(data.courses) ? data.courses : [];

  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
}
