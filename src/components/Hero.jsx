import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-dark-bg overflow-hidden"
    >
      {/* Unique Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-tertiary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="section-container relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          {/* Left Column - Name & Title */}
          <div className="text-left lg:text-left space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm md:text-base text-accent-primary font-mono tracking-wider uppercase mb-4 block animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  Software Engineer & ML Developer
                </span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
                <span className="block text-neutral-text animate-slide-up" style={{ animationDelay: '0.2s' }}>Kanishk</span>
                <span className="block text-accent-primary animate-slide-up" style={{ animationDelay: '0.3s' }}>Ashra</span>
              </h1>
              
              <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-xl md:text-2xl text-neutral-text-medium leading-relaxed font-light">
                  Building <span className="text-accent-primary font-semibold">intelligent systems</span> that solve real-world problems
                </p>
                <p className="text-base md:text-lg text-neutral-text-medium leading-relaxed">
                  Specializing in ML/AI, automation, and scalable backend architecture
                </p>
              </div>
            </div>

            {/* Social Links - Horizontal */}
            <div className="flex items-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: FaGithub, href: 'https://github.com/ashra1-ai', color: 'accent-primary', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/kanishkashra/', color: 'accent-secondary', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:kanishkashra@gmail.com', color: 'accent-tertiary', label: 'Email' },
              ].map((social, index) => {
                const Icon = social.icon
                const colorClasses = {
                  'accent-primary': 'text-accent-primary hover:text-accent-primary/80 border-accent-primary/30 hover:border-accent-primary',
                  'accent-secondary': 'text-accent-secondary hover:text-accent-secondary/80 border-accent-secondary/30 hover:border-accent-secondary',
                  'accent-tertiary': 'text-accent-tertiary hover:text-accent-tertiary/80 border-accent-tertiary/30 hover:border-accent-tertiary',
                }
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-lg bg-dark-surface-1dp border ${colorClasses[social.color]} 
                      hover:scale-110 hover:bg-dark-surface-6dp
                      transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <Icon className="text-xl" />
                  </a>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <a 
                href="#projects" 
                className="btn-primary group relative overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a 
                href="#contact" 
                className="btn-secondary group relative overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element / Stats */}
          <div className="hidden lg:block relative animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Large Number Display */}
              <div className="space-y-8">
                <div className="card-1dp p-8 border-l-4 border-accent-primary">
                  <div className="text-6xl font-black text-accent-primary mb-2">5+</div>
                  <div className="text-neutral-text-medium text-sm uppercase tracking-wider">Projects Built</div>
                </div>
                <div className="card-1dp p-8 border-l-4 border-accent-secondary ml-8">
                  <div className="text-6xl font-black text-accent-secondary mb-2">3+</div>
                  <div className="text-neutral-text-medium text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="card-1dp p-8 border-l-4 border-accent-tertiary">
                  <div className="text-6xl font-black text-accent-tertiary mb-2">100%</div>
                  <div className="text-neutral-text-medium text-sm uppercase tracking-wider">Dedicated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
