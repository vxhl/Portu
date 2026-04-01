import { useRef, useState, useEffect } from 'react'
import './ArtworkBackground.css'

export default function ArtworkBackground({ activeSection }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const artworks = [
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
    'Screenshot from 2026-01-15 19-38-45.png',
    'Screenshot from 2026-01-15 19-38-52.png',
    'Screenshot from 2026-01-15 19-39-26.png',
    'Screenshot from 2026-01-15 19-40-11.png',
    'Screenshot from 2026-01-15 19-40-55.png',
    'Screenshot from 2026-01-15 19-41-01.png',
    'Screenshot from 2026-01-15 19-41-06.png',
    'Screenshot from 2026-01-15 19-41-18.png',
    'Screenshot from 2026-01-15 19-41-34.png',
    'Screenshot from 2026-01-15 19-41-45.png',
    'Screenshot from 2026-01-15 19-41-50.png',
    'Screenshot from 2026-01-15 19-41-58.png',
    'Screenshot from 2026-01-15 19-43-45.png',
    'Screenshot from 2026-01-15 19-44-32.png',
    'Screenshot from 2026-01-15 19-48-17.png',
    'Screenshot from 2026-01-15 19-48-37.png',
    'Screenshot from 2026-01-15 19-48-51.png'
  ]

  // Spread out positions across entire viewport - all images visible within 0-100%
  const positions = [
    { top: '2%', left: '3%', width: '220px', rotate: '-12deg', zIndex: 5 },
    { top: '8%', left: '25%', width: '250px', rotate: '8deg', zIndex: 3 },
    { top: '5%', left: '52%', width: '200px', rotate: '15deg', zIndex: 7 },
    { top: '3%', left: '78%', width: '230px', rotate: '-5deg', zIndex: 4 },
    { top: '18%', left: '10%', width: '210px', rotate: '-18deg', zIndex: 6 },
    { top: '22%', left: '38%', width: '190px', rotate: '22deg', zIndex: 2 },
    { top: '20%', left: '65%', width: '240px', rotate: '-8deg', zIndex: 8 },
    { top: '16%', left: '88%', width: '180px', rotate: '12deg', zIndex: 5 },
    { top: '35%', left: '5%', width: '225px', rotate: '-15deg', zIndex: 3 },
    { top: '38%', left: '30%', width: '205px', rotate: '18deg', zIndex: 4 },
    { top: '40%', left: '58%', width: '195px', rotate: '-10deg', zIndex: 6 },
    { top: '36%', left: '82%', width: '215px', rotate: '25deg', zIndex: 7 },
    { top: '52%', left: '8%', width: '235px', rotate: '-20deg', zIndex: 2 },
    { top: '55%', left: '35%', width: '185px', rotate: '8deg', zIndex: 5 },
    { top: '58%', left: '62%', width: '220px', rotate: '-12deg', zIndex: 3 },
    { top: '54%', left: '87%', width: '200px', rotate: '15deg', zIndex: 4 },
    { top: '70%', left: '12%', width: '190px', rotate: '-25deg', zIndex: 6 },
    { top: '72%', left: '40%', width: '210px', rotate: '10deg', zIndex: 7 },
    { top: '75%', left: '68%', width: '180px', rotate: '-15deg', zIndex: 8 },
    { top: '88%', left: '15%', width: '225px', rotate: '20deg', zIndex: 2 },
    { top: '85%', left: '45%', width: '195px', rotate: '-8deg', zIndex: 5 },
    { top: '90%', left: '75%', width: '215px', rotate: '18deg', zIndex: 4 },
    { top: '4%', left: '15%', width: '205px', rotate: '-22deg', zIndex: 6 },
    { top: '12%', left: '60%', width: '230px', rotate: '12deg', zIndex: 3 },
    { top: '6%', left: '90%', width: '195px', rotate: '-16deg', zIndex: 5 },
    { top: '25%', left: '5%', width: '180px', rotate: '24deg', zIndex: 7 },
    { top: '28%', left: '50%', width: '220px', rotate: '-10deg', zIndex: 4 },
    { top: '32%', left: '85%', width: '190px', rotate: '14deg', zIndex: 6 },
    { top: '45%', left: '12%', width: '210px', rotate: '-19deg', zIndex: 3 },
    { top: '48%', left: '55%', width: '185px', rotate: '21deg', zIndex: 8 },
    { top: '42%', left: '90%', width: '235px', rotate: '-14deg', zIndex: 2 },
    { top: '62%', left: '18%', width: '200px', rotate: '16deg', zIndex: 5 },
    { top: '65%', left: '58%', width: '215px', rotate: '-23deg', zIndex: 4 },
    { top: '68%', left: '88%', width: '195px', rotate: '9deg', zIndex: 7 },
    { top: '78%', left: '8%', width: '225px', rotate: '-11deg', zIndex: 3 },
    { top: '82%', left: '42%', width: '180px', rotate: '26deg', zIndex: 6 },
    { top: '80%', left: '75%', width: '190px', rotate: '-17deg', zIndex: 5 },
    { top: '92%', left: '20%', width: '210px', rotate: '13deg', zIndex: 4 },
    { top: '95%', left: '60%', width: '220px', rotate: '-20deg', zIndex: 8 },
    { top: '10%', left: '35%', width: '185px', rotate: '11deg', zIndex: 2 },
    { top: '14%', left: '72%', width: '235px', rotate: '-24deg', zIndex: 3 },
    { top: '30%', left: '20%', width: '195px', rotate: '19deg', zIndex: 6 },
    { top: '33%', left: '65%', width: '205px', rotate: '-13deg', zIndex: 7 },
    { top: '50%', left: '15%', width: '215px', rotate: '15deg', zIndex: 4 },
    { top: '53%', left: '50%', width: '225px', rotate: '-21deg', zIndex: 5 },
    { top: '56%', left: '85%', width: '190px', rotate: '17deg', zIndex: 3 }
  ]

  const artworkRefs = useRef([])
  // Removed unused mousePos

  // No unused variables or effects

  const handleImageDoubleClick = (artwork) => {
    setSelectedImage(artwork)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedImage(null), 300) // Wait for animation to finish
  }


  // Fade in artwork as user scrolls horizontally from hero to contact
  const [artworkOpacity, setArtworkOpacity] = useState(0)
  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return
    const handleScroll = () => {
      // Calculate how far user has scrolled horizontally (0 = hero, 1 = end)
      const maxScroll = main.scrollWidth - main.clientWidth
      const scrollLeft = main.scrollLeft
      // Fade in between 0% and 40% of scroll (adjust as needed)
      let fadeStart = 0
      let fadeEnd = maxScroll * 0.4
      let opacity = 0
      if (scrollLeft <= fadeStart) opacity = 0
      else if (scrollLeft >= fadeEnd) opacity = 1
      else opacity = (scrollLeft - fadeStart) / (fadeEnd - fadeStart)
      setArtworkOpacity(opacity)
    }
    main.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => main.removeEventListener('scroll', handleScroll)
  }, [])

  // Use correct fade-in/fade-out class and Vite asset path
  return (
    <>
      <div
        className="artwork-background fade-in"
        style={{ pointerEvents: artworkOpacity > 0.01 ? 'auto' : 'none', opacity: artworkOpacity }}
      >
        {artworks.map((artwork, index) => (
          positions[index] ? (
            <div
              key={index}
              ref={(el) => (artworkRefs.current[index] = el)}
              className="artwork-item"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                width: positions[index].width,
                transform: `rotate(${positions[index].rotate})`,
                zIndex: positions[index].zIndex,
                pointerEvents: artworkOpacity > 0.01 ? 'auto' : 'none',
                opacity: undefined,
                transition: 'opacity 1.2s cubic-bezier(.4,2,.6,1), filter 0.3s ease',
              }}
              onDoubleClick={() => handleImageDoubleClick(artwork)}
            >
              <img
                src={new URL(`../assets/${artwork}`, import.meta.url).href}
                alt={`Artwork ${index + 1}`}
                loading="lazy"
              />
            </div>
          ) : null
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`artwork-modal ${isModalOpen ? 'open' : ''}`}
          onClick={handleCloseModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <img
              src={selectedImage ? new URL(`../assets/${selectedImage}`, import.meta.url).href : ''}
              alt="Selected Artwork"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </>
  )
}

