import React from 'react'
import { FaCode, FaBrain, FaDatabase, FaTools } from 'react-icons/fa'

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['Python', 'SQL', 'PowerShell', 'Java', 'JavaScript (React)', 'Dart (Flutter)'],
      color: 'accent-primary',
    },
    {
      title: 'ML/AI',
      icon: FaBrain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API'],
      color: 'accent-secondary',
    },
    {
      title: 'Data Tools',
      icon: FaDatabase,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
      color: 'accent-tertiary',
    },
    {
      title: 'Tools & Technologies',
      icon: FaTools,
      skills: ['Git', 'Docker', 'Supabase', 'Django', 'React', 'ESP32', 'REST APIs'],
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
    <section id="skills" className="section-container relative bg-dark-bg">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            Technical <span className="text-accent-primary">Skills</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Technologies and tools I use to build intelligent systems
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color)
            const Icon = category.icon
            return (
              <div
                key={index}
                className="glass-card-hover p-6 group relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colors.bg}/20 border-2 ${colors.border}/30 group-hover:${colors.bg}/30 transition-all duration-300`}>
                    <Icon className={`${colors.text} text-2xl`} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-text group-hover:text-accent-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                        category.color === 'accent-primary'
                          ? 'border-accent-primary/30 bg-accent-primary/10 text-accent-primary hover:bg-accent-primary/20 hover:border-accent-primary'
                          : category.color === 'accent-secondary'
                          ? 'border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary hover:bg-accent-secondary/20 hover:border-accent-secondary'
                          : 'border-accent-tertiary/30 bg-accent-tertiary/10 text-accent-tertiary hover:bg-accent-tertiary/20 hover:border-accent-tertiary'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills

