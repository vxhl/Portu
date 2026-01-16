import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navigation.css'

const Navigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'projects', label: 'projects' },
    { id: 'about', label: 'about' },
    { id: 'contact', label: 'contact' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-name">Bishal Mohari</span>
          <span className="logo-divider">/</span>
          <span className="logo-subtitle">DEVELOPER, ARTIST, GAMER</span>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.nav>
  )
}

export default Navigation


