import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Roadmap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-4 my-10 sm:p-6">
      <div className="col-span-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-semibold text-2xl">Lupleg Roadmap →</h2>
          <p className="mx-auto max-w-md p-5 text-gray-800 md:text-xl lg:text-base xl:text-xl dark:text-gray-800">
            Master in-demand tech skills and land your dream tech job.
          </p>
        </div>
      </div>
      <Card className="bg-green-950 border border-green-950">
        <CardHeader>
          <CardTitle>30 Days of Code</CardTitle>
          <CardDescription className="text-gray-300">
            A comprehensive roadmap to kickstart your coding journey in 30 days.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-semibold">Key Milestones</div>
            <ul className="grid gap-2 text-white">
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Learn the basics of programming
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Understand data structures and algorithms
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Practice problem-solving skills
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Build a simple project
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Explore different programming languages
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            <Link href="/30-days-of-code">Start Now</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="bg-green-950 border border-green-950">
        <CardHeader>
          <CardTitle>Frontend Development</CardTitle>
          <CardDescription className="text-gray-300">
            A 30-day roadmap to become a proficient frontend developer.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-semibold">Key Topics</div>
            <ul className="grid gap-2 text-gray-300">
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                HTML and CSS fundamentals
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                JavaScript and DOM manipulation
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Responsive web design
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                React.js and modern frontend frameworks
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Styling with Tailwind CSS
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            <Link href="/frontend-development">Start Now</Link>
          </Button>
        </CardFooter>
      </Card>
      <Card className="bg-green-950 border border-green-950">
        <CardHeader>
          <CardTitle>Backend Development</CardTitle>
          <CardDescription className="text-gray-300">
            A 30-day roadmap to become a proficient backend developer.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <div className="font-semibold">Key Topics</div>
            <ul className="grid gap-2 text-gray-300">
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Fundamentals of server-side programming
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Database design and management
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                RESTful API development
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Node.js and Express.js
              </li>
              <li>
                <CheckIcon className="w-4 h-4 mr-2 inline-block" />
                Authentication and authorization
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            <Link href="/backend-development">Start Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
