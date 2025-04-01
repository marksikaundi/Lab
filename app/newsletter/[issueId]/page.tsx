"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Calendar, Clock, Share2, Bookmark, BookmarkCheck } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import Link from "next/link"

interface NewsletterIssuePageProps {
  params: {
    issueId: string
  }
}

export default function NewsletterIssuePage({ params }: NewsletterIssuePageProps) {
  const [isSaved, setIsSaved] = useState(false)

  // Mock data for newsletter issues
  const issues = [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      date: "October 15, 2024",
      readTime: "5 min read",
      content: `
        <h2>Getting Started with Next.js 15</h2>
        
        <p>Next.js 15 has been released with exciting new features and improvements. In this newsletter, we'll explore what's new and how to upgrade your projects.</p>
        
        <h3>Key Features in Next.js 15</h3>
        
        <ul>
          <li><strong>Improved Performance</strong>: Next.js 15 includes significant performance optimizations for faster builds and page loads.</li>
          <li><strong>Enhanced Developer Experience</strong>: The developer experience has been improved with better error messages and debugging tools.</li>
          <li><strong>New Rendering Strategies</strong>: Next.js 15 introduces new rendering strategies for even more flexibility in how you build your applications.</li>
        </ul>
        
        <h3>Upgrading to Next.js 15</h3>
        
        <p>Upgrading to Next.js 15 is straightforward for most projects. Start by updating your dependencies:</p>
        
        <pre><code>npm install next@latest react@latest react-dom@latest</code></pre>
        
        <p>Then, check the official migration guide for any breaking changes that might affect your project.</p>
        
        <h3>Example: Using the New Features</h3>
        
        <p>Here's a simple example of how to use one of the new features in Next.js 15:</p>
        
        <pre><code>// app/page.tsx
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js 15</h1>
      <p>This is a simple example of a Next.js 15 application.</p>
    </div>
  )
}</code></pre>
        
        <h3>Conclusion</h3>
        
        <p>Next.js 15 brings exciting improvements to the framework, making it even more powerful and developer-friendly. We encourage you to upgrade your projects and explore the new features.</p>
        
        <p>Stay tuned for more in-depth tutorials on specific Next.js 15 features in our upcoming newsletters!</p>
      `,
      relatedIssues: ["2", "3", "4"],
    },
    {
      id: "2",
      title: "Building Accessible UIs with React",
      date: "September 20, 2024",
      readTime: "7 min read",
      content: `<p>Content for Building Accessible UIs with React...</p>`,
      relatedIssues: ["1", "3", "4"],
    },
    {
      id: "3",
      title: "The Future of Web Development",
      date: "August 15, 2024",
      readTime: "6 min read",
      content: `<p>Content for The Future of Web Development...</p>`,
      relatedIssues: ["1", "2", "4"],
    },
    {
      id: "4",
      title: "Optimizing Performance in React Applications",
      date: "July 10, 2024",
      readTime: "8 min read",
      content: `<p>Content for Optimizing Performance in React Applications...</p>`,
      relatedIssues: ["1", "2", "3"],
    },
  ]

  const issue = issues.find((issue) => issue.id === params.issueId) || issues[0]
  const relatedIssues = issues.filter((i) => issue.relatedIssues.includes(i.id))

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: issue.title,
        text: `Check out this newsletter: ${issue.title}`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/newsletter"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to newsletters
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{issue.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{issue.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{issue.readTime}</span>
              </div>
            </div>

            <div className="flex gap-2 mb-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsSaved(!isSaved)}>
                {isSaved ? (
                  <>
                    <BookmarkCheck className="h-4 w-4 mr-2" />
                    Saved
                  </>
                ) : (
                  <>
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="prose prose-sm md:prose-base lg:prose-lg dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: issue.content }} />
          </div>

          <Separator className="my-12" />

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <NewsletterForm variant="compact" className="max-w-xl" />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Related Newsletters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedIssues.slice(0, 2).map((relatedIssue) => (
                <Link href={`/newsletter/${relatedIssue.id}`} key={relatedIssue.id}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">{relatedIssue.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{relatedIssue.date}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{relatedIssue.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

