import React, { useState } from 'react'
import { FaArrowLeft, FaFilePdf, FaGithub, FaLightbulb, FaChartLine, FaBook } from 'react-icons/fa'

const ResearchArticle = () => {
  const [activeTab, setActiveTab] = useState('article')

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
    <section id="research-article" className="min-h-screen bg-dark-bg">
      {/* Header */}
      <div className="section-container pt-32 pb-12">
        <div className="max-w-6xl mx-auto">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-neutral-text-medium hover:text-accent-primary transition-colors duration-300 mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Portfolio</span>
          </a>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-text mb-4">
              EGEAT: Exact Geometric Ensemble <span className="text-accent-primary">Adversarial Training</span>
            </h1>
            <p className="text-lg text-neutral-text-medium leading-relaxed max-w-3xl">
              A novel framework unifying convex duality, geometric regularization, and ensemble smoothing 
              to achieve robust representation learning in deep neural networks.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-accent-primary/20 border border-accent-primary/30 text-accent-primary rounded-lg text-sm font-semibold">
                Research Paper
              </span>
              <span className="px-4 py-2 bg-accent-secondary/20 border border-accent-secondary/30 text-accent-secondary rounded-lg text-sm font-semibold">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-accent-tertiary/20 border border-accent-tertiary/30 text-accent-tertiary rounded-lg text-sm font-semibold">
                Adversarial Robustness
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-dark-border">
            {[
              { id: 'article', label: 'Article', icon: FaFilePdf },
              { id: 'insights', label: 'Insights', icon: FaLightbulb },
              { id: 'results', label: 'Results', icon: FaChartLine },
              { id: 'notes', label: 'Additional Notes', icon: FaBook },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 flex items-center gap-2 font-semibold text-sm transition-all duration-300 border-b-2 ${
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
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="section-container pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Article Tab */}
          {activeTab === 'article' && (
            <div className="space-y-8 animate-fade-in">
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
            </div>
          )}

          {/* Insights Tab */}
          {activeTab === 'insights' && (
            <div className="space-y-6 animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-accent-primary mb-4 flex items-center gap-3">
                  <FaLightbulb />
                  <span>Research Insights</span>
                </h2>
                <p className="text-neutral-text-medium leading-relaxed">
                  Key findings and contributions from the EGEAT research project.
                </p>
              </div>

              {insights.map((insight, idx) => (
                <div
                  key={idx}
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
                </div>
              ))}
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="space-y-6 animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-accent-primary mb-4 flex items-center gap-3">
                  <FaChartLine />
                  <span>Experimental Results</span>
                </h2>
                <p className="text-neutral-text-medium leading-relaxed">
                  Performance metrics and experimental findings from the EGEAT framework.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: 'CIFAR-10 Robust Accuracy', value: '45%', metric: 'Under PGD-20 attacks', color: 'accent-primary' },
                  { title: 'Transferability Reduction', value: '40%', metric: 'Across model architectures', color: 'accent-secondary' },
                  { title: 'Training Efficiency', value: '60%', metric: 'Faster than standard AT', color: 'accent-tertiary' },
                  { title: 'Ensemble Improvement', value: '15-20%', metric: 'Robust accuracy gain', color: 'accent-primary' },
                ].map((result, idx) => (
                  <div
                    key={idx}
                    className="card-1dp p-6 border-l-4 border-accent-primary text-center"
                  >
                    <div className={`text-4xl font-black mb-2 ${
                      result.color === 'accent-primary' ? 'text-accent-primary' :
                      result.color === 'accent-secondary' ? 'text-accent-secondary' :
                      'text-accent-tertiary'
                    }`}>
                      {result.value}
                    </div>
                    <div className="text-lg font-semibold text-neutral-text mb-2">
                      {result.title}
                    </div>
                    <div className="text-sm text-neutral-text-medium">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-1dp p-6 mt-8">
                <h3 className="text-xl font-bold text-accent-primary mb-4">Dataset Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-text font-medium">MNIST</span>
                      <span className="text-accent-primary font-semibold">98.5% Robust Accuracy</span>
                    </div>
                    <div className="w-full bg-dark-surface-1dp rounded-full h-2">
                      <div className="bg-accent-primary h-2 rounded-full" style={{ width: '98.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-text font-medium">CIFAR-10</span>
                      <span className="text-accent-secondary font-semibold">45% Robust Accuracy</span>
                    </div>
                    <div className="w-full bg-dark-surface-1dp rounded-full h-2">
                      <div className="bg-accent-secondary h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-neutral-text font-medium">DREBIN</span>
                      <span className="text-accent-tertiary font-semibold">87% Robust Accuracy</span>
                    </div>
                    <div className="w-full bg-dark-surface-1dp rounded-full h-2">
                      <div className="bg-accent-tertiary h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Additional Notes Tab */}
          {activeTab === 'notes' && (
            <div className="space-y-6 animate-fade-in">
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
                <div
                  key={idx}
                  className="card-1dp p-6 border-l-4 border-accent-secondary"
                >
                  <h3 className="text-xl font-bold text-accent-secondary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-text-medium leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}

              <div className="card-1dp p-6 border-l-4 border-accent-primary mt-8">
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
              </div>

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
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResearchArticle

