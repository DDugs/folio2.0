import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { HoverCard } from "@/components/animations/hover-card"
import { ProjectPreviewImage } from "@/components/project-preview-image"

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
                    <div className="text-zinc-500 mb-4">2024</div>
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

                    <ProjectPreviewImage src="https://private-user-images.githubusercontent.com/120174191/435480131-975147df-d58d-4d4d-9745-3a745aa94f4c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUxNjU0MDAsIm5iZiI6MTc0NTE2NTEwMCwicGF0aCI6Ii8xMjAxNzQxOTEvNDM1NDgwMTMxLTk3NTE0N2RmLWQ1OGQtNGQ0ZC05NzQ1LTNhNzQ1YWE5NGY0Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQyMFQxNjA1MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZjRlZDQwOTQ3ZjAxNjU3NmUxYWE1YTk1MjgyZGM3ZjE2ZTU4YmQ1NDA5ZjVjNzU0YTRjNmVmYTI0Y2VkZmJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.jTN30xGIYQa5Fi0L2KVOjIbPI8FhImRYzSg9JMyMTls"alt="Project Preview"/>
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

                    <ProjectPreviewImage src="https://private-user-images.githubusercontent.com/120174191/373862058-1fef18da-6479-4291-883f-860e6c80c623.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUxNjU0NjIsIm5iZiI6MTc0NTE2NTE2MiwicGF0aCI6Ii8xMjAxNzQxOTEvMzczODYyMDU4LTFmZWYxOGRhLTY0NzktNDI5MS04ODNmLTg2MGU2YzgwYzYyMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQyMFQxNjA2MDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MWNjOGM1ZTg1NGI3ODIyM2E5ZGI5NTJkN2EyYWYwMzFiMTVhZTMxZWFhMzQwNDg4ZWZmNjMxMzQ2NTcwYTZhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.oGTOptE0RSzMsnFPylDyKAKXtJe5iuxEqJ_QrG8NYPA"alt="Project Preview"/>
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
                    <ProjectPreviewImage src="https://private-user-images.githubusercontent.com/120174191/435481156-971a124c-cc25-41ec-ad99-81ce617a86a9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUxNjYzNDgsIm5iZiI6MTc0NTE2NjA0OCwicGF0aCI6Ii8xMjAxNzQxOTEvNDM1NDgxMTU2LTk3MWExMjRjLWNjMjUtNDFlYy1hZDk5LTgxY2U2MTdhODZhOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQyMFQxNjIwNDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ZTE0NjNjODE1Yjk2ZDk3YWY2YzQ4NjhiMmVlNThhMGI3YTIyYTBiMjYxZDk5NWU3ZWM3NTUyMzM3NDgyMjM0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.yMFMDU859J9wtNyO5hPTJ_iNgzRcoMVmOq2_yXms7Qo"alt="Project Preview"/>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>

                        {/* Project 4 */}
                        <FadeIn direction="up" delay={0.3}>
              <HoverCard className="border-b border-zinc-900 pb-16">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-4xl font-bold mb-2">HoneyPot</h2>
                    <div className="text-zinc-500 mb-4">2025</div>
                    <Badge className="bg-zinc-900 text-zinc-300 hover:bg-zinc-800 mb-6">
                    Extension for spam detection accross social media apps
                    </Badge>

                    <p className="text-zinc-400 mb-6">
                    Chrome extension using pattern analysis and keyword recognition to identify spam on different social
                    media apps, flagging malicious content and improving user online safety.
                    </p>

                    <Button variant="outline" className="rounded-full border-zinc-800 hover:bg-zinc-900 group">
                       View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                      
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xl font-medium mb-2">Cybersecurity Tool</div>
                      <div className="text-zinc-400">Python, JavaScript, Opengraph API, Google Safe Browsing API</div>
                    </div>

                    <ProjectPreviewImage src="https://img.freepik.com/free-vector/construction-with-black-yellow-stripes_1017-30755.jpg?t=st=1745164896~exp=1745168496~hmac=e92b49fe0a3868d0a7348f7c5da6d197135a7eee74a7d6ca97cf62a9e9c1263a&w=1380"alt="Project Preview"/>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
