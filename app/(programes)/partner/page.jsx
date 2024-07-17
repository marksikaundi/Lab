import Link from "next/link";

export default function Partnership() {
  return (
    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold mb-4 tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Partner with Lupleg
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Lupleg is a leading provider of educational solutions. Join our
                partner network and help schools and districts transform their
                learning experiences.
              </p>
              <div className="space-x-4 mt-6 pb-12 ">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded bg-green-950 p-6 font-semibold text-md text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tighter sm:text-5xl p-3">
                Benefits of Partnering with Lupleg
              </h2>
              <p className="max-w-[900px] text-gray-500  md:text-xl lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lupleg's partner program offers a range of benefits to help you
                grow your business and better serve your customers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h2 className="text-xl font-bold">Increased Revenue</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Earn commissions and referral fees by promoting Lupleg's
                solutions to your customers.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-xl font-bold">Exclusive Discounts</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Enjoy special pricing and discounts on Lupleg products and
                services.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-xl font-bold">Dedicated Support</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Receive personalized support and training to help you
                effectively sell and implement Lupleg solutions.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-xl font-bold">Marketing Opportunities</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Collaborate with Lupleg on joint marketing campaigns to reach
                new customers.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-xl font-bold">Access to Resources</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Leverage Lupleg's educational content, sales tools, and
                technical resources to support your customers.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-xl font-bold">Flexible Partnership Models</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Choose from a variety of partnership options to best fit your
                business needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Partnership Opportunities
              </h2>
              <p className="max-w-[900px]  text-gray-500  md:text-xl lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lupleg offers a variety of partnership models to fit your
                business needs and goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold  ">Reseller</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Sell Lupleg's solutions directly to your customers and earn
                commissions on each sale.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold  ">Referral</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Refer customers to Lupleg and earn a percentage of the revenue
                generated from each sale.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold  ">Technology Partner</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Integrate Lupleg's solutions with your own products and services
                to provide a seamless experience for your customers.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-2xl font-bold  ">Consulting Partner</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Offer implementation, training, and support services to Lupleg
                customers and earn fees for your expertise.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold  ">Affiliate</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Promote Lupleg's solutions on your website or through your
                marketing channels and earn a commission on each sale.
              </p>
            </div>
            <div className="grid gap-1">
              <h2 className="text-2xl font-bold  ">Strategic Partner</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Collaborate with Lupleg on joint go-to-market strategies,
                product development, and other strategic initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
