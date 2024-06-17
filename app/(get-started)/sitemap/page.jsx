import Link from "next/link";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Sitemap() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Elevate Your Learning Experience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-400">
                  Discover the power of our cutting-edge education SaaS
                  platform, designed to revolutionize the way you learn and
                  teach.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-950 dark:bg-green-950">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <CircleCheckIcon className="h-6 w-6 text-gray-200 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">
                      Interactive Lessons
                    </h3>
                    <p className="text-gray-200 dark:text-gray-200">
                      Engage with dynamic, multimedia-rich lessons that bring
                      concepts to life.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <CircleCheckIcon className="h-6 w-6 text-gray-200 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">
                      Personalized Feedback
                    </h3>
                    <p className="text-gray-200 dark:text-gray-200">
                      Receive tailored feedback to identify strengths and areas
                      for improvement.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <CircleCheckIcon className="h-6 w-6 text-gray-200 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">
                      Collaborative Learning
                    </h3>
                    <p className="text-gray-200 dark:text-gray-200">
                      Engage with peers and instructors in real-time discussions
                      and group projects.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <CircleCheckIcon className="h-6 w-6 text-gray-200 dark:text-gray-50" />
                    <h3 className="text-lg font-semibold">
                      Adaptive Assessments
                    </h3>
                    <p className="text-gray-200 dark:text-gray-200">
                      Receive personalized assessments that adapt to your
                      learning progress.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied customers about their experience with
                our education SaaS platform.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Jane Doe</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Student
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The interactive lessons and personalized feedback have
                    transformed my learning experience. I've seen a significant
                    improvement in my understanding and grades."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">John Smith</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Instructor
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The collaborative learning tools have made it easier for me
                    to engage with my students and foster a more interactive
                    classroom environment."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="48"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover",
                      }}
                      width="48"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Administrator
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "The adaptive assessments and real-time analytics have
                    streamlined our institution's evaluation process and helped
                    us identify areas for improvement."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
