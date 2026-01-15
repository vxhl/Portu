import { motion } from 'framer-motion'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Three.js', 'WebGL'],
      color: '#6366f1'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'REST APIs', 'GraphQL'],
      color: '#8b5cf6'
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Unity'],
      color: '#ec4899'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="skills-container">
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Tech Stack</span>
        </h2>
      </motion.div>

      <motion.div
        className="skills-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            variants={itemVariants}
            style={{ '--accent-color': category.color }}
          >
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-item"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skills

