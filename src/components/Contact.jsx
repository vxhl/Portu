import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDiscord } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com', color: '#6366f1' },
    { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com', color: '#8b5cf6' },
    { icon: <FaTwitter />, label: 'Twitter', url: 'https://twitter.com', color: '#ec4899' },
    { icon: <FaEnvelope />, label: 'Email', url: 'mailto:your@email.com', color: '#10b981' },
    { icon: <FaDiscord />, label: 'Discord', url: '#', color: '#5865f2' }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-container">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-main-title">Let's<br/>Connect</h2>
        <p className="contact-intro">
          I'm always interested about
        </p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's Connect</h3>
          <p>
            Whether you're looking for a developer, want to collaborate on a creative 
            project, or just want to chat about games and tech, I'd love to hear from you!
          </p>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--accent-color': social.color }}
                aria-label={social.label}
              >
                <div className="social-icon" style={{ color: social.color }}>
                  {social.icon}
                </div>
                <span>{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Tell me about your project or just say hello!"
            />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact

