function Contact({ t }) {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title"><span className="text-accent">//</span> {t.contact.title}</h2>
        <div className="row">
          <div className="col-lg-6">
            <p className="about-text">{t.contact.text}</p>
            <div className="contact-links">
              <a href="https://github.com/faustososa22" className="contact-link" target="_blank" rel="noreferrer">
                <span className="text-accent">$</span> github.com/faustososa22
              </a>
              <a href="https://linkedin.com/in/fausto-sosa" className="contact-link" target="_blank" rel="noreferrer">
                <span className="text-accent">$</span> linkedin.com/in/fausto-sosa
              </a>
              <a href="mailto:faustomartinsosa@gmail.com" className="contact-link">
                <span className="text-accent">$</span> faustomartinsosa@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
