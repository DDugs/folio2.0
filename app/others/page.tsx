import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { FadeIn } from "@/components/animations/fade-in"
import { TextReveal } from "@/components/animations/text-reveal"
import { HoverCard } from "@/components/animations/hover-card"

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <FadeIn>
              <div className="inline-block">
                <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                  <div className="h-px w-12 bg-zinc-700"></div>
                  <span></span>
                </div>dhruv.vishesh.gupta
              </div>
            </FadeIn>
            
            <TextReveal 
              text="Extracurricular" 
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary" 
              delay={0.2} 
            />
            
            <FadeIn delay={0.8}>
              <p className="mt-6 text-xl text-zinc-400 max-w-2xl">
              A snapshot of my achievements, certifications and interests in cybersecurity and development.
              </p>
            </FadeIn>
          </div>
          
          {/* Featured Work - Timeline Style */}
          <div className="relative border-l border-zinc-800 pl-8 ml-4 mt-24">
            {/* Work Item 1 */}
            <WorkTimelineItem 
              year="2024"
              title="HackathonX"
              description="Secured 1st place in HackathonX CTF conducted by the National Cyber Security Research Council at IIT Madras."
              tags={["Machine Learning", "Data Analytics", "Python", "Predictive Modeling"]}
              label="Capture the Flag"
              index={1}
            />
            
            {/* Work Item 2 */}
            <WorkTimelineItem 
              year="2024"
              title="Nambia University"
              description=" Secured 2nd place in Nust CTF, a worldwide CTF organized by Namibia University of Science and Technology."
              tags={["Teamwork", "Cybersecurity", "Reverse Engineering", "VAPT"]}
              label="Capture the Flag"
              index={2}
            />
            
            {/* Work Item 3 */}
            <WorkTimelineItem 
              year="2024"
              title="Nasscom DSCI"
              description="Secured 12th place in a CTF organized by DSCI and EY under AISS 2024 at Aerocity, Delhi."
              tags={["Figma", "Notion", "User Research", "Prototyping"]}
              label="Capture the Flag"
              index={3}
            />
            
            {/* Work Item 4 */}
            <WorkTimelineItem 
              year="2023"
              title="Haxnation"
              description="Discovered and reported an IDOR vulnerability on the Haxnation website, risking unauthorized access to data."
              tags={["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"]}
              label="Bug Bounty"
              index={4}
            />
            
            {/* Work Item 5 */}
            <WorkTimelineItem 
              year="2024"
              title="Smart India Hackathon"
              description="Participated in Smart India Hackathon 2024, advancing to the second round at SRM University."
              tags={["React", "Firebase", "Redux", "Material UI"]}
              label="Hackathon"
              index={5}
            />
          </div>
          
          {/* Grid Layout Work Section */}
          <div className="mt-25">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12">Certifications</h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Card 1 */}
              <FadeIn direction="up" delay={0.2}>
                <ProjectCard 
                  title="Certified Ethical Hacker"
                  description="EC Council"
                  tags={["Penetration Testing", "Ethical Hacking", "Vulnerability Assessment"]}
                  label="Cybersecurity"
                />
              </FadeIn>
              
              {/* Project Card 2 */}
              <FadeIn direction="up" delay={0.3}>
                <ProjectCard 
                  title="Certified Network Security Practitioner"
                  description="The SecOps Group"
                  tags={["Cpmputer Networking", "Network Security", "OSI Layer"]}
                  label="Network Security"
                />
              </FadeIn>
              
              {/* Project Card 3 */}
              <FadeIn direction="up" delay={0.4}>
                <ProjectCard 
                  title="Certified Foundations Associate"
                  description="Oracle"
                  tags={["Cloud Computing", "OCI Services", "Database Services"]}
                  label="Cloud Infrastructure"
                />
              </FadeIn>
              
              {/* Project Card 4 */}
              <FadeIn direction="up" delay={0.5}>
                <ProjectCard 
                  title="IBM Relational Databases"
                  description="Coursera"
                  tags={["RDBMS", "MySQL", "NoSQL"]}
                  label="Database Management"
                />
              </FadeIn>
              {/* Project Card 5 */}
                <FadeIn direction="up" delay={0.5}>
                <ProjectCard 
                  title="Machine Learning Foundations"
                  description="Amazon Academy"
                  tags={["AI & ML", "Python"]}
                  label="Machine Learning"
                />
              </FadeIn>
              {/* Project Card 6 */}
                <FadeIn direction="up" delay={0.5}>
                <ProjectCard 
                  title="Networking Essentials"
                  description="Cisco Networking Academy"
                  tags={["Networking", "TCP/IP", "OSI Model"]}
                  label="Cybersecurity"
                />
              </FadeIn>
            </div>
          </div>
          
          {/* Experimental Work Section */}
          <div className="mt-16">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-12">Still Learning</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 gap-3">
  {/* Experimental Project 1 */}
  <FadeIn>
    <div className="group relative scale-75">
      <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-8xl">🧪</div>
      </div>

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
        <div className="text-center p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-3xl font-semibold mb-1">TryHackme</h3>
          <p className="text-xl text-zinc-300 mb-3">
            Top 1% on TryHackme out of 3M+ users by solving 180+ challenges.
          </p>
          <div className="flex justify-center gap-2">
          </div>
        </div>
      </div>

      <div className="absolute -bottom-3 left-3">
        <Badge className="bg-secondary text-black text-xl px-2 py-0.5">Cybersecurity</Badge>
      </div>
    </div>
  </FadeIn>
              
              {/* Experimental Project 2 */}
              <FadeIn delay={0.2}>
                <div className="group relative scale-75">
                  <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-8xl">🎮</div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <div className="text-center p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-3xl font-bold mb-2">Bug Bounty Hunting</h3>
                      <p className="text-xl text-zinc-300 mb-4">Hunting bugs on websites for bounties</p>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-3 left-3">
                    <Badge className="bg-accent text-xl text-black">Vulnerability Disclosure</Badge>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

interface WorkTimelineItemProps {
  year: string
  title: string
  description: string
  tags: string[]
  label: string
  index: number
}

function WorkTimelineItem({ year, title, description, tags, label, index }: WorkTimelineItemProps) {
  return (
    <FadeIn delay={0.1 * index}>
      <div className="mb-16 relative">
        {/* Timeline dot */}
        <div className="absolute -left-12 top-0 w-4 h-4 rounded-full bg-primary"></div>
        
        <div className="group">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <span className="text-zinc-500 text-sm">{year}</span>
            <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
            
            {/* Rounded label that appears on hover */}
            <div className="absolute md:relative opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-red-500 text-white text-sm px-4 py-1 rounded-full">
                {label}
              </div>
            </div>
          </div>
          
          <p className="text-zinc-400 mb-4 max-w-3xl">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-zinc-900 text-zinc-300 border-zinc-700">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  label: string
}

function ProjectCard({ title, description, tags, label }: ProjectCardProps) {
  return (
    <div className="group relative bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 hover:border-primary/50 transition-colors">
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <Badge key={i} variant="outline" className="bg-zinc-900 text-zinc-300 border-zinc-700">
            {tag}
          </Badge>
        ))}
      </div>
      
      {/* Rounded label that appears on hover */}
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-red-500 text-white text-sm px-4 py-1 rounded-full whitespace-nowrap">
          {label}
        </div>
        
      </div>
    </div>
  )
}
