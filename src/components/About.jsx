import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end 0.4"]
  })

  const [screenW, setScreenW] = useState(1400)
  useEffect(() => {
    setScreenW(window.innerWidth)
    const onResize = () => setScreenW(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const words = [
    "A", "passionate", "developer", "and", "digital", "artist,",
    "I", "craft", "experiences", "that", "blend", "code,", "creativity,",
    "and", "human", "emotion.", "My", "work", "spans", "full-stack",
    "development,", "game", "design,", "and", "digital", "art", "—",
    "always", "driven", "by", "curiosity", "and", "the", "pursuit",
    "of", "meaningful", "craft."
  ]

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-text-container">
        <p className="about-text">
          {words.map((word, i) => {
            const start = i / words.length * 0.6
            const end = start + 0.12

            return (
              <Word 
                key={i} 
                word={word} 
                progress={scrollYProgress}
                start={start}
                end={end}
                screenW={screenW}
              />
            )
          })}
        </p>
      </div>
    </section>
  )
}

const Word = ({ word, progress, start, end, screenW }) => {
  const opacity = useTransform(progress, [start, end], [0, 1])
  const x = useTransform(progress, [start, end], [screenW + 200, 0])

  return (
    <motion.span 
      className="about-word"
      style={{ opacity, x }}
    >
      {word}
    </motion.span>
  )
}

export default About
