import Link from "next/link";

export default function MoreAboutUs() {
  return (
    <div className="flex flex-col min-h-[100dvh] font-inter">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#122E17] px-3 py-1 text-sm text-white">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-5xl">
                Comprehensive Solutions for Your Business
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our team of experts is dedicated to providing a wide range of
                services to meet the diverse needs of our clients. From
                strategic consulting to cutting-edge technology implementation,
                we have the expertise to help your business thrive.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <RocketIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Strategic Consulting
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our experienced consultants work closely with you to develop
                tailored strategies that align with your business goals and
                objectives.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <CodeIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Software Development
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of skilled developers creates custom software solutions
                that streamline your operations and drive innovation.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <CloudIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Cloud Solutions
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We help you leverage the power of cloud computing to improve
                scalability, security, and cost-efficiency for your business.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <CogIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  IT Support
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our dedicated IT support team ensures your systems are running
                smoothly, with 24/7 monitoring and prompt issue resolution.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <BoltIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Digital Transformation
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We help you navigate the digital landscape, implementing
                cutting-edge technologies to drive efficiency and
                competitiveness.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <ShieldIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Cybersecurity
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our comprehensive cybersecurity solutions protect your business
                from evolving threats, ensuring the safety of your data and
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#122E17] px-3 py-1 text-sm text-white">
                Why Choose Us?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-5xl">
                Discover the Advantages of Working with Us
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At our company, we pride ourselves on our expertise, customer
                service, and commitment to delivering exceptional results.
                Here's why you should choose us as your trusted partner.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <StarIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Industry Expertise
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of experts has deep industry knowledge and experience,
                enabling us to provide tailored solutions that address your
                unique challenges.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <ThumbsUpIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Customer Service
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We are committed to building long-term partnerships with our
                clients, providing personalized attention and responsive support
                throughout the engagement.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center gap-3">
                <BoltIcon className="h-8 w-8 text-[#122E17]" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Innovative Solutions
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We are constantly exploring new technologies and best practices
                to deliver cutting-edge solutions that drive measurable results
                for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
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

function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
