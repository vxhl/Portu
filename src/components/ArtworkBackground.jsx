import { useEffect, useRef } from 'react'
import './ArtworkBackground.css'

const ArtworkBackground = () => {
  const artworks = [
    'WhatsApp Image 2026-01-15 at 7.27.04 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.27.03 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.47 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.46 PM (1).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.46 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.45 PM (1).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.45 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.44 PM (1).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.44 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.43 PM (2).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.43 PM (1).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.43 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.42 PM (2).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.42 PM (1).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.42 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.41 PM (1).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.41 PM.jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.40 PM (2).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.40 PM (1).jpeg',
    'WhatsApp Image 2026-01-15 at 7.25.40 PM.jpeg',
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
    'Screenshot from 2026-01-15 19-39-41.png',
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

  // Spread out positions across entire viewport - more visible and organized
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
    { top: '105%', left: '5%', width: '205px', rotate: '-22deg', zIndex: 6 },
    { top: '108%', left: '32%', width: '230px', rotate: '12deg', zIndex: 3 },
    { top: '110%', left: '60%', width: '195px', rotate: '-16deg', zIndex: 5 },
    { top: '105%', left: '85%', width: '180px', rotate: '24deg', zIndex: 7 },
    { top: '125%', left: '10%', width: '220px', rotate: '-10deg', zIndex: 4 },
    { top: '128%', left: '38%', width: '190px', rotate: '14deg', zIndex: 6 },
    { top: '122%', left: '65%', width: '210px', rotate: '-19deg', zIndex: 3 },
    { top: '142%', left: '8%', width: '185px', rotate: '21deg', zIndex: 8 },
    { top: '145%', left: '35%', width: '235px', rotate: '-14deg', zIndex: 2 },
    { top: '148%', left: '62%', width: '200px', rotate: '16deg', zIndex: 5 },
    { top: '140%', left: '88%', width: '215px', rotate: '-23deg', zIndex: 4 },
    { top: '162%', left: '12%', width: '195px', rotate: '9deg', zIndex: 7 },
    { top: '165%', left: '40%', width: '225px', rotate: '-11deg', zIndex: 3 },
    { top: '168%', left: '68%', width: '180px', rotate: '26deg', zIndex: 6 },
    { top: '182%', left: '15%', width: '190px', rotate: '-17deg', zIndex: 5 },
    { top: '185%', left: '42%', width: '210px', rotate: '13deg', zIndex: 4 },
    { top: '188%', left: '70%', width: '220px', rotate: '-20deg', zIndex: 8 },
    { top: '202%', left: '8%', width: '185px', rotate: '11deg', zIndex: 2 },
    { top: '205%', left: '35%', width: '235px', rotate: '-24deg', zIndex: 3 },
    { top: '208%', left: '63%', width: '195px', rotate: '19deg', zIndex: 6 },
    { top: '200%', left: '88%', width: '205px', rotate: '-13deg', zIndex: 7 },
    { top: '222%', left: '18%', width: '215px', rotate: '15deg', zIndex: 4 },
    { top: '225%', left: '45%', width: '225px', rotate: '-21deg', zIndex: 5 },
    { top: '228%', left: '72%', width: '190px', rotate: '17deg', zIndex: 3 },
    { top: '242%', left: '25%', width: '180px', rotate: '-9deg', zIndex: 8 }
  ]

  const artworkRefs = useRef([])
  const mousePos = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const animateArtworks = () => {
      artworkRefs.current.forEach((artwork, index) => {
        if (!artwork) return

        const rect = artwork.getBoundingClientRect()
        const artworkCenterX = rect.left + rect.width / 2
        const artworkCenterY = rect.top + rect.height / 2

        // Calculate distance from mouse to artwork center
        const deltaX = mousePos.current.x - artworkCenterX
        const deltaY = mousePos.current.y - artworkCenterY
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

        // Larger interaction radius for more floaty feel
        const interactionRadius = 280

        if (distance < interactionRadius) {
          // Pause the CSS animation and apply mouse interaction
          artwork.style.animationPlayState = 'paused'
          
          // Smooth balloon-like repulsion
          const force = Math.pow((interactionRadius - distance) / interactionRadius, 1.2)
          const repelX = -(deltaX / distance) * force * 150
          const repelY = -(deltaY / distance) * force * 150
          
          // Add rotation for organic balloon effect
          const rotationOffset = (deltaX / distance) * force * 12

          // Apply transform with smooth, floaty transition
          artwork.style.transition = 'transform 1.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s ease'
          artwork.style.transform = `translate(${repelX}px, ${repelY}px) rotate(${parseFloat(positions[index].rotate) + rotationOffset}deg)`
          
          // Much brighter when interacting - shows artwork clearly
          artwork.style.opacity = '0.65'
          artwork.style.filter = 'grayscale(100%) contrast(1.3)'
        } else {
          // Resume floating animation
          artwork.style.animationPlayState = 'running'
          
          // Return to normal opacity and filter
          artwork.style.opacity = '0.25'
          artwork.style.filter = 'grayscale(100%) contrast(1.2)'
          
          // Slow drift back with CSS animation
          artwork.style.transition = 'transform 3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.8s ease, filter 0.8s ease'
          artwork.style.transform = ''
        }
      })

      animationFrameId.current = requestAnimationFrame(animateArtworks)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId.current = requestAnimationFrame(animateArtworks)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [positions])

  return (
    <div className="artwork-background">
      {artworks.map((artwork, index) => (
        <div
          key={index}
          ref={(el) => (artworkRefs.current[index] = el)}
          className="artwork-item"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            right: positions[index].right,
            width: positions[index].width,
            transform: `rotate(${positions[index].rotate})`,
            zIndex: positions[index].zIndex
          }}
        >
          <img 
            src={`/src/assets/${artwork}`} 
            alt={`Artwork ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default ArtworkBackground

