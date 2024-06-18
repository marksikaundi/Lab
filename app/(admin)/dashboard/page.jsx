"use client";

import { CiLogout } from "react-icons/ci";
import { SignOutButton, useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Component() {
  const { user } = useUser();
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Coding Challenge Dashboard</h1>
        <div className="flex items-center gap-4">
          Hello 👋, {user?.fullName} <SignOutButton><CiLogout className="cursor-pointer" />
          </SignOutButton>
        </div>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Upcoming Challenges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Algorithm Challenge</CardTitle>
                <CardDescription>June 15, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="solid" size="sm">
                  Sign Up
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Data Structures Challenge</CardTitle>
                <CardDescription>July 1, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="solid" size="sm">
                  Sign Up
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coding Interview Challenge</CardTitle>
                <CardDescription>August 1, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="solid" size="sm">
                  Sign Up
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
                  View Challenge
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
                  View Challenge
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
                  View Challenge
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
                    View Results
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
                    View Results
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
                    View Results
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-4">Leaderboard 🏆</h2>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>1000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>950</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell>900</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>4</TableCell>
                  <TableCell>Sarah Lee</TableCell>
                  <TableCell>850</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5</TableCell>
                  <TableCell>Tom Wilson</TableCell>
                  <TableCell>800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </section>
      </main>
    </div>
  );
}
