import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaMicrochip, FaServer, FaDatabase, FaWifi, FaTachometerAlt, FaBrain } from 'react-icons/fa'

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

export default function AuraFarmingCaseStudy() {
  const [activeTab, setActiveTab] = useState('hardware')

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
                <span className="text-neutral-text">Aura Farming</span>{' '}
                <span className="text-accent-primary">— AI‑Powered Distributed Irrigation</span>
              </motion.h1>
              <p className="mt-4 text-neutral-text-medium text-base sm:text-lg max-w-prose leading-relaxed">
                Multi‑zone smart‑irrigation platform combining edge IoT sensors, cloud analytics, and machine learning 
                to deliver intelligent water management — built in <strong className="text-accent-primary">64 hours</strong> at <strong className="text-accent-secondary">NaTHackS 2025</strong>.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['ESP32', 'Supabase', 'Django API', 'PyTorch', 'React + Tailwind', 'NaTHackS 2025 🏆'].map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border border-accent-primary/30 bg-accent-primary/10 text-accent-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  href="https://github.com/ashra1-ai/Aura-Farming"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaGithub />
                  <span>View Repo</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href="https://medium.com/@kanishkashra/soilution-building-a-distributed-iot-irrigation-system-in-64-hours-while-sleep-deprived-and-0fd944f67fbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <FaExternalLinkAlt />
                  <span>Read Story</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="glass-card-hover p-8 rounded-xl">
                <div className="aspect-video bg-dark-surface-1dp rounded-lg flex items-center justify-center border border-dark-border">
                  <span className="text-neutral-text-disabled text-sm">Dashboard Screenshot Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <Section id="executive-summary" title="Executive Summary" kicker="Overview">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card-hover p-8 rounded-xl">
            <p className="text-lg text-neutral-text-medium leading-relaxed mb-6">
              <strong className="text-accent-primary">Aura Farming</strong> (also known as <strong className="text-accent-secondary">SOILution</strong>) is a multi-zone smart-irrigation platform that merges hardware sensing, real-time cloud pipelines, and machine learning to optimize agricultural water usage.
            </p>
            <p className="text-lg text-neutral-text-medium leading-relaxed">
              Built in <strong className="text-accent-tertiary">64 hours</strong> during <strong className="text-accent-primary">NaTHackS 2025</strong>, it demonstrates how distributed ESP32 edge devices, Supabase cloud, and PyTorch ML models can form a complete closed-loop control system for precision agriculture.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-primary mb-2">18-25%</div>
                <div className="text-sm text-neutral-text-medium">Water Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-secondary mb-2">64h</div>
                <div className="text-sm text-neutral-text-medium">Build Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-tertiary mb-2">Multi-zone</div>
                <div className="text-sm text-neutral-text-medium">Scalable Design</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Quick Facts */}
      <Section id="quick-facts" title="Quick Facts" kicker="Overview">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: FaDatabase, label: 'Data Collection', value: 'Every 30s', color: 'accent-primary' },
            { icon: FaWifi, label: 'ESP32 Devices', value: 'LilyGo T-Display', color: 'accent-secondary' },
            { icon: FaServer, label: 'Backend', value: 'Supabase PostgreSQL', color: 'accent-tertiary' },
            { icon: FaTachometerAlt, label: 'Water Savings', value: 'Tracked', color: 'accent-primary' },
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

      {/* System Architecture */}
      <Section id="architecture" title="System Architecture — Hardware · Cloud · ML" kicker="Technical Deep Dive">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Edge Layer (ESP32)',
              icon: FaMicrochip,
              description: 'Distributed ESP32 edge devices with sensors and actuators',
              points: [
                'Capacitive soil-moisture + rainfall sensors',
                'Median filtering, hysteresis, watchdogs',
                'Servo-controlled sprinklers with safe-close mode',
                'Edge caching + retry queue for offline resilience',
              ],
              color: 'accent-primary',
            },
            {
              title: 'Cloud Layer (Supabase + Django)',
              icon: FaServer,
              description: 'Real-time cloud pipeline with REST API and database',
              points: [
                'REST API endpoints for telemetry & config',
                'Realtime subscriptions powering dashboards',
                'Threshold settings per crop/soil type',
                'Manual override & alerting system',
              ],
              color: 'accent-secondary',
            },
            {
              title: 'Dashboard (React + Tailwind)',
              icon: FaDatabase,
              description: 'Live monitoring and control interface',
              points: [
                'Live moisture and rainfall charts per zone',
                'Water-usage savings % and soil-health index',
                'Forecast panel (24–72h rain probability)',
                'Manual override + per-zone target sliders',
              ],
              color: 'accent-tertiary',
            },
            {
              title: 'ML Layer (AI Assistance)',
              icon: FaBrain,
              description: 'Machine learning for predictive control',
              points: [
                'Forecast-aware scheduling with LSTM',
                'Anomaly detection on sensor drift',
                'CGAN synthetic data for stress testing',
                'Adaptive thresholding by crop/soil type',
              ],
              color: 'accent-primary',
            },
          ].map((layer, idx) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card-hover p-6 border-l-4"
                style={{
                  borderLeftColor: layer.color === 'accent-primary' ? 'rgb(0, 245, 212)' :
                                  layer.color === 'accent-secondary' ? 'rgb(56, 189, 248)' :
                                  'rgb(139, 92, 246)',
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className={`text-2xl ${
                    layer.color === 'accent-primary' ? 'text-accent-primary' :
                    layer.color === 'accent-secondary' ? 'text-accent-secondary' :
                    'text-accent-tertiary'
                  }`} />
                  <h3 className="text-xl font-bold text-neutral-text">{layer.title}</h3>
                </div>
                <p className="text-neutral-text-medium mb-4 leading-relaxed text-sm">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-text-medium">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* Technical Stack */}
      <Section id="technical-stack" title="Technical Stack" kicker="Technologies">
        <div className="glass-card-hover p-6 rounded-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-dark-border">
                  <th className="pb-4 text-accent-primary font-semibold">Layer</th>
                  <th className="pb-4 text-accent-secondary font-semibold">Technologies</th>
                </tr>
              </thead>
              <tbody className="text-neutral-text-medium">
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 font-medium">Hardware</td>
                  <td className="py-3">ESP32 MCUs, SG90 servos, capacitive sensors</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 font-medium">Firmware</td>
                  <td className="py-3">Arduino C++, JSON telemetry, Wi-Fi MQTT fallback</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 font-medium">Backend</td>
                  <td className="py-3">Django REST API, Supabase (Postgres + Realtime)</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 font-medium">Frontend</td>
                  <td className="py-3">React + Tailwind, Framer Motion animations, Vite</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 font-medium">ML/AI</td>
                  <td className="py-3">PyTorch (CGAN + forecast models), scikit-learn</td>
                </tr>
                <tr className="border-b border-dark-border/50">
                  <td className="py-3 font-medium">DevOps</td>
                  <td className="py-3">GitHub Actions CI/CD, Dockerized backend, HTTPS deployment</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Hosting</td>
                  <td className="py-3">GoDaddy VPS (API) + GitHub Pages (Frontend)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Dashboard Highlights */}
      <Section id="dashboard" title="Dashboard Highlights" kicker="User Interface">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Live Monitoring</h3>
            <ul className="space-y-3 text-neutral-text-medium">
              <li className="flex items-start gap-2">
                <span className="text-accent-primary mt-1">▸</span>
                <span>Live moisture and rainfall charts per zone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-primary mt-1">▸</span>
                <span>Water-usage savings % and soil-health index</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-primary mt-1">▸</span>
                <span>Forecast panel (24–72h rain probability)</span>
              </li>
            </ul>
          </div>
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Control Features</h3>
            <ul className="space-y-3 text-neutral-text-medium">
              <li className="flex items-start gap-2">
                <span className="text-accent-secondary mt-1">▸</span>
                <span>Manual override + per-zone target sliders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-secondary mt-1">▸</span>
                <span>Alert center for sensor anomalies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-secondary mt-1">▸</span>
                <span>Failed writes and connectivity monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Deep-Dive Tabs */}
      <Section id="deep-dive" title="Implementation Details" kicker="Technical Deep Dive">
        <div className="glass-card-hover p-6 rounded-xl">
          <div className="flex flex-wrap gap-2 mb-6 border-b border-dark-border pb-4">
            {['hardware', 'software', 'ai-ml', 'insights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-accent-primary text-white'
                    : 'bg-dark-surface-1dp text-neutral-text-medium hover:bg-dark-surface-6dp'
                }`}
              >
                {tab === 'hardware' ? 'Hardware' :
                 tab === 'software' ? 'Software' :
                 tab === 'ai-ml' ? 'AI/ML' : 'Engineering Insights'}
              </button>
            ))}
          </div>

          <div className="mt-6">
            {activeTab === 'hardware' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Hardware Components</h3>
                  <ul className="space-y-2 text-neutral-text-medium">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>ESP32 Microcontroller</strong> - LilyGo T-Display compatible board (Wi-Fi enabled, low power consumption)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>Capacitive Soil Moisture Sensor</strong> - Measures soil moisture levels from 0-100% with analog output</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>Rain Sensor</strong> - Detects rainfall and precipitation events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>Power Supply</strong> - Battery or solar-powered options for remote deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">▸</span>
                      <span><strong>Arduino IDE</strong> - Firmware development and OTA update capability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">ESP32 Firmware Logic</h3>
                  <div className="code-block p-4 rounded-lg text-sm font-mono">
                    <pre className="text-neutral-text-medium">
{`// ESP32: Data collection and transmission every 30 seconds
void loop() {
  // Read sensor values
  float soilMoisture = readSoilMoistureSensor();
  bool rainDetected = readRainSensor();
  
  // Create telemetry payload
  TelemetryData data = {
    zone_id: currentZone,
    soil_moisture: soilMoisture,
    rainfall: rainDetected ? 1.0 : 0.0,
    timestamp: getCurrentTimestamp(),
    device_id: ESP.getChipId()
  };
  
  // Transmit to Supabase via REST API
  if (WiFi.status() == WL_CONNECTED) {
    sendToSupabase(data);
  } else {
    // Store locally if offline, sync when reconnected
    storeLocally(data);
  }
  
  delay(30000); // 30-second interval
}

// Moisture status classification
String classifyMoistureStatus(float moisture) {
  if (moisture < 30) return "dry";
  else if (moisture < 60) return "moist";
  else return "wet";
}`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'software' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Supabase REST API Integration</h3>
                  <div className="code-block p-4 rounded-lg text-sm font-mono">
                    <pre className="text-neutral-text-medium">
{`// ESP32: Send telemetry to Supabase
async function sendToSupabase(telemetryData) {
  const response = await fetch(
    'https://your-project.supabase.co/rest/v1/telemetry',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
      },
      body: JSON.stringify(telemetryData)
    }
  );
  return response.json();
}

