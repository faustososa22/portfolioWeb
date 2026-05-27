function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title"><span className="text-accent">//</span> {t.about.title}</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="about-text">{t.about.p1}</p>
            <p className="about-text">{t.about.p2}</p>
            <p className="about-text">{t.about.p3}</p>
            <div className="about-meta">
              <span className="meta-item"><span className="text-accent">$</span> {t.about.location}</span>
              <span className="meta-item"><span className="text-accent">$</span> {t.about.focus}</span>
              <span className="meta-item"><span className="text-accent">$</span> {t.about.status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
