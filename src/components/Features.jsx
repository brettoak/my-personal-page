import AnimatedCard from './AnimatedCard'

export default function Features() {
  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
        </svg>
      ),
      title: 'Laravel',
      description:
        'Building scalable SaaS and API-driven systems with Laravel, delivering clean backend architecture, optimized queries, and secure authentication flows.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
      ),
      title: 'API Design & Integration',
      description:
        'Designing RESTful APIs and API Gateways, standardizing interfaces with Swagger, and integrating third-party services like Stripe and WeChat Pay.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
      title: 'React & Vue',
      description:
        'Building dynamic, component-based frontends with React and Vue, enhancing UX through reusable design systems and modern build tools like Vite and Webpack.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.06-.94l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L14.4 2.81c-.03-.2-.2-.34-.4-.34h-3.2c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.06-.39 0-.49.18L2.07 9.07c-.1.18-.05.39.1.51l1.69 1.32c-.04.3-.06.61-.06.94 0 .32.02.64.06.94L2.17 15.6c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .36-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.06.39 0 .49-.18l1.6-2.77c.1-.18.05-.39-.1-.51l-1.67-1.32zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      ),
      title: 'DevOps & Cloud',
      description:
        'Deploying containerized applications on Azure and AWS with Docker and Github Actions CI/CD pipelines; automating builds and ensuring production stability.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      title: 'Database & Data Modeling',
      description:
        'Designing and optimizing relational schemas in MySQL and PostgreSQL; supporting analytics with MongoDB and cloud data platforms like MaxCompute & Spark.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: 'System Architecture',
      description:
        'Designing modular, maintainable full-stack architectures that balance performance, scalability, and developer experience across backend, frontend, and cloud.',
    },
  ]

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-title-small mb-2">FEATURES</p>
          <h2 className="section-title-large">What I Do</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <AnimatedCard key={index}>
              <div className="skill-card p-8">
                <div className="skill-icon text-pink">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-gray-light leading-relaxed">{skill.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

