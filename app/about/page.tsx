import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <FadeIn direction="left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-primary">About</span> Me
                </h1>

                <p className="text-zinc-300 mb-6">
                   I'm a cybersecurity enthusiast actively learning the foundations of ethical hacking, network defense, and secure coding. My focus is on understanding how systems can be attacked—and more importantly, how to protect them.
                 </p>

                 <p className="text-zinc-300 mb-6">
                      My journey in tech started with a deep curiosity about how digital systems operate and how vulnerabilities can be exploited. That curiosity has grown into a mission to build safer, more resilient systems through continuous learning and hands-on exploration.
                 </p>

                <a href="https://drive.google.com/file/d/1PuA2YNKCbkW1aexJ_qJ0zIoaUKMp82b-/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900 group">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                </a>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="flex justify-center">
                <div className="relative">
                  <div>
                    <Image src="/d.png" alt="Profile" width={200} height={400} className="rounded-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-black rounded-full p-4 border border-zinc-800">
                    <div className="text-2xl animate-bounce">👨‍💻</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="border-t border-zinc-900 pt-16 mt-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-primary mb-12">Experience & Education</h2>
            </FadeIn>

            <div className="space-y-12">
              {/* Experience */}
              <div>
                <FadeIn>
                  <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
                </FadeIn>

                <StaggerChildren staggerDelay={0.2}>
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-xl font-medium">ML & Data Analyst</div>
                        <div className="text-zinc-500">2024 - Present</div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="text-xl font-medium text-accent mb-2">Ford Motors</div>
                        <p className="text-zinc-400">
                        Analyzed recall data to identify failure trends and root causes. Built predictive models using machine learning and clustering to forecast recalls, assess risks, and enhance vehicle safety and reliability
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-xl font-medium">Technical Lead(Sudo)</div>
                        <div className="text-zinc-500">2024 - 2025</div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="text-xl font-medium text-accent mb-2">HackTheBox Chennai</div>
                        <p className="text-zinc-400">
                        Managed Team demonstrating strong leadership, designed 10+ challenges for Where the Flag 2.0, Shell-Lock and Hackp46lu. Ranked 9th nationally in Capture the Flag competitions.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-xl font-medium">Cybersecurity Intern</div>
                        <div className="text-zinc-500">2023</div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="text-xl font-medium text-accent mb-2">Palo Alto Networks</div>
                        <p className="text-zinc-400">
                        Gained hands-on expertise in cybersecurity, cloud, and network security, while enhancing CTF and hackathon performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerChildren>
              </div>

              {/* Education */}
              <div>
                <FadeIn>
                  <h3 className="text-2xl font-bold mb-6">Education</h3>
                </FadeIn>

                <StaggerChildren staggerDelay={0.2}>
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-xl font-medium">Bachelor's in Computer Science</div>
                        <div className="text-zinc-500">2022 - 2026</div>
                      </div>
                      <div className="md:col-span-2">
                        <div className="text-xl font-medium text-accent mb-2">SRM University</div>
                        <p className="text-zinc-400">
                          Computer Science Engineering with Specialization in cybersecurity with a focus on forensics and web technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerChildren>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
