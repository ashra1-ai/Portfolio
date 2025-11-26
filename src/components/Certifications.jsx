import React from 'react'
import { FaCertificate } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'Mathematics for Machine Learning and Data Science',
      issuer: 'DeepLearning.AI',
      date: 'Nov 2025',
      link: 'https://www.linkedin.com/in/kanishkashra/details/certifications/',
      color: 'accent-primary',
    },
    {
      title: 'Generative Adversarial Networks (GANs)',
      issuer: 'DeepLearning.AI',
      date: 'Oct 2025',
      link: 'https://www.linkedin.com/in/kanishkashra/details/certifications/',
      color: 'accent-secondary',
    },
    {
      title: 'Google Advanced Data Analytics Professional Certificate',
      issuer: 'Google',
      date: 'Oct 2025',
      link: 'https://www.linkedin.com/in/kanishkashra/details/certifications/',
      color: 'accent-tertiary',
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Google',
      date: 'Jan 2025',
      link: 'https://www.coursera.org/professional-certificates/google-cybersecurity',
      color: 'accent-primary',
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
    <section id="certifications" className="section-container relative bg-dark-surface">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            <span className="text-accent-primary">Certifications</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Professional certifications and credentials
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color)
            return (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-interactive group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                    cert.color === 'accent-primary'
                      ? 'bg-accent-primary/20 border-accent-primary/40 group-hover:bg-accent-primary/30 group-hover:border-accent-primary'
                      : cert.color === 'accent-secondary'
                      ? 'bg-accent-secondary/20 border-accent-secondary/40 group-hover:bg-accent-secondary/30 group-hover:border-accent-secondary'
                      : 'bg-accent-tertiary/20 border-accent-tertiary/40 group-hover:bg-accent-tertiary/30 group-hover:border-accent-tertiary'
                  }`}>
                    <FaCertificate className={`${colors.text} text-2xl`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${colors.text} group-hover:scale-105 transition-transform duration-300`}>
                      {cert.title}
                    </h3>
                    <p className="text-neutral-text font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-neutral-text-medium text-sm">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications

