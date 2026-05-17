import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, ArrowRight, AlertCircle, Eye, EyeOff } from 'lucide-react'
import { sitePassword } from '../data'
import { useData } from '../LanguageContext'

export default function PasswordGate({ onUnlock }) {
  const { personal, pwTitle, pwPlaceholder, pwButton, pwSuccess, pwError } = useData()
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPw, setShowPw] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === sitePassword) {
      setLoading(true)
      setTimeout(() => {
        sessionStorage.setItem('_pw', '1')
        onUnlock()
      }, 400)
    } else {
      setError(true)
      setInput('')
      setTimeout(() => setError(false), 600)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-surface-900 flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-sm"
      >
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
            <Lock size={24} className="text-brand-blue" />
          </div>
        </div>

        <h1 className="text-xl font-bold text-white text-center mb-2">
          {personal.name}
        </h1>
        <p className="text-sm text-gray-400 text-center mb-8">
          {pwTitle}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <motion.input
              type={showPw ? 'text' : 'password'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={pwPlaceholder}
              autoFocus
              animate={error ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
              transition={{ duration: 0.4 }}
              className={`w-full bg-surface-800 border rounded-xl pl-4 pr-11 py-3 text-white text-sm placeholder-gray-500 outline-none transition-colors ${
                error
                  ? 'border-red-500/50 focus:border-red-400'
                  : 'border-gray-700 focus:border-brand-blue/50'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              tabIndex={-1}
            >
              {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 mt-2 text-xs text-red-400"
              >
                <AlertCircle size={12} />
                {pwError}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="w-full bg-brand-blue hover:bg-brand-blue-dark disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-xl px-4 py-3 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
          >
            {loading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2"
              >
                {pwSuccess}
              </motion.div>
            ) : (
              <>
                {pwButton}
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}
