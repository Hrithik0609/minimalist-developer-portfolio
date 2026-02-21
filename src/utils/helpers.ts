// utils/helpers.ts

export interface PortfolioData {
    name: string
    title: string
    location: string
    email: string
    contact: string
    github: string
    aboutText: string
    experience: Experience[]
    projects: Project[]
  }
  
  export interface Experience {
    id: string
    period: string
    company: string
    role: string
    description: string[]
  }
  
  export interface Project {
    id: string
    title: string
    description: string
    tech: string[]
    link?: string
  }
  
  export const portfolioData: PortfolioData = {
    name: 'Yisau Abdussamad',
    title: 'Full Stack Developer',
    location: 'Ilorin, NG',
    email: 'sammieyisau@gmail.com',
    contact: 'sammieyisau@gmail.com',
    github: 'https://github.com/AbdusSamadYisau',
    aboutText:
      "hi, i'm Samad, my friends call me sammie. i enjoy building dynamic, creative products from start to finish, focused on developing intuitive experiences that constantly grow and improve based on user metrics.",
    experience: [
      {
        id: 'exp-1',
        period: 'jan 2022 - present',
        company: 'Reliance Health',
        role: 'Software Engineer',
        description: [
          'collaborate with design teams to implement various complex user interfaces to prioritize features for product releases.',
          'migrated endpoints architecture from monolith to microservices, reducing load times by 40%.',
          'architected and deployed real-time notification system handling 10k+ concurrent users.',
        ],
      },
      {
        id: 'exp-2',
        period: 'jun 2021 - dec 2021',
        company: 'TechStart Lagos',
        role: 'Junior Developer',
        description: [
          'developed responsive web applications using React and Node.js',
          'implemented RESTful APIs with authentication and authorization',
          'participated in code reviews and contributed to team documentation',
        ],
      },
    ],
    projects: [
      {
        id: 'proj-1',
        title: 'Health Dashboard',
        description: 'Real-time patient monitoring system with analytics',
        tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        link: '#',
      },
      {
        id: 'proj-2',
        title: 'Appointment Scheduler',
        description: 'Automated scheduling system with email notifications',
        tech: ['Next.js', 'PostgreSQL', 'Stripe'],
        link: '#',
      },
      {
        id: 'proj-3',
        title: 'Analytics Platform',
        description: 'Data visualization and reporting tool',
        tech: ['React', 'D3.js', 'Express', 'Firebase'],
        link: '#',
      },
    ],
  }
  