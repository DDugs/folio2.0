"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'
import { HoverCard } from "@/components/animations/hover-card"

interface ProjectCardProps {
  title: string
  year: string
  description?: string
  tags: string[]
  label: string
  link?: string
}

export function ProjectCard({ title, year, description, tags, label, link = "#" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <HoverCard className="border-b border-zinc-900 pb-8">
      <div 
        className="grid md:grid-cols-2 gap-8 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <div className="text-zinc-500 mb-4">{year}</div>
          
          {/* Rounded label that appears on hover */}
          <div 
            className={`
              absolute transform transition-all duration-300 ease-in-out
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
            `}
          >
            <div className="bg-red-500 text-white text-sm px-4 py-1 rounded-full whitespace-nowrap">
              {label}
            </div>
          </div>
          
          {description && <p className="text-zinc-400 mt-8">{description}</p>}
        </div>
        
        <div className="space-y-2">
          <div className="text-xl font-medium">Full-stack Web Development</div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-zinc-900 text-zinc-300 border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Link href={link} className="inline-flex items-center mt-4 text-zinc-400 hover:text-white transition-colors group">
            <span>View Project</span>
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
        </div>
      </div>
    </HoverCard>
  )
}
