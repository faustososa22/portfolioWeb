import { useState, useEffect } from 'react'

const phrases = [
  'Backend Developer',
  '.NET & C# Developer',
  'Full-Stack Developer',
  'API Builder',
  'Problem Solver',
]

function Hero() {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    const speed = deleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setPhraseIndex((phraseIndex + 1) % phrases.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p className="hero-greeting">// Hi, my name is</p>
            <h1 className="hero-name">Fausto Martin Sosa</h1>
            <h2 className="hero-typed">
              <span className="text-accent">&gt;</span> {text}
              <span className="cursor">█</span>
            </h2>
            <p className="hero-desc">
              Backend developer focused on <span className="text-accent">.NET</span> and <span className="text-accent">C#</span>,
              with hands-on experience building full-stack apps using <span className="text-accent">React</span> and <span className="text-accent">TypeScript</span>.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-accent me-3">view projects</a>
              <a href="#contact" className="btn btn-outline-accent me-3">contact me</a>
              <a href="/Fausto_Sosa_CV.pdf" download className="btn btn-outline-accent">download cv</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
