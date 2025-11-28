import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
  return (
    <section id="education" className="section-container relative bg-dark-surface">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            Education
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card-hover p-8 border-l-4 border-accent-primary group relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-text mb-4 group-hover:text-accent-primary transition-colors duration-300">
                Bachelor of Science in Computer Science
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-neutral-text-medium">
                  <FaGraduationCap className="text-accent-primary" />
                  <span className="text-lg font-semibold">University of Alberta</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-text-medium">
                  <FaMapMarkerAlt className="text-accent-secondary" />
                  <span>Edmonton, AB</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-text-medium">
                  <FaCalendarAlt className="text-accent-tertiary" />
                  <span>Sept. 2022 – Dec. 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

