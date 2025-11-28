import React from 'react'
import { FaHeart, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-dark-border/50 text-neutral-text-medium py-12 relative">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-neutral-text font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <a href="tel:+17805543993" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                <FaPhone className="text-accent-primary" />
                <span>(+1) 780-554-3993</span>
              </a>
              <a href="mailto:kanishkashra@gmail.com" className="flex items-center gap-2 hover:text-accent-primary transition-colors">
                <FaEnvelope className="text-accent-primary" />
                <span>kanishkashra@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-neutral-text font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kanishkashra/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card-hover border border-white/10 hover:border-accent-primary transition-all">
                <FaLinkedin className="text-accent-primary" />
              </a>
              <a href="https://github.com/ashra1-ai" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card-hover border border-white/10 hover:border-accent-secondary transition-all">
                <FaGithub className="text-accent-secondary" />
              </a>
              <a href="https://twitter.com/kanishkashra" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg glass-card-hover border border-white/10 hover:border-accent-tertiary transition-all">
                <FaTwitter className="text-accent-tertiary" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center md:justify-end space-x-2 text-sm group mb-4">
              <span className="opacity-80">Made with</span>
              <FaHeart className="text-accent-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="opacity-80">by <span className="text-accent-secondary font-semibold hover:text-accent-tertiary transition-colors duration-300">Kanishk Ashra</span></span>
            </p>
            <p className="text-sm">
              © {currentYear} <span className="text-neutral-text font-medium">All rights reserved.</span>
            </p>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="mt-8 pt-8 border-t border-dark-border/30">
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
