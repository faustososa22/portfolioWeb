function Navbar({ t, theme, toggleTheme, lang, toggleLang }) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="text-accent">&gt;</span> fausto.dev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">{t.nav.about}</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">{t.nav.skills}</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">{t.nav.projects}</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">{t.nav.contact}</a></li>
            <li className="nav-item">
              <button className="theme-toggle" onClick={toggleLang} title="Toggle language">
                {lang === 'en' ? '[ es ]' : '[ en ]'}
              </button>
            </li>
            <li className="nav-item">
              <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
                {theme === 'dark' ? '[ light ]' : '[ dark ]'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
