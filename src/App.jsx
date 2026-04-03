import { useRef } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Artwork from './components/Artwork'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const mainRef = useRef(null)

  return (
    <div className="app" ref={mainRef}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Artwork />
        <Contact />
      </main>
    </div>
  )
}

export default App
