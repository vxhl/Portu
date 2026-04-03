import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import './Artwork.css'

const artworkFiles = [
  'WhatsApp Image 2026-01-15 at 7.27.04 PM.jpeg',
  'WhatsApp Image 2026-01-15 at 7.27.03 PM.jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.46 PM (1).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.46 PM.jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.45 PM.jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.44 PM (1).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.43 PM (2).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.43 PM (1).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.43 PM.jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.42 PM (2).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.41 PM (1).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.41 PM.jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.40 PM (2).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.40 PM (1).jpeg',
  'WhatsApp Image 2026-01-15 at 7.25.39 PM.jpeg',
  'Screenshot from 2026-01-15 19-36-50.png',
  'Screenshot from 2026-01-15 19-37-40.png',
  'Screenshot from 2026-01-15 19-37-48.png',
  'Screenshot from 2026-01-15 19-37-58.png',
  'Screenshot from 2026-01-15 19-38-11.png',
  'Screenshot from 2026-01-15 19-38-23.png',
  'Screenshot from 2026-01-15 19-38-33.png',
  'Screenshot from 2026-01-15 19-38-40.png',
  'Screenshot from 2026-01-15 19-38-45.png'
]

const images = Object.fromEntries(
  Object.entries(
    import.meta.glob('../assets/*.{jpeg,jpg,png}', { eager: true, query: '?url', import: 'default' })
  )
)

function getImageUrl(filename) {
  const key = Object.keys(images).find(k => k.endsWith(filename))
  return key ? images[key] : ''
}

const Artwork = () => {
  const sectionRef = useRef(null)
  const [selectedArt, setSelectedArt] = useState(null)

  /* Vertical scroll → horizontal translate */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  /* Total horizontal distance: (N cards × card width+gap) - viewport */
  const totalCards = artworkFiles.length
  const scrollX = useTransform(scrollYProgress, [0, 1], ['0%', `-${(totalCards - 2) * 18}%`])
  const smoothX = useSpring(scrollX, { stiffness: 300, damping: 40 })

  return (
    <section className="artwork-scroll-wrapper" id="artwork" ref={sectionRef}>
      <div className="artwork-sticky">
        {/* Header */}
        <div className="artwork-top-bar">
          <div className="artwork-header">
            <span className="section-marker">Artwork</span>
            <h2 className="artwork-title">Creative Gallery</h2>
          </div>
          <span className="artwork-counter">
            {String(totalCards).padStart(2, '0')} pieces
          </span>
        </div>

        {/* Horizontal strip */}
        <motion.div className="artwork-track" style={{ x: smoothX }}>
          {artworkFiles.map((file, index) => (
            <motion.div
              key={index}
              className="artwork-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              whileHover={{ y: -12, scale: 1.03 }}
              onClick={() => setSelectedArt(index)}
            >
              <img
                src={getImageUrl(file)}
                alt={`Artwork ${index + 1}`}
                loading="lazy"
                draggable={false}
              />
              <div className="card-overlay">
                <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Horizontal progress */}
        <div className="artwork-hprogress">
          <motion.div
            className="artwork-hprogress-fill"
            style={{ scaleX: scrollYProgress }}
          />
        </div>
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selectedArt !== null && (
          <motion.div
            className="artwork-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedArt(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageUrl(artworkFiles[selectedArt])}
                alt="Artwork enlarged"
              />
              <button className="modal-close" onClick={() => setSelectedArt(null)}>✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Artwork
