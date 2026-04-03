import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
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
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const count = artworkFiles.length
    const index = Math.min(count - 1, Math.floor(v * count))
    setActiveIndex(index)
  })

  const progressPercent = ((activeIndex + 1) / artworkFiles.length) * 100

  return (
    <section className="artwork-scroll-wrapper" id="artwork" ref={sectionRef}>
      <div className="artwork-sticky">
        {/* Header */}
        <div className="artwork-header">
          <span className="section-marker">Artwork</span>
          <h2 className="artwork-title">Creative Gallery</h2>
        </div>

        <div className="artwork-layout">
          {/* Left — Large featured image */}
          <div className="artwork-featured">
            <AnimatePresence mode="wait">
              <motion.div
                className="featured-image-wrap"
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -30 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <img
                  src={getImageUrl(artworkFiles[activeIndex])}
                  alt={`Artwork ${activeIndex + 1}`}
                  className="featured-image"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Thumbnail strip + progress */}
          <div className="artwork-sidebar">
            <div className="artwork-sidebar-inner">
              {/* Progress bar */}
              <div className="artwork-progress">
                <div className="artwork-progress-track">
                  <motion.div
                    className="artwork-progress-fill"
                    animate={{ height: `${progressPercent}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <span className="artwork-progress-count">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Thumbnail list */}
              <div className="artwork-thumbs">
                {artworkFiles.map((file, index) => (
                  <motion.div
                    key={index}
                    className={`artwork-thumb ${index === activeIndex ? 'active' : ''}`}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0.3,
                      scale: index === activeIndex ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={getImageUrl(file)}
                      alt={`Thumb ${index + 1}`}
                      draggable={false}
                    />
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

export default Artwork
