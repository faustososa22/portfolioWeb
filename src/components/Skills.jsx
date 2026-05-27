const skillGroups = [
  {
    category: 'Backend',
    skills: ['C#', 'ASP.NET Core Web API', 'ASP.NET Core MVC', 'Entity Framework Core', 'LINQ'],
  },
  {
    category: 'Database',
    skills: ['SQL Server', 'T-SQL', 'Stored Procedures', 'PostgreSQL', 'EF Core Migrations'],
  },
  {
    category: 'Auth & Security',
    skills: ['JWT Authentication', 'Role-Based Authorization', 'BCrypt'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Azure App Service', 'GitHub Actions (CI/CD)', 'Git'],
  },
  {
    category: 'APIs & Tools',
    skills: ['REST API Design', 'Swagger / OpenAPI', 'Scalar', 'Postman'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript (ES6+)', 'Bootstrap', 'Axios', 'HTML5 / CSS3'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title"><span className="text-accent">//</span> skills</h2>
        <div className="row">
          {skillGroups.map((group) => (
            <div key={group.category} className="col-md-6 col-lg-4 mb-4">
              <div className="skill-group">
                <p className="skill-category">{group.category}</p>
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
