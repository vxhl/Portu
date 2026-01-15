import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const skills = [
    'HTML',
    'REACT',
    'EXPRESS.JS',
    'JAVASCRIPT',
    'CSS',
    'MONGODB',
    'GIT',
    'SASS',
    'NEXT.JS',
    'NODE.JS',
    'PYTHON',
    'TYPESCRIPT'
  ]

  return (
    <div className="about-container">
      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-section-title">About</h2>
          <p>
            I use my passion and skills to create digital products and experiences. 
            I work with clients to design, implement, and manage their digital products. 
            As a full stack developer, I bring together creativity, technology, and user 
            experience to build solutions that matter. Committed to life-long learning 
            and exploring new technologies.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.03 }}
            >
              <span className="skill-tag-text">{skill}</span>
              <span className="skill-tag-marquee" aria-hidden="true">
                {Array(5).fill(skill).join(' · ')}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default About

