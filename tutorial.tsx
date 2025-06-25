"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
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


      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-4 border-cyan-400">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold pixel-font text-white">REINFORCED</div>
          <div className="flex space-x-6 game-text">
            <Button variant="ghost" className="text-gray-300 hover:text-cyan-400">
              <a href="/">HOME</a>
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-cyan-400">
              <a href="/gallery">GALLERY</a>
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div>
            <Button variant="ghost" className="mb-8 text-cyan-400 hover:text-cyan-300 game-text">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <a href="/">BACK TO HOME</a>
            </Button>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-cyan-400 pixel-font">TUTORIAL</h1>

            <div className="prose prose-invert max-w-none">
              
              <div className="space-y-8 text-gray-400">
                <div className="border-4 border-gray-700 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 pixel-font text-lg">GETTING STARTED</h2>
                  <p className="game-text">
                    If you don't have prior experience with neural networks:
                    <br />
                    - Learn however would make the most sense for you. There are great introductory resources 
                    {" "}
                    <a href="https://www.3blue1brown.com/topics/neural-networks" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                        here
                    </a>{" "}and 
                     {" "}
                    <a href="https://course.fast.ai/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                        here
                    </a>{" "}
                    <br />
                    - Move on to the next bullet
                    <br />
                    <br />
                    If you're already comfortable with neural networks:
                    <br />
                    - Spend some time become familiar with Reinforcement Learning. You can use the resources
                    {" "}
                    <a href="https://vihaans-cp-notes.gitbook.io/deep-learning-roadmap/reinforcement-learning" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                        here
                    </a>{" "}
                    and 
                    {" "}
                    <a href="https://docs.pytorch.org/tutorials/index.html" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                        here
                    </a>{" "}
                    <br />
                    - Find me on the Hack Club Slack (@Vihaan Sondhi) and join #reinforced (linked at the bottom) if you have any questions or need help understanding something. We'll be working closely one on one throughout the process anyway so don't be shy! It's better to be safe than waste hours later.  
                    <br />
                    Once you're done with all of this, contact me using the methods above and I'll send you a brief quiz (no pressure!)
                  </p>
                
                </div>

                <div className="border-4 border-gray-700 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 pixel-font text-lg">BUILDING YOUR FIRST GAME</h2>
                  <p className="game-text">
                    - Send me your game idea for approval. I'll help you brainstorm the structure of the game so that it's a good environment for RL down the road.  
                    <br />
                    - The game can be an entirely new game of your creation or a version of an existing game (wordle, snake, pong, etc).
                    <br />
                    - Build the game using vanilla Python, Pygame, or Unity. If you want to have both a clean-looking game and a relatively easy approach to solving your game with RL, I highly recommend the last.  
                  </p>
                </div>

                <div className="border-4 border-gray-700 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-white mb-4 pixel-font text-lg">TRAINING YOUR AGENT</h2>
                  <p className="game-text"> 
                    - We'll decide on what algorithm to use together and I'll provide a template. You can use Unity's  
                    {" "}
                    <a href="https://github.com/Unity-Technologies/ml-agents" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                        ML-Agents
                    </a>{" "} if you built the game with Unity. 
                    <br /> 
                    Once you're done, submit {" "}
                    <a href="https://forms.hackclub.com/t/7ZoxrDjDtius" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                        here
                    </a>{" "}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
