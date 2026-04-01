import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import CursorEffect from './components/CursorEffect'
import ArtworkBackground from './components/ArtworkBackground'

function useHorizontalScroll() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onWheel = (e) => {
      // Always scroll horizontally, even if pointer is over artwork
      if (e.deltaY === 0) return
      e.preventDefault()
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: 'auto',
      })
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])
  return ref
}


function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const mainRef = useHorizontalScroll()

  // Update activeSection based on scroll position
  useEffect(() => {
    const onScroll = () => {
      const sectionIds = ['hero', 'about', 'projects', 'skills', 'contact']
      let found = 'hero'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        // Section is considered active if its left edge is within 40vw of the viewport
        if (rect.left < window.innerWidth * 0.4 && rect.right > window.innerWidth * 0.4) {
          found = id
          break
        }
      }
      setActiveSection(found)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onScroll)
    }
  }, [])

  return (
    <div className="app">
      <ArtworkBackground activeSection={activeSection} />
      <CursorEffect />
      <Navigation activeSection={activeSection} />
      <main ref={mainRef} tabIndex={0} style={{ outline: 'none' }}>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App
