import Link from "next/link"
import { ArrowRight, Dribbble, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-medium mb-1">Where aesthetics &</h3>
            <h3 className="text-xl font-medium text-cyan-400">functionality</h3>
            <h3 className="text-xl font-medium">meet</h3>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-medium text-amber-500 mb-2">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-medium text-cyan-400 mb-2">Follow Me</h3>
            <div className="grid grid-cols-2 gap-4">
  <Link 
    href="https://www.linkedin.com/in/ddugs" 
    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <div className="bg-blue-600 p-1.5 rounded-md">
      <Linkedin className="h-4 w-4 text-white" />
    </div>
    LinkedIn
  </Link>

  <Link 
    href="https://discord.com/users/dhruv5005" 
    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-indigo-500 p-1.5 rounded-md">
      <span className="text-white text-xs font-bold">D</span>
    </div>
    Discord
  </Link>

  <Link 
    href="https://github.com/ddugs" 
    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-zinc-800 p-1.5 rounded-md">
      <Github className="h-4 w-4 text-white" />
    </div>
    Github
  </Link>
</div>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div>
              <Link href="/contact" className="group">
                <h3 className="text-xl font-medium mb-1">Contact Me</h3>
                <div className="flex items-center text-zinc-400 group-hover:text-white transition-colors">
                  <span>Say Hello !</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-green-400" />
                </div>
              </Link>
            </div>

            <div>
              <Link href="/projects" className="group">
                <h3 className="text-xl font-medium mb-1">My Projects</h3>
                <div className="flex items-center text-zinc-400 group-hover:text-white transition-colors">
                  <span>Explore Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-green-400" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Large Brand Name */}
        <div className="py-2">
          <h2 className="text-7xl md:text-9xl font-bold text-[#f5f5dc]">dhruv.vishesh.gupta</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm pt-2">
          <div>dhruv.vishesh.gupta ©{new Date().getFullYear()}</div>
          <div>Noida, India</div>
        </div>
      </div>
    </footer>
  )
}
