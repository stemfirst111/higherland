import { motion } from 'framer-motion'
import { BookOpen, Users, Award } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Enroll & Learn',
      description: 'Access our comprehensive online curriculum curated from Google, Udemy, and Udacity. Learn at your own pace with self-paced modules.',
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'Attend Conferences',
      description: 'Join live instructor-led sessions. Ask questions, get personalized mentoring, and connect with fellow AI learners.',
      icon: Users,
    },
    {
      number: '03',
      title: 'Get Certified',
      description: 'Complete the 30-day program and earn your official HigherLand AI Certification. Join thousands of certified professionals.',
      icon: Award,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-higherland-card bg-opacity-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Journey to AI Freedom</h2>
          <p className="text-xl text-higherland-muted">Three simple steps to transform your AI knowledge</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-higherland-gold via-higherland-accent to-higherland-gold opacity-30 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-higherland-dark p-8 rounded-lg border border-higherland-gold border-opacity-20 relative z-10"
                >
                  <div className="absolute -top-6 left-8 bg-higherland-dark px-4 py-2">
                    <span className="text-3xl font-bold text-gradient">{step.number}</span>
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="w-12 h-12 bg-higherland-accent bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Icon className="text-higherland-accent" size={24} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-higherland-muted">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks