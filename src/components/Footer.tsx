import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-higherland-card border-t border-higherland-gold border-opacity-20 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          <div>
            <span className="text-lg font-bold text-higherland-gold-light">HigherLand</span>
            <p className="text-sm text-higherland-muted mt-2">The Road to AI Freedom</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-higherland-muted">
              <li><a href="#about" className="hover:text-higherland-gold-light transition">About</a></li>
              <li><a href="#how-it-works" className="hover:text-higherland-gold-light transition">How it Works</a></li>
              <li><a href="#programs" className="hover:text-higherland-gold-light transition">Programs</a></li>
              <li><a href="#partners" className="hover:text-higherland-gold-light transition">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-higherland-muted">
              <li><a href="#" className="hover:text-higherland-gold-light transition">Blog</a></li>
              <li><a href="#" className="hover:text-higherland-gold-light transition">FAQ</a></li>
              <li><a href="#" className="hover:text-higherland-gold-light transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-higherland-muted mb-4">Have questions? We're here to help.</p>
            <a
              href="https://forms.jotform.com/HigherLand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-higherland-gold-light text-higherland-dark font-bold rounded text-sm hover:bg-higherland-gold transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <div className="border-t border-higherland-gold border-opacity-20 pt-8">
          <p className="text-center text-sm text-higherland-muted">
            © {currentYear} HigherLand AI Learning Institute. All rights reserved. | Partnership with Circula Competitions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer