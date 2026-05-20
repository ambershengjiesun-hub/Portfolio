import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useData } from '../LanguageContext'

const mainSections = ['about', 'projects', 'skills', 'career']

export default function SideNav() {
  const { navLinks, projects } = useData()
  const [activeSection, setActiveSection] = useState('')
  const [activeProject, setActiveProject] = useState('')

  useEffect(() => {
    const observers = []

    mainSections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-20% 0px -70% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    projects.forEach((p) => {
      const el = document.getElementById(p.id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveProject(p.id)
        },
        { rootMargin: '-15% 0px -75% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [projects])

  const showProjects = activeSection === 'projects'

  return (
    <nav className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '')
          const isActive = activeSection === id
          const isProjects = id === 'projects'

          return (
            <div key={id}>
              <a
                href={link.href}
                className="flex items-center gap-2.5 py-1.5 group"
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-blue shadow-[0_0_8px_rgba(0,102,255,0.5)] scale-125'
                      : 'bg-gray-700 group-hover:bg-gray-400'
                  }`}
                />
                <motion.span
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    color: isActive ? '#93C5FD' : '#6B7280',
                  }}
                  className="text-xs font-medium whitespace-nowrap"
                >
                  {link.label}
                </motion.span>
              </a>

              <AnimatePresence>
                {isProjects && showProjects && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden ml-[5px] pl-4 border-l border-gray-800"
                  >
                    {projects.map((p) => {
                      const pActive = activeProject === p.id
                      return (
                        <a
                          key={p.id}
                          href={`#${p.id}`}
                          className="flex items-center gap-2 py-1.5 group"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              pActive
                                ? 'bg-brand-blue scale-125'
                                : 'bg-gray-700 group-hover:bg-gray-500'
                            }`}
                          />
                          <span
                            className={`text-[10px] whitespace-nowrap transition-colors duration-300 ${
                              pActive
                                ? 'text-brand-blue-light'
                                : 'text-gray-600 group-hover:text-gray-400'
                            }`}
                          >
                            {p.title.length > 14
                              ? p.title.slice(0, 14) + '…'
                              : p.title}
                          </span>
                        </a>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </nav>
  )
}
