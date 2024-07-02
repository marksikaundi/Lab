import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Plan() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose a plan that fits your needs
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our subscription plans offer flexible options to support your
              business at every stage.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-background p-6 flex flex-col gap-4">
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Starter</h3>
              <p className="text-muted-foreground">
                Perfect for small businesses and individuals.
              </p>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>5 GB storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>1 user</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Basic analytics</span>
              </div>
            </div>
            <Button size="lg" className="bg-green-950 mt-4">
              Get Started
            </Button>
          </Card>
          <Card className="bg-green-950 p-6 flex flex-col gap-4 text-primary-foreground">
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-primary-foreground">
                For growing businesses and teams.
              </p>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-primary-foreground">/month</span>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary-foreground" />
                <span>50 GB storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary-foreground" />
                <span>5 users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary-foreground" />
                <span>Advanced analytics</span>
              </div>
            </div>
            <Button variant="secondary" size="lg" className="mt-4">
              Get Started
            </Button>
          </Card>
          <Card className="bg-background p-6 flex flex-col gap-4">
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="text-muted-foreground">
                For large businesses and organizations.
              </p>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Unlimited storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Unlimited users</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-5 h-5 fill-primary" />
                <span>Enterprise-grade analytics</span>
              </div>
            </div>
            <Button size="lg" className="bg-green-950 mt-4">
              Get Started
            </Button>
          </Card>
        </div>
      </div>
    </section>
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
