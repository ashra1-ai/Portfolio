import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaLightbulb } from 'react-icons/fa'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'EGEAT-Experiments',
      description:
        'Research experiments focusing on adversarial robustness and optimization at the intersection of machine learning theory and practical applications. Building intelligent systems that connect theory with real-world impact.',
      tags: ['Python', 'Machine Learning', 'Research', 'Optimization'],
      github: 'https://github.com/ashra1-ai/EGEAT-Experiments',
      demo: null,
      color: 'accent-primary',
      insights: [
        {
          title: 'Exact Geometric Optimization',
          description: 'Leveraged convex duality to eliminate iterative inner maximization, achieving exact first-order adversarial optimization with significant computational efficiency gains.',
        },
        {
          title: 'Transferability Reduction',
          description: 'Implemented gradient-space decorrelation techniques that reduce adversarial transferability by up to 40% across different model architectures and datasets.',
        },
        {
          title: 'Ensemble Robustness',
          description: 'Developed ensemble smoothing methods that enhance robust generalization, achieving improved accuracy on MNIST, CIFAR-10, and DREBIN datasets under adversarial attacks.',
        },
        {
          title: 'Theoretical Contributions',
          description: 'Unified convex duality, geometric regularization, and ensemble learning into a single framework, providing theoretical guarantees for robust representation learning.',
        },
      ],
    },
    {
      title: 'Aura Farming — AI-Powered IoT Irrigation',
      description:
        'NaTHacks 2025 Winner. Multi-zone IoT irrigation system using ESP32 boards collecting 5k+ soil moisture and rainfall telemetry points in real time. Features automated irrigation logic with servo-controlled sprinklers and Supabase-backed pipeline.',
      tags: ['Python', 'ESP32', 'React', 'Django', 'Supabase', 'IoT'],
      github: 'https://github.com/ashra1-ai/Aura-Farming',
      demo: null,
      color: 'accent-secondary',
    },
    {
      title: 'Conditional GAN (CGAN) — MNIST Dataset',
      description:
        'Implemented a Conditional GAN in PyTorch to generate class-conditioned handwritten digits with stable training across 60+ epochs. Improved generator convergence using label embeddings and conducted latent-space analysis.',
      tags: ['Python', 'PyTorch', 'Deep Learning', 'GANs', 'MNIST'],
      github: 'https://github.com/ashra1-ai/cgan-mnist',
      demo: null,
      color: 'accent-tertiary',
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      'accent-primary': {
        text: 'text-accent-primary',
        border: 'border-accent-primary',
        bg: 'bg-accent-primary',
        shadow: 'rgba(99,102,241,0.3)',
      },
      'accent-secondary': {
        text: 'text-accent-secondary',
        border: 'border-accent-secondary',
        bg: 'bg-accent-secondary',
        shadow: 'rgba(16,185,129,0.3)',
      },
      'accent-tertiary': {
        text: 'text-accent-tertiary',
        border: 'border-accent-tertiary',
        bg: 'bg-accent-tertiary',
        shadow: 'rgba(245,158,11,0.3)',
      },
    }
    return colors[color] || colors['accent-primary']
  }

  return (
    <section id="projects" className="section-container relative bg-dark-bg">

      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            Featured <span className="text-accent-primary">Projects</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          AI-powered applications and intelligent systems I've developed
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color)
            const isHovered = hoveredProject === index
            
            return (
              <div
                key={index}
                className="card-interactive group relative overflow-hidden"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                    project.color === 'accent-primary' 
                    ? 'from-accent-primary/10 via-transparent to-accent-secondary/10' 
                    : project.color === 'accent-secondary'
                    ? 'from-accent-secondary/10 via-transparent to-accent-tertiary/10'
                    : 'from-accent-secondary/10 via-transparent to-accent-primary/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>


                <div className="relative z-10">
                  <div className="mb-6">
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 ${colors.text} transition-colors duration-300`}>
                      {project.title}
                    </h3>
                    <p className="text-neutral-text-medium text-sm md:text-base leading-relaxed mb-6 line-clamp-4 group-hover:text-neutral-text transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => {
                      const getTagClasses = () => {
                        if (project.color === 'accent-primary') {
                          return isHovered 
                            ? 'border-accent-primary bg-accent-primary/20 text-accent-primary' 
                            : 'border-accent-primary/30 bg-accent-primary/10 text-accent-primary/80'
                        }
                        if (project.color === 'accent-secondary') {
                          return isHovered 
                            ? 'border-accent-secondary bg-accent-secondary/20 text-accent-secondary' 
                            : 'border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary/80'
                        }
                        return isHovered 
                          ? 'border-accent-tertiary bg-accent-tertiary/20 text-accent-tertiary' 
                          : 'border-accent-tertiary/30 bg-accent-tertiary/10 text-accent-tertiary/80'
                      }
                      return (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1.5 border ${getTagClasses()} text-xs font-medium rounded-md transition-all duration-300`}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>

                  {/* Enhanced Links */}
                  <div className="pt-6 border-t border-dark-border/50 space-y-3">
                    {project.insights && (
                      <a
                        href="#research-article"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-tertiary/20 border-2 border-accent-tertiary/30 text-accent-tertiary text-sm font-semibold hover:bg-accent-tertiary/30 hover:border-accent-tertiary transition-all duration-300 rounded-lg group/insight"
                      >
                        <FaLightbulb className="group-hover/insight:scale-110 transition-transform duration-300" />
                        <span>Read Article</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 ${colors.bg} text-white text-sm font-semibold hover:opacity-90 transition-all duration-300 rounded-lg group/link`}
                    >
                      <FaGithub className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span>View on GitHub</span>
                      <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 transition-transform duration-300" />
                    </a>
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
