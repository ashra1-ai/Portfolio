import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ResearchHighlights from './components/ResearchHighlights'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import TechnicalSkills from './components/TechnicalSkills'
import Blogs from './components/Blogs'
import Achievements from './components/Achievements'
import ResearchArticle from './components/ResearchArticle'
import AuraFarmingCaseStudy from './components/AuraFarmingCaseStudy'
import CGANCaseStudy from './components/CGANCaseStudy'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activePage, setActivePage] = useState('main')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === '#research-article') {
        setActivePage('research-article')
      } else if (hash === '#aura-farming') {
        setActivePage('aura-farming')
      } else if (hash === '#cgan-mnist') {
        setActivePage('cgan-mnist')
      } else {
        setActivePage('main')
      }
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (activePage === 'research-article') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <ResearchArticle />
        <Footer />
      </div>
    )
  }

  if (activePage === 'aura-farming') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <AuraFarmingCaseStudy />
        <Footer />
      </div>
    )
  }

  if (activePage === 'cgan-mnist') {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <CGANCaseStudy />
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <About />
      <ResearchHighlights />
      <Projects />
      <Experience />
      <Education />
      <TechnicalSkills />
      <Blogs />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

