import { motion } from 'framer-motion'

const Partners = () => {
  const partners = [
    { name: 'Google', icon: '🔍' },
    { name: 'Udemy', icon: '🎓' },
    { name: 'Udacity', icon: '🚀' },
    { name: 'Circula Competitions', icon: '🏆' },
  ]

  return (
    <section id="partners" className="py-20 bg-higherland-card bg-opacity-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Curriculum Powered By</h2>
          <p className="text-xl text-higherland-muted">
            We curate the world's best AI content into one clear path
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-higherland-dark p-6 rounded-lg border border-higherland-gold border-opacity-20 hover:border-opacity-50 hover:glow-gold transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl mb-4">{partner.icon}</div>
              <p className="font-bold text-lg">{partner.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-higherland-muted mt-12"
        >
          ...and more premium educational partners
        </motion.p>
      </div>
    </section>
  )
}

export default Partners