import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Blogs from './components/Blogs'
import LinkedInPosts from './components/LinkedInPosts'
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
      <Projects />
      <Experience />
      <Certifications />
      <Blogs />
      <LinkedInPosts />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

