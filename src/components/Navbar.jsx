function Navbar({ theme, toggleTheme }) {
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
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><a className="nav-link" href="#about">about</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">contact</a></li>
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
