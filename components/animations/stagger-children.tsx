"use client"

import React, { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  threshold?: number
  once?: boolean
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0,
  threshold = 0.1,
  once = true,
}: StaggerChildrenProps) {
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

  const childrenArray = React.Children.toArray(children)
  const staggeredChildren = childrenArray.map((child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        style: {
          ...((child as React.ReactElement).props.style || {}),
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : "translateY(10px)",
          transition: `opacity 0.5s ease, transform 0.5s ease`,
          transitionDelay: `${initialDelay + index * staggerDelay}s`,
        },
      })
    }
    return child
  })

  return (
    <div ref={ref} className={cn(className)}>
      {staggeredChildren}
    </div>
  )
}
