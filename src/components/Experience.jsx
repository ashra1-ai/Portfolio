import React, { useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const experiences = [
    {
      type: 'work',
      title: 'Software Engineering & Automation Intern',
      company: 'University of Alberta - Residence Services',
      location: 'Edmonton, AB',
      period: 'Apr. 2025 -- Aug. 2025',
      description: [
        'Automated facility workflows using Python, AD logs, and REST APIs, eliminating ~70% of manual processing',
        'Developed dashboard pipelines with Pandas and Plotly to monitor uptime, incident patterns, and maintenance KPIs',
        'Built automation scripts to classify, route, and resolve recurring incidents, improving ticket accuracy by 30%+',
        'Standardized SOPs, compliance workflows, and documentation across 40+ buildings for audit readiness',
      ],
      color: 'accent-primary',
    },
    {
      type: 'work',
      title: 'Technical Support Analyst',
      company: 'University of Alberta Students\' Union',
      location: 'Edmonton, AB',
      period: 'Feb. 2025 -- Apr. 2025',
      description: [
        'Diagnosed 200+ support issues using system logs, diagnostics tools, and endpoint performance metrics',
        'Configured secure workstation environments with endpoint protection, network policies, and user access controls',
        'Developed technical SOPs and troubleshooting guides, improving operational consistency and onboarding',
      ],
      color: 'accent-secondary',
    },
    {
      type: 'work',
      title: 'Software Developer',
      company: 'Enactus Canada (UAlberta)',
      location: 'Hybrid',
      period: 'Oct. 2024 -- Jan. 2025',
      description: [
        'Built TensorFlow-based recommendation pipelines using embeddings and user interaction data',
        'Integrated Stripe API, optimized SQLite caching, and improved backend I/O throughput',
        'Enhanced React frontend performance by profiling bottlenecks and optimizing state management',
      ],
      color: 'accent-tertiary',
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Alberta',
      location: 'Edmonton, AB',
      period: 'Sept. 2022 -- Dec. 2026',
      description: [
        'Focus on Machine Learning, Data Science, and Software Engineering',
        'Relevant coursework: Machine Learning, Data Structures, Algorithms, Distributed Systems',
      ],
      color: 'accent-tertiary',
    },
  ]

  const getColorClasses = (color) => {
    const colors = {
      'accent-primary': {
        text: 'text-accent-primary',
        border: 'border-accent-primary',
        bg: 'bg-accent-primary',
        glow: 'rgba(59,130,246,0.1)',
      },
      'accent-secondary': {
        text: 'text-accent-secondary',
        border: 'border-accent-secondary',
        bg: 'bg-accent-secondary',
        glow: 'rgba(16,185,129,0.1)',
      },
      'accent-tertiary': {
        text: 'text-accent-tertiary',
        border: 'border-accent-tertiary',
        bg: 'bg-accent-tertiary',
        glow: 'rgba(245,158,11,0.1)',
      },
    }
    return colors[color] || colors['accent-primary']
  }

  return (
    <section id="experience" className="section-container relative bg-dark-surface">

      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            <span className="text-accent-primary">Experience</span> & Education
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          My professional journey and achievements
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary via-accent-tertiary to-accent-primary transform md:-translate-x-1/2 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color)
              const isExpanded = expandedIndex === index
              
              return (
                <div
                  key={index}
                  className="relative flex items-start md:items-center group/timeline"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="relative">
                      <div
                        className={`w-8 h-8 ${colors.bg} rounded-full border-4 border-dark-surface shadow-elevation-8dp group-hover/timeline:scale-125 transition-all duration-500`}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                      {/* Pulse effect */}
                      <div className={`absolute inset-0 ${colors.bg} rounded-full animate-ping opacity-20`}></div>
                    </div>
                  </div>

                  {/* Enhanced Content Card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[48%] ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div
                      className="card-interactive group/card relative overflow-hidden cursor-pointer"
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        exp.color === 'accent-primary'
                          ? 'from-accent-primary/10 via-transparent to-accent-secondary/10'
                          : exp.color === 'accent-secondary'
                          ? 'from-accent-secondary/10 via-transparent to-accent-tertiary/10'
                          : 'from-accent-secondary/10 via-transparent to-accent-primary/10'
                      } opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}></div>

                      <div className="relative z-10">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className={`p-4 border-2 rounded-xl transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6 ${
                            exp.color === 'accent-primary'
                              ? 'bg-accent-primary/20 border-accent-primary/40 group-hover/card:bg-accent-primary/30 group-hover/card:border-accent-primary'
                              : exp.color === 'accent-secondary'
                              ? 'bg-accent-secondary/20 border-accent-secondary/40 group-hover/card:bg-accent-secondary/30 group-hover/card:border-accent-secondary'
                              : 'bg-accent-secondary/20 border-accent-secondary/40 group-hover/card:bg-accent-secondary/30 group-hover/card:border-accent-secondary'
                          }`}>
                            {exp.type === 'work' ? (
                              <FaBriefcase className={`${colors.text} text-2xl`} />
                            ) : (
                              <FaGraduationCap className={`${colors.text} text-2xl`} />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className={`text-2xl font-bold ${colors.text} group-hover/card:scale-105 transition-transform duration-300`}>
                                {exp.title}
                              </h3>
                              {exp.type === 'work' && (
                                <span className="px-2 py-0.5 text-xs font-bold bg-accent-primary/20 text-accent-primary rounded-md border border-accent-primary/30">
                                  WORK
                                </span>
                              )}
                            </div>
                            <p className="text-neutral-text font-semibold mb-1 text-lg">
                              {exp.company}
                            </p>
                            <div className="flex items-center gap-2 text-neutral-text-medium text-sm">
                              <span>{exp.location}</span>
                              <span className="text-accent-primary">•</span>
                              <span className={colors.text}>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced Expandable Content */}
                        <div className={`overflow-hidden transition-all duration-500 ${
                          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <ul className="space-y-3 ml-16 pt-4 border-t border-dark-border/50">
                            {exp.description.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="text-neutral-text-medium text-sm flex items-start leading-relaxed group/item"
                              >
                                <span className={`${colors.text} mr-3 font-bold text-lg group-hover/item:scale-110 transition-transform duration-300`}>▸</span>
                                <span className="group-hover/item:text-neutral-text transition-colors duration-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                          {/* LinkedIn Link */}
                          <div className="mt-4 ml-16 pt-4 border-t border-dark-border/50">
                            <a
                              href={exp.type === 'work' 
                                ? 'https://www.linkedin.com/in/kanishkashra/detail/experience/'
                                : 'https://www.linkedin.com/in/kanishkashra/detail/education/'
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`inline-flex items-center gap-2 ${colors.text} text-sm font-semibold hover:translate-x-1 transition-transform duration-300 group/link`}
                            >
                              <FaLinkedin className="text-base" />
                              <span>View on LinkedIn</span>
                              <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 transition-transform duration-300" />
                            </a>
                          </div>
                        </div>
                        
                        {/* Expand/Collapse Indicator */}
                        <div className={`flex items-center justify-center gap-2 mt-4 ${colors.text} text-xs font-medium transition-all duration-300 ${
                          isExpanded ? 'opacity-0 h-0' : 'opacity-100 h-auto'
                        }`}>
                          <span>Click to {isExpanded ? 'collapse' : 'expand'}</span>
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
