import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Three.js', 'Tailwind']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Linux', 'CI/CD']
    }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  }

  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        {/* Header */}
        <motion.div 
          className="skills-header"
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="skills-label">
            <span className="section-marker">03</span>
            <span className="section-name">Expertise</span>
          </div>
          <h2 className="skills-title">Tech Stack</h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="skills-grid"
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <ul className="category-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="category-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
