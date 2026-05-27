import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useTheme } from './hooks/useTheme'
import { useLang } from './hooks/useLang'
import { translations } from './translations'

function App() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const t = translations[lang]

  return (
    <div>
      <Navbar t={t} theme={theme} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>
      <footer>
        <p>// {t.footer} <span style={{ color: 'var(--accent)' }}>Fausto Martin Sosa</span> · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
