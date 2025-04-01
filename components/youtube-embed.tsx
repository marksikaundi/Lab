/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  autoplay?: boolean
  startAt?: number // Start time in seconds
  endAt?: number // End time in seconds
  showControls?: boolean
  showInfo?: boolean
  showRelated?: boolean
  loop?: boolean
  mute?: boolean
  className?: string
  aspectRatio?: "16:9" | "4:3" | "1:1"
  quality?: "default" | "small" | "medium" | "large" | "hd720" | "hd1080"
  onReady?: () => void
  onPlay?: () => void
  onPause?: () => void
  onEnd?: () => void
}

export function YouTubeEmbed({
  videoId,
  title = "YouTube video player",
  autoplay = false,
  startAt,
  endAt,
  showControls = true,
  showInfo = true,
  showRelated = false,
  loop = false,
  mute = false,
  className = "",
  aspectRatio = "16:9",
  onReady,
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [, setIsPlaying] = useState(autoplay)
  const [showThumbnail, setShowThumbnail] = useState(!autoplay)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Get aspect ratio padding
  const getAspectRatioPadding = () => {
    switch (aspectRatio) {
      case "4:3":
        return "75%"
      case "1:1":
        return "100%"
      case "16:9":
      default:
        return "56.25%"
    }
  }

  // Build YouTube URL with parameters
  const buildYouTubeUrl = () => {
    const params = new URLSearchParams({
      rel: showRelated ? "1" : "0",
      showinfo: showInfo ? "1" : "0",
      controls: showControls ? "1" : "0",
      autoplay: autoplay ? "1" : "0",
      mute: mute ? "1" : "0",
      loop: loop ? "1" : "0",
      modestbranding: "1",
      playsinline: "1",
      enablejsapi: "1",
    })

    if (startAt) params.append("start", startAt.toString())
    if (endAt) params.append("end", endAt.toString())
    if (loop) params.append("playlist", videoId)

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
  }

  // Handle click on thumbnail to play video
  const handleThumbnailClick = () => {
    setShowThumbnail(false)
    setIsPlaying(true)

    // If iframe is already loaded, we need to play it manually
    if (iframeRef.current && isLoaded) {
      try {
        // Use YouTube iframe API to play
        ;(iframeRef.current as any).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
      } catch (error) {
        console.error("Error playing YouTube video:", error)
      }
    }
  }

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoaded(true)
    onReady?.()
  }

  // Get high-resolution thumbnail URL
  const getThumbnailUrl = () => {
    // Try to get the highest quality thumbnail available
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  return (
    <div className={`relative rounded-lg overflow-hidden bg-black ${className}`}>
      <div className="relative" style={{ paddingBottom: getAspectRatioPadding() }}>
        {showThumbnail ? (
          <>
            <Image
              src={getThumbnailUrl() || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/40 transition-colors"
              onClick={handleThumbnailClick}
            >
              <div className="bg-red-600 rounded-full p-4 shadow-lg">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
          </>
        ) : (
          <iframe
            ref={iframeRef}
            src={buildYouTubeUrl()}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        )}
      </div>
    </div>
  )
}

// Helper function to extract YouTube video ID from various URL formats
export function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null

  // Regular expressions for different YouTube URL formats
  const patterns = [
    /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
    /^https?:\/\/(?:www\.)?youtube\.com\/embed\/([^?]+)/,
    /^https?:\/\/youtu\.be\/([^?]+)/,
    /^https?:\/\/(?:www\.)?youtube\.com\/v\/([^?]+)/,
    /^https?:\/\/(?:www\.)?youtube\.com\/user\/[^/]+\/\?v=([^&]+)/,
    /^https?:\/\/(?:www\.)?youtube\.com\/attribution_link\?.*v%3D([^%&]+)/,
    /^https?:\/\/(?:www\.)?youtube-nocookie\.com\/embed\/([^?]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

