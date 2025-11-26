import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-dark-border/50 text-neutral-text-medium py-12 relative">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start space-x-2 text-sm group">
              <span className="opacity-80">Made with</span>
              <FaHeart className="text-accent-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="opacity-80">by <span className="text-accent-secondary font-semibold hover:text-accent-tertiary transition-colors duration-300">Kanishk Ashra</span></span>
            </p>
          </div>
          <div className="text-center md:text-right">
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
