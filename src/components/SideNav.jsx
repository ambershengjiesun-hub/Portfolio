import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useData } from '../LanguageContext'

const sections = ['about', 'projects', 'skills', 'career']

export default function SideNav() {
  const { navLinks } = useData()
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = []
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-1">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '')
          const isActive = active === id
          return (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 py-2 group"
            >
              <div className="relative">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-blue shadow-[0_0_8px_rgba(0,102,255,0.5)] scale-125'
                      : 'bg-gray-700 group-hover:bg-gray-500'
                  }`}
                />
              </div>
              <motion.span
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -4,
                  color: isActive ? '#FFFFFF' : '#6B7280',
                }}
                className="text-xs font-medium whitespace-nowrap hidden xl:block"
              >
                {link.label}
              </motion.span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
