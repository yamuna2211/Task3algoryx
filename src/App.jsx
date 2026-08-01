import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import Scene from './components/Scene'
import Section from './components/Section'
import './App.css'

const stats = [
  { label: 'Interactive scenes', value: '12+' },
  { label: 'Optimized frames', value: '60fps' },
  { label: 'Production-ready UI', value: '100%' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">AURA LAB</div>
        <nav className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-panel">
          <div className="hero-copy">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Algoryx-inspired 3D showcase</span>
            </div>
            <h1>Shape the future through immersive digital motion.</h1>
            <p>
              Explore a modern experience where sleek interfaces meet a responsive 3D centerpiece built to feel cinematic and lightweight.
            </p>
            <div className="hero-actions">
              <a href="#experience" className="primary-btn">
                View experience <ArrowRight size={18} />
              </a>
              <a href="#journey" className="secondary-btn">
                <Play size={16} /> Watch story
              </a>
            </div>
            <div className="stats-grid">
              {stats.map((item) => (
                <div key={item.label} className="stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-visual"
          >
            <Scene />
          </motion.div>
        </section>

        <section id="experience" className="page-sections">
          <Section
            eyebrow="Immersive design"
            title="A tactile digital space for bold storytelling."
            description="Every surface is tuned for clarity, rhythm, and motion so the experience feels elegant on every device."
          >
            <ul className="feature-list">
              <li>Responsive navigation with smooth transitions</li>
              <li>High-impact 3D visual centerpiece</li>
              <li>Fast loading and lightweight interactions</li>
            </ul>
          </Section>

          <Section
            eyebrow="Design journey"
            title="Built to feel cinematic without compromising performance."
            description="The sections are intentionally modular, making the experience easy to extend while preserving a polished presentation."
            reverse
          >
            <div className="mini-grid">
              <div className="mini-card">Cinematic hero</div>
              <div className="mini-card">Refined spacing</div>
              <div className="mini-card">Motion-driven polish</div>
              <div className="mini-card">Cross-device ready</div>
            </div>
          </Section>
        </section>
      </main>

      <footer id="contact" className="footer">
        <p>Designed for the Algoryx Community challenge with modern React and 3D motion.</p>
        <a href="https://algoryx.in/community" target="_blank" rel="noreferrer">
          Explore Algoryx Community
        </a>
      </footer>
    </div>
  )
}

export default App
