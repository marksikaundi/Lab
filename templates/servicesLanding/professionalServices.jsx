import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to LupLeg
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Unleash your digital potential with our innovative solutions.
              </p>
              <div className="flex gap-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Features
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover how we can help your business thrive.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <RocketIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid Development</h3>
                <p className="text-muted-foreground">
                  Our agile approach ensures fast and efficient delivery of your
                  projects.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <BoltIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Our platforms are designed to grow with your business needs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <ShieldIcon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Secure Infrastructure
                </h3>
                <p className="text-muted-foreground">
                  We prioritize data security and privacy to protect your
                  valuable assets.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Hear from the people who have experienced our services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">John Doe</h4>
                    <p className="text-muted-foreground">CEO, Acme Inc.</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "LupLeg has been an invaluable partner in our digital\n
                  transformation. Their expertise and dedication have been\n
                  instrumental in the success of our project."
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Jane Smith</h4>
                    <p className="text-muted-foreground">
                      Marketing Manager, Globex Corp.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The team at LupLeg has consistently delivered high-quality\n
                  work and exceeded our expectations. We highly recommend\n
                  their services."
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>C3</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Michael Johnson</h4>
                    <p className="text-muted-foreground">
                      CTO, Technosoft Solutions
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Working with LupLeg has been a game-changer for our\n
                  business. Their innovative solutions have helped us stay\n
                  ahead of the competition."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About LupLeg
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Discover the story behind our company and the team that drives
                our success.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Our History</h3>
                  <p className="text-muted-foreground">
                    LupLeg was founded in 2015 with the mission to empower
                    businesses through innovative digital solutions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Our Team</h3>
                  <p className="text-muted-foreground">
                    Our talented team of experts is dedicated to delivering
                    exceptional results for our clients.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="About Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore the wide range of services we offer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <CodeIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Our team of skilled developers create custom, responsive
                websites that drive results.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <BrushIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Crafting intuitive and visually appealing user experiences that
                captivate your audience.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <BarChartIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-muted-foreground">
                Leveraging data-driven strategies to amplify your online
                presence and drive growth.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <DatabaseIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Database Solutions</h3>
              <p className="text-muted-foreground">
                Designing and implementing secure and scalable database systems
                to manage your data.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <SmartphoneIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
              <p className="text-muted-foreground">
                Crafting intuitive and high-performing mobile applications that
                engage your users.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <CloudIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
              <p className="text-muted-foreground">
                Leveraging cloud technologies to optimize your infrastructure
                and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Portfolio
            </h2>
            <p className="text-muted-foreground text-lg">
              Check out some of our recent client projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Portfolio 1"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Acme Inc. Website</h3>
              <p className="text-muted-foreground">
                Designed and developed a modern, responsive website for a
                leading manufacturing company.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Portfolio 2"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Globex Corp. App</h3>
              <p className="text-muted-foreground">
                Created a user-friendly mobile application to streamline
                operations for a global enterprise.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Portfolio 3"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Technosoft Solutions</h3>
              <p className="text-muted-foreground">
                Delivered a scalable and secure cloud infrastructure for a
                leading technology company.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have a project in mind? Let's discuss how we can help.
              </p>
              <form className="space-y-4">
                <Input type="text" placeholder="Name" className="w-full" />
                <Input type="email" placeholder />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
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

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
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

function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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

function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}
