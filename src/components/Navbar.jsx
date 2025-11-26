import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'blogs', 'contact']
      const scrollPos = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-surface shadow-elevation-8dp border-b border-dark-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-lg md:text-xl font-semibold text-neutral-text hover:text-accent-primary transition-all duration-300 group relative"
            >
              <span className="relative z-10">Portfolio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 relative group rounded-lg ${
                    isActive 
                      ? 'text-accent-primary bg-accent-primary/10' 
                      : 'text-neutral-text-medium hover:text-accent-primary hover:bg-dark-surface-1dp/50'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary transition-all duration-300 rounded-full ${
                    isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`}></span>
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-text hover:text-accent-primary transition-all duration-300 p-2 rounded-lg hover:bg-dark-surface-1dp/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6 absolute inset-0 animate-rotate-in" />
              ) : (
                <HiMenu className="h-6 w-6 absolute inset-0" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-surface shadow-elevation-8dp border-t border-dark-border/50 animate-slide-down">
          <div className="px-6 pt-4 pb-6 space-y-1">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-neutral-text-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-accent-primary bg-accent-primary/10 border-l-2 border-accent-primary'
                      : 'hover:text-accent-primary hover:bg-dark-surface-1dp/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
