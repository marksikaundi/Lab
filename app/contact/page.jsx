import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Have a question or want to work together? Fill out the form and
                we'll get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[150px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>
              <Button className="w-full sm:w-auto" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Information
              </h2>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Get in touch with us using the information below.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <LocateIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Office Address</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    123 Main Street, Lusaka ZM 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    (+260) 7765 78583
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                <div className="space-y-1">
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    dev@lupleg.website
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800">
              {/* <img
                alt="Map"
                className="aspect-[2/1] w-full rounded-lg object-cover"
                height="400"
                src="/placeholder.svg"
                width="800"
              /> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
