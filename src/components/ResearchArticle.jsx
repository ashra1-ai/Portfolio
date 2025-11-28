import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CountUp from 'react-countup'
import { FaArrowLeft, FaFilePdf, FaGithub, FaLightbulb, FaChartLine, FaBook, FaBrain, FaProjectDiagram, FaCubes, FaFlask } from 'react-icons/fa'

const ResearchArticle = () => {
  const [activeTab, setActiveTab] = useState('article')
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const researchConcepts = [
    {
      title: 'Exact Geometric Optimization',
      description: 'Convex duality meets adversarial training — precision over iteration.',
      icon: FaBrain,
      math: 'δ* = ϵ ∇xL / ∥∇xL∥*',
      color: 'accent-primary',
      details: 'Transforms nested min-max optimization into a single convex problem, reducing training time by 60% while maintaining robustness guarantees.',
    },
    {
      title: 'Gradient-Space Geometry',
      description: 'Decorrelating gradients to prevent adversarial transferability.',
      icon: FaProjectDiagram,
      math: '∇f(x) · ∇g(x) ≈ 0',
      color: 'accent-secondary',
      details: 'By decorrelating gradients in feature space, we prevent adversarial examples from transferring between models, improving ensemble security by 40%.',
    },
    {
      title: 'Ensemble Intelligence',
      description: 'Multiple models, unified robustness through geometric smoothing.',
      icon: FaCubes,
      math: 'E[f] = Σ wi · fi(x)',
      color: 'accent-tertiary',
      details: 'Combines multiple models trained with geometric regularization, achieving 15-20% improvement in robust accuracy over standard adversarial training.',
    },
  ]

  const insights = [
    {
      title: 'Exact Geometric Optimization',
      description: 'Leveraged convex duality to eliminate iterative inner maximization, achieving exact first-order adversarial optimization with significant computational efficiency gains.',
      details: 'This approach transforms the adversarial training problem from a nested min-max optimization into a single convex optimization problem, reducing training time by up to 60% while maintaining robustness guarantees.',
    },
    {
      title: 'Transferability Reduction',
      description: 'Implemented gradient-space decorrelation techniques that reduce adversarial transferability by up to 40% across different model architectures and datasets.',
      details: 'By decorrelating gradients in the feature space, we prevent adversarial examples crafted for one model from transferring to others, significantly improving ensemble security.',
    },
    {
      title: 'Ensemble Robustness',
      description: 'Developed ensemble smoothing methods that enhance robust generalization, achieving improved accuracy on MNIST, CIFAR-10, and DREBIN datasets under adversarial attacks.',
      details: 'Our ensemble approach combines multiple models trained with geometric regularization, resulting in a 15-20% improvement in robust accuracy compared to standard adversarial training.',
    },
    {
      title: 'Theoretical Contributions',
      description: 'Unified convex duality, geometric regularization, and ensemble learning into a single framework, providing theoretical guarantees for robust representation learning.',
      details: 'We provide formal proofs of convergence and robustness bounds, establishing EGEAT as a theoretically grounded approach to adversarial robustness.',
    },
  ]

  const timelineEvents = [
    {
      date: 'Late 2024',
      title: 'Concept Conception',
      description: 'Initial idea emerged during late-night study sessions, exploring the intersection of convex optimization and adversarial robustness.',
      icon: FaFlask,
    },
    {
      date: 'Early 2025',
      title: 'Theoretical Foundation',
      description: 'Derived convex-dual lemma from ICASSP paper, establishing the mathematical framework for exact geometric optimization.',
      icon: FaBrain,
    },
    {
      date: 'Mid 2025',
      title: 'PyTorch Implementation',
      description: 'Implemented first working prototype achieving 45% robust accuracy on CIFAR-10 under PGD-20 attacks.',
      icon: FaCubes,
    },
    {
      date: 'Present',
      title: 'Ongoing Collaboration',
      description: 'Active collaboration with University of Alberta Computing Science department, preparing for IEEE TNNLS submission.',
      icon: FaProjectDiagram,
    },
  ]

  const additionalContent = [
    {
      title: 'Experimental Results',
      content: 'Our experiments demonstrate significant improvements in adversarial robustness across multiple datasets. On CIFAR-10, EGEAT achieves 45% robust accuracy under PGD-20 attacks, compared to 32% for standard adversarial training.',
    },
    {
      title: 'Future Directions',
      content: 'Future work will explore extending EGEAT to larger-scale datasets and investigating its application to transfer learning scenarios. We also plan to develop more efficient optimization algorithms based on our geometric framework.',
    },
    {
      title: 'Collaborations',
      content: 'This research is conducted in collaboration with the Department of Computing Science at the University of Alberta, with ongoing discussions with industry partners on practical applications.',
    },
  ]

  return (
    <section id="research-article" className="min-h-screen bg-dark-bg relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale }}
        className="section-container pt-32 pb-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-neutral-text-medium hover:text-accent-primary transition-colors duration-300 mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Portfolio</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-text mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                className="block mb-2"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: 'linear-gradient(90deg, #6366f1, #10b981, #f59e0b, #6366f1)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                EGEAT: A Geometric Revolution
              </motion.span>
              <span className="block text-accent-primary">in Adversarial Robustness</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-neutral-text-medium leading-relaxed max-w-3xl"
            >
              Bridging <span className="text-accent-primary font-semibold">convex duality</span>,{' '}
              <span className="text-accent-secondary font-semibold">geometry</span>, and{' '}
              <span className="text-accent-tertiary font-semibold">ensemble intelligence</span> — 
              from theory to working PyTorch code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-6"
            >
              {['Research Paper', 'Machine Learning', 'Adversarial Robustness'].map((tag, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                  className={`px-4 py-2 border rounded-lg text-sm font-semibold ${
                    idx === 0 ? 'bg-accent-primary/20 border-accent-primary/30 text-accent-primary' :
                    idx === 1 ? 'bg-accent-secondary/20 border-accent-secondary/30 text-accent-secondary' :
                    'bg-accent-tertiary/20 border-accent-tertiary/30 text-accent-tertiary'
                  }`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>


          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-2 mb-8 border-b border-dark-border overflow-x-auto"
          >
            {[
              { id: 'article', label: 'Article', icon: FaFilePdf },
              { id: 'insights', label: 'Insights', icon: FaLightbulb },
              { id: 'results', label: 'Results', icon: FaChartLine },
              { id: 'timeline', label: 'Timeline', icon: FaBook },
              { id: 'notes', label: 'Notes', icon: FaBook },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 flex items-center gap-2 font-semibold text-sm transition-all duration-300 border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-accent-primary border-accent-primary'
                      : 'text-neutral-text-medium border-transparent hover:text-neutral-text hover:border-dark-border'
                  }`}
                >
                  <Icon />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="section-container pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Article Tab */}
          {activeTab === 'article' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="card-1dp p-6 rounded-lg border-l-4 border-accent-primary">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-accent-primary flex items-center gap-3">
                    <FaFilePdf />
                    <span>Research Paper</span>
                  </h2>
                  <a
                    href={`${import.meta.env.BASE_URL}assets/papers/EGEAT_Paper.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-primary hover:underline flex items-center gap-2"
                  >
                    Open in New Tab
                    <FaGithub className="text-xs" />
                  </a>
                </div>
                <div className="w-full h-[700px] border-2 border-dark-border rounded-lg overflow-hidden bg-dark-surface-1dp">
                  <iframe
                    src={`${import.meta.env.BASE_URL}assets/papers/EGEAT_Paper.pdf`}
                    className="w-full h-full"
                    title="EGEAT Research Paper"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>

              {/* Try the Framework Button */}
              <div className="text-center">
                <a
                  href="https://colab.research.google.com/github/ashra1-ai/EGEAT-Experiments/blob/main/notebooks/EGEAT_Demo.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://colab.research.google.com/assets/colab-badge.svg"
                    alt="Open In Colab"
                    className="hover:opacity-80 transition-opacity duration-300"
                  />
                </a>
              </div>
            </motion.div>
          )}

          {/* Insights Tab */}
          {activeTab === 'insights' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-accent-primary mb-4 flex items-center gap-3">
                  <FaLightbulb />
                  <span>Research Insights</span>
                </h2>
                <p className="text-neutral-text-medium leading-relaxed">
                  Key findings and contributions from the EGEAT research project.
                </p>
              </div>

              {/* Research Concept Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {researchConcepts.map((concept, idx) => {
                  const Icon = concept.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="card-1dp p-6 border-l-4 rounded-xl group"
                      style={{
                        borderLeftColor: concept.color === 'accent-primary' ? 'rgb(99, 102, 241)' :
                                        concept.color === 'accent-secondary' ? 'rgb(16, 185, 129)' :
                                        'rgb(245, 158, 11)',
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${
                          concept.color === 'accent-primary' ? 'bg-accent-primary/20 text-accent-primary' :
                          concept.color === 'accent-secondary' ? 'bg-accent-secondary/20 text-accent-secondary' :
                          'bg-accent-tertiary/20 text-accent-tertiary'
                        }`}>
                          <Icon className="text-2xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold mb-2 ${
                            concept.color === 'accent-primary' ? 'text-accent-primary' :
                            concept.color === 'accent-secondary' ? 'text-accent-secondary' :
                            'text-accent-tertiary'
                          }`}>
                            {concept.title}
                          </h3>
                          <p className="text-neutral-text-medium text-sm mb-3">
                            {concept.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-dark-border/50">
                        <div className="font-mono text-xs text-neutral-text-disabled mb-2">Formula:</div>
                        <div className="font-mono text-sm text-neutral-text font-semibold mb-3">
                          {concept.math}
                        </div>
                        <div className="text-xs text-neutral-text-medium">
                          {concept.details}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Detailed Insights */}
              {insights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
                  className="card-1dp p-6 border-l-4 border-accent-primary group hover:border-accent-secondary transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-accent-primary mb-3 group-hover:text-accent-secondary transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-dark-border/50">
                    <p className="text-sm text-neutral-text-medium leading-relaxed">
                      {insight.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-accent-primary mb-4 flex items-center gap-3">
                  <FaChartLine />
                  <span>Experimental Results</span>
                </h2>
                <p className="text-neutral-text-medium leading-relaxed">
                  Performance metrics and experimental findings from the EGEAT framework.
                </p>
              </div>

              {/* Animated Metrics */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'CIFAR-10 Robust Accuracy', value: 45, suffix: '%', metric: 'Under PGD-20 attacks', color: 'accent-primary' },
                  { title: 'Transferability Reduction', value: 40, suffix: '%', metric: 'Across model architectures', color: 'accent-secondary' },
                  { title: 'Training Efficiency', value: 60, suffix: '%', metric: 'Faster than standard AT', color: 'accent-tertiary' },
                  { title: 'Ensemble Improvement', value: 18, suffix: '%', metric: 'Robust accuracy gain', color: 'accent-primary' },
                ].map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`card-1dp p-6 border-l-4 text-center ${
                      result.color === 'accent-primary' ? 'border-accent-primary' :
                      result.color === 'accent-secondary' ? 'border-accent-secondary' :
                      'border-accent-tertiary'
                    }`}
                  >
                    <div className={`text-5xl font-black mb-2 ${
                      result.color === 'accent-primary' ? 'text-accent-primary' :
                      result.color === 'accent-secondary' ? 'text-accent-secondary' :
                      'text-accent-tertiary'
                    }`}>
                      {isVisible && (
                        <CountUp
                          end={result.value}
                          duration={2.5}
                          suffix={result.suffix}
                        />
                      )}
                    </div>
                    <div className="text-lg font-semibold text-neutral-text mb-2">
                      {result.title}
                    </div>
                    <div className="text-sm text-neutral-text-medium">
                      {result.metric}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Dataset Performance Bars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-1dp p-6"
              >
                <h3 className="text-xl font-bold text-accent-primary mb-6">Dataset Performance</h3>
                <div className="space-y-6">
                  {[
                    { name: 'MNIST', value: 98.5, color: 'accent-primary' },
                    { name: 'CIFAR-10', value: 45, color: 'accent-secondary' },
                    { name: 'DREBIN', value: 87, color: 'accent-tertiary' },
                  ].map((dataset, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-neutral-text font-medium">{dataset.name}</span>
                        <span className={`font-semibold ${
                          dataset.color === 'accent-primary' ? 'text-accent-primary' :
                          dataset.color === 'accent-secondary' ? 'text-accent-secondary' :
                          'text-accent-tertiary'
                        }`}>
                          {isVisible && <CountUp end={dataset.value} duration={2} suffix="%" />}
                        </span>
                      </div>
                      <div className="w-full bg-dark-surface-1dp rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${dataset.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: idx * 0.2 }}
                          className={`h-3 rounded-full ${
                            dataset.color === 'accent-primary' ? 'bg-accent-primary' :
                            dataset.color === 'accent-secondary' ? 'bg-accent-secondary' :
                            'bg-accent-tertiary'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-accent-primary mb-4 flex items-center gap-3">
                  <FaBook />
                  <span>Story of Discovery</span>
                </h2>
                <p className="text-neutral-text-medium leading-relaxed">
                  The journey of EGEAT from concept to implementation.
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary"></div>

                {timelineEvents.map((event, idx) => {
                  const Icon = event.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                      className="relative pl-20 pb-12 last:pb-0"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-accent-primary border-4 border-dark-bg z-10"></div>

                      {/* Event Card */}
                      <div className="card-1dp p-6 border-l-4 border-accent-primary">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 bg-accent-primary/20 rounded-lg">
                            <Icon className="text-accent-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-accent-primary font-semibold">{event.date}</div>
                            <h3 className="text-xl font-bold text-neutral-text">{event.title}</h3>
                          </div>
                        </div>
                        <p className="text-neutral-text-medium leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Additional Notes Tab */}
          {activeTab === 'notes' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-accent-primary mb-4 flex items-center gap-3">
                  <FaBook />
                  <span>Additional Notes & Information</span>
                </h2>
                <p className="text-neutral-text-medium leading-relaxed">
                  Additional context, future directions, and related information about the research.
                </p>
              </div>

              {additionalContent.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card-1dp p-6 border-l-4 border-accent-secondary"
                >
                  <h3 className="text-xl font-bold text-accent-secondary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-text-medium leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-1dp p-6 border-l-4 border-accent-primary mt-8"
              >
                <h3 className="text-xl font-bold text-accent-primary mb-4">Research Information</h3>
                <div className="space-y-3 text-neutral-text-medium">
                  <p>
                    <strong className="text-neutral-text">Institution:</strong> University of Alberta
                  </p>
                  <p>
                    <strong className="text-neutral-text">Department:</strong> Computing Science
                  </p>
                  <p>
                    <strong className="text-neutral-text">Status:</strong> Under submission to IEEE TNNLS (expected 2026)
                  </p>
                  <p>
                    <strong className="text-neutral-text">Researcher:</strong> Kanishk Ashra
                  </p>
                </div>
              </motion.div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/ashra1-ai/EGEAT-Experiments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent-secondary/20 border-2 border-accent-secondary/30 text-accent-secondary text-sm font-semibold hover:bg-accent-secondary/30 hover:border-accent-secondary transition-all duration-300 rounded-lg"
                >
                  <FaGithub />
                  <span>View Code on GitHub</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>

    </section>
  )
}

export default ResearchArticle
