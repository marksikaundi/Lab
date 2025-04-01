"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Video, Users, BookOpen, LogOut } from "lucide-react"
import Link from "next/link"
import Cookies from "js-cookie"

export default function AdminDashboard() {
  const router = useRouter()
  const [courseCount, setCourseCount] = useState(6)
  const [userCount, setUserCount] = useState(1245)
  const [recentCourses, setRecentCourses] = useState([
    { id: "1", title: "Build a YouTube Clone", date: "2023-03-15", views: 1245 },
    { id: "2", title: "Build a Google Docs Clone", date: "2023-02-28", views: 987 },
    { id: "3", title: "Build a Jira Clone", date: "2023-01-10", views: 1532 },
  ])

  const handleLogout = () => {
    // Remove the admin token cookie
    Cookies.remove("admin_token")
    // Redirect to login page
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Link href="/admin/upload">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Course
              </Button>
            </Link>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courseCount}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userCount}</div>
              <p className="text-xs text-muted-foreground">+145 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,456</div>
              <p className="text-xs text-muted-foreground">+2,345 from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-4">
          <TabsList>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="courses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Courses</CardTitle>
                <CardDescription>Your recently published courses and their performance.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="grid grid-cols-4 font-medium text-sm text-muted-foreground">
                    <div>Title</div>
                    <div>Date</div>
                    <div>Views</div>
                    <div className="text-right">Actions</div>
                  </div>
                  {recentCourses.map((course) => (
                    <div key={course.id} className="grid grid-cols-4 py-3 border-b text-sm">
                      <div className="font-medium">{course.title}</div>
                      <div>{course.date}</div>
                      <div>{course.views}</div>
                      <div className="text-right">
                        <Link href={`/admin/edit/${course.id}`}>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage your platform users.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">User management functionality will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>View platform analytics and insights.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Analytics dashboard will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

