export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Course Categories
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the perfect course to expand your knowledge and skills.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 transition-all hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BookIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Literature</h3>
            <p className="text-sm text-muted-foreground">
              Explore the world of literature and dive into classic novels,
              poetry, and more.
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 transition-all hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <CodeIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Computer Science</h3>
            <p className="text-sm text-muted-foreground">
              Learn the fundamentals of programming, algorithms, and software
              development.
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 transition-all hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <BrushIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Design</h3>
            <p className="text-sm text-muted-foreground">
              Unleash your creativity and master the art of design, from UX to
              visual design.
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 transition-all hover:shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <BeakerIcon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold">Science</h3>
            <p className="text-sm text-muted-foreground">
              Dive into the world of science and explore topics like physics,
              biology, and chemistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeakerIcon(props) {
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
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BrushIcon(props) {
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
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
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
