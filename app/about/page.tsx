import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"

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
                  I'm a passionate UI/UX Designer and Full-Stack Developer with a focus on creating digital experiences
                  that are both beautiful and functional. With expertise in modern web technologies, I bring ideas to
                  life through clean code and intuitive design.
                </p>

                <p className="text-zinc-300 mb-6">
                  My journey in the tech world began with a curiosity about how things work, which evolved into a career
                  building digital products that solve real problems. I believe in the power of technology to transform
                  businesses and improve lives.
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

          <div className="border-t border-zinc-900 pt-16">
            <FadeIn>
              <h2 className="text-3xl font-bold text-primary mb-12">My Expertise</h2>
            </FadeIn>

            <StaggerChildren staggerDelay={0.2}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Expertise 1 */}
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800 hover:border-primary/50 transition-colors">
                  <div className="text-secondary text-xl font-medium mb-4">Cybersecurity</div>
                  <p className="text-zinc-400 mb-4">
                  Gained hands-on experience in cybersecurity, focusing on real-world security challenges and vulnerability assessment.
                  </p>
                  <ul className="text-zinc-500 space-y-2">
                    <li>• Penetration Testing</li>
                    <li>• Malware Analysis</li>
                    <li>• Network Forensics</li>
                    <li>• Ethical Hacking</li>
                    <li>• Linux</li>
                  </ul>
                </div>

                {/* Expertise 2 */}
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800 hover:border-primary/50 transition-colors">
                  <div className="text-secondary text-xl font-medium mb-4">CTF Player</div>
                  <p className="text-zinc-400 mb-4">
                  Led and participated in CTF competitions, using cybersecurity tools to identify vulnerabilities and drive team success.
                  </p>
                  <ul className="text-zinc-500 space-y-2">
                    <li>• Wireshark</li>
                    <li>• Burp Suite</li>
                    <li>• IDA Pro</li>
                    <li>• Nmap</li>
                    <li>• Metasploit</li>
                  </ul>
                </div>

                {/* Expertise 3 */}
                <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800 hover:border-primary/50 transition-colors">
                  <div className="text-secondary text-xl font-medium mb-4">Development</div>
                  <p className="text-zinc-400 mb-4">
                  Designed scalable backend solutions, integrating APIs and managing data for efficient, secure web applications.
                  </p>
                  <ul className="text-zinc-500 space-y-2">
                    <li>• React & Node.js</li>
                    <li>• MySQL & MongoDB</li>
                    <li>• Docker</li>
                    <li>• Python</li>
                    <li>• Javascript</li>
                  </ul>
                </div>
              </div>
            </StaggerChildren>
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
    </main>
  )
}
