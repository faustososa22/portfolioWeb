const projects = [
  {
    name: 'turno_app',
    desc: 'Full-stack barbershop appointment system. Clients can book via a traditional form or an AI chatbot (Claude API) that queries live data to find available slots. Separate dashboards for Clients, Barbers, and Admins.',
    tech: ['ASP.NET Core', '.NET 10', 'React 19', 'TypeScript', 'PostgreSQL', 'EF Core', 'JWT / RBAC', 'Claude API', 'Azure', 'Vercel', 'GitHub Actions', 'Docker', 'Scalar'],
    github: 'https://github.com/faustososa22/turno-app',
    live: 'https://turno-app-navy.vercel.app',
  },
  {
    name: 'job_tracker',
    desc: 'Full-stack job application tracker with AI integration. Helps manage the entire job search process — log positions, companies, statuses, and follow-ups. Features a Claude AI assistant with tool use to query and interact with your application data via natural language.',
    tech: ['ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'Claude API', 'Docker', 'Scalar'],
    github: 'https://github.com/faustososa22/JobTracker',
    live: 'https://job-tracker-ten-bay.vercel.app',
  },
  {
    name: 'book_subscription_web_api',
    desc: 'RESTful API with JWT auth, role-based authorization (Admin / Subscriber), and API key access. Includes input validation, global error handling, standardised responses, unit & integration tests, and a full CI/CD pipeline.',
    tech: ['ASP.NET Core', 'SQL Server', 'EF Core', 'JWT / RBAC', 'Swagger / OpenAPI', 'Azure App Service', 'GitHub Actions'],
    github: 'https://github.com/faustososa22/BibliotecaApi',
    live: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title"><span className="text-accent">//</span> projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div key={project.name} className="col-md-6 mb-4">
              <div className="project-card">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.github}
                    className="btn btn-outline-accent"
                    target="_blank"
                    rel="noreferrer"
                  >
                    view repo
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="btn btn-accent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      view site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
