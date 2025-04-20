"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  className?: string
  threshold?: number
  once?: boolean
  formatType?: "number" | "percent" | "plus"
}

export function CountUp({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
  formatType = "number",
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const countRef = useRef<number>(start)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)

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
          if (rafRef.current) {
            cancelAnimationFrame(rafRef.current)
            rafRef.current = null
          }
          setCount(start)
          countRef.current = start
          startTimeRef.current = null
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
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [once, threshold, start])

  useEffect(() => {
    if (!isVisible) return

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const elapsed = timestamp - startTimeRef.current
      const delayMs = delay * 1000

      if (elapsed < delayMs) {
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min((elapsed - delayMs) / (duration * 1000), 1)
      const easedProgress = easeOutQuart(progress)
      const nextCount = start + (end - start) * easedProgress

      countRef.current = nextCount
      setCount(nextCount)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isVisible, start, end, duration, delay])

  // Easing function for smoother animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }

  // Format the count based on the formatType
  const formatCount = (value: number): string => {
    const roundedValue = Math.round(value)
    switch (formatType) {
      case "percent":
        return `${roundedValue}%`
      case "plus":
        return `${roundedValue}+`
      default:
        return roundedValue.toString()
    }
  }

  return (
    <div ref={ref} className={cn(className)}>
      {formatCount(count)}
    </div>
  )
}
