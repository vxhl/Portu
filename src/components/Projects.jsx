import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const containerRef = useRef(null)
  // Fade in effect for artworks
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const cards = Array.from(container.querySelectorAll('.project-card'))
    cards.forEach((card, i) => {
      card.style.opacity = 0
      card.style.transform = 'translateY(60px)'
    })
    setTimeout(() => {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.transition = 'opacity 1.2s cubic-bezier(.4,2,.6,1), transform 1.2s cubic-bezier(.4,2,.6,1)'
          card.style.opacity = 1
          card.style.transform = 'translateY(0)'
        }, 400 + i * 220)
      })
    }, 400)
  }, [])

  // Placeholder projects - you can replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: '3D Interactive Experience',
      description: 'An immersive web application featuring real-time 3D graphics and interactive elements built with React Three Fiber.',
      tech: ['React', 'Three.js', 'WebGL'],
      github: '#',
      demo: '#',
      color: '#6366f1'
    },
    {
      id: 2,
      title: 'Game Engine Project',
      description: 'A custom game engine with physics simulation and rendering pipeline, showcasing advanced graphics programming.',
      tech: ['C++', 'OpenGL', 'Game Development'],
      github: '#',
      demo: '#',
      color: '#8b5cf6'
    },
    {
      id: 3,
      title: 'Art Portfolio Platform',
      description: 'A beautiful showcase platform for digital art with advanced filtering and gallery features.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      color: '#ec4899'
    },
    {
      id: 4,
      title: 'Full-Stack Application',
      description: 'A comprehensive web application with real-time features, authentication, and modern UI/UX design.',
      tech: ['React', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#',
      color: '#10b981'
    },
    {
      id: 5,
      title: 'Mobile Game',
      description: 'An engaging mobile game with custom mechanics, particle effects, and smooth animations.',
      tech: ['Unity', 'C#', 'Mobile'],
      github: '#',
      demo: '#',
      color: '#f59e0b'
    },
    {
      id: 6,
      title: 'Creative Coding Project',
      description: 'Generative art project using algorithms and mathematical patterns to create unique visual experiences.',
      tech: ['p5.js', 'JavaScript', 'Creative Coding'],
      github: '#',
      demo: '#',
      color: '#06b6d4'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="projects-container" ref={containerRef}>
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="projects-main-title">Selected<br/>Cases</h2>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ y: -10 }}
            style={{ '--accent-color': project.color }}
          >
            <div className="project-number">0{index + 1}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div
              className="project-glow"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects

