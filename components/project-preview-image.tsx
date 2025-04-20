"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectPreviewImageProps {
  src: string
  alt: string
  className?: string
}

export function ProjectPreviewImage({ src, alt, className }: ProjectPreviewImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("aspect-video bg-zinc-900 rounded-lg overflow-hidden relative group", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-all duration-500 group-hover:scale-105",
          isLoading ? "opacity-0" : "opacity-100",
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-zinc-700 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  )
}
