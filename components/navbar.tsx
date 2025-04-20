"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Briefcase, User, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-6 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-zinc-900 rounded-full px-4 py-2">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <span className="font-medium">dhruv.vishesh.gupta</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-zinc-900 rounded-full px-2 py-1">
          <NavItem href="/" active={pathname === "/"}>
            <Home className="h-4 w-4 mr-2" />
            Home
          </NavItem>
          <NavItem href="/projects" active={pathname === "/projects"}>
            <Briefcase className="h-4 w-4 mr-2" />
            Projects
          </NavItem>
          <NavItem href="/others" active={pathname === "/others"}>
            <Briefcase className="h-4 w-4 mr-2" />
            Others
          </NavItem>
          <NavItem href="/about" active={pathname === "/about"}>
            <User className="h-4 w-4 mr-2" />
            About Me
          </NavItem>
        </nav>

        <Link href="/contact">
          <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900">
            <Mail className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
        </Link>
      </div>
    </header>
  )
}

function NavItem({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-4 py-2 rounded-full transition-colors",
        active ? "bg-zinc-800" : "hover:bg-zinc-800/50",
      )}
    >
      {children}
    </Link>
  )
}
