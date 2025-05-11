import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { ProjectPreviewImage } from "@/components/project-preview-image"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12">My Projects</h1>
          </FadeIn>

          <div className="space-y-16">
            {/* Project 1 */}
            <FadeIn direction="up" delay={0.2}>
              <HoverCard className="border-b border-zinc-900 pb-16">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">Woktok-2.0</h2>
                    <div className="text-zinc-500 mb-4">2025</div>
                    <Badge className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 mb-6">
                      Realtime Chatting Platform 
                    </Badge>

                    <p className="text-zinc-400 mb-6">
                    Real-time messaging platform supporting 100+ concurrent users, leveraging Socket.io for
                    instant communication and JWT authentication for secure access.
                    </p>

                    <a href="https://woktok2-0.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900 group">
                       View Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                           </Button>
                      </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xl font-medium mb-2">Full Stack Web Development</div>
                      <div className="text-zinc-400">
                        React.js, MongoDB, Daisy UI, Socket.io, Tailwind CSS
                      </div>
                    </div>

                    <ProjectPreviewImage src="https://private-user-images.githubusercontent.com/120174191/435480131-975147df-d58d-4d4d-9745-3a745aa94f4c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY5NjI2OTMsIm5iZiI6MTc0Njk2MjM5MywicGF0aCI6Ii8xMjAxNzQxOTEvNDM1NDgwMTMxLTk3NTE0N2RmLWQ1OGQtNGQ0ZC05NzQ1LTNhNzQ1YWE5NGY0Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxMVQxMTE5NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yOWQzYWM5NTMwNmU4NjBlMzY1OGI0Mzc4YjJjNDc2ZmYyOTAwMjdhMzlhNDU0NTZkZjlkZjJiODI5OThmNzc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.UuKq85b2Scgi4q-0LniZm38KzHDAzRgA0ZqjG7_yXBw"alt="Project Preview"/>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>

            {/* Project 2 */}
            <FadeIn direction="up" delay={0.3}>
              <HoverCard className="border-b border-zinc-900 pb-16">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">SpamZap</h2>
                    <div className="text-zinc-500 mb-4">2024</div>
                    <Badge className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 mb-6">
                    Extension for spam detection accross social media apps
                    </Badge>

                    <p className="text-zinc-400 mb-6">
                    Chrome extension using pattern analysis and keyword recognition to identify spam on different social
                    media apps, flagging malicious content and improving user online safety.
                    </p>

                    <a href="https://github.com/DDugs/SpamZap" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900 group">
                       View Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                           </Button>
                      </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xl font-medium mb-2">Cybersecurity Tool</div>
                      <div className="text-zinc-400">Python, JavaScript, Opengraph API, Google Safe Browsing API</div>
                    </div>

                    <ProjectPreviewImage src="https://private-user-images.githubusercontent.com/120174191/373862058-1fef18da-6479-4291-883f-860e6c80c623.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY5NjI3NTAsIm5iZiI6MTc0Njk2MjQ1MCwicGF0aCI6Ii8xMjAxNzQxOTEvMzczODYyMDU4LTFmZWYxOGRhLTY0NzktNDI5MS04ODNmLTg2MGU2YzgwYzYyMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxMVQxMTIwNTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZmFiOGY1N2Q3YWRiMTZhODIxMzk3N2VjYjU4MGNiZTlmYWM5MGQwNjY0M2VlZTdhZmQxOThkMzE1NmY1ZjFjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YWizFBtn8ACTB95UF6XfGAcWvIUWadccOqKKKORHGQ0"alt="Project Preview"/>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>

            {/* Project 3 */}
            <FadeIn direction="up" delay={0.4}>
              <HoverCard>
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">AndroUnlock</h2>
                    <div className="text-zinc-500 mb-4">2023</div>
                    <Badge className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 mb-6">
                    Android pattern lock decode
                    </Badge>

                    <p className="text-zinc-400 mb-6">
                    Android Pattern Lock decoder that recovers unlock patterns by matching unsalted SHA-1 hashes from gesture.key files against a precomputed dictionary.
                    </p>

                    <a href="https://github.com/DDugs/androunlock" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900 group">
                       View Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                           </Button>
                      </a>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xl font-medium mb-2">Cybersecurity Tool</div>
                      <div className="text-zinc-400">Python, Pattern Unlock, Brute Force</div>
                    </div>
                    <ProjectPreviewImage src="https://private-user-images.githubusercontent.com/120174191/435481156-971a124c-cc25-41ec-ad99-81ce617a86a9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY5NjI4MDYsIm5iZiI6MTc0Njk2MjUwNiwicGF0aCI6Ii8xMjAxNzQxOTEvNDM1NDgxMTU2LTk3MWExMjRjLWNjMjUtNDFlYy1hZDk5LTgxY2U2MTdhODZhOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUxMVQxMTIxNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMTNiM2Y3NzM3NzA0YzUyNGFlN2UxZmFjYWE4NWYwMjExODJkOWM4NzY0NzBjZjNiMWE3YzM4MjMwNjY1MTVkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7MRl2QPiTtf9C35VHa4CIivdGA95rRmQa050PuJs0ds"alt="Project Preview"/>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>

                        {/* Project 4 */}
                        <FadeIn direction="up" delay={0.3}>
              <HoverCard className="border-b border-zinc-900 pb-16">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">Attackme</h2>
                    <div className="text-zinc-500 mb-4">2025</div>
                    <Badge className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 mb-6">
                    Honeypot for Websties to detect attacks
                    </Badge>

                    <p className="text-zinc-400 mb-6">
                    Attackme is a honeypot designed for websites to detect and log malicious activity, helping identify potential attacks like bots, scanners, and unauthorized access attempts.
                    </p>

                    <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900 group">
                       View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                      
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xl font-medium mb-2">Cybersecurity Tool</div>
                      <div className="text-zinc-400">Unknown</div>
                    </div>

                    <ProjectPreviewImage src="https://img.freepik.com/free-vector/construction-with-black-yellow-stripes_1017-30755.jpg?t=st=1745164896~exp=1745168496~hmac=e92b49fe0a3868d0a7348f7c5da6d197135a7eee74a7d6ca97cf62a9e9c1263a&w=1380"alt="Project Preview"/>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
