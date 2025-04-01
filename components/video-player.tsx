/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack } from "lucide-react"
import { Slider } from "@/components/ui/slider"

interface VideoPlayerProps {
  videoUrl: string
  title?: string
}

export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  // Check if it's a YouTube URL
  const isYoutubeUrl = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")

  // Extract YouTube video ID
  const getYoutubeVideoId = (url: string): string | null => {
    const regexps = [
      /^https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
      /^https?:\/\/(?:www\.)?youtube\.com\/embed\/([^?]+)/,
      /^https?:\/\/youtu\.be\/([^?]+)/,
    ]

    for (const regex of regexps) {
      const match = url.match(regex)
      if (match) return match[1]
    }

    return null
  }

  const youtubeVideoId = isYoutubeUrl ? getYoutubeVideoId(videoUrl) : null

  // If it's a YouTube video, render the YouTube embed
  if (isYoutubeUrl && youtubeVideoId) {
    return (
      <div className="relative rounded-lg overflow-hidden bg-black">
        <div className="relative pt-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            className="absolute inset-0 w-full h-full"
            title={title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  }

  // For non-YouTube videos, use the original player implementation
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Format time in MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  // Handle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle seeking
  const handleSeek = (value: number[]) => {
    if (videoRef.current) {
      videoRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0]
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
      if (isMuted) {
        videoRef.current.volume = volume || 1
      } else {
        videoRef.current.volume = 0
      }
    }
  }

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`)
        })
      } else {
        document.exitFullscreen()
      }
    }
  }

  // Skip forward/backward
  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  // Update time as video plays
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => {
      setCurrentTime(video.currentTime)
    }

    const updateDuration = () => {
      setDuration(video.duration)
    }

    const handleEnd = () => {
      setIsPlaying(false)
      setCurrentTime(0)
      if (video) video.currentTime = 0
    }

    video.addEventListener("timeupdate", updateTime)
    video.addEventListener("loadedmetadata", updateDuration)
    video.addEventListener("ended", handleEnd)

    return () => {
      video.removeEventListener("timeupdate", updateTime)
      video.removeEventListener("loadedmetadata", updateDuration)
      video.removeEventListener("ended", handleEnd)
    }
  }, [videoUrl])

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative rounded-lg overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="w-full aspect-video"
        src={videoUrl}
        preload="metadata"
        playsInline
        onClick={togglePlay}
      >
        Your browser does not support the video tag.
      </video>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex flex-col gap-2">
          {/* Progress bar */}
          <Slider
            value={[currentTime]}
            min={0}
            max={duration || 100}
            step={0.1}
            onValueChange={handleSeek}
            className="cursor-pointer"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Play/Pause button */}
              <button onClick={togglePlay} className="text-white hover:text-primary transition-colors">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>

              {/* Skip buttons */}
              <button onClick={() => skip(-10)} className="text-white hover:text-primary transition-colors">
                <SkipBack className="h-5 w-5" />
              </button>

              <button onClick={() => skip(10)} className="text-white hover:text-primary transition-colors">
                <SkipForward className="h-5 w-5" />
              </button>

              {/* Time display */}
              <div className="text-white text-xs">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Volume control */}
              <button onClick={toggleMute} className="text-white hover:text-primary transition-colors">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              <div className="w-20 hidden sm:block">
                <Slider value={[isMuted ? 0 : volume]} min={0} max={1} step={0.1} onValueChange={handleVolumeChange} />
              </div>

              {/* Fullscreen button */}
              <button onClick={toggleFullscreen} className="text-white hover:text-primary transition-colors">
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Play button overlay (when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
          <div className="bg-black/50 rounded-full p-4">
            <Play className="h-8 w-8 text-white" />
          </div>
        </div>
      )}
    </div>
  )
}

