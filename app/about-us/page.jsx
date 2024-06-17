import MoreAboutUs from "@/components/FeaturesCards/AboutUs";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  About us.
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                  <span className="text-green-900 font-bold">Lupleg</span> is a
                  visionary technology company on a mission to bridge the skills
                  gap and empower individuals and businesses in the digital age.
                  We believe that knowledge is the key to unlocking potential,
                  and we're dedicated to providing innovative educational
                  solutions that make a real difference.
                  <br />
                  Our core offering is a comprehensive suite of educational
                  services, delivered through multiple channels to best suit
                  your needs. This includes traditional on-site instruction, as
                  well as a user-friendly online platform called the Mentor
                  Management System (MMS). The MMS provides a flexible and
                  interactive learning experience, allowing you to access
                  courses and connect with qualified mentors at your own pace.
                  <br />
                  <span className="text-green-900 font-bold">Lupleg</span> goes
                  beyond just education. Our team of passionate experts is also
                  dedicated to developing cutting-edge software solutions to
                  help businesses thrive in today's ever-evolving digital
                  landscape. Whether you're looking to enhance your workforce's
                  skills with targeted training programs or streamline your
                  operations through innovative technology,
                  <span className="text-green-900 font-bold">Lupleg</span> is
                  your trusted partner for achieving success.
                  <br />
                  At <span className="text-green-900 font-bold">Lupleg</span>,
                  we believe in fostering a collaborative community where
                  individuals can learn, grow, and achieve their goals. We're
                  committed to providing exceptional customer service and
                  building long-term partnerships with our clients.
                  <br />
                  Partner with Lupleg and unlock your full potential in the
                  digital world!
                </p>
              </div>
            </div>
            <img
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="/Lupleg Banner.png"
              width="550"
            />
          </div>
        </div>
      </section>
      <MoreAboutUs/>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#122E17] dark:bg-[#122E17]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter  text-white sm:text-5xl">
                Our Mission and Values
              </h2>
              <p className="max-w-[900px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-100">
                <span className="text-white font-bold">Lupleg</span> is a
                catalyst for the next generation of tech pioneers. We ignite a
                passion for innovation by equipping young minds with the cutting
                edge skills and knowledge they need to thrive in the ever
                evolving technology sector. Our comprehensive educational
                programs and industry expert mentors empower these future
                leaders to drive growth, efficiency, and groundbreaking
                advancements. Guided by our core values, we foster a dynamic and
                collaborative environment that fuels creativity, critical
                thinking, and a relentless pursuit of excellence.{" "}
                <span className="text-white font-bold">Lupleg</span> is more
                than just an educational provider; we are architects of the
                future, one empowered tech pioneer at a time.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 pt-10 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2">
                <RocketIcon className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                <h3 className="text-xl font-bold text-white ">Innovation</h3>
                <p className="text-gray-100 dark:text-gray-100">
                  We're constantly exploring emerging trends in artificial
                  intelligence and machine learning to develop future-proof
                  solutions that revolutionize the user experience.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <BriefcaseIcon className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                <h3 className="text-xl font-bold text-white">Expertise</h3>
                <p className="text-gray-100 dark:text-gray-100">
                  Our team of experts leverages their deep understanding to
                  craft exceptional solutions tailored to our users' unique
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <HeartHandshakeIcon className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                <h3 className="text-xl font-bold text-white">Collaboration</h3>
                <p className="text-gray-100 dark:text-gray-100">
                  We believe in fostering strong partnerships with clients,
                  colleagues, and stakeholders, built on open communication and
                  shared goals
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <FileSignatureIcon className="h-8 w-8 text-orange-500 dark:text-orange-400" />
                <h3 className="text-xl font-bold text-white">Integrity</h3>
                <p className="text-gray-100 dark:text-gray-100">
                  Honesty, transparency, and ethical conduct are the guiding
                  principles for our personal growth & product development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meet the Team
            </h2>

            <p className="max-w-[900px] mx-auto space-y-4 text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our talented team of experts is dedicated to delivering
              exceptional results for our users.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 py-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar>
                <AvatarImage alt="Mark Sikaundi" src="/avatars/01.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">Mark Sikaundi</h3>
              <p className="text-gray-500 dark:text-gray-400">CEO</p>
              <div className="flex gap-2">
                <Link
                  className="text-green-500 hover:text-green-900 dark:text-green-400 dark:hover:text-green-50"
                  href="https://linkedin.com/in/marksikaundi"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link
                  className="text-green-500 hover:text-green-900 dark:text-green-900 dark:hover:text-green-50"
                  href="https://twitter.com/Alisikaundi"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar>
                <AvatarImage alt="David Jiri" src="/avatars/02.png" />
                <AvatarFallback>DJ</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">David Jiri</h3>
              <p className="text-gray-500 dark:text-gray-400">CTO</p>
              <div className="flex gap-2">
                <Link
                  className="text-green-500 hover:text-green-900 dark:text-green-900 dark:hover:text-green-50"
                  href="#"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Link>
                <Link
                  className="text-green-500 hover:text-green-900 dark:text-green-900 dark:hover:text-green-50"
                  href="#"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BriefcaseIcon(props) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function FileSignatureIcon(props) {
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
      <path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5" />
      <path d="M8 18h1" />
      <path d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z" />
    </svg>
  );
}

function HeartHandshakeIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
