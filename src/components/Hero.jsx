import { useState, useEffect } from 'react'

const KEYWORDS = ['.NET', 'C#', 'React', 'TypeScript']

function highlight(text) {
  const pattern = new RegExp(`(${KEYWORDS.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g')
  return text.split(pattern).map((part, i) =>
    KEYWORDS.includes(part)
      ? <span key={i} className="text-accent">{part}</span>
      : part
  )
}

function Hero({ t }) {
  const phrases = t.hero.phrases
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length]
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
  }, [charIndex, deleting, phraseIndex, phrases])

  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-name">Fausto Martin Sosa</h1>
            <h2 className="hero-typed">
              <span className="text-accent">&gt;</span> {text}
              <span className="cursor">█</span>
            </h2>
            <p className="hero-desc">{highlight(t.hero.desc)}</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-accent">{t.hero.viewProjects}</a>
              <a href="#contact" className="btn btn-outline-accent">{t.hero.contactMe}</a>
              <a href="/Fausto_Sosa_CV.pdf" download className="btn btn-outline-accent">{t.hero.downloadCV}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
