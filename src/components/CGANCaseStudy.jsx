import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaBrain, FaBolt, FaChartBar, FaCode, FaMicrochip, FaProjectDiagram } from 'react-icons/fa'

const Section = ({ id, title, kicker, children }) => (
  <section id={id} className="scroll-mt-28 py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        {kicker && (
          <p className="uppercase tracking-widest text-xs text-accent-primary mb-2">{kicker}</p>
        )}
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-text">{title}</h2>
      </div>
      {children}
    </div>
  </section>
)

// Animated Shimmer Box
const ShimmerBox = ({ label }) => (
  <div className="relative w-full h-full rounded-xl overflow-hidden bg-dark-surface-1dp border border-dark-border">
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent animate-[shimmer_2.2s_infinite]" />
    <style>{`@keyframes shimmer{100%{transform:translateX(100%)}}`}</style>
    <div className="absolute inset-0 grid place-items-center">
      <span className="text-xs text-neutral-text-disabled">{label}</span>
    </div>
  </div>
)

// Animated Digit Tile
const DigitTile = ({ d }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: d * 0.03 }}
    className="aspect-square rounded-lg bg-dark-surface-1dp border border-dark-border grid place-items-center"
  >
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ repeat: Infinity, duration: 2, delay: d * 0.08 }}
      className="text-3xl font-bold text-accent-primary"
    >
      {d}
    </motion.span>
  </motion.div>
)

