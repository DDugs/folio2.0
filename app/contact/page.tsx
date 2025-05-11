"use client"

import { useRef, useState } from "react"
import emailjs from "emailjs-com"
import toast from "react-hot-toast"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Mail, Dribbble, Send } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/animations/fade-in"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "service_onkvfyd",        // your service ID
        "template_bfu97bt",       // your template ID
        form.current!,
        "QqOrVK0pbcVatmp3B"  // your EmailJS public key
      )
      .then(
        () => {
          toast.success("Email sent successfully!")
          form.current?.reset()
          setLoading(false)
        },
        (error) => {
          toast.error("Failed to send email.")
          console.error(error)
          setLoading(false)
        }
      )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn direction="left">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-primary">Contact</span> Me
                </h1>

                <p className="text-zinc-300 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-medium mb-4">Connect With Me</h2>
                    <div className="flex flex-wrap gap-3">
                      <Link href="https://www.linkedin.com/in/ddugs" target="_blank" className="bg-black p-3 rounded-md hover:bg-zinc-800 transition-all hover:scale-110">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="https://x.com/guptiyahaikya" target="_blank" className="bg-black p-3 rounded-md hover:bg-zinc-800 transition-all hover:scale-110">
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link href="https://discord.com/users/dhruv5005" target="_blank" className="bg-black p-3 rounded-md hover:bg-zinc-800 transition-all hover:scale-110">
                        <Dribbble className="h-5 w-5" />
                      </Link>
                      <Link href="https://github.com/ddugs" target="_blank" className="bg-black p-3 rounded-md hover:bg-zinc-800 transition-all hover:scale-110">
                        <Github className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-medium mb-4">Email Me</h2>
                    <Link href="mailto:guptadhruv2105@gmail.com" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                      guptadhruv2105@gmail.com
                    </Link>
                  </div>

                  <div>
                    <h2 className="text-xl font-medium mb-4">Location</h2>
                    <p className="text-zinc-400">Noida, India</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800 hover:border-primary/20 transition-colors">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" name="name" required placeholder="Your name" className="bg-zinc-800 border-zinc-700" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" name="email" type="email" required placeholder="Your email" className="bg-zinc-800 border-zinc-700" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" name="subject" required placeholder="Subject" className="bg-zinc-800 border-zinc-700" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" name="message" required placeholder="Your message" className="bg-zinc-800 border-zinc-700 min-h-[100px]" />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-all" disabled={loading}>
                    <Send className="h-4 w-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
