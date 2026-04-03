import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef, useCallback } from 'react'
import './Hero.css'

import profilePic from '../assets/WhatsApp Image 2026-01-15 at 7.25.39 PM.jpeg'

/* ---- GitHub hover card ---- */
const GitHubCard = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        className="github-card"
        initial={{ opacity: 0, y: 12, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.97 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <a href="https://github.com/vxhl" target="_blank" rel="noopener noreferrer" className="ghc-link">
          <div className="ghc-header">
            <div className="ghc-avatar">
              <img src="https://github.com/vxhl.png" alt="vxhl" />
            </div>
            <div className="ghc-identity">
              <span className="ghc-name">Bishal Mohari</span>
              <span className="ghc-handle">@vxhl</span>
            </div>
          </div>
          <p className="ghc-bio">Developer · Artist · Gamer — building things that feel right.</p>
          <div className="ghc-stats">
            <div className="ghc-stat">
              <span className="ghc-stat-num">24</span>
              <span className="ghc-stat-label">Repos</span>
            </div>
            <div className="ghc-stat">
              <span className="ghc-stat-num">156</span>
              <span className="ghc-stat-label">Stars</span>
            </div>
            <div className="ghc-stat">
              <span className="ghc-stat-num">482</span>
              <span className="ghc-stat-label">Contributions</span>
            </div>
          </div>
          <div className="ghc-graph">
            <div className="ghc-heatmap">
              {Array.from({ length: 52 }, (_, w) => (
                <div key={w} className="ghc-week">
                  {Array.from({ length: 7 }, (_, d) => {
                    const seed = Math.sin((w * 7 + d) * 0.3) * 10000
                    const level = Math.floor((seed - Math.floor(seed)) * 5)
                    return <div key={d} className={`ghc-day level-${level}`} />
                  })}
                </div>
              ))}
            </div>
          </div>
          <span className="ghc-view">View on GitHub →</span>
        </a>
      </motion.div>
    )}
  </AnimatePresence>
)

/* ---- Role rotator ---- */
const roles = ['Developer', 'Artist', 'Gamer', 'Creator', 'Thinker']
const RoleRotator = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % roles.length), 2400)
    return () => clearInterval(timer)
  }, [])
  return (
    <span className="role-rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="role-word"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

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

  const [showGithubCard, setShowGithubCard] = useState(false)
  const glowX = useTransform(mouseX, v => v - 200)
  const glowY = useTransform(mouseY, v => v - 200)

  return (
    <section className="hero" id="hero" onMouseMove={handleMouseMove}>
      <FloatingParticles />

      {/* Cursor light — faint glow beneath pointer */}
      <motion.div
        className="hero-cursor-glow"
        style={{ x: glowX, y: glowY }}
      />

      {/* Top area: philosophy left, meta right */}
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
          <div
            className="meta-name-wrapper"
            onMouseEnter={() => setShowGithubCard(true)}
            onMouseLeave={() => setShowGithubCard(false)}
          >
            <span className="meta-name">
              <svg className="github-icon" viewBox="0 0 16 16" fill="currentColor" width="20" height="20"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
              Bishal Mohari
            </span>
            <GitHubCard show={showGithubCard} />
          </div>
          <p className="meta-role">
            <RoleRotator />
          </p>
          <p className="meta-location">
            Based in <strong>Bangalore</strong> · Worldwide <span className="meta-time">({currentTime})</span>
          </p>
          <p className="meta-origin">Born in <strong>Dibrugarh</strong> 🖤</p>
        </motion.div>
      </div>

      {/* Divider + availability */}
      <motion.div className="hero-divider-row" {...fadeUp(0.5)}>
        <div className="hero-divider"></div>
        <div className="hero-divider-content">
          <p className="hero-availability">
            <span className="status-dot" />
            Available <span className="avail-highlight">for new projects</span>
          </p>
          <p className="hero-tagline">Crafting digital experiences since 2022</p>
        </div>
      </motion.div>

      {/* Main headline — catchy text with cursor interaction */}
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
          whileHover={{ rotateY: -8, rotateX: 4, scale: 1.03 }}
        >
          <img src={profilePic} alt="Work preview" />
        </motion.div>

        <motion.div className="hero-cta" {...fadeUp(0.9)}>
          <span className="cta-label">Let's build something that feels right</span>
          <motion.a
            href="#contact"
            className="cta-link"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a project
            <span className="cta-arrow">→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
