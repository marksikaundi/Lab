import Link from "next/link";

export default function Affiliates() {
  return (
    <div className="bg-gray-50 p-10">
      <div className="flex flex-col gap-2 text-center">
        <div className="space-y-2">
          <div className="mt-10 inline-block rounded bg-green-300 px-3 py-2 text-sm dark:bg-gray-800">
            Affordable Plans
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Buy Hostinger Hosting Today
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Supercharge your website with fast and reliable hosting. Choose the
            plan for your needs and get a 20% discount.
          </p>
        </div>
      </div>
      <div className="container px-4 py-8 md:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg border  border-gray-200 bg-white shadow-sm  dark:border-gray-800 dark:bg-gray-950">
            <div className="border-b border-gray-200  px-4 py-4  dark:border-gray-800">
              <h3 className="text-xl font-semibold tracking-wide">
                Web Hosting
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Level-up with more power and enhanced features
              </p>
            </div>
            <div className="grid items-start gap-2 p-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4" />
                  <span className="text-sm">100 websites</span>
                </div>
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Free domain & SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Free Pre-Built Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">200 GB NVMe Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">
                  Free Automatic Website Migration
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Free Email</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">WordPress Staging Tool</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Daily And On-Demand Backups</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">WordPress Staging Tool</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">WordPress AI Tools</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 border-t  border-gray-200 p-4">
              <span className="text-2xl font-semibold">$3.99/mo</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Renewal $8.99/mo
              </span>
            </div>
            <div className="p-4">
              <Link
                className="inline-flex w-full items-center justify-center rounded-b-md bg-green-950 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="https://hostinger.com?REFERRALCODE=1EMMANUELMA82"
              >
                Choose Plan
              </Link>
            </div>
            <div className="border-t border-gray-200 p-4  dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Affiliates: Buy through and get up to 71% discount.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border-2  border-green-950 bg-green-950 shadow-lg  dark:border-gray-100 dark:bg-gray-950">
            <div className="border-b border-white  px-4 py-4">
              <h3 className="text-xl font-semibold  text-white tracking-wide">
                Cloud Hosting
              </h3>
              <p className="text-sm text-gray-300 dark:text-gray-400">
                Optimized for scaling professional websites
              </p>
            </div>
            <div className="grid items-start gap-2 p-4">
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">300 Websites</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">250 GB NVMe Storage</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">6 GB RAM</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">4 CPU Cores</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Daily Backups ($25.08 Value)</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Free Email</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Unlimited Free SSL</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Unlimited Bandwidth</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Free Domain ($9.99 Value)</span>
              </div>
              <div className="flex text-white items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">Dedicated IP Address</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 border-t  border-white p-4">
              <span className="text-2xl text-white font-semibold">
                $14.99/mo
              </span>
              <span className="text-xs text-gray-300 dark:text-gray-400">
                Renewal $32.99/mo
              </span>
            </div>
            <div className="p-4">
              <Link
                className="inline-flex w-full items-center justify-center rounded-b-md border  border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="https://hostinger.com?REFERRALCODE=1EMMANUELMA82"
              >
                Choose Plan
              </Link>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border  border-gray-200 bg-white shadow-sm  dark:border-gray-800 dark:bg-gray-950">
            <div className="border-b border-gray-200  px-4 py-4  dark:border-gray-800">
              <h3 className="text-xl font-semibold tracking-wide">
                VPS Hosting
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                High-performance VPS Hosting.
              </p>
            </div>
            <div className="grid items-start gap-2 p-4">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">2 vCPU Cores</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">8 GB RAM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">100 GB NVMe Disk Space</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4" />
                <span className="text-sm">8 TB Bandwidth</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 border-t border-gray-200  p-4">
              <span className="text-2xl font-semibold">$6.99 /mo</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Renewal $10.99/mo
              </span>
            </div>
            <div className="p-4">
              <Link
                className="inline-flex w-full items-center justify-center rounded-b-md bg-green-950 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://hostinger.com?REFERRALCODE=1EMMANUELMA82"
              >
                Choose Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
