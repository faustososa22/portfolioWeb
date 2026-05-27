export const translations = {
  en: {
    nav: {
      about: 'about',
      skills: 'skills',
      projects: 'projects',
      contact: 'contact',
    },
    hero: {
      greeting: '// Hi, my name is',
      phrases: ['Backend Developer', '.NET & C# Developer', 'Full-Stack Developer', 'API Builder', 'Problem Solver'],
      desc: 'Backend developer focused on .NET and C#, with hands-on experience building full-stack apps using React and TypeScript.',
      viewProjects: 'view projects',
      contactMe: 'contact me',
      downloadCV: 'download cv',
    },
    about: {
      title: 'about_me',
      p1: 'Junior .NET Developer with full-stack experience. I build RESTful APIs using ASP.NET Core, Entity Framework Core, SQL Server, and PostgreSQL — including JWT auth, role-based authorization, and CI/CD with GitHub Actions. On the frontend I work with React and TypeScript.',
      p2: "I've deployed APIs to Azure App Service and I also bring real-world IT support experience — user support, hardware troubleshooting, and medical systems in a healthcare environment.",
      p3: 'Based in Cork, Ireland. STAMP 4 Visa (EU-FAM) — full working rights, no sponsorship required.',
      location: 'location: Cork, Ireland',
      focus: 'focus: .NET / React',
      status: 'status: open to work',
    },
    skills: {
      title: 'skills',
      categories: {
        Backend: 'Backend',
        Database: 'Database',
        'Auth & Security': 'Auth & Security',
        'Cloud & DevOps': 'Cloud & DevOps',
        'APIs & Tools': 'APIs & Tools',
        Frontend: 'Frontend',
      },
    },
    projects: {
      title: 'projects',
      viewRepo: 'view repo',
      viewSite: 'view site',
      items: [
        {
          name: 'turno_app',
          desc: 'Full-stack barbershop appointment system. Clients can book via a traditional form or an AI chatbot (Claude API) that queries live data to find available slots. Separate dashboards for Clients, Barbers, and Admins.',
        },
        {
          name: 'job_tracker',
          desc: 'Full-stack job application tracker with AI integration. Helps manage the entire job search process — log positions, companies, statuses, and follow-ups. Features a Claude AI assistant with tool use to query your application data via natural language.',
        },
        {
          name: 'book_subscription_web_api',
          desc: 'RESTful API with JWT auth, role-based authorization (Admin / Subscriber), and API key access. Includes input validation, global error handling, standardised responses, unit & integration tests, and a full CI/CD pipeline.',
        },
      ],
    },
    contact: {
      title: 'contact',
      text: 'Have a project or just want to talk? Reach out.',
    },
    footer: 'built by',
  },

  es: {
    nav: {
      about: 'sobre mí',
      skills: 'habilidades',
      projects: 'proyectos',
      contact: 'contacto',
    },
    hero: {
      greeting: '// Hola, mi nombre es',
      phrases: ['Desarrollador Backend', 'Desarrollador .NET & C#', 'Desarrollador Full-Stack', 'Construyo APIs', 'Resuelvo Problemas'],
      desc: 'Desarrollador backend enfocado en .NET y C#, con experiencia construyendo aplicaciones full-stack con React y TypeScript.',
      viewProjects: 'ver proyectos',
      contactMe: 'contactame',
      downloadCV: 'descargar cv',
    },
    about: {
      title: 'sobre_mi',
      p1: 'Desarrollador Junior .NET con experiencia full-stack. Construyo APIs RESTful con ASP.NET Core, Entity Framework Core, SQL Server y PostgreSQL — incluyendo JWT auth, autorización por roles y CI/CD con GitHub Actions. En el frontend trabajo con React y TypeScript.',
      p2: 'Deployé APIs en Azure App Service y también tengo experiencia real en soporte IT — soporte a usuarios, diagnóstico de hardware y sistemas médicos en entornos de salud.',
      p3: 'Vivo en Cork, Irlanda. Visa STAMP 4 (EU-FAM) — habilitado para trabajar sin necesidad de patrocinio.',
      location: 'ubicación: Cork, Irlanda',
      focus: 'enfoque: .NET / React',
      status: 'estado: buscando trabajo',
    },
    skills: {
      title: 'habilidades',
      categories: {
        Backend: 'Backend',
        Database: 'Base de Datos',
        'Auth & Security': 'Auth y Seguridad',
        'Cloud & DevOps': 'Cloud & DevOps',
        'APIs & Tools': 'APIs y Herramientas',
        Frontend: 'Frontend',
      },
    },
    projects: {
      title: 'proyectos',
      viewRepo: 'ver repositorio',
      viewSite: 'ver sitio',
      items: [
        {
          name: 'turno_app',
          desc: 'Sistema de turnos full-stack para una barbería. Los clientes pueden reservar mediante un formulario tradicional o un chatbot con IA (Claude API) que consulta disponibilidad en tiempo real. Paneles separados para Clientes, Barberos y Administradores.',
        },
        {
          name: 'job_tracker',
          desc: 'Seguidor de búsqueda laboral full-stack con IA integrada. Permite gestionar todo el proceso — registrar postulaciones, empresas, estados y seguimientos. Incluye un asistente Claude con tool use para consultar los datos vía lenguaje natural.',
        },
        {
          name: 'book_subscription_web_api',
          desc: 'API RESTful con JWT auth, autorización por roles (Admin / Suscriptor) y acceso por API key. Incluye validación de datos, manejo global de errores, respuestas estandarizadas, tests unitarios e integración, y un pipeline CI/CD completo.',
        },
      ],
    },
    contact: {
      title: 'contacto',
      text: '¿Tenés un proyecto o querés charlar? Escribime.',
    },
    footer: 'hecho por',
  },
}
