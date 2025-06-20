"use client"

import { useState, useEffect } from "react"

// Simple Button component
const Button = ({ children, className = "", variant = "default", size = "default", ...props }: any) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors"
  const variantClasses = variant === "ghost" ? "hover:bg-gray-800" : "bg-gray-700 hover:bg-gray-600"
  const sizeClasses = size === "sm" ? "h-8 px-3 text-sm" : "h-10 px-4"

  return (
    <button className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Simple icons as SVG components
const Gamepad2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4v1m4-1v1"
    />
  </svg>
)

const Brain = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const MessageSquare = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const Monitor = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

// Enhanced Glitch effect component
const GlitchText = ({ children, className = "" }: { children: string; className?: string }) => {
  const [glitchActive, setGlitchActive] = useState(false)
  const [glitchText1, setGlitchText1] = useState("")
  const [glitchText2, setGlitchText2] = useState("")

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitchActive(true)
        const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`█▓▒░▄▀■□▪▫"
        const generateGlitch = (text: string, intensity: number) => {
          return text
            .split("")
            .map((char, i) =>
              Math.random() > 1 - intensity ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char,
            )
            .join("")
        }

        setGlitchText1(generateGlitch(children, 0.6))
        setGlitchText2(generateGlitch(children, 0.4))

        setTimeout(() => setGlitchActive(false), 300)
      },
      800 + Math.random() * 400,
    )

    return () => clearInterval(interval)
  }, [children])

  return (
    <div className={`relative ${className}`}>
      <div className="relative z-10">{children}</div>
      {glitchActive && (
        <>
          <div
            className="absolute inset-0 text-cyan-400 opacity-80 animate-pulse"
            style={{
              transform: "translate(-4px, -2px)",
              filter: "blur(0.5px)",
            }}
          >
            {glitchText1}
          </div>
          <div
            className="absolute inset-0 text-red-400 opacity-60 animate-pulse"
            style={{
              transform: "translate(3px, 2px)",
              filter: "blur(0.3px)",
            }}
          >
            {glitchText2}
          </div>
          <div
            className="absolute inset-0 text-green-400 opacity-40 animate-pulse"
            style={{
              transform: "translate(-2px, 3px)",
              filter: "blur(0.8px)",
            }}
          >
            {glitchText1}
          </div>
        </>
      )}
    </div>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-mono">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        .pixel-font {
          font-family: 'Press Start 2P', 'Courier New', monospace;
          text-shadow: 2px 2px 0px rgba(0, 255, 255, 0.3);
        }
        
        .game-text {
          font-family: 'Courier New', 'Monaco', monospace;
          font-weight: bold;
          letter-spacing: 0.1em;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-4 border-cyan-400">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <GlitchText className="text-2xl font-bold pixel-font">REINFORCED</GlitchText>
          <div className="flex space-x-6 game-text">
            <Button variant="ghost" className="text-gray-300 hover:text-cyan-400 game-text">
              <a href="/tutorial">TUTORIAL</a>
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-cyan-400 game-text">
              <a href="/gallery">GALLERY</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div>
            <GlitchText className="text-6xl md:text-8xl font-black tracking-wider pixel-font">REINFORCED</GlitchText>
          </div>

          <p className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-wide pixel-font">Code. Train. Conquer.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "BUILD GAME",
                iconColor: "text-green-400",
              },
              {
                title: "TRAIN AGENT",
                iconColor: "text-cyan-400",
              },
              {
                title: "GET COMPUTE",
                iconColor: "text-yellow-400",
              },
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className={`${step.iconColor} mx-auto mb-4`}>{step.icon}</div>
                <h3 className="text-xl font-bold text-white pixel-font text-sm">{step.title}</h3>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed game-text">
            This is your chance to learn how to build systems that can learn how to do anything without using any data you can't generate. All you need is the right setup and an environment to play in. 
            <br />
            <br />
            This is what major AI companies use to make their models better once they're done training on the internet, how "reasoning" works, and how Google built systems that could beat the greatest Go champions.    

          </p>

          {/* Single AI Agent Video Showcase */}
          <div className="flex justify-center items-center py-8">
            <div className="w-96 h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <Monitor className="w-16 h-16 text-cyan-400 mx-auto animate-pulse" />
                <p className="text-gray-300 game-text">AI AGENT DEMO VIDEO</p>
                <p className="text-sm text-gray-500 game-text">COMING SOON...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white pixel-font">FAQ</h2>

          <p className="text-center text-gray-300 mb-16 game-text text-lg">
            
          </p>

          <div className="space-y-4">
            <div className="px-6">
              <details className="group">
                <summary className="text-white hover:text-cyan-400 game-text cursor-pointer py-4 flex justify-between items-center">
                  What do I get? <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="text-gray-300 game-text pb-4">FAQ Answer 1</div>
              </details>
            </div>

            <div className="px-6">
              <details className="group">
                <summary className="text-white hover:text-cyan-400 game-text cursor-pointer py-4 flex justify-between items-center">
                  FAQ QUESTION 2<span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="text-gray-300 game-text pb-4">FAQ Answer 2</div>
              </details>
            </div>

            <div className="px-6">
              <details className="group">
                <summary className="text-white hover:text-cyan-400 game-text cursor-pointer py-4 flex justify-between items-center">
                  FAQ QUESTION 3<span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="text-gray-300 game-text pb-4">FAQ Answer 3</div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t-4 border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <GlitchText className="text-2xl font-bold mb-4 pixel-font">REINFORCED</GlitchText>
            <p className="text-gray-400 mb-6 game-text">
              A Hack Club YSWS
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400 game-text">
                <Github className="w-4 h-4 mr-2" />
                GITHUB
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400 game-text">
                <MessageSquare className="w-4 h-4 mr-2" />
                SLACK
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
