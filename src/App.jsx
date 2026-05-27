import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