// Animated Loss Chart
const AnimatedLossChart = () => (
  <div className="w-full h-48 rounded-xl bg-dark-surface-1dp border border-dark-border p-4">
    <svg viewBox="0 0 100 40" className="w-full h-full">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#00f5d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00f5d4" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Axes */}
      <path d="M5 35 H95" stroke="#334155" strokeWidth=".6" />
      <path d="M5 5 V35" stroke="#334155" strokeWidth=".6" />
      {/* D loss */}
      <motion.path
        d="M5 10 C 20 22, 40 30, 60 28 S 95 20, 95 22"
        stroke="url(#g)" strokeWidth="1.2" fill="none"
        strokeDasharray="200" strokeDashoffset="200"
        animate={{ strokeDashoffset: [200, 0] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
      />
      {/* G loss */}
      <motion.path
        d="M5 32 C 20 25, 40 18, 60 20 S 95 28, 95 26"
        stroke="url(#g2)" strokeWidth="1.2" fill="none"
        strokeDasharray="200" strokeDashoffset="200"
        animate={{ strokeDashoffset: [200, 0] }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "mirror", delay: 0.3 }}
      />
      {/* Labels */}
      <text x="50" y="38" fontSize="2" fill="#64748b" textAnchor="middle">Epochs</text>
      <text x="2" y="20" fontSize="2" fill="#64748b">Loss</text>
    </svg>
  </div>
)

export default function CGANCaseStudy() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-dark-bg text-neutral-text">
      {/* Hero */}
      <div className="border-b border-dark-border/60 bg-gradient-to-b from-dark-surface/50 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors mb-8 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </motion.a>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4"
              >
                <span className="text-neutral-text">Conditional GAN</span>{' '}
                <span className="text-accent-primary">(CGAN)</span>
              </motion.h1>
              <p className="mt-4 text-neutral-text-medium text-base sm:text-lg max-w-prose leading-relaxed">
                Class-conditioned generative adversarial network for MNIST digit generation. Implemented in PyTorch with 
                stable training across 60+ epochs, label embeddings, and comprehensive latent-space analysis.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['PyTorch', 'Python', 'Deep Learning', 'GANs', 'MNIST', 'Research'].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border border-accent-tertiary/30 bg-accent-tertiary/10 text-accent-tertiary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/ashra1-ai/cgan-mnist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaGithub />
                  <span>View Repository</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card-hover p-8 rounded-xl">
                <div className="grid grid-cols-5 gap-2">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                    <img
                      key={digit}
                      src={`${import.meta.env.BASE_URL}images/projects/cgan-mnist/custom_digit_${digit}.png`}
                      alt={`Generated digit ${digit}`}
                      className="w-full aspect-square object-contain rounded-lg bg-dark-surface-1dp border border-dark-border"
                      onError={(e) => {
                        // Hide image if not found
                        e.target.style.display = 'none'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <Section id="quick-facts" title="Quick Facts" kicker="Overview">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FaBrain, label: 'Training Epochs', value: '60+', color: 'accent-primary' },
            { icon: FaBolt, label: 'Convergence', value: 'Stable', color: 'accent-secondary' },
            { icon: FaChartBar, label: 'Classes', value: '10 (0-9)', color: 'accent-tertiary' },
            { icon: FaCode, label: 'Framework', value: 'PyTorch', color: 'accent-primary' },
          ].map((fact, idx) => {
            const Icon = fact.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <Icon className={`text-3xl mb-3 mx-auto ${
                  fact.color === 'accent-primary' ? 'text-accent-primary' :
                  fact.color === 'accent-secondary' ? 'text-accent-secondary' :
                  'text-accent-tertiary'
                }`} />
                <div className={`text-3xl font-bold mb-2 ${
                  fact.color === 'accent-primary' ? 'text-accent-primary' :
                  fact.color === 'accent-secondary' ? 'text-accent-secondary' :
                  'text-accent-tertiary'
                }`}>
                  {fact.value}
                </div>
                <div className="text-neutral-text-medium text-sm">{fact.label}</div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Architecture */}
      <Section id="architecture" title="Architecture & Implementation" kicker="Technical Deep Dive">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Generator Network',
              icon: FaMicrochip,
              description: 'Takes random noise vector z and class label c as input',
              details: [
                'Label embeddings for class conditioning',
                'Transposed convolutions for upsampling',
                'Batch normalization for stability',
                'Tanh activation for output normalization',
              ],
              color: 'accent-primary',
            },
            {
              title: 'Discriminator Network',
              icon: FaBrain,
              description: 'Classifies real vs fake images and predicts class labels',
              details: [
                'Convolutional layers for feature extraction',
                'Auxiliary classifier for class prediction',
                'LeakyReLU activations',
                'Dropout for regularization',
              ],
              color: 'accent-secondary',
            },
            {
              title: 'Training Strategy',
              icon: FaProjectDiagram,
              description: 'Adversarial training with label conditioning',
              details: [
                'Binary cross-entropy for real/fake classification',
                'Cross-entropy for class prediction',
                'Label smoothing for discriminator',
                'Learning rate scheduling',
              ],
              color: 'accent-tertiary',
            },
          ].map((component, idx) => {
            const Icon = component.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-hover p-6 border-l-4"
                style={{
                  borderLeftColor: component.color === 'accent-primary' ? 'rgb(0, 245, 212)' :
                                  component.color === 'accent-secondary' ? 'rgb(56, 189, 248)' :
                                  'rgb(139, 92, 246)',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className={`text-2xl ${
                    component.color === 'accent-primary' ? 'text-accent-primary' :
                    component.color === 'accent-secondary' ? 'text-accent-secondary' :
                    'text-accent-tertiary'
                  }`} />
                  <h3 className="text-xl font-bold text-neutral-text">{component.title}</h3>
                </div>
                <p className="text-neutral-text-medium mb-4 leading-relaxed text-sm">{component.description}</p>
                <ul className="space-y-2">
                  {component.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-text-medium">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Results & Visualization */}
      <Section id="results" title="Results & Visualization" kicker="Training Outcomes">
        <div className="glass-card-hover p-6 rounded-xl">
          <div className="flex flex-wrap gap-2 mb-6 border-b border-dark-border pb-4">
            {['overview', 'training', 'latent-space'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-accent-primary text-white'
                    : 'bg-dark-surface-1dp text-neutral-text-medium hover:bg-dark-surface-6dp'
                }`}
              >
                {tab === 'overview' ? 'Overview' :
                 tab === 'training' ? 'Training Curves' :
                 'Generated Samples'}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Training Performance</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Successfully trained for <strong className="text-accent-primary">60+ epochs</strong> with stable 
                    convergence. The generator learned to produce class-conditioned digits with high visual quality 
                    and diversity.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Key Improvements</h3>
                  <ul className="space-y-2 text-neutral-text-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>Label embeddings</strong> improved generator convergence by providing better class conditioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>Tuned loss functions</strong> balanced generator and discriminator training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>Discriminator regularization</strong> prevented mode collapse and improved stability</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activeTab === 'training' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Loss Curves</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Generator and discriminator losses converged smoothly over training. The adversarial training 
                    maintained equilibrium between the two networks.
                  </p>
                  <div className="space-y-4">
                    <img
                      src={`${import.meta.env.BASE_URL}images/projects/cgan-mnist/loss_per_epoch.png`}
                      alt="Loss per Epoch"
                      className="w-full rounded-lg border border-dark-border"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        // Show animated chart as fallback
                        const fallback = e.target.nextElementSibling
                        if (fallback) fallback.style.display = 'block'
                      }}
                    />
                    <div style={{ display: 'none' }}>
                      <AnimatedLossChart />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <img
                        src={`${import.meta.env.BASE_URL}images/projects/cgan-mnist/loss_curve.png`}
                        alt="Loss Curve"
                        className="w-full rounded-lg border border-dark-border"
                      />
                      <img
                        src={`${import.meta.env.BASE_URL}images/projects/cgan-mnist/loss_per_step.png`}
                        alt="Loss per Step"
                        className="w-full rounded-lg border border-dark-border"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Training Metrics</h3>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="glass-card-hover p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent-primary mb-1">60+</div>
                      <div className="text-sm text-neutral-text-medium">Epochs</div>
                    </div>
                    <div className="glass-card-hover p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent-secondary mb-1">Stable</div>
                      <div className="text-sm text-neutral-text-medium">Convergence</div>
                    </div>
                    <div className="glass-card-hover p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-accent-tertiary mb-1">High</div>
                      <div className="text-sm text-neutral-text-medium">Quality</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'latent-space' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Class-Conditioned Samples</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Generated samples for each digit class (0-9) demonstrating the model's ability to produce 
                    diverse, class-specific outputs. Each digit was generated by conditioning the generator on 
                    the corresponding class label, showing how the model learns to produce distinct outputs for 
                    each class.
                  </p>
                  <div className="grid grid-cols-5 gap-2">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                      <img
                        key={digit}
                        src={`${import.meta.env.BASE_URL}images/projects/cgan-mnist/custom_digit_${digit}.png`}
                        alt={`Generated digit ${digit}`}
                        className="w-full aspect-square object-contain rounded-lg bg-dark-surface-1dp border border-dark-border"
                        onError={(e) => {
                          // Hide image if not found
                          e.target.style.display = 'none'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Latent-Space Analysis</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    The model demonstrates strong class conditioning, with each generated digit clearly matching 
                    its intended class. The generator successfully learns to map class labels and noise vectors 
                    to realistic MNIST-style digits, maintaining visual quality and class-specific characteristics.
                  </p>
                  <div className="glass-card-hover p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-neutral-text mb-3">Key Observations</h4>
                    <ul className="space-y-2 text-neutral-text-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-accent-primary mt-1">▸</span>
                        <span>Each class produces distinct, recognizable digit shapes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-primary mt-1">▸</span>
                        <span>Generated digits maintain MNIST-style characteristics (28x28 grayscale)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-primary mt-1">▸</span>
                        <span>Label embeddings enable precise class control during generation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent-primary mt-1">▸</span>
                        <span>Stable training across 60+ epochs indicates good convergence</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Section>

      {/* Technical Details */}
      <Section id="technical" title="Technical Implementation" kicker="Code & Methodology">
        <div className="space-y-6">
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Generator Architecture</h3>
            <div className="code-block p-4 rounded-lg text-sm font-mono">
              <pre className="text-neutral-text-medium">
{`class Generator(nn.Module):
    def __init__(self, n_classes=10, latent_dim=100):
        super().__init__()
        self.label_emb = nn.Embedding(n_classes, latent_dim)
        self.model = nn.Sequential(
            nn.Linear(latent_dim * 2, 256),
            nn.LeakyReLU(0.2),
            nn.Linear(256, 512),
            nn.BatchNorm1d(512),
            nn.LeakyReLU(0.2),
            nn.Linear(512, 1024),
            nn.BatchNorm1d(1024),
            nn.LeakyReLU(0.2),
            nn.Linear(1024, 784),
            nn.Tanh()
        )
    
    def forward(self, noise, labels):
        label_emb = self.label_emb(labels)
        gen_input = torch.cat([label_emb, noise], dim=1)
        img = self.model(gen_input)
        return img.view(img.size(0), 1, 28, 28)`}
              </pre>
            </div>
          </div>

          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Training Loop</h3>
            <div className="code-block p-4 rounded-lg text-sm font-mono">
              <pre className="text-neutral-text-medium">
{`for epoch in range(num_epochs):
    for i, (imgs, labels) in enumerate(dataloader):
        # Train Discriminator
        real_validity = discriminator(imgs, labels)
        fake_imgs = generator(noise, labels)
        fake_validity = discriminator(fake_imgs.detach(), labels)
        
        d_loss = adversarial_loss(real_validity, real) + 
                 adversarial_loss(fake_validity, fake)
        
        # Train Generator
        fake_validity = discriminator(fake_imgs, labels)
        g_loss = adversarial_loss(fake_validity, real)
        
        optimizer_G.step()
        optimizer_D.step()`}
              </pre>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Back to Repo */}
      <Section id="cta" title="" kicker="">
        <div className="glass-card-hover p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-neutral-text mb-4">Explore the Full Implementation</h3>
          <p className="text-neutral-text-medium mb-6 max-w-2xl mx-auto">
            Check out the complete source code, training scripts, and visualization notebooks on GitHub.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/ashra1-ai/cgan-mnist"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub />
              <span>View Repository</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="#projects"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaArrowLeft />
              <span>Back to Projects</span>
            </a>
          </div>
        </div>
      </Section>
    </div>
  )
}