// Frontend: Real-time subscription
const { data, error } = await supabase
  .from('telemetry')
  .select('*')
  .eq('zone_id', zoneId)
  .order('timestamp', { ascending: false })
  .limit(100);

// Subscribe to real-time updates
supabase
  .channel('telemetry-changes')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'telemetry',
    filter: 'zone_id=eq.' + zoneId
  }, (payload) => {
    updateDashboard(payload.new);
  })
  .subscribe();`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Supabase Database Schema</h3>
                  <div className="code-block p-4 rounded-lg text-sm font-mono">
                    <pre className="text-neutral-text-medium">
{`-- Telemetry table: Stores sensor readings every 30 seconds
CREATE TABLE telemetry (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  zone_id INTEGER REFERENCES zones(id),
  soil_moisture FLOAT NOT NULL CHECK (soil_moisture >= 0 AND soil_moisture <= 100),
  rainfall BOOLEAN DEFAULT false,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  device_id TEXT NOT NULL
);

-- Zones table: Multi-zone configuration
CREATE TABLE zones (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  crop_type TEXT,
  moisture_threshold FLOAT DEFAULT 40.0,
  soil_depth FLOAT,
  automated_irrigation BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User preferences: Zone-specific settings
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  zone_id INTEGER REFERENCES zones(id),
  watering_parameters JSONB,
  alert_settings JSONB
);

