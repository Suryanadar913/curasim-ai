import { motion } from 'framer-motion'
import './App.css'

function App() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Orbit rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>
          <div className="orbit-ring orbit-ring-3"></div>
        </div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="floating-dot"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(particle.delay) * 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + particle.delay * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        className="sticky top-0 z-50 glass border-b border-slate-700 px-6 md:px-12 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            🧬 CuraSim AI
          </motion.a>

          <nav className="hidden md:flex gap-8">
            {['Features', 'How It Works', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-slate-300 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight"
          >
            CuraSim AI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-300 mb-6 leading-relaxed"
          >
            Intelligence Built for Clinical Precision
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          >
            Revolutionize your homeopathy practice with AI-powered case analysis, smart remedy suggestions, and comprehensive patient management—designed for modern clinical precision.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all glow"
            >
              Start Simulation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(6, 182, 212, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all glow-accent"
            >
              Case Protocols
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-slate-400 text-lg">Everything you need for intelligent clinical decision support</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '🤖',
                title: 'AI Case Analysis',
                description: 'Intelligent remedy suggestions powered by advanced machine learning and materia medica databases.',
              },
              {
                icon: '📊',
                title: 'Smart Case Management',
                description: 'Track patient progress, manage prescriptions, and maintain comprehensive clinical histories.',
              },
              {
                icon: '💊',
                title: 'Remedy Comparison',
                description: 'Side-by-side remedy analysis with detailed characteristics and clinical applications.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={featureCardVariants}
                whileHover="hover"
                className="glass p-8 rounded-xl border border-slate-700 cursor-pointer"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-12 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center glass rounded-2xl border border-blue-500 p-12 glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Join practitioners worldwide using CuraSim AI for smarter clinical decisions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(59, 130, 246, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg text-lg transition-all glow"
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 glass py-8 px-6 md:px-12 text-center text-slate-400 relative z-10">
        <p>&copy; 2026 CuraSim AI. All rights reserved. | Built for clinical excellence.</p>
      </footer>
    </div>
  )
}

export default App
