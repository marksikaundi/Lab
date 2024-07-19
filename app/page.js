"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useUser();
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-black text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Coding Challenge Dashboard</h1>
        <div className="flex items-center gap-4">
          Hello 👋, {user?.fullName}
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Upcoming Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
                <CardDescription>November 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="solid" size="sm">
                  <Link href="/#challenge/1">Sign Up →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
                <CardDescription>November 30, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="solid" size="sm">
                  <Link href="/#challenge/1"> Sign Up →</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
                <CardDescription>December 20, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="solid" size="sm">
                  <Link href="/#challenge/1">Sign Up →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Active Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={75} />
                </div>
                <Button variant="solid" size="sm">
                  <Link href="/code-challenges">View Challenge</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={50} />
                </div>
                <Button variant="solid" size="sm">
                  <Link href="/code-challenges">View Challenge</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <Progress value={90} />
                </div>
                <Button variant="solid" size="sm">
                  <Link href="/code-challenges">View Challenge</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Past Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Score: 95</span>
                  <Button variant="solid" size="sm">
                    <Link href="/#code-challenges">View Results</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Score: 85</span>
                  <Button variant="solid" size="sm">
                    <Link href="/#code-challenges">View Results</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span>Score: 90</span>
                  <Button variant="solid" size="sm">
                    <Link href="/#code-challenges">View Results</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