-- Enable Row Level Security (RLS)
ALTER TABLE telemetry ENABLE ROW LEVEL SECURITY;
ALTER TABLE zones ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own zones
CREATE POLICY "Users can view own zones"
  ON zones FOR SELECT
  USING (auth.uid() = user_id);`}
                    </pre>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'ai-ml' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Automated Moisture Status Classification</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Real-time classification of soil conditions into three states: <strong>dry</strong> (&lt;30%), 
                    <strong>moist</strong> (30-60%), and <strong>wet</strong> (&gt;60%). This classification drives 
                    automated watering recommendations and alert generation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Trend Analysis & Predictions</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    The system performs 24-hour and extended trend monitoring to predict when moisture levels will cross 
                    critical thresholds. Uses historical telemetry data to forecast irrigation needs and prevent 
                    crop stress.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Soil Health Risk Calculation</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Calculates risk scores based on moisture levels, trend direction, and crop-specific requirements. 
                    Provides actionable insights to prevent overwatering (root rot risk) or underwatering (drought stress).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Crop-Specific Recommendations</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Generates watering suggestions based on crop type, soil depth, current moisture levels, and 
                    historical trends. Each zone can be configured with crop-specific thresholds for optimal health.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'insights' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Sensor Drift Calibration</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Auto-zero per season improved accuracy by <strong className="text-accent-primary">≈12%</strong>. 
                    The system automatically calibrates sensors by comparing readings across zones and flagging 
                    anomalies for manual inspection. Weekly calibration routines account for sensor drift over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Fail-Safe Control</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Edge logic mirrors cloud rules; system stays safe during API outages. If network connectivity is 
                    lost, ESP32 devices fall back to local threshold-based control using cached configuration. All 
                    actions are logged and synced when connectivity is restored.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">OTA Firmware Canaries</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    <strong className="text-accent-secondary">10% staged rollout</strong> caught PWM timing bug early. 
                    Over-the-air firmware updates are deployed gradually to a subset of devices, allowing early 
                    detection of issues before full deployment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">A/B Water Budgeting Trials</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Adaptive forecast model saved <strong className="text-accent-tertiary">≈22% water</strong> vs static 
                    schedule. Tested two irrigation strategies: aggressive (immediate response) vs. conservative 
                    (delayed response with larger hysteresis). Conservative approach reduced water usage significantly 
                    with minimal impact on crop health.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-text mb-4">Security by Design</h3>
                  <p className="text-neutral-text-medium mb-4 leading-relaxed">
                    Per-device auth tokens, signed requests, and nonce replay protection. Supabase Row Level Security 
                    (RLS) policies ensure users can only access their own zones and telemetry data. Multi-tenant 
                    architecture enables secure data isolation while maintaining scalability.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Section>

      {/* Research & AI Exploration */}
      <Section id="research" title="Research & AI Exploration" kicker="Machine Learning">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Forecast-Aware Scheduling</h3>
            <p className="text-neutral-text-medium mb-4 leading-relaxed">
              Moisture trajectory prediction: <code className="text-accent-primary bg-dark-surface-1dp px-2 py-1 rounded text-sm">mₜ₊₁ = f(mₜ, rainₜ, evapₜ) + ε</code>
            </p>
            <p className="text-neutral-text-medium leading-relaxed">
              Lightweight LSTM / state-space model predicts future soil moisture from weather & irrigation history. 
              Integrated weather forecast data adjusts irrigation schedules to prevent overwatering.
            </p>
          </div>
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">CGAN Stress-Tests</h3>
            <p className="text-neutral-text-medium mb-4 leading-relaxed">
              Generator <code className="text-accent-secondary bg-dark-surface-1dp px-2 py-1 rounded text-sm">G(z, c)</code> produces synthetic soil sequences for controller robustness.
            </p>
            <p className="text-neutral-text-medium leading-relaxed">
              Conditional GANs generate synthetic telemetry data for stress testing under extreme conditions 
              (drought, flooding) without risking actual crops. Used for controller robustness validation.
            </p>
          </div>
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Soil Health Modeling</h3>
            <p className="text-neutral-text-medium leading-relaxed">
              Early fusion of moisture, temperature, and rain into a "confidence index". Calculates risk scores 
              based on multiple factors to provide actionable insights and prevent crop stress.
            </p>
          </div>
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Anomaly Detection</h3>
            <p className="text-neutral-text-medium leading-relaxed">
              Identifies sensor drift, dropouts, and stuck-at signals. Automated calibration routines and 
              cross-zone comparison flag anomalies for manual inspection, improving system reliability.
            </p>
          </div>
        </div>
      </Section>

      {/* Impact & Future Scope */}
      <Section id="impact" title="Impact & Future Scope" kicker="Results">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Water Conservation</h3>
            <p className="text-neutral-text-medium leading-relaxed mb-4">
              <strong className="text-accent-primary">18–25% reduction</strong> in water usage without yield loss. 
              Data-driven irrigation recommendations optimize water usage while maintaining crop health.
            </p>
          </div>
          <div className="glass-card-hover p-6 rounded-xl">
            <h3 className="text-xl font-bold text-neutral-text mb-4">Scalability</h3>
            <p className="text-neutral-text-medium leading-relaxed mb-4">
              Zones → fields → regional deployments via Supabase multi-tenant design. Architecture supports 
              scaling from single farms to large agricultural operations.
            </p>
          </div>
        </div>
        <div className="glass-card-hover p-6 rounded-xl">
          <h3 className="text-xl font-bold text-neutral-text mb-4">Future Integration</h3>
          <ul className="space-y-3 text-neutral-text-medium">
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">▸</span>
              <span><strong>Azure IoT Hub / AWS IoT Core</strong> connectivity for industrial scale</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-secondary mt-1">▸</span>
              <span><strong>Entra ID auth</strong> + Power BI dashboards for enterprise analytics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-tertiary mt-1">▸</span>
              <span><strong>Advanced ML models</strong> for predictive maintenance and yield optimization</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* CTA Back to Repo */}
      <Section id="cta" title="" kicker="">
        <div className="glass-card-hover p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-neutral-text mb-4">Explore the Full Implementation</h3>
          <p className="text-neutral-text-medium mb-6 max-w-2xl mx-auto">
            Check out the complete source code, documentation, and deployment guides on GitHub.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/ashra1-ai/Aura-Farming"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaGithub />
              <span>View Repository</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="https://medium.com/@kanishkashra/soilution-building-a-distributed-iot-irrigation-system-in-64-hours-while-sleep-deprived-and-0fd944f67fbd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FaExternalLinkAlt />
              <span>Read Story</span>
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

