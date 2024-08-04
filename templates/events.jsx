import Link from "next/link";

export default function Events() {
  return (
    <div className="bg-background p-6 sm:p-8 md:p-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Upcoming Events</h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-md hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            <CalendarIcon className="w-4 h-4" />
            View All
          </Link>
        </div>
        <div className="grid gap-6 sm:gap-8">
          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 sm:w-14">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    Annual Company Picnic
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    June 15, 2024
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClockIcon className="w-4 h-4" />
                  <span>12:00 PM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>Central Park, New York</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Join us for our annual company picnic in Central Park. Enjoy
                  food, games, and fun with your colleagues.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 sm:w-14">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    Product Launch Party
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    July 1, 2024
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClockIcon className="w-4 h-4" />
                  <span>7:00 PM - 11:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>The Rooftop, San Francisco</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Join us to celebrate the launch of our new product line. Mix
                  and mingle with the team, enjoy drinks and hors d'oeuvres.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-card p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-muted rounded-md flex items-center justify-center aspect-square w-12 sm:w-14">
                <CalendarIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    Tech Meetup and Networking
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    August 10, 2024
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ClockIcon className="w-4 h-4" />
                  <span>6:30 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4" />
                  <span>The Innovation Hub, Seattle</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Join us for an evening of networking and discussion around the
                  latest trends in the tech industry. Meet new people, share
                  ideas, and make valuable connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
