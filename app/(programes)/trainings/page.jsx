import { Button } from "@/components/ui/button";

export default function Trainings() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-white text-black dark:bg-white dark:text-black">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Elevate Your Software Development Skills
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Unlock your full potential with Lupleg's comprehensive
                  training programs. Gain practical expertise and stay ahead of
                  the curve in the ever-evolving world of software development.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Full-Stack Development
                    </h2>
                    <p className="mt-2 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Become a versatile full-stack developer with our
                      comprehensive training program.
                    </p>
                  </div>
                  <Button variant="link">Learn More</Button>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">
                      Front-End Development
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        React.js
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        CSS Frameworks (Tailwind, Bootstrap)
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Responsive Design
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        State Management
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">
                      Back-End Development
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Node.js
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Express.js
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Database Integration (SQL, NoSQL)
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        API Development
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">
                      Deployment & DevOps
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        CI/CD Pipelines
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Cloud Deployment (AWS, Azure, GCP)
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Containerization (Docker)
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Infrastructure as Code
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Data Engineering
                    </h2>
                    <p className="mt-2 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Unlock the power of data with our comprehensive data
                      engineering training program.
                    </p>
                  </div>
                  <Button variant="link">Learn More</Button>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">Data Pipelines</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        ETL Processes
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Data Transformation
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Batch and Streaming Data
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Data Orchestration
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">Data Warehousing</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Data Modeling
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Dimensional Modeling
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Data Partitioning
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Data Optimization
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">Data Analytics</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Data Visualization
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Predictive Analytics
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Machine Learning
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Business Intelligence
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                      Cloud Engineering
                    </h2>
                    <p className="mt-2 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                      Become a cloud expert with our comprehensive training
                      program on cloud infrastructure and architecture.
                    </p>
                  </div>
                  <Button variant="link">Learn More</Button>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">
                      Cloud Fundamentals
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Cloud Computing Concepts
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Cloud Service Models (IaaS, PaaS, SaaS)
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Cloud Deployment Models
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Cloud Security and Compliance
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">
                      Cloud Architecture
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Serverless Computing
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Microservices Architecture
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        High Availability and Scalability
                      </li>
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Disaster Recovery and Backup
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                    <h3 className="text-lg font-semibold">Cloud Operations</h3>
                    <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                      <li>
                        <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                        Infrastructure as Code
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
