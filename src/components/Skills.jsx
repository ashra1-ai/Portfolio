import React, { useState, useEffect, useRef } from 'react'
import { FaPython, FaNodeJs, FaJs, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiKubernetes, SiPostgresql, SiMongodb, SiRedis } from 'react-icons/si'

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState({})
  const skillRefs = useRef({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId
            setVisibleSkills((prev) => ({ ...prev, [skillId]: true }))
          }
        })
      },
      { threshold: 0.5 }
    )

    Object.values(skillRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Languages',
      color: 'accent-primary',
      skills: [
        { name: 'Python', icon: FaPython, level: 95 },
        { name: 'JavaScript (React)', icon: FaJs, level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Java', level: 75 },
        { name: 'PowerShell', level: 80 },
        { name: 'Dart (Flutter)', level: 70 },
      ],
    },
    {
      title: 'ML/AI',
      color: 'accent-secondary',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 85 },
        { name: 'PyTorch', icon: SiPytorch, level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Pandas/NumPy', level: 95 },
        { name: 'OpenAI API', level: 85 },
      ],
    },
    {
      title: 'Data Tools',
      color: 'accent-tertiary',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 85 },
        { name: 'Plotly', level: 88 },
      ],
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
    <section id="skills" className="section-container relative bg-dark-surface">

      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            <span className="text-accent-primary">Skills</span> & Expertise
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Technologies and tools I work with
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color)
            return (
              <div
                key={categoryIndex}
                className="card-interactive group relative overflow-hidden"
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color === 'accent-primary' ? 'from-accent-primary/10 via-transparent to-accent-secondary/10' : category.color === 'accent-secondary' ? 'from-accent-secondary/10 via-transparent to-accent-tertiary/10' : 'from-accent-tertiary/10 via-transparent to-accent-primary/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-10 text-center ${colors.text} group-hover:scale-110 transition-transform duration-500 relative inline-block`}>
                    <span className="relative z-10">{category.title}</span>
                    <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 ${colors.bg} group-hover:w-3/4 transition-all duration-500 rounded-full`}></span>
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon
                      const skillId = `${categoryIndex}-${skillIndex}`
                      const isVisible = visibleSkills[skillId]
                      
                      return (
                        <div
                          key={skillIndex}
                          ref={(el) => (skillRefs.current[skillId] = el)}
                          data-skill-id={skillId}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3 group-hover/skill:translate-x-1 transition-transform duration-300">
                              {Icon && (
                              <div className={`p-3 border-2 rounded-xl transition-all duration-500 group-hover/skill:scale-110 group-hover/skill:rotate-6 ${
                                category.color === 'accent-primary'
                                  ? 'bg-accent-primary/20 border-accent-primary/40 group-hover/skill:bg-accent-primary/30 group-hover/skill:border-accent-primary'
                                  : category.color === 'accent-secondary'
                                  ? 'bg-accent-secondary/20 border-accent-secondary/40 group-hover/skill:bg-accent-secondary/30 group-hover/skill:border-accent-secondary'
                                  : 'bg-accent-tertiary/20 border-accent-tertiary/40 group-hover/skill:bg-accent-tertiary/30 group-hover/skill:border-accent-tertiary'
                              }`}>
                                  <Icon className={`${colors.text} text-xl transition-transform duration-300`} />
                                </div>
                              )}
                              <span className="font-semibold text-neutral-text text-sm group-hover/skill:text-neutral-text transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                            <span className={`text-sm font-bold ${colors.text} group-hover/skill:scale-110 transition-transform duration-300`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-dark-surface-1dp rounded-full h-3 overflow-hidden relative border border-dark-border/50">
                            <div
                              className={`h-3 rounded-full ${colors.bg} transition-all duration-1000 ease-out relative overflow-hidden ${
                                isVisible ? 'opacity-100' : 'opacity-0'
                              }`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                            }}
                          >
                          </div>
                          </div>
                        </div>
                      )
                    })}
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

export default Skills
