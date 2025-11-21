import AnimatedCard from './AnimatedCard'

export default function Portfolio() {
  const projects = [
    {
      link: 'https://laravel.dongyuhan.com',
      gradient: 'from-purple-600 to-pink-600',
      icon: (
        <svg className="w-16 h-16 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 8v8m-4-4h8M5 3a2 2 0 00-2 2v14l4-4h10a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
        </svg>
      ),
      category: 'Full-Stack Development',
      title: 'Modular Tech Dashboard',
      description:
        'A modular Laravel + Livewire dashboard featuring async task processing workflows, AI-driven modules, Role & Permission Management (RBAC) system, and additional features that will be continuously added over time.',
      status: 'In Progress',
      showDetails: true,
    },
    {
      gradient: 'from-blue-600 to-cyan-500',
      icon: (
        <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
      category: 'Coming Soon',
      title: 'Next Project',
      description: 'Something exciting is on the way — stay tuned for the next release.',
      status: '⏳ Coming soon',
      showDetails: false,
    },
    {
      gradient: 'from-green-500 to-emerald-600',
      icon: (
        <svg className="w-16 h-16 text-white/65" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      category: 'Coming Soon',
      title: 'Next Project',
      description: 'Another web application currently in concept phase. Details coming soon.',
      status: '⏳ Coming soon',
      showDetails: false,
    },
    {
      gradient: 'from-orange-500 to-red-600',
      icon: (
        <svg className="w-16 h-16 text-white/65" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      category: 'Coming Soon',
      title: 'Next Project',
      description: 'A future portfolio addition focused on performance and clean UI.',
      status: '⏳ Coming soon',
      showDetails: false,
    },
    {
      gradient: 'from-indigo-500 to-purple-600',
      icon: (
        <svg className="w-16 h-16 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l7 7-7 7-7-7 7-7z" />
          <path d="M12 9v6" />
        </svg>
      ),
      category: 'Coming Soon',
      title: 'Next Project',
      description: 'Upcoming full-stack project integrating APIs, automation, and dashboard analytics.',
      status: '⏳ Coming soon',
      showDetails: false,
    },
    {
      gradient: 'from-yellow-500 to-orange-600',
      icon: (
        <svg className="w-16 h-16 text-white/65" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      ),
      category: 'Coming Soon',
      title: 'Next Project',
      description: 'Experimental idea currently under research — will be shared soon.',
      status: '⏳ Coming soon',
      showDetails: false,
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-6 bg-black bg-opacity-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-title-small mb-2">EXPLORE MY PROJECTS</p>
          <h2 className="section-title-large">My Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard key={index}>
              <div className="project-card rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-pink transition">
              <div
                className={`project-image relative flex items-center justify-center h-56 rounded bg-gradient-to-br ${project.gradient}`}
              >
                {project.icon}
              </div>
              <div className="p-6">
                <p className="text-pink text-xs mb-2 uppercase tracking-wider">{project.category}</p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-light text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    {project.showDetails && (
                      <svg className="w-4 h-4 text-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.5 3A1.5 1.5 0 001 4.5v11A1.5 1.5 0 002.5 17h15a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0017.5 3h-15zM2 5h16v10H2V5z" />
                      </svg>
                    )}
                    {project.status}
                  </span>
                  {project.showDetails && (
                    <a href={project.link} target="_blank" className="text-pink hover:underline text-sm">
                      View Details →
                    </a>
                  )}
                </div>
              </div>
            </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

