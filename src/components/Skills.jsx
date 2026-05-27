const skillGroups = [
  { key: 'Backend',        skills: ['C#', 'ASP.NET Core Web API', 'ASP.NET Core MVC', 'Entity Framework Core', 'LINQ'] },
  { key: 'Database',       skills: ['SQL Server', 'T-SQL', 'Stored Procedures', 'PostgreSQL', 'EF Core Migrations'] },
  { key: 'Auth & Security',skills: ['JWT Authentication', 'Role-Based Authorization', 'BCrypt'] },
  { key: 'Cloud & DevOps', skills: ['Azure App Service', 'GitHub Actions (CI/CD)', 'Git'] },
  { key: 'APIs & Tools',   skills: ['REST API Design', 'Swagger / OpenAPI', 'Scalar', 'Postman'] },
  { key: 'Frontend',       skills: ['React', 'JavaScript (ES6+)', 'Bootstrap', 'Axios', 'HTML5 / CSS3'] },
]

function Skills({ t }) {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title"><span className="text-accent">//</span> {t.skills.title}</h2>
        <div className="row">
          {skillGroups.map((group) => (
            <div key={group.key} className="col-md-6 col-lg-4 mb-4">
              <div className="skill-group">
                <p className="skill-category">{t.skills.categories[group.key]}</p>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
