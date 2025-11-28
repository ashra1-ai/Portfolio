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
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showResearchArticle, setShowResearchArticle] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      setShowResearchArticle(window.location.hash === '#research-article')
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (showResearchArticle) {
    return (
      <div className="min-h-screen relative">
        <Navbar />
        <ResearchArticle />
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

