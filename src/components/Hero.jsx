import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import './Hero.css'

function FloatingCube() {
  return (
    <mesh position={[-4, 2, -2]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#6366f1"
        emissive="#6366f1"
        emissiveIntensity={0.4}
        wireframe
        opacity={0.6}
        transparent
      />
    </mesh>
  )
}

function AnimatedSphere() {
  return (
    <mesh position={[4, -2, -2]}>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#8b5cf6"
        emissive="#8b5cf6"
        emissiveIntensity={0.3}
        wireframe
        opacity={0.6}
        transparent
      />
    </mesh>
  )
}

function TorusKnot() {
  return (
    <mesh position={[0, -3, -3]}>
      <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
      <meshStandardMaterial
        color="#ec4899"
        emissive="#ec4899"
        emissiveIntensity={0.3}
        wireframe
        opacity={0.6}
        transparent
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      <FloatingCube />
      <AnimatedSphere />
      <TorusKnot />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  )
}

const Hero = () => {
  const containerRef = useRef(null)

  return (
    <div className="hero-container" ref={containerRef}>
      <div className="animated-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="particle-field">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        <div className="geometric-shapes">
          {Array.from({ length: 15 }).map((_, i) => {
            const size = 20 + Math.random() * 40
            const shapeType = i % 3 === 0 ? 'circle' : i % 3 === 1 ? 'square' : 'triangle'
            return (
              <div 
                key={i} 
                className={`shape shape-${shapeType}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: shapeType !== 'triangle' ? `${size}px` : '0',
                  height: shapeType !== 'triangle' ? `${size}px` : '0',
                  '--size': `${size}px`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              ></div>
            )
          })}
        </div>
        <div className="floating-lines">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i} 
              className="floating-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${100 + Math.random() * 200}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${20 + Math.random() * 15}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            ></div>
          ))}
        </div>
        <div className="glow-spots">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i} 
              className="glow-spot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="availability-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-dot"></span>
          available for work
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-labels"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="label">developer</span>
            <span className="label-divider">/</span>
            <span className="label">artist</span>
            <span className="label-divider">/</span>
            <span className="label">gamer</span>
          </motion.div>

          <motion.h1
            className="hero-main-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="title-line">Bishal</div>
            <div className="title-line">Mohari</div>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            I am a full stack developer and creative<br />
            technologist based in Nepal. I build<br />
            digital experiences that blend code,<br />
            art, and interactivity. Passionate about<br />
            web development, game design, and<br />
            pixel-perfect interfaces.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-marquee"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="marquee-row">
            {[...Array(10)].map((_, i) => (
              <span key={i}>UX/UI DESIGN · </span>
            ))}
          </div>
          <div className="marquee-row reverse">
            {[...Array(10)].map((_, i) => (
              <span key={i}>FULL STACK DEVELOPMENT · </span>
            ))}
          </div>
          <div className="marquee-row">
            {[...Array(10)].map((_, i) => (
              <span key={i}>3D GRAPHICS & ANIMATION · </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </div>
  )
}

export default Hero

