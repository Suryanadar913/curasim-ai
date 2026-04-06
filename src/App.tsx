import './App.css'

function App() {
  return (
    <>
      <header>
        <a href="#" className="logo">
          🏥 CuraSim AI
        </a>
        <nav>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>AI-Powered Homeopathy Clinical Support</h1>
        <p>
          CuraSim AI revolutionizes case analysis with intelligent remedy suggestions, comprehensive patient history tracking, and smart prescription management—all designed for modern practitioners.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started Free</button>
          <button className="btn btn-secondary">Watch Demo</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Powerful Features for Every Practitioner</h2>
        <p className="section-subtitle">Everything you need to provide better patient care and clinical decision support</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Case Analysis</h3>
            <p>Enter patient symptoms and let AI intelligently suggest matching remedies, rubrics, and therapeutic approaches based on materia medica and organon principles.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile-First Design</h3>
            <p>Optimized for Android and iOS. Fast, simple interface designed specifically for practitioners working in clinics. Access your cases anywhere, anytime.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Smart Case Management</h3>
            <p>Save, organize, and track patient cases with timeline views. Monitor patient improvement over time with detailed case notes and follow-up reminders.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💊</div>
            <h3>Prescription Tracking</h3>
            <p>Track prescriptions, dosages, and patient response. Built-in tools to monitor treatment outcomes and adjust remedies based on clinical feedback.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Learning & Reference</h3>
            <p>Access Organon explanations in simple language. Compare remedies side-by-side. Get clinical tips and best practices from experienced practitioners.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Community & Sharing</h3>
            <p>Share cases anonymously with the practitioner community. Learn from others' experiences. Build credibility and contribute to collective knowledge.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="features">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Simple workflow for efficient case management</p>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">1️⃣</div>
            <h3>Enter Symptoms</h3>
            <p>Input patient symptoms, medical history, and presenting complaints into the system.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">2️⃣</div>
            <h3>AI Suggests Remedies</h3>
            <p>Our AI analyzes symptoms and suggests relevant remedies with cross-linked materia medica references.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">3️⃣</div>
            <h3>Make Clinical Decision</h3>
            <p>Review suggestions, consult organon principles, and make informed clinical decisions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">4️⃣</div>
            <h3>Track & Follow Up</h3>
            <p>Monitor patient progress, schedule follow-ups, and adjust treatment as needed.</p>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <h2>Ready to Transform Your Practice?</h2>
        <p>Join hundreds of homeopathy practitioners using CuraSim AI to provide better patient care.</p>
        <button className="btn btn-primary" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'white' }}>
          Start Your Free Trial
        </button>
      </section>

      <footer>
        <p>© 2026 CuraSim AI. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Medical Disclaimer</a></p>
      </footer>
    </>
  )
}

export default App
