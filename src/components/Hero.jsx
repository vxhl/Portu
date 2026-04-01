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
      <div className="hero-title-container simple initials">
        <motion.h1
          className="hero-initials-reveal larger"
          initial={{ opacity: 0, y: 160, scaleY: 0.6, filter: 'blur(24px)' }}
          animate={{ opacity: 1, y: 0, scaleY: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
        >
          BM
        </motion.h1>
        <button
          className="exhibition-arrow-container exhibition-btn"
          onClick={() => {
            const nextSection = document.getElementById('projects')
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
            }
          }}
        >
          <span className="exhibition-text">Exhibition this way</span>
          <span className="exhibition-arrow">→</span>
          <span className="exhibition-btn-bg"></span>
        </button>
      </div>
    </div>
  )
}

export default Hero

