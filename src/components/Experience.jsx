import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'University of Alberta - Residence Services',
      location: 'Edmonton, AB',
      period: 'Apr. 2025 – Aug. 2025',
      achievements: [
        'Automated facility workflows using Python, AD logs, and REST APIs, eliminating 70% of manual processing',
        'Developed dashboard pipelines with Pandas and Plotly to monitor uptime, incident patterns, and maintenance KPIs',
        'Built automation scripts to classify, route, and resolve recurring incidents, improving ticket accuracy by 30%+',
        'Standardized SOPs, compliance workflows, and documentation across 40+ buildings for audit readiness',
      ],
      color: 'accent-primary',
    },
    {
      title: 'Software Developer',
      company: 'Enactus Canada (UAlberta)',
      location: 'Hybrid',
      period: 'Oct. 2024 – Jan. 2025',
      achievements: [
        'Built TensorFlow-based recommendation pipelines using embeddings and user interaction data',
        'Integrated Stripe API, optimized SQLite caching, and improved backend I/O throughput',
        'Enhanced React frontend performance by profiling bottlenecks and optimizing state management',
      ],
      color: 'accent-tertiary',
    },
    {
      title: 'Mathematics Instructor',
      company: 'UCMAS Canada',
      location: 'Edmonton, AB',
      period: 'May 2023 – Sept. 2023',
      achievements: [
        'Used dashboards and performance analytics to personalize learning for 100+ students',
        'Designed structured problem-solving modules improving speed, accuracy, and retention',
        'Automated weekly academic reporting workflows, reducing manual effort',
      ],
      color: 'accent-primary',
    },
    {
      title: 'Math & Science Tutor',
      company: 'Oxford Learning Centres Inc.',
      location: 'Edmonton, AB (Hybrid)',
      period: 'Oct. 2022 – Apr. 2023',
      achievements: [
        'Built personalized study plans using assessment data and progress analytics',
        'Implemented STEM simulations and visual demonstrations to enhance conceptual understanding',
        'Provided technical support for digital learning tools and remote-learning systems',
      ],
      color: 'accent-secondary',
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
    <section id="experience" className="section-container relative bg-dark-bg">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap text-center">
            Professional <span className="text-accent-primary">Experience</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color)
            return (
              <div
                key={index}
                className="glass-card-hover p-6 border-l-4 group relative overflow-hidden"
                style={{
                  borderLeftColor: exp.color === 'accent-primary' ? 'rgb(0, 245, 212)' :
                                  exp.color === 'accent-secondary' ? 'rgb(56, 189, 248)' :
                                  'rgb(139, 92, 246)',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-text mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-neutral-text-medium text-sm">
                      <div className="flex items-center gap-2">
                        <FaBriefcase className={colors.text} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className={colors.text} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className={colors.text} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-text-medium text-sm leading-relaxed">
                      <span className={`${colors.text} mt-1.5 flex-shrink-0`}>▸</span>
                      <span className="group-hover:text-neutral-text transition-colors duration-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
