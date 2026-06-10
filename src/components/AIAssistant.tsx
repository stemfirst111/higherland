import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm your HigherLand AI Assistant. How can I help you today? You can ask me about our programs, enrollment, curriculum, or anything about AI education.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase()

    if (lower.includes('program') || lower.includes('course')) {
      return 'We offer a Foundation Program (30 days) covering AI Fundamentals with official certification. After completion, you can explore our Advanced Programs including AI Development, Machine Learning, AI for Business, and AI Ethics. Would you like more details?'
    }

    if (lower.includes('enroll') || lower.includes('register') || lower.includes('sign up')) {
      return 'You can register anytime through our "Register Now" button on the website! The Foundation Program is 30 days of self-paced learning with live conferences. Registration opens the door to our premium curriculum.'
    }

    if (lower.includes('certif')) {
      return 'Yes! Upon completing the 30-day Foundation Program, you\'ll earn an official HigherLand AI Certification. This is recognized across the industry and included in your program enrollment.'
    }

    if (lower.includes('curriculum') || lower.includes('learn')) {
      return 'Our curriculum is curated from Google, Udemy, Udacity, and Circula Competitions. You access the best AI content, structured into a clear 30-day path. It\'s 100% distance learning, so you study at your own pace.'
    }

    if (lower.includes('conference') || lower.includes('live') || lower.includes('mentor')) {
      return 'Yes! We offer live instructor-led conferences where you can ask questions, get mentored, and connect with other learners. These sessions complement your self-paced learning.'
    }

    if (lower.includes('price') || lower.includes('cost')) {
      return 'For detailed pricing information, please click the "Register Now" button to visit our enrollment form. Our team will provide all pricing details there.'
    }

    if (lower.includes('how long') || lower.includes('duration') || lower.includes('30 days')) {
      return 'The Foundation Program is designed to be completed in 30 days. However, you have lifetime access to materials, so you can review content anytime after certification.'
    }

    if (lower.includes('partner') || lower.includes('google') || lower.includes('udemy')) {
      return 'We partner with industry leaders: Google, Udemy, Udacity, and Circula Competitions. This ensures you\'re learning from the world\'s best AI educators.'
    }

    if (lower.includes('start') || lower.includes('get started') || lower.includes('begin')) {
      return 'Ready to start your AI journey? Click the "Start Your Journey" button on our homepage to register, or use the "Register Now" button at the top. Let\'s transform your career together!'
    }

    return "That's a great question! I didn't quite catch all the details. Try asking me about our Programs, Certification, Curriculum, Live Conferences, or how to Get Started. Or feel free to Register Now through our website!"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const assistantResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: getResponse(input),
      }
      setMessages((prev) => [...prev, assistantResponse])
      setIsLoading(false)
    }, 500)
  }

  return (
    <section id="ai-assistant" className="py-20 bg-higherland-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Personal Guide</h2>
          <p className="text-xl text-higherland-muted">Chat with our AI Assistant about HigherLand</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-higherland-card rounded-lg border border-higherland-accent border-opacity-30 overflow-hidden flex flex-col h-96"
        >
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-higherland-gold-light text-higherland-dark'
                        : 'bg-higherland-dark border border-higherland-accent text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-higherland-dark border border-higherland-accent px-4 py-3 rounded-lg">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-higherland-accent rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-higherland-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-higherland-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-higherland-gold border-opacity-10 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-higherland-dark border border-higherland-accent border-opacity-30 rounded px-4 py-2 text-white placeholder-higherland-muted focus:outline-none focus:border-opacity-100 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4 py-2 bg-higherland-accent text-higherland-dark font-bold rounded hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIAssistant