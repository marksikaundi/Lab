
import Courses from "../../components/CourseComponents/Courses";

const getCourses = async () => {
  const res = await fetch(process.env.GET_COURSES_URL);
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
