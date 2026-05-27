const projectsMeta = [
  {
    tech: ['ASP.NET Core', '.NET 10', 'React 19', 'TypeScript', 'PostgreSQL', 'EF Core', 'JWT / RBAC', 'Claude API', 'Azure', 'Vercel', 'GitHub Actions', 'Docker', 'Scalar'],
    github: 'https://github.com/faustososa22/turno-app',
    live: 'https://turno-app-navy.vercel.app',
  },
  {
    tech: ['ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'Claude API', 'Docker', 'Scalar'],
    github: 'https://github.com/faustososa22/JobTracker',
    live: 'https://job-tracker-ten-bay.vercel.app',
  },
  {
    tech: ['ASP.NET Core', 'SQL Server', 'EF Core', 'JWT / RBAC', 'Swagger / OpenAPI', 'Azure App Service', 'GitHub Actions'],
    github: 'https://github.com/faustososa22/BibliotecaApi',
    live: null,
  },
]

function Projects({ t }) {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title"><span className="text-accent">//</span> {t.projects.title}</h2>
        <div className="row">
          {t.projects.items.map((item, i) => {
            const meta = projectsMeta[i]
            return (
              <div key={item.name} className="col-md-6 mb-4">
                <div className="project-card">
                  <h3 className="project-name">{item.name}</h3>
                  <p className="project-desc">{item.desc}</p>
                  <div className="project-tech">
                    {meta.tech.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a href={meta.github} className="btn btn-outline-accent" target="_blank" rel="noreferrer">
                      {t.projects.viewRepo}
                    </a>
                    {meta.live && (
                      <a href={meta.live} className="btn btn-accent" target="_blank" rel="noreferrer">
                        {t.projects.viewSite}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
