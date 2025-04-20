"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  hoverRotate?: number
}

export function HoverCard({ children, className, hoverScale = 1.02, hoverRotate = 0 }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn("transition-all duration-300 ease-out", className)}
      style={{
        transform: isHovered ? `scale(${hoverScale}) rotate(${hoverRotate}deg)` : "scale(1) rotate(0deg)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
