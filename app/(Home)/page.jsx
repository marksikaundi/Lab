import Link from "next/link";
import { Button } from "@/components/ui/button";

const getCourses = async () => {
  const res = await fetch(process.env.GET_COURSES_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  return res.json();
};

export default async function ExploreCourses() {
  const data = await getCourses();
  const courses = Array.isArray(data.courses) ? data.courses : [];
  console.log(courses);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Explore Our Courses
          </h2>
        </div>

        {courses.map((course) => (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
              <Link href="#" className="block h-full" prefetch={false}>
                <img
                  src="https://utfs.io/f/b9b4d679-34e2-4664-93b8-2c8283fa88dd-1h.png"
                  alt="Course Image"
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold" key={course._id}>
                    {course.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground" key={course._id}>
                  {course.description.length > 100
                      ? course.description.substring(0, 100) + "..."
                      : course.description}
                  </p>
                  <Button variant="link" size="sm" className="mt-4">
                    Learn More
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center ">
        <Button
          variant="outline"
          className="bg-green-950 hover:bg-green-950 text-white hover:text-white p-6"
          size="sm"
        >
          View All Courses
        </Button>
      </div>
    </section>
  );
}
