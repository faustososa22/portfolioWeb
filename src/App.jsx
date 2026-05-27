import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>// built by <span style={{ color: 'var(--accent)' }}>Fausto Martin Sosa</span> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
