import { motion } from 'framer-motion'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const links = [
    { name: 'GitHub', url: 'https://github.com/vxhl' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Email', url: 'mailto:hello@example.com' }
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-marker">Contact</span>
          <h2 className="contact-headline">
            Let's talk
          </h2>
          <p className="contact-sub">
            Have a project, idea, or just want to say hi?
          </p>

          <div className="contact-socials">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={`form-field ${focused === 'name' || form.name ? 'active' : ''}`}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              autoComplete="off"
              placeholder="Your name"
            />
          </div>

          <div className={`form-field ${focused === 'email' || form.email ? 'active' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              autoComplete="off"
              placeholder="your@email.com"
            />
          </div>

          <div className={`form-field field-message ${focused === 'message' || form.message ? 'active' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              rows={5}
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            className="form-submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send message
            <span className="submit-arrow">→</span>
          </motion.button>
        </motion.form>
      </div>

      <footer className="contact-footer">
        <span>© 2026 Bishal Mohari</span>
        <span>Built with passion</span>
      </footer>
    </section>
  )
}

export default Contact
