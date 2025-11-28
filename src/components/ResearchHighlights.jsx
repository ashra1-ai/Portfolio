import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFilePdf, FaGithub, FaArrowRight } from 'react-icons/fa'

const ResearchHighlights = () => {
  const [flippedCards, setFlippedCards] = useState({})

  const researchPapers = [
    {
      id: 1,
      title: 'EGEAT: Exact Geometric Ensemble Adversarial Training',
      shortDesc: 'Geometric Revolution in Adversarial Robustness',
      abstract: 'EGEAT is a novel framework that unifies convex duality, geometric regularization, and ensemble smoothing to achieve robust representation learning. It eliminates iterative inner maximization, suppresses adversarial transferability, and improves generalization across datasets such as MNIST, CIFAR-10, and DREBIN.',
      github: 'https://github.com/ashra1-ai/EGEAT-Experiments',
      pdf: `${import.meta.env.BASE_URL}assets/papers/EGEAT_Paper.pdf`,
      status: 'Under Submission',
      venue: 'IEEE TNNLS (Expected 2026)',
      color: 'accent-primary',
    },
  ]

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="research" className="section-container relative bg-dark-bg">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            Research <span className="text-accent-primary">Highlights</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Building robust & ethical AI systems through geometric optimization and ensemble learning
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper, index) => {
            const isFlipped = flippedCards[paper.id]
            return (
              <div
                key={paper.id}
                className="relative h-80 perspective-1000"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  onClick={() => toggleFlip(paper.id)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute inset-0 backface-hidden glass-card-hover p-6 cursor-pointer"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                          paper.color === 'accent-primary' 
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30'
                            : 'bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30'
                        }`}>
                          {paper.status}
                        </div>
                        <h3 className={`text-xl font-bold mb-3 ${
                          paper.color === 'accent-primary' ? 'text-accent-primary' : 'text-accent-secondary'
                        }`}>
                          {paper.title}
                        </h3>
                        <p className="text-neutral-text-medium text-sm leading-relaxed line-clamp-4">
                          {paper.shortDesc}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-accent-primary text-sm font-semibold mt-4">
                        <span>View Details</span>
                        <FaArrowRight className="text-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute inset-0 backface-hidden glass-card-hover p-6 cursor-pointer"
                    style={{ 
                      backfaceVisibility: 'hidden', 
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                          paper.color === 'accent-primary' 
                            ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/30'
                            : 'bg-accent-secondary/20 text-accent-secondary border border-accent-secondary/30'
                        }`}>
                          {paper.venue}
                        </div>
                        <h3 className={`text-lg font-bold mb-3 ${
                          paper.color === 'accent-primary' ? 'text-accent-primary' : 'text-accent-secondary'
                        }`}>
                          Abstract
                        </h3>
                        <p className="text-neutral-text-medium text-sm leading-relaxed line-clamp-5 mb-4">
                          {paper.abstract}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={paper.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            paper.color === 'accent-primary'
                              ? 'bg-accent-primary/20 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary/30'
                              : 'bg-accent-secondary/20 border border-accent-secondary/30 text-accent-secondary hover:bg-accent-secondary/30'
                          }`}
                        >
                          <FaFilePdf />
                          <span>PDF</span>
                        </a>
                        <a
                          href={paper.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            paper.color === 'accent-primary'
                              ? 'bg-accent-primary/20 border border-accent-primary/30 text-accent-primary hover:bg-accent-primary/30'
                              : 'bg-accent-secondary/20 border border-accent-secondary/30 text-accent-secondary hover:bg-accent-secondary/30'
                          }`}
                        >
                          <FaGithub />
                          <span>Code</span>
                        </a>
                        <a
                          href="#research-article"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFlip(paper.id)
                          }}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            paper.color === 'accent-primary'
                              ? 'bg-accent-primary text-white hover:bg-accent-primary/90'
                              : 'bg-accent-secondary text-white hover:bg-accent-secondary/90'
                          }`}
                        >
                          <span>Read</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ResearchHighlights

