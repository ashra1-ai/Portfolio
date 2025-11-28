import React, { useState } from 'react'
import { FaGithub, FaFilePdf, FaArrowLeft } from 'react-icons/fa'

const Research = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="research" className="section-container relative bg-dark-bg">
      <div className="mb-20 animate-fade-in relative z-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent"></div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-text tracking-tight whitespace-nowrap">
            Research & <span className="text-accent-primary">Publications</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-secondary to-transparent"></div>
        </div>
        <p className="text-neutral-text-medium max-w-2xl text-lg leading-relaxed">
          Exploring the intersection of optimization theory, geometric regularization, and ensemble learning
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Research Card */}
        <div className={`card-1dp p-8 lg:p-12 rounded-lg border-l-4 border-accent-primary transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-accent-primary mb-4">
              EGEAT: Exact Geometric Ensemble Adversarial Training
            </h3>
            <p className="text-lg text-neutral-text-medium leading-relaxed mb-6">
              <strong className="text-neutral-text">EGEAT</strong> is a novel framework that unifies{' '}
              <span className="text-accent-primary font-semibold">
                convex duality, geometric regularization, and ensemble smoothing
              </span>{' '}
              to achieve robust representation learning. It eliminates iterative inner maximization, 
              suppresses adversarial transferability, and improves generalization across datasets such as 
              MNIST, CIFAR-10, and DREBIN.
            </p>

            {/* Key Features */}
            <div className="code-block mt-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/5 via-accent-primary/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-accent-primary text-sm mb-4 font-semibold">
                  <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
                  Key Contributions
                </div>
                <div className="text-neutral-text-medium text-sm space-y-3">
                  {[
                    'Exact first-order adversarial optimization via convex duality',
                    'Gradient-space decorrelation reduces transferability',
                    'Ensemble smoothing enhances robust generalization',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span className="group-hover/item:text-neutral-text transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-4 mb-8 pt-6 border-t border-dark-border/50">
            <a
              href={`${import.meta.env.BASE_URL}assets/papers/EGEAT_Paper.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary/20 border-2 border-accent-primary/30 text-accent-primary text-sm font-semibold hover:bg-accent-primary/30 hover:border-accent-primary transition-all duration-300 rounded-lg group"
            >
              <FaFilePdf className="group-hover:scale-110 transition-transform duration-300" />
              <span>Read Paper</span>
            </a>
            <a
              href="https://github.com/ashra1-ai/EGEAT-Experiments"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-secondary/20 border-2 border-accent-secondary/30 text-accent-secondary text-sm font-semibold hover:bg-accent-secondary/30 hover:border-accent-secondary transition-all duration-300 rounded-lg group"
            >
              <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
              <span>View Code</span>
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-surface-1dp border-2 border-dark-border text-neutral-text-medium text-sm font-semibold hover:text-neutral-text hover:border-accent-tertiary transition-all duration-300 rounded-lg group"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Home</span>
            </a>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="w-full h-[600px] border-2 border-dark-border rounded-lg overflow-hidden bg-dark-surface-1dp mt-8">
            <iframe
              src={`${import.meta.env.BASE_URL}assets/papers/EGEAT_Paper.pdf`}
              className="w-full h-full"
              title="EGEAT Research Paper"
              style={{ border: 'none' }}
            />
          </div>

          {/* Metadata Footer */}
          <div className="mt-8 pt-6 border-t border-dark-border/50 text-neutral-text-medium text-sm leading-relaxed">
            <p className="mb-2">
              Conducted under the <span className="text-accent-secondary font-semibold">Department of Computing Science</span>,
              <br />
              <span className="text-accent-primary font-semibold">University of Alberta</span> — Research by <strong className="text-neutral-text">Kanishk Ashra</strong>.
            </p>
            <p className="text-neutral-text-disabled italic">
              Currently under submission to IEEE TNNLS (expected 2026).
            </p>
          </div>
        </div>

        {/* Future Additions Note */}
        <div className="mt-12 text-center text-neutral-text-disabled text-sm">
          <p>
            Future additions will include visualizations for robustness curves, gradient alignment heatmaps, and adversarial example demos.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Research

