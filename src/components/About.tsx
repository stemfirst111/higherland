import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const About = () => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
      }
    }, { threshold: 0.2 })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { label: '30 Days', description: 'Complete Program' },
    { label: '100% Online', description: 'Distance Learning' },
    { label: 'Certified', description: 'Official Certification' },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-higherland-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About HigherLand</h2>
          <p className="text-xl text-higherland-muted max-w-2xl mx-auto">
            A distance learning institute committed to making AI education accessible to everyone.
            Developed in partnership with Circula Competitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-higherland-card p-8 rounded-lg border border-higherland-gold border-opacity-20 hover:border-opacity-50 transition-all duration-300 hover:glow-gold"
            >
              <div className="text-3xl font-bold text-higherland-gold-light mb-2">{stat.label}</div>
              <p className="text-higherland-muted">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-higherland-card p-8 rounded-lg border border-higherland-accent border-opacity-20"
        >
          <h3 className="text-2xl font-bold mb-4 text-higherland-accent">Why Choose HigherLand?</h3>
          <ul className="space-y-3 text-higherland-muted">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-higherland-gold-light rounded-full"></span>
              Flexible distance learning — study at your own pace
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-higherland-gold-light rounded-full"></span>
              Live instructor-led conferences for real-time mentoring
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-higherland-gold-light rounded-full"></span>
              Official HigherLand AI Certification upon completion
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About