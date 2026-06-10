import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Programs from './components/Programs'
import Partners from './components/Partners'
import AIAssistant from './components/AIAssistant'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-higherland-dark text-white">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Programs />
        <Partners />
        <AIAssistant />
      </main>
      <Footer />
    </div>
  )
}

export default App