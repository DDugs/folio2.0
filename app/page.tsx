import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Github, Linkedin, Twitter, Mail, Dribbble, Figma } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { TextReveal } from "@/components/animations/text-reveal"
import { CountUp } from "@/components/animations/count-up"
import { HoverCard } from "@/components/animations/hover-card"
import { ProjectCard } from "@/components/project-card"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center mb-2">
              <div className="relative mb-2">
                <Image
                  src="/d.png?height=400&width=100"
                  alt="Profile"
                  width={100}
                  height={400}
                  className="rounded-full border-4 border-zinc-800 animate-pulse"
                />
                <div className="absolute -right-4 top-0 bg-black rounded-full p-2 border border-zinc-800">
                  <div className="text-xl animate-bounce">👋</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl font-medium">Hey, I'm Dhruv</span>
              </div>
              <div className="text-sm text-zinc-400">// Based in Noida, India</div>
            </div>
          </FadeIn>

          <div className="text-center mb-4">
            <div className="mb-4">
              <TextReveal text="CYBER" className="text-5xl md:text-7xl font-bold text-primary block" delay={0.2} />
              <TextReveal text="SECURITY" className="text-5xl md:text-7xl font-bold text-accent block" delay={0.5} />
              <TextReveal text="ENTHUSIAST" className="text-5xl md:text-7xl font-bold text-white block" delay={0.8} />
              <div className="flex items-center justify-center gap-4">
                <TextReveal text="&" className="text-5xl md:text-7xl font-bold text-white" delay={1.1} />
                <TextReveal text="DEVELOPER." className="text-5xl md:text-7xl font-bold text-secondary" delay={1.3} />
              </div>
            </div>

            <FadeIn delay={1.6}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-0">
                <div className="text-sm text-zinc-400">// CTF Player</div>
                <div className="text-sm text-zinc-400">Certified Ethical Hacker</div>
              </div>

              <p className="max-w-3xl mx-auto mt-1 text-lg text-zinc-300">
              A 3rd-year cybersecurity student, always looking to uncover vulnerabilities and enhance digital security.
              </p>

              <div className="mt-3 flex justify-center">
                <div className="flex items-center gap-2 bg-zinc-900 rounded-full px-4 py-2 hover:bg-zinc-800 transition-colors">
                  <span className="text-green-400 animate-pulse">🟢</span>
                  <span>Let's Connect</span>
                  <Badge className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">dhruv.vishesh.gupta</Badge>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <FadeIn direction="left">
            <div>
              <div className="text-sm text-zinc-500 mb-0">// Secure, Innovate, Protect</div>
              <h2 className="text-3xl font-bold mb-5">
              Securing the digital world with expertise and innovation. Together, we build resilient systems and lead the charge in cybersecurity advancements.
              </h2>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-secondary mb-0">Securing the Future</h3>
                <h3 className="text-2xl font-bold text-secondary mb-2">Architecting Innovation</h3>

                <p className="text-zinc-400 mt-2">
                I focus on building custom security solutions, always pushing the limits and making sure everything is top-notch.
                </p>
              </div>

              <Link href="/about">
                <Button variant="outline" className="mt-8 rounded-full border-zinc-800 hover:bg-zinc-900 group">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.3}>
            <div>
              <div className="text-right text-zinc-400 mb-2">
              My expertise in security, coding, and tech engagement sets me apart in the cybersecurity industry.
              </div>

              <div className="flex justify-end mt-3">
                <div className="bg-zinc-900/50 rounded-full p-6 hover:bg-zinc-900 transition-all duration-500 hover:rotate-12">
                  <Zap className="h-12 w-12 text-accent" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

            <section className="py-10 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-3">My Projects</h2>
          </FadeIn>

          <div className="space-y-8">
            {/* Project 1 */}
            <FadeIn direction="up" delay={0.2}>
              <ProjectCard
                title="Woktok-2.0"
                year="2024"
                tags={["React.js", "MongoDB", "Node.js", "Tailwind CSS"]}
                label="Realtime Chatting Platform"
                link="/projects"
              />
            </FadeIn>

            {/* Project 2 */}
            <FadeIn direction="up" delay={0.3}>
              <ProjectCard
                title="SpamZap"
                year="2024"
                tags={["Python", "JavaScript", "AI & ML"]}
                label="Extension for spam detection accross social media apps"
                link="/projects"
              />
            </FadeIn>

            {/* Project 3 */}
            <FadeIn direction="up" delay={0.4}>
              <ProjectCard
                title="AndroUnlock"
                year="2024"
                tags={["Python", "Tool", "Brute Force"]}
                label="Android pattern lock decoder"
                link="/projects"
              />
            </FadeIn>
          </div>
        </div>
      </section>
            {/* Tech Stack Section */}
            <section className="py-4 px-4 md:px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-3">
              <h2 className="text-3xl font-bold text-primary mb-3">MY TECH STACK</h2>
              <p className="text-xl max-w-4xl mx-auto">
                My expertise spans a diverse range of <span className="text-accent">technologies</span>, enabling me to
                deliver comprehensive and <span className="text-secondary">cutting-edge solutions</span> across various
                platforms.
              </p>
            </div>
          </FadeIn>

         <StaggerChildren staggerDelay={0.1} initialDelay={0.2}>
  <div className="relative overflow-hidden w-full mt-6 group">
    <div className="absolute left-0 top-0 h-full w-96 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 h-full w-96 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    <div className="flex animate-scroll whitespace-nowrap gap-8 px-4 group-hover:[animation-play-state:paused]">
      {[
        {
          name: "React",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Python",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "MongoDB",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Docker",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Burp Suite",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/BurpSuite_logo.svg/900px-BurpSuite_logo.svg.png",
        },
        {
          name: "Wireshark",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wireshark_icon.svg/640px-Wireshark_icon.svg.png",
        },
        {
          name: "Metasploit",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Logo_metasploit.png/640px-Logo_metasploit.png",
        },
        {
          name: "IDA",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ida_M._Tarbell_crop.jpg/640px-Ida_M._Tarbell_crop.jpg",
        },
        {
          name: "Splunk",
          src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Splunk_logo_for_the_software.jpg",
        },
        {
          name: "Kali Linux",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/640px-Kali-dragon-icon.svg.png",
        },
      ]
        .concat(
          [
            {
              name: "React",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
              name: "Node.js",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
              name: "Python",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
              name: "JavaScript",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
              name: "MongoDB",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
              name: "Docker",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
            {
              name: "Git",
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
              name: "Burp Suite",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/BurpSuite_logo.svg/900px-BurpSuite_logo.svg.png",
            },
            {
              name: "Wireshark",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wireshark_icon.svg/640px-Wireshark_icon.svg.png",
            },
            {
              name: "Metasploit",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Logo_metasploit.png/640px-Logo_metasploit.png",
            },
            {
              name: "IDA",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ida_M._Tarbell_crop.jpg/640px-Ida_M._Tarbell_crop.jpg",
            },
            {
              name: "Splunk",
              src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Splunk_logo_for_the_software.jpg",
            },
            {
              name: "Kali Linux",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/640px-Kali-dragon-icon.svg.png",
            },
          ]
        )
        .map((tech, i) => (
          <div key={i} className="flex-shrink-0">
            <HoverCard hoverScale={1.1} hoverRotate={5}>
              <div className="w-16 h-16 bg-zinc-900 rounded-md flex items-center justify-center hover:shadow-lg hover:shadow-primary/20 transition-all">
                <img
                  src={tech.src}
                  alt={tech.name}
                  title={tech.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </HoverCard>
          </div>
        ))}
    </div>
  </div>
</StaggerChildren>


          <FadeIn delay={0.5}>
            <div className="flex justify-center mt-0">
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
