import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Sponsor Us
              </h1>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Join us in making a difference. Become a sponsor and help us
                achieve our mission.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Our Mission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are a non-profit organization dedicated to empowering our
                  local community. Our mission is to provide educational
                  resources, job training, and support services to those in
                  need.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Our Impact</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Over the past 5 years, we have helped over 10,000 individuals
                  gain access to life-changing resources and opportunities. Your
                  sponsorship will allow us to continue expanding our reach and
                  creating a more equitable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Sponsorship Opportunities
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Choose from our various sponsorship packages to find the best
                fit for your organization.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="space-y-4">
                <CardHeader>
                  <CardTitle>Platinum</CardTitle>
                  <CardDescription>$10,000</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Logo placement on all event materials
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Dedicated social media posts
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      10 event tickets
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Prominent logo placement on website
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="space-y-4">
                <CardHeader>
                  <CardTitle>Gold</CardTitle>
                  <CardDescription>$5,000</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Logo placement on event materials
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Social media mentions
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      5 event tickets
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Logo placement on website
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="space-y-4">
                <CardHeader>
                  <CardTitle>Silver</CardTitle>
                  <CardDescription>$2,500</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Logo placement on event materials
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Social media mentions
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      2 event tickets
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-green-500" />
                      Logo placement on website
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Why Sponsor Us?
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Become a part of our mission and unlock valuable benefits for
                your organization.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <StoreIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Brand Exposure</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Increase your brand visibility and reach our engaged audience
                  through various marketing channels.
                </p>
              </div>
              <div className="space-y-2">
                <GroupIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Community Engagement</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with our community and demonstrate your commitment to
                  social responsibility.
                </p>
              </div>
              <div className="space-y-2">
                <AlignRightIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">
                  Alignment with Our Mission
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Align your brand with our mission and values to showcase your
                  dedication to making a positive impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Audience
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Reach a diverse and engaged audience through your sponsorship.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <InfoIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Demographics</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our audience consists of a diverse group of individuals aged
                  18-65, with a focus on local community members.
                </p>
              </div>
              <div className="space-y-2">
                <FocusIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Interests</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our audience is passionate about social impact, education, and
                  community development. They are influential decision-makers
                  and opinion leaders.
                </p>
              </div>
              <div className="space-y-2">
                <LinkIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Reach</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our events and digital platforms reach over 50,000 individuals
                  in the local area, providing excellent visibility for your
                  brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Sponsors
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                See what our previous sponsors have to say about their
                experience.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="space-y-4">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <img src="/placeholder.svg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        John Doe
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        CEO, Acme Inc.
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Sponsoring this organization has been a fantastic\n
                    experience for our brand. We've seen a significant\n
                    increase in brand awareness and customer\n engagement."
                  </p>
                </CardContent>
              </Card>
              <Card className="space-y-4">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <img src="/placeholder.svg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Sarah Miller
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        CMO, Globex Corporation
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "We're thrilled to be a sponsor of this\n organization.
                    Their events and initiatives have\n provided us with
                    valuable opportunities to connect\n with our target
                    audience."
                  </p>
                </CardContent>
              </Card>
              <Card className="space-y-4">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <img src="/placeholder.svg" />
                      <AvatarFallback>LW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">
                        Lisa Wang
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Director of Marketing, Stark Industries
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    "Sponsoring this organization has been a great way\n for us
                    to demonstrate our commitment to social\n responsibility and
                    give back to the community."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Sponsorship Process
              </h2>
              <p className="mt-4 text-gray-500 md:text-xl dark:text-gray-400">
                Learn more about the steps to become a sponsor.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <AppWindowIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-bold">Application</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Complete our online sponsorship application form to express
                  your interest.
                </p>
              </div>
              <div className="space-y-2">
                <CheckIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                <h3 className="text" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AlignRightIcon(props) {
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
      <line x1="21" x2="3" y1="6" y2="6" />
      <line x1="21" x2="9" y1="12" y2="12" />
      <line x1="21" x2="7" y1="18" y2="18" />
    </svg>
  );
}

function AppWindowIcon(props) {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
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

function FocusIcon(props) {
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
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  );
}

function GroupIcon(props) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function InfoIcon(props) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
