import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import './Hero.css'

import profilePic from '../assets/WhatsApp Image 2026-01-15 at 7.25.39 PM.jpeg'

/* ---- Magnetic character that repels from cursor ---- */
const MagneticChar = ({ children, mouseX, mouseY }) => {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  useEffect(() => {
    const unsubX = mouseX.on('change', () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = mouseX.get() - cx
      const dy = mouseY.get() - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const radius = 120
      if (dist < radius) {
        const force = (1 - dist / radius) * 28
        x.set(-dx / dist * force)
        y.set(-dy / dist * force)
      } else {
        x.set(0)
        y.set(0)
      }
    })
    return unsubX
  }, [mouseX, mouseY, x, y])

  if (children === '\n') return <br />
  if (children === ' ') return <span className="headline-space">&nbsp;</span>

  return (
    <motion.span
      ref={ref}
      className="headline-char"
      style={{ x: springX, y: springY, display: 'inline-block' }}
    >
      {children}
    </motion.span>
  )
}

/* ---- Floating particles ---- */
const FloatingParticles = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }))

  return (
    <div className="hero-particles">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const Hero = () => {
  const [currentTime, setCurrentTime] = useState('')
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }, [mouseX, mouseY])

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }
  })

  const headlineLines = [
    'Code as balance',
    'between structure',
    'and emotion'
  ]

  return (
    <section className="hero" id="hero" onMouseMove={handleMouseMove}>
      <FloatingParticles />

      {/* Gradient glow that follows cursor */}
      <motion.div
        className="hero-cursor-glow"
        style={{
          x: useTransform(mouseX, v => v - 200),
          y: useTransform(mouseY, v => v - 200),
        }}
      />

      {/* Top area: philosophy left, location right */}
      <div className="hero-top">
        <motion.div className="hero-philosophy" {...fadeUp(0.3)}>
          <span className="philosophy-label">My creative philosophy</span>
          <p className="philosophy-text">
            I approach development through logic, systems,
            and human emotion.
          </p>
          <p className="philosophy-text muted">
            Every detail I craft carries clarity, intention,
            and quiet confidence. That's how I design
            and build websites that work — and feel right.
          </p>
        </motion.div>

        <motion.div className="hero-meta" {...fadeUp(0.4)}>
          <p className="meta-location">
            Based in <strong>Bangalore</strong> · Worldwide <span className="meta-time">({currentTime})</span>
          </p>
          <p className="meta-origin">Born in <strong>Dibrugarh</strong> 🖤</p>
        </motion.div>
      </div>

      {/* Divider + availability */}
      <motion.div className="hero-divider-row" {...fadeUp(0.5)}>
        <div className="hero-divider"></div>
        <p className="hero-availability">
          Available <span className="avail-highlight">for new projects</span>
        </p>
      </motion.div>

      {/* Massive headline with cursor interaction */}
      <motion.h1
        className="hero-headline"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {headlineLines.map((line, li) => (
          <span key={li} className="headline-line">
            {line.split('').map((char, ci) => (
              <MagneticChar key={`${li}-${ci}`} mouseX={mouseX} mouseY={mouseY}>
                {char}
              </MagneticChar>
            ))}
            {li < headlineLines.length - 1 && <br />}
          </span>
        ))}
      </motion.h1>

      {/* Bottom: device preview left, CTA right */}
      <div className="hero-bottom">
        <motion.div
          className="hero-device"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img src={profilePic} alt="Work preview" />
        </motion.div>

        <motion.div className="hero-cta" {...fadeUp(0.9)}>
          <span className="cta-label">Let's build something that feels right</span>
          <a href="#contact" className="cta-link">
            Start a project
            <span className="cta-underline"></span>
          </a>
        </motion.div>
      </div>

      {/* Scroll dots */}
      <motion.div
        className="hero-dots"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </motion.div>
    </section>
  )
}

export default Hero
