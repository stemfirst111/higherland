import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      title: 'Foundation Program',
      duration: '30 Days',
      highlighted: true,
      features: [
        'AI Fundamentals',
        'Official Certification',
        '100% Distance Learning',
        'Live Conferences',
        'Lifetime Access',
      ],
      cta: 'Register Now',
    },
    {
      title: 'Advanced Programs',
      duration: 'Post-Certification',
      highlighted: false,
      features: [
        'AI Development',
        'Machine Learning',
        'AI for Business',
        'AI Ethics',
        'Specializations',
      ],
      cta: 'Coming Soon',
    },
  ]

  return (
    <section id="programs" className="py-20 bg-higherland-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-higherland-muted">Choose the path that fits your AI journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-lg border transition-all duration-300 ${
                program.highlighted
                  ? 'bg-higherland-card border-higherland-gold-light shadow-2xl glow-gold'
                  : 'bg-higherland-card border-higherland-gold border-opacity-20 hover:border-opacity-50'
              }`}
            >
              {program.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-higherland-gold-light text-higherland-dark px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-higherland-accent text-sm">{program.duration}</p>
              </div>

              <div className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-higherland-gold-light flex-shrink-0" />
                    <span className="text-higherland-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={program.cta === 'Register Now' ? 'https://forms.jotform.com/HigherLand' : '#'}
                target={program.cta === 'Register Now' ? '_blank' : undefined}
                rel={program.cta === 'Register Now' ? 'noopener noreferrer' : undefined}
                className={`w-full py-3 rounded font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                  program.highlighted
                    ? 'bg-higherland-gold-light text-higherland-dark hover:bg-higherland-gold'
                    : 'border-2 border-higherland-accent text-higherland-accent hover:bg-higherland-accent hover:text-higherland-dark'
                } ${program.cta === 'Coming Soon' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {program.cta}
                {program.cta === 'Register Now' && <ArrowRight size={20} />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs