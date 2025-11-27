import React, { useState } from 'react'

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null)

  return (
    <section id="about" className="section-container relative bg-dark-bg">

      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            About <span className="text-accent-primary">Me</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Building intelligent systems with Python, ML/AI, and modern technologies
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Content */}
        <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-neutral-text-medium leading-relaxed">
                I'm a <span className="text-accent-primary font-semibold relative inline-block">
                  <span className="relative z-10">Computer Science student</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-primary/30 -z-0"></span>
                </span> at the{' '}
                <span className="text-accent-secondary font-semibold relative inline-block">
                  <span className="relative z-10">University of Alberta</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-secondary/20 -z-0"></span>
                </span>, specializing in{' '}
                <span className="text-accent-tertiary font-semibold relative inline-block">
                  <span className="relative z-10">Machine Learning & AI</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-tertiary/30 -z-0"></span>
                </span>.
              </p>
              <p className="text-lg md:text-xl text-neutral-text-medium leading-relaxed">
                I build <span className="text-accent-primary font-medium">AI-powered applications</span>, develop{' '}
                <span className="text-accent-secondary font-medium">automation solutions</span>, and create{' '}
                <span className="text-accent-tertiary font-medium">data-driven systems</span> that solve real-world problems.
              </p>
              
              {/* Enhanced Code Block */}
              <div className="code-block mt-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/5 via-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-accent-primary text-sm mb-4 font-semibold">
                    <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
                    Expertise
                  </div>
                  <div className="text-neutral-text-medium text-sm space-y-3">
                    {[
                      'Machine Learning & Deep Learning',
                      'Python Development & Automation',
                      'Data Analytics & Visualization',
                      'Full-Stack Web Development',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item">
                        <span className="text-accent-primary mt-1">▸</span>
                        <span className="group-hover/item:text-neutral-text transition-colors duration-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Interactive Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {[
                { value: '5+', label: 'Projects', color: 'accent-primary', icon: '🚀' },
                { value: '3+', label: 'Years Experience', color: 'accent-secondary', icon: '⭐' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="card-interactive text-center group relative overflow-hidden"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-3xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{stat.icon}</div>
                    <div className={`text-5xl md:text-6xl font-light mb-2 transition-all duration-500 ${
                      hoveredStat === index ? 'scale-110' : 'scale-100'
                    } ${
                      stat.color === 'accent-primary' ? 'text-accent-primary' : 'text-accent-secondary'
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-neutral-text-medium text-sm group-hover:text-neutral-text transition-colors duration-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Download Resume Button */}
            <div className="pt-6">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Kanishk_Ashra_Resume.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 btn-primary group"
              >
                <span>Resume</span>
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About
