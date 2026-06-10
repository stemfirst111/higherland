import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface NavbarProps {
  isScrolled: boolean
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Programs', href: '#programs' },
    { label: 'Partners', href: '#partners' },
    { label: 'AI Assistant', href: '#ai-assistant' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glassmorphism' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-lg font-bold text-higherland-gold-light">HigherLand</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium hover:text-higherland-gold-light transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://forms.jotform.com/HigherLand"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block px-6 py-2 bg-higherland-gold-light text-higherland-dark font-bold rounded hover:bg-higherland-gold transition-colors duration-200"
              >
                Register Now
              </a>

              <button
                className="md:hidden"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 z-40 glassmorphism md:hidden"
        >
          <div className="p-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 hover:text-higherland-gold-light transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://forms.jotform.com/HigherLand"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-higherland-gold-light text-higherland-dark font-bold rounded text-center mt-4 hover:bg-higherland-gold transition-colors"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default Navbar