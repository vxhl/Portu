import { motion } from 'framer-motion'
import './Contact.css'

const Contact = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Email', url: 'mailto:hello@example.com' }
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <motion.div 
          className="contact-top"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-headline">
            Let's create something<br />amazing together
          </h2>
          <p className="contact-sub">
            Have a project in mind? I'd love to hear about it.
          </p>
          <a href="mailto:hello@example.com" className="contact-email-link">
            hello@example.com
            <span className="contact-email-line"></span>
          </a>
        </motion.div>

        <motion.div 
          className="contact-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>
      </div>

      <footer className="contact-footer">
        <span>&copy; 2026 Bishal Mohari</span>
        <span>Built with passion</span>
      </footer>
    </section>
  )
}

export default Contact
