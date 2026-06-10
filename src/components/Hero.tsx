import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-higherland-accent rounded-full opacity-50"
            animate={{
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Master AI in{' '}
            <span className="text-gradient">30 Days.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-higherland-muted mb-8 max-w-2xl mx-auto"
        >
          Join the prestigious AI education institute designed for everyone. Get certified, build the future,
          and accelerate your career.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://forms.jotform.com/HigherLand"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-higherland-gold-light text-higherland-dark font-bold rounded hover:bg-higherland-gold transition-colors duration-200 flex items-center justify-center gap-2 group"
          >
            Start Your Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => scrollToSection('#how-it-works')}
            className="px-8 py-3 border-2 border-higherland-accent text-higherland-accent font-bold rounded hover:bg-higherland-accent hover:text-higherland-dark transition-colors duration-200"
          >
            Explore Programs
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero