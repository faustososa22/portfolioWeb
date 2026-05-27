function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title"><span className="text-accent">//</span> about_me</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="about-text">
              Junior <span className="text-accent">.NET Developer</span> with full-stack experience. I build RESTful APIs
              using <span className="text-accent">ASP.NET Core</span>, Entity Framework Core, SQL Server, and PostgreSQL —
              including JWT auth, role-based authorization, and CI/CD with GitHub Actions.
              On the frontend I work with <span className="text-accent">React</span> and <span className="text-accent">TypeScript</span>.
            </p>
            <p className="about-text">
              I've deployed APIs to <span className="text-accent">Azure App Service</span> and I also bring real-world
              IT support experience — user support, hardware troubleshooting, and medical systems in a healthcare environment.
            </p>
            <p className="about-text">
              Based in <span className="text-accent">Cork, Ireland</span>. STAMP 4 Visa (EU-FAM) — full working rights, no sponsorship required.
            </p>
            <div className="about-meta">
              <span className="meta-item"><span className="text-accent">$</span> location: Cork, Ireland</span>
              <span className="meta-item"><span className="text-accent">$</span> focus: .NET / React</span>
              <span className="meta-item"><span className="text-accent">$</span> status: open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
