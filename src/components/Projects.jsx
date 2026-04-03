import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useRef } from 'react'
import './Projects.css'

import previewImg from '../assets/WhatsApp Image 2026-01-15 at 7.25.39 PM.jpeg'

const projects = [
  {
    title: '3D Interactive Experience',
    year: '2025',
    overview: 'An immersive web application featuring real-time 3D graphics and interactive elements built with modern web technologies.',
    tags: ['Web Development', 'React Three Fiber'],
    industry: ['Creative Technology', 'WebGL'],
    client: 'Personal Project',
    image: previewImg
  },
  {
    title: 'Game Engine Project',
    year: '2025',
    overview: 'A custom game engine with physics simulation and rendering pipeline, showcasing advanced graphics programming.',
    tags: ['Game Development', 'C++'],
    industry: ['Gaming', 'Interactive'],
    client: 'Personal Project',
    image: previewImg
  },
  {
    title: 'Art Portfolio Platform',
    year: '2024',
    overview: 'A beautiful showcase platform for digital art with advanced filtering, gallery features, and smooth animations.',
    tags: ['Full Stack', 'React'],
    industry: ['Creative', 'Digital Art'],
    client: 'Personal Project',
    image: previewImg
  },
  {
    title: 'Mobile Application',
    year: '2024',
    overview: 'A cross-platform mobile app with intuitive UX, real-time features, and clean architecture.',
    tags: ['React Native', 'Mobile'],
    industry: ['Technology', 'SaaS'],
    client: 'Freelance',
    image: previewImg
  },
  {
    title: 'Creative Coding',
    year: '2024',
    overview: 'Generative art using algorithms and mathematical patterns to create unique visual experiences.',
    tags: ['p5.js', 'Creative Coding'],
    industry: ['Art', 'Generative'],
    client: 'Personal Project',
    image: previewImg
  }
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  /* Map scroll progress to active project index */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const count = projects.length
    const index = Math.min(count - 1, Math.floor(v * count))
    setActiveProject(index)
  })

  const current = projects[activeProject]
  const progressPercent = ((activeProject + 1) / projects.length) * 100

  return (
    <section className="projects-scroll-wrapper" id="projects" ref={sectionRef}>
      {/* Sticky viewport that stays while user scrolls through the tall wrapper */}
      <div className="projects-sticky">
        <div className="projects-layout">
          {/* Left: Image + Details */}
          <div className="projects-left">
            <AnimatePresence mode="wait">
              <motion.div
                className="project-preview"
                key={activeProject}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <img src={current.image} alt={current.title} className="project-image" />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                className="project-details"
                key={activeProject}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="detail-row">
                  <span className="detail-label">Overview</span>
                  <p className="detail-value">{current.overview}</p>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Tags</span>
                  <div className="detail-value">
                    {current.tags.map((tag, i) => (
                      <span key={i}>{tag}<br /></span>
                    ))}
                  </div>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Industry</span>
                  <div className="detail-value">
                    {current.industry.map((ind, i) => (
                      <span key={i}>{ind}<br /></span>
                    ))}
                  </div>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Client</span>
                  <p className="detail-value">{current.client}</p>
                </div>
                <a href="#" className="explore-link">
                  Explore the case
                  <span className="explore-line"></span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Progress bar + Project Names */}
          <div className="projects-right">
            <span className="projects-year">{current.year}</span>
            <div className="projects-names-row">
              {/* Vertical progress bar */}
              <div className="projects-progress">
                <div className="progress-track">
                  <motion.div
                    className="progress-fill"
                    animate={{ height: `${progressPercent}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <span className="progress-count">
                  {String(activeProject + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Project titles */}
              <div className="projects-names">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`project-name ${index === activeProject ? 'active' : ''}`}
                    animate={{
                      x: index === activeProject ? 12 : 0,
                      color: index === activeProject ? '#ffffff' : 'rgba(255,255,255,0.2)',
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {project.title}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
