import Link from "next/link";
import { Button } from "@/components/ui/button";
import Plan from "@/components/FeaturesCards/Plan";

export default function Premium() {
  return (
    <div className="w-full">
      <section className="w-full bg-gradient-to-r from-[#133415] to-[#0c2d0d] py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Premium Member

          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
          Become the best version of yourself by improving your coding skills!


          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-[#000000] font-medium transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            prefetch={false}
          >
            Get Premium
          </Link>
        </div>
      </section>

      <Plan/>
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <RocketIcon className="h-8 w-8 text-[#5E3BEE] mb-4" />
              <h3 className="text-xl font-bold mb-2">Unlimited Projects</h3>
              <p className="text-muted-foreground">
                Create as many projects as you need, without any limits.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <LayersIcon className="h-8 w-8 text-[#5E3BEE] mb-4" />
              <h3 className="text-xl font-bold mb-2">Unlimited Components</h3>
              <p className="text-muted-foreground">
                Build your component library without any restrictions.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <CodeIcon className="h-8 w-8 text-[#5E3BEE] mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced Coding Tools</h3>
              <p className="text-muted-foreground">
                Access our powerful coding tools to streamline your workflow.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <UsersIcon className="h-8 w-8 text-[#5E3BEE] mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Unlimited Collaborators
              </h3>
              <p className="text-muted-foreground">
                Invite your team to collaborate on projects seamlessly.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <LockIcon className="h-8 w-8 text-[#5E3BEE] mb-4" />
              <h3 className="text-xl font-bold mb-2">Private Projects</h3>
              <p className="text-muted-foreground">
                Keep your projects secure and private with our Pro plan.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <DownloadIcon className="h-8 w-8 text-[#5E3BEE] mb-4" />
              <h3 className="text-xl font-bold mb-2">Export to Code</h3>
              <p className="text-muted-foreground">
                Export your designs directly to production-ready code.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Holizontal Line */}
      <section className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Plan</h2>
              <p className="text-muted-foreground mb-8">
                Collaborate with your team on unlimited projects.
              </p>
              <div className="flex items-center mb-4">
                <UsersIcon className="h-6 w-6 text-[#5E3BEE] mr-2" />
                <span className="text-lg font-medium">
                  Unlimited Collaborators
                </span>
              </div>
              <div className="flex items-center mb-4">
                <LockIcon className="h-6 w-6 text-[#5E3BEE] mr-2" />
                <span className="text-lg font-medium">Private Projects</span>
              </div>
              <div className="flex items-center mb-8">
                <DownloadIcon className="h-6 w-6 text-[#5E3BEE] mr-2" />
                <span className="text-lg font-medium">Export to Code</span>
              </div>
              <Button>Get Team Plan</Button>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Individual Plan
              </h2>
              <p className="text-muted-foreground mb-8">
                Get started with your personal projects.
              </p>
              <div className="flex items-center mb-4">
                <RocketIcon className="h-6 w-6 text-[#5E3BEE] mr-2" />
                <span className="text-lg font-medium">Unlimited Projects</span>
              </div>
              <div className="flex items-center mb-4">
                <LayersIcon className="h-6 w-6 text-[#5E3BEE] mr-2" />
                <span className="text-lg font-medium">
                  Unlimited Components
                </span>
              </div>
              <div className="flex items-center mb-8">
                <CodeIcon className="h-6 w-6 text-[#5E3BEE] mr-2" />
                <span className="text-lg font-medium">
                  Advanced Coding Tools
                </span>
              </div>
              <Button>Get Individual Plan</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
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

function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function LayersIcon(props) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
