import React from 'react'
import { FaMedium, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'

const Blogs = () => {
  const blogs = [
    {
      title: 'Building AI-Powered IoT Systems',
      platform: 'Medium',
      date: 'Dec 2024',
      excerpt: 'Exploring the intersection of machine learning and IoT, discussing how AI can enhance smart device functionality and automation.',
      link: 'https://medium.com/@kanishkashra',
      icon: FaMedium,
      color: 'accent-primary',
    },
    {
      title: 'Adversarial Robustness in Deep Learning',
      platform: 'LinkedIn',
      date: 'Nov 2024',
      excerpt: 'Deep dive into adversarial attacks and defense mechanisms in neural networks, focusing on practical applications and research insights.',
      link: 'https://linkedin.com/in/kanishkashra',
      icon: FaLinkedin,
      color: 'accent-secondary',
    },
    {
      title: 'Optimizing ML Models for Production',
      platform: 'Medium',
      date: 'Oct 2024',
      excerpt: 'Best practices for deploying machine learning models at scale, covering performance optimization, monitoring, and infrastructure considerations.',
      link: 'https://medium.com/@kanishkashra',
      icon: FaMedium,
      color: 'accent-tertiary',
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      'accent-primary': {
        text: 'text-accent-primary',
        border: 'border-accent-primary',
        bg: 'bg-accent-primary',
      },
      'accent-secondary': {
        text: 'text-accent-secondary',
        border: 'border-accent-secondary',
        bg: 'bg-accent-secondary',
      },
      'accent-tertiary': {
        text: 'text-accent-tertiary',
        border: 'border-accent-tertiary',
        bg: 'bg-accent-tertiary',
      },
    }
    return colors[color] || colors['accent-primary']
  }

  return (
    <section id="blogs" className="section-container relative bg-dark-surface">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            <span className="text-accent-primary">Blogs</span> & Posts
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          My thoughts on AI, ML, and software engineering
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {blogs.map((blog, index) => {
            const colors = getColorClasses(blog.color)
            const Icon = blog.icon

            return (
              <a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-interactive group relative overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Platform Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 border-2 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                      blog.color === 'accent-primary'
                        ? 'bg-accent-primary/20 border-accent-primary/40 group-hover:bg-accent-primary/30 group-hover:border-accent-primary'
                        : blog.color === 'accent-secondary'
                        ? 'bg-accent-secondary/20 border-accent-secondary/40 group-hover:bg-accent-secondary/30 group-hover:border-accent-secondary'
                        : 'bg-accent-tertiary/20 border-accent-tertiary/40 group-hover:bg-accent-tertiary/30 group-hover:border-accent-tertiary'
                    }`}>
                      <Icon className={`${colors.text} text-xl`} />
                    </div>
                    <span className="text-xs text-neutral-text-disabled font-medium">{blog.date}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 ${colors.text} group-hover:scale-105 transition-transform duration-300`}>
                      {blog.title}
                    </h3>
                    <p className="text-neutral-text-medium text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-neutral-text transition-colors duration-300">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-neutral-text-disabled group-hover:text-neutral-text-medium transition-colors duration-300">
                      <span className="font-medium">{blog.platform}</span>
                      <FaExternalLinkAlt className="text-xs group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 pt-4 border-t border-dark-border/50">
                    <div className={`flex items-center justify-between ${colors.text} text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300`}>
                      <span>Read Article</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://medium.com/@kanishkashra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-surface-1dp border-2 border-accent-primary/30 text-accent-primary text-sm font-semibold hover:bg-accent-primary/10 hover:border-accent-primary transition-all duration-300 rounded-lg"
          >
            <span>View All Posts</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blogs

