import Link from "next/link";

export default function Frontend() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-gray-100 py-6 md:py-12 lg:py-20 xl:py-24 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Frontend Challenges
            </h1>
            <p className="mx-auto max-w-md p-5 text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Solve real world frontend challenges and improve your frontend skills.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  SaaS Landing Page
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  Free
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This User Interface(UI) Is a complete landing page which you can
                learn and practice you frontend coding skills , you can use
                either use frameworks(nextjs, reactjs) or it can be done using
                HTML, CSS & Javascript. For fast learning you can even get
                source codes for free.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="SaaS Landing Page"
                className="object-cover"
                src="https://i.imgur.com/OiUAYxe.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Mastering React with JavaScript
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Learn React from Facebook engineers. This course will take your
                React skills to the next level.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="React Course"
                className="object-cover"
                src="https://i.imgur.com/OiUAYxe.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Freelancing 101
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $20
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to Freelancing basics starting
                from scratch to landing your first client on Upwork. .
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Freelancing Course"
                className="object-cover"
                src="https://i.imgur.com/OiUAYxe.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Git & GitHub for Beginners
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to how to use git and github for
                version control and collaboration with other developers.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Git & GitHub Course"
                className="object-cover"
                src="https://i.imgur.com/OiUAYxe.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Git & GitHub for Beginners
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to how to use git and github for
                version control and collaboration with other developers.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Git & GitHub Course"
                className="object-cover"
                src="https://i.imgur.com/OiUAYxe.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Git & GitHub for Beginners
                </h2>
                <p className="text-2xl font-bold tracking-tighter text-gray-500 sm:text-3xl dark:text-gray-400">
                  $10
                </p>
              </div>
              <p className="mx-auto max-w-md text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                This course will introduce you to how to use git and github for
                version control and collaboration with other developers.
              </p>
              <Link
                href="#"
                className="btn inline-block w-full text-green-900 hover:text-orange-500 md:w-auto"
              >
                Learn more →
              </Link>
            </div>
            <div className="aspect-w-16 aspect-h-9 mx-auto overflow-hidden rounded-xl sm:order-last sm:aspect-video">
              <img
                alt="Git & GitHub Course"
                className="object-cover"
                src="https://i.imgur.com/OiUAYxe.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
