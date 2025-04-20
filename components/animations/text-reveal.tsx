"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function TextReveal({
  text,
  className,
  delay = 0,
  duration = 0.05,
  threshold = 0.1,
  once = true,
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const characters = text.split("")

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block transition-all"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(20px)",
            transitionProperty: "opacity, transform",
            transitionDuration: `${duration * 2}s`,
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDelay: `${delay + index * duration}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
