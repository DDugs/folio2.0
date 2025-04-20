"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <div
      className="fixed pointer-events-none z-[1] opacity-0 transition-opacity duration-500"
      style={{
        opacity: isVisible ? 0.22 : 0,
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(0, 0, 0, 0) 70%)",
      }}
    />
  )
}
