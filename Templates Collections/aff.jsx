/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ahThezsTRVB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Affordable Plans
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Hostinger Hosting
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Supercharge your website with fast and reliable hosting. Choose
              the perfect plan for your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Single Shared</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Starting at
            </p>
            <p className="text-2xl font-semibold">$1.39/mo</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              1 Website
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              30 GB SSD Storage
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              1 Email Account
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Free SSL</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Premium Shared</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Starting at
            </p>
            <p className="text-2xl font-semibold">$2.59/mo</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              100 Websites
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              100 GB SSD Storage
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Unlimited Email Accounts
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Free SSL</p>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">Business Shared</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Starting at
            </p>
            <p className="text-2xl font-semibold">$3.99/mo</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              100 Websites
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              200 GB SSD Storage
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Unlimited Email Accounts
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Free SSL</p>
          </div>
        </div>
        <div className="flex justify-center gap-2 min-[400px]:gap-4">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contact Sales
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </section>
  );
}
