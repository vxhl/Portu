import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
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

  // State for hover
  // Each initial expands independently, with fade-out delay
  // Only one initial can be expanded at a time
  const [expanded, setExpanded] = useState('') // '' | 'B' | 'M'
  const hoverTimeout = useRef(null)

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="hero-title-container simple initials">
        <div className="hero-initials-orbit-container">
          {expanded === '' ? (
            <div className="orbit-text-svg circle">
              <svg
                width="120vw"
                height="120vw"
                viewBox="0 0 1200 1200"
                style={{ display: 'block', position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
              >
                <defs>
                  <path
                    id="orbitPath"
                    d={'M 600,600 m -500,0 a 500,500 0 1,1 1000,0 a 500,500 0 1,1 -1000,0'}
                    fill="none"
                  />
                </defs>
                <text fill="#ffe6a0" fontFamily="Montserrat, sans-serif" fontWeight="700" fontSize="2.8vw" letterSpacing="0.18em">
                  <textPath
                    href="#orbitPath"
                    startOffset="0%"
                    method="align"
                    spacing="auto"
                  >
                    DEVELOPER ARTIST GAMER
                  </textPath>
                </text>
              </svg>
            </div>
          ) : null}
          </div>
          <motion.h1
            className="hero-initials-reveal larger"
            initial={{ opacity: 0, y: 160, scaleY: 0.6, filter: 'blur(24px)' }}
            animate={{ opacity: 1, y: 0, scaleY: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 0, fontFamily: 'inherit' }}
          >
          {/* ...existing code for initials/hover-group... */}
          </motion.h1>
          {expanded !== '' && (
            <motion.div
              className="orbit-text-static-subheading"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                left: 0,
                top: 0,
                margin: '2.5vw 0 1.5vw 0',
                zIndex: 10,
                pointerEvents: 'none',
              }}
            >
              <span className="snake-text" style={{ fontSize: '2.8vw', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#ffe6a0', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                {Array.from('DEVELOPER ARTIST GAMER').map((char, i) => (
                  <span
                    key={i}
                    style={{
                      display: 'inline-block',
                      animation: `snake-wave 1.2s ${i * 0.06}s both`,
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </motion.div>
          )}
          <motion.h1
            className="hero-initials-reveal larger"
            initial={{ opacity: 0, y: 160, scaleY: 0.6, filter: 'blur(24px)' }}
            animate={{ opacity: 1, y: 0, scaleY: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 0, fontFamily: 'inherit' }}
          >
          <span
            className="hover-group"
            onMouseEnter={() => {
              if (hoverTimeout.current) {
                clearTimeout(hoverTimeout.current)
                hoverTimeout.current = null
              }
              setExpanded('B')
            }}
            onMouseLeave={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
              hoverTimeout.current = setTimeout(() => {
                setExpanded('')
                hoverTimeout.current = null
              }, 800)
            }}
            style={{ display: 'inline-block' }}
          >
            <motion.span
              className="hero-initial hero-b"
              layout
              animate={expanded === 'B' ? { x: '-0.1em', scale: 1.12 } : { x: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 80, damping: 18, duration: 1.1 }}
              style={{ display: 'inline-block', cursor: 'pointer', zIndex: 2, fontFamily: 'inherit', fontWeight: 800 }}
            >
              B
            </motion.span>
            <motion.span
              className="hero-fullname-bishal"
              initial={false}
              animate={expanded === 'B' ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 60, damping: 16, duration: 0.9 }}
              style={{
                display: 'inline-block',
                fontSize: 'inherit',
                fontWeight: 800,
                color: '#fff',
                margin: 0,
                padding: 0,
                fontFamily: 'inherit',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                pointerEvents: 'auto',
                verticalAlign: 'baseline',
                position: 'relative',
                left: expanded === 'B' ? 0 : '-0.1em',
                zIndex: 1,
                cursor: 'pointer',
              }}
            >
              {expanded === 'B' ? 'ishal' : ''}
            </motion.span>
          </span>
          <span
            className="hover-group"
            onMouseEnter={() => {
              if (hoverTimeout.current) {
                clearTimeout(hoverTimeout.current)
                hoverTimeout.current = null
              }
              setExpanded('M')
            }}
            onMouseLeave={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
              hoverTimeout.current = setTimeout(() => {
                setExpanded('')
                hoverTimeout.current = null
              }, 800)
            }}
            style={{ display: 'inline-block' }}
          >
            <motion.span
              className="hero-initial hero-m"
              layout
              animate={expanded === 'M' ? { x: '0.1em', scale: 1.12 } : { x: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 80, damping: 18, duration: 1.1 }}
              style={{ display: 'inline-block', cursor: 'pointer', zIndex: 2, fontFamily: 'inherit', fontWeight: 800 }}
            >
              M
            </motion.span>
            <motion.span
              className="hero-fullname-mohari"
              initial={false}
              animate={expanded === 'M' ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 60, damping: 16, duration: 0.9 }}
              style={{
                display: 'inline-block',
                fontSize: 'inherit',
                fontWeight: 800,
                color: '#fff',
                margin: 0,
                padding: 0,
                fontFamily: 'inherit',
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                pointerEvents: 'auto',
                verticalAlign: 'baseline',
                position: 'relative',
                right: expanded === 'M' ? 0 : '-0.1em',
                zIndex: 1,
                cursor: 'pointer',
              }}
            >
              {expanded === 'M' ? 'ohari' : ''}
            </motion.span>
          </span>
          </motion.h1>
        </div>

        <div className="floating-action-btn-container">
          <button
            className="floating-action-btn"
            aria-label="See My Work"
            onClick={() => {
              const nextSection = document.getElementById('projects')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
              }
            }}
          >
            <span className="fab-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="15" stroke="#ffe6a0" strokeWidth="2" fill="#181818" />
                <path d="M10 16h12" stroke="#ffe6a0" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M18 12l4 4-4 4" stroke="#ffe6a0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="fab-tooltip">See My Work</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

