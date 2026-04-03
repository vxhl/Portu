import { motion } from 'framer-motion'
import './Navigation.css'

const Navigation = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="nav-logo" onClick={() => scrollTo('hero')}>
        <span className="logo-icon">✦</span>
        <span className="logo-text">Bishal</span>
      </div>

      <div className="nav-center">
        <div className="nav-col">
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('artwork')}>Artwork</button>
        </div>
        <div className="nav-col">
          <button className="coming-soon">Blog <span>(Coming Soon)</span></button>
          <button onClick={() => scrollTo('contact')}>Get in Touch</button>
        </div>
      </div>

      <button className="nav-contact" onClick={() => scrollTo('contact')}>
        Contact
      </button>
    </motion.nav>
  )
}

export default Navigation
