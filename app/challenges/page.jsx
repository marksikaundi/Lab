import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Challenges() {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:p-6">
      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Build a Todo App</h3>
          <p className="text-sm text-muted-foreground">Lorem ipsum</p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Implement a Carousel</h3>
          <p className="text-sm text-muted-foreground">
            Build a responsive carousel component with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Create a Dashboard</h3>
          <p className="text-sm text-muted-foreground">
            Design a responsive dashboard layout with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Build a Landing Page</h3>
          <p className="text-sm text-muted-foreground">
            Create a modern and responsive landing page with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Implement a Sidebar</h3>
          <p className="text-sm text-muted-foreground">
            Build a responsive and interactive sidebar with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Create a Product Gallery</h3>
          <p className="text-sm text-muted-foreground">
            Design a responsive product gallery with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Design Shopping Cart</h3>
          <p className="text-sm text-muted-foreground">
            Building a fully responsive Shopping cart with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Create a Price Plan</h3>
          <p className="text-sm text-muted-foreground">
            Design a responsive price plan with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg bg-background shadow-lg transition-transform duration-300 ease-in-out group hover:shadow-xl hover:-translate-y-2">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Challenge</span>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-bold">Create a Header Menu</h3>
          <p className="text-sm text-muted-foreground">
            Implement a responsive header menu with Tailwind CSS.
          </p>
          <Button variant="outline" size="sm" className="mt-4">
            View Details
          </Button>
        </div>
      </div>
    </section>
  );
}
