"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, Plus, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { YouTubeEmbed, extractYouTubeVideoId } from "@/components/youtube-embed"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const { toast } = useToast()
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [chapters, setChapters] = useState([{ title: "", duration: "", youtubeUrl: "" }])
  const [isUploading, setIsUploading] = useState(false)
  const [youtubeUrlError, setYoutubeUrlError] = useState("")

  const handleYoutubeUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setYoutubeUrl(url)

    if (url && !extractYouTubeVideoId(url)) {
      setYoutubeUrlError("Please enter a valid YouTube URL")
    } else {
      setYoutubeUrlError("")
    }
  }

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnailFile(e.target.files[0])
    }
  }

  const addChapter = () => {
    setChapters([...chapters, { title: "", duration: "", youtubeUrl: "" }])
  }

  const removeChapter = (index: number) => {
    const newChapters = [...chapters]
    newChapters.splice(index, 1)
    setChapters(newChapters)
  }

  const updateChapter = (index: number, field: string, value: string) => {
    const newChapters = [...chapters]
    newChapters[index] = {
      ...newChapters[index],
      [field]: value,
    }

    // Validate YouTube URL for chapters
    if (field === "youtubeUrl" && value && !extractYouTubeVideoId(value)) {
      toast({
        title: "Invalid YouTube URL",
        description: `Chapter ${index + 1} has an invalid YouTube URL`,
        variant: "destructive",
      })
    }

    setChapters(newChapters)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !description || !category || !youtubeUrl) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // Validate main YouTube URL
    if (!extractYouTubeVideoId(youtubeUrl)) {
      toast({
        title: "Invalid YouTube URL",
        description: "Please enter a valid YouTube URL for the main course video",
        variant: "destructive",
      })
      return
    }

    // Validate chapter YouTube URLs
    const invalidChapters = chapters.filter(
      (chapter) => chapter.youtubeUrl && !extractYouTubeVideoId(chapter.youtubeUrl),
    )

    if (invalidChapters.length > 0) {
      toast({
        title: "Invalid YouTube URLs",
        description: "Some chapters have invalid YouTube URLs",
        variant: "destructive",
      })
      return
    }

    setIsUploading(true)

    try {
      // In a real app, you would save the course data to your database
      // including the YouTube video IDs

      // Simulating upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Course uploaded successfully",
        description: "Your course has been uploaded and is now available",
      })

      // Redirect to admin dashboard
      router.push("/admin/dashboard")
    } catch {
      toast({
        title: "Upload failed",
        description: "There was an error uploading your course",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Upload New Course</h1>
          <Button variant="outline" onClick={() => router.push("/admin/dashboard")}>
            Back to Dashboard
          </Button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Details</CardTitle>
                  <CardDescription>Enter the basic information about your course</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Course Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Build a YouTube Clone with Next.js"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what students will learn in this course"
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Next.js">Next.js</SelectItem>
                        <SelectItem value="React.js">React.js</SelectItem>
                        <SelectItem value="Node.js">Node.js</SelectItem>
                        <SelectItem value="MySQL">MySQL</SelectItem>
                        <SelectItem value="MongoDB">MongoDB</SelectItem>
                        <SelectItem value="Tailwind">Tailwind</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Chapters</CardTitle>
                  <CardDescription>Add chapters to your course with YouTube videos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {chapters.map((chapter, index) => (
                    <div key={index} className="space-y-4 border p-4 rounded-md">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Chapter {index + 1}</h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeChapter(index)}
                          disabled={chapters.length === 1}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`chapter-title-${index}`}>Title</Label>
                        <Input
                          id={`chapter-title-${index}`}
                          placeholder="Chapter title"
                          value={chapter.title}
                          onChange={(e) => updateChapter(index, "title", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`chapter-duration-${index}`}>Duration</Label>
                        <Input
                          id={`chapter-duration-${index}`}
                          placeholder="e.g. 10:30"
                          value={chapter.duration}
                          onChange={(e) => updateChapter(index, "duration", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`chapter-youtube-${index}`}>YouTube URL</Label>
                        <Input
                          id={`chapter-youtube-${index}`}
                          placeholder="https://youtube.com/watch?v=..."
                          value={chapter.youtubeUrl}
                          onChange={(e) => updateChapter(index, "youtubeUrl", e.target.value)}
                        />
                      </div>

                      {chapter.youtubeUrl && extractYouTubeVideoId(chapter.youtubeUrl) && (
                        <div className="mt-2">
                          <YouTubeEmbed
                            videoId={extractYouTubeVideoId(chapter.youtubeUrl)!}
                            title={chapter.title || `Chapter ${index + 1}`}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  <Button type="button" variant="outline" size="sm" className="mt-2" onClick={addChapter}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Chapter
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Media</CardTitle>
                  <CardDescription>Add YouTube video and thumbnail for your course</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="youtube-url">Main YouTube Video URL</Label>
                    <div className="relative">
                      <Input
                        id="youtube-url"
                        placeholder="https://youtube.com/watch?v=..."
                        value={youtubeUrl}
                        onChange={handleYoutubeUrlChange}
                        className={youtubeUrlError ? "border-red-500" : ""}
                      />
                      {youtubeUrlError && (
                        <div className="flex items-center mt-1 text-xs text-red-500">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {youtubeUrlError}
                        </div>
                      )}
                    </div>
                  </div>

                  {youtubeUrl && extractYouTubeVideoId(youtubeUrl) && (
                    <div className="mt-4">
                      <YouTubeEmbed videoId={extractYouTubeVideoId(youtubeUrl)!} title={title || "Course Preview"} />
                    </div>
                  )}

                  <div className="space-y-2 mt-6">
                    <Label htmlFor="thumbnail">Custom Thumbnail (Optional)</Label>
                    <p className="text-xs text-muted-foreground mb-2">
                      By default, we&apos;ll use the YouTube video thumbnail. You can upload a custom one if you prefer.
                    </p>
                    <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                      {thumbnailFile ? (
                        <div className="text-center">
                          <div className="w-full aspect-video bg-muted rounded-md mb-2 overflow-hidden">
                            
                            <Image
                              src={thumbnailFile ? URL.createObjectURL(thumbnailFile) : "/placeholder.svg"}
                              alt="Thumbnail preview"
                              className="w-full h-full object-cover"
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <Button type="button" variant="ghost" size="sm" onClick={() => setThumbnailFile(null)}>
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <label
                          htmlFor="thumbnail-upload"
                          className="flex flex-col items-center justify-center cursor-pointer"
                        >
                          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-sm font-medium">Upload custom thumbnail</p>
                          <p className="text-xs text-muted-foreground">JPG, PNG or GIF (16:9 ratio)</p>
                          <Input
                            id="thumbnail-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleThumbnailChange}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isUploading}>
                    {isUploading ? "Uploading..." : "Upload Course"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

