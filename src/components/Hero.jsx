import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import './Hero.css'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
    </>
  )
}

const Hero = () => {
  const containerRef = useRef(null)

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="particle-field">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        <div className="geometric-shapes">
          {Array.from({ length: 15 }).map((_, i) => {
            const size = 20 + Math.random() * 40
            const shapeType = i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'square' : 'triangle'
            return (
              <div 
                key={i} 
                className={`shape shape-${shapeType}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: shapeType !== 'triangle' ? `${size}px` : '0',
                  height: shapeType !== 'triangle' ? `${size}px` : '0',
                  '--size': `${size}px`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              ></div>
            )
          })}
        </div>
        <div className="floating-lines">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="floating-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 200}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            ></div>
          ))}
        </div>
        <div className="glow-spots">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="glow-spot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>
      
      <div className="hero-content">
          <div className="hero-layout">
            <div className="hero-left">
              <motion.div
                className="creative-label"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                creative
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="title-artist">artist</div>
                <div className="title-gamer">gamer</div>
                <div className="title-developer">developer</div>
              </motion.h1>
            </div>

            <motion.div
              className="hero-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="hero-bio">
                I am a full stack developer, artists and a gamer based in Bangalore, India. I have 3 years of experience in areas like multi-service architecture development, agentic ai applications and I love drawing and gaming a lot! Looking to expand those into a more serious outlet since hobbies should also be respected as much is my belief! I love Shawarmas :)
              </p>
            </motion.div>
          </div>

      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </div>
  )
}

export default Hero

