import Link from "next/link";

export default function Workshops() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Explore Our Workshops
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
            <Link href="#" className="block h-full" prefetch={false}>
              <img
                src="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
                alt="Course Image"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Introduction to React</h3>

                <button
                  variant="link"
                  size="sm"
                  className="mt-4 p-2 text-green-950 bg-gray-200 rounded-md"
                >
                  Learn More
                </button>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
            <Link href="#" className="block h-full" prefetch={false}>
              <img
                src="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
                alt="Course Image"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Mastering JavaScript for Beginners
                </h3>
                <button
                  variant="link"
                  size="sm"
                  className="mt-4 p-2 text-green-950 bg-gray-200 rounded-md"
                >
                  Learn More
                </button>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
            <Link href="#" className="block h-full" prefetch={false}>
              <img
                src="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
                alt="Course Image"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Responsive Web Design Essentials
                </h3>

                <button
                  variant="link"
                  size="sm"
                  className="mt-4 p-2 text-green-950 bg-gray-200 rounded-md"
                >
                  Learn More
                </button>
              </div>
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
            <Link href="#" className="block h-full" prefetch={false}>
              <img
                src="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
                alt="Course Image"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Advanced CSS Techniques
                </h3>

                <button
                  variant="link"
                  size="sm"
                  className="mt-4 p-2 text-green-950 bg-gray-200 rounded-md"
                >
                  Learn More
                </button>
              </div>
            </Link>
          </div>

          <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
            <Link href="#" className="block h-full" prefetch={false}>
              <img
                src="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
                alt="Course Image"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Advanced CSS Techniques
                </h3>

                <button
                  variant="link"
                  size="sm"
                  className="mt-4 p-2 text-green-950 bg-gray-200 rounded-md"
                >
                  Learn More
                </button>
              </div>
            </Link>
          </div>

          <div className="overflow-hidden rounded-lg border border-muted bg-background shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
            <Link href="#" className="block h-full" prefetch={false}>
              <img
                src="https://utfs.io/f/7c679591-6991-4402-bc63-0ee97010fc6f-1g.png"
                alt="Course Image"
                width={600}
                height={400}
                className="h-48 w-full object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  Advanced CSS Techniques
                </h3>

                <button
                  variant="link"
                  size="sm"
                  className="mt-4 p-2 text-green-950 bg-gray-200 rounded-md"
                >
                  Learn More
                </button>
              </div>
            </Link>
          </div>
        </div>

        <hr className="my-8" />
        {/* <div className="mt-8 text-center ">
          <Button
            variant="outline"
            className="bg-green-950 hover:bg-green-950 text-white hover:text-white p-6"
            size="sm"
          >
            View All Courses
          </Button>
        </div> */}
      </div>
    </section>
  );
}
