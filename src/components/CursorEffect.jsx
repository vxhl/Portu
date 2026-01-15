import { useEffect, useRef } from 'react'
import './CursorEffect.css'

const CursorEffect = () => {
  const cursorRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Check if hovering over interactive elements
      const target = e.target
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        cursor?.classList.add('hover')
      } else {
        cursor?.classList.remove('hover')
      }
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15

      if (cursor) {
        cursor.style.left = cursorX + 'px'
        cursor.style.top = cursorY + 'px'
      }

      // Create particles more frequently
      if (Math.random() > 0.85) {
        createParticle(cursorX, cursorY)
      }

      // Remove old particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life--
        if (particle.life <= 0) {
          if (particle.element.parentNode) {
            particle.element.parentNode.removeChild(particle.element)
          }
          return false
        }
        particle.element.style.opacity = particle.life / 30
        particle.x += particle.vx
        particle.y += particle.vy
        particle.element.style.left = particle.x + 'px'
        particle.element.style.top = particle.y + 'px'
        return true
      })

      requestAnimationFrame(animate)
    }

    const createParticle = (x, y) => {
      const particle = document.createElement('div')
      particle.className = 'cursor-particle'
      document.body.appendChild(particle)

      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 2 + 1
      const size = Math.random() * 4 + 2

      particle.style.width = size + 'px'
      particle.style.height = size + 'px'
      particle.style.left = x + 'px'
      particle.style.top = y + 'px'

      const colors = ['rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.7)']
      particle.style.background = colors[Math.floor(Math.random() * colors.length)]
      particle.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.3)`

      particlesRef.current.push({
        element: particle,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 30
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      particlesRef.current.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element)
        }
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-follower" />
      <div className="cursor-trail" />
    </>
  )
}

export default CursorEffect

