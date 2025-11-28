import React from 'react'
import { FaTrophy, FaBriefcase, FaCertificate, FaAward } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      type: 'Award',
      title: 'NaTHacks 2025 EcoTech Winner',
      description: 'First place in the EcoTech category for Aura Farming — AI-Powered IoT Irrigation System',
      icon: FaTrophy,
      color: 'accent-primary',
      date: 'Nov 2025',
    },
    {
      type: 'Certification',
      title: 'Mathematics for Machine Learning and Data Science',
      description: 'DeepLearning.AI Specialization',
      icon: FaCertificate,
      color: 'accent-secondary',
      date: 'Nov 2025',
    },
    {
      type: 'Certification',
      title: 'Generative Adversarial Networks (GANs)',
      description: 'DeepLearning.AI Specialization',
      icon: FaCertificate,
      color: 'accent-tertiary',
      date: 'Oct 2025',
    },
    {
      type: 'Certification',
      title: 'Google Advanced Data Analytics Professional Certificate',
      description: 'Google Career Certificate Program',
      icon: FaCertificate,
      color: 'accent-primary',
      date: 'Oct 2025',
    },
    {
      type: 'Certification',
      title: 'Google Cybersecurity Professional Certificate',
      description: 'Google Career Certificate Program',
      icon: FaCertificate,
      color: 'accent-secondary',
      date: 'Jan 2025',
    },
    {
      type: 'Achievement',
      title: 'Research Publication',
      description: 'EGEAT paper under submission to IEEE TNNLS (Expected 2026)',
      icon: FaAward,
      color: 'accent-tertiary',
      date: '2025',
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
    <section id="achievements" className="section-container relative bg-dark-surface">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            Achievements <span className="text-accent-primary">&</span> Awards
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Recognition and milestones in research, engineering, and innovation
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color)
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="glass-card-hover p-6 border-l-4 group relative overflow-hidden"
                style={{
                  borderLeftColor: achievement.color === 'accent-primary' ? 'rgb(0, 245, 212)' :
                                  achievement.color === 'accent-secondary' ? 'rgb(56, 189, 248)' :
                                  'rgb(139, 92, 246)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${colors.bg}/20 border-2 ${colors.border}/30 group-hover:${colors.bg}/30 transition-all duration-300`}>
                    <Icon className={`${colors.text} text-2xl`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}>
                        {achievement.type}
                      </span>
                      <span className="text-xs text-neutral-text-disabled">{achievement.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-text mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-neutral-text-medium text-sm leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements

