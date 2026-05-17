import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { User, FolderOpen, Wrench, Compass, ArrowRight } from 'lucide-react'
import { useData } from '../LanguageContext'

const iconMap = { User, FolderOpen, Wrench, Compass }

export default function Hero() {
  const { personal, overview } = useData()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 via-transparent to-surface-900" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />

      {/* 主体内容 */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            {personal.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {personal.tags.map((tag, i) => (
              <span key={i} className="tag text-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-400 text-balance leading-relaxed mb-12">
            {personal.headline}
          </p>
        </motion.div>

        {/* 关键数字 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
        >
          {overview.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-3 rounded-xl border border-gray-800/60 bg-surface-800/40 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 导览卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto"
        >
          {overview.cards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <a
                key={card.href}
                href={card.href}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-800/60 bg-surface-800/40 backdrop-blur-sm hover:border-brand-blue/30 transition-colors group text-left h-full"
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors">
                  <Icon size={16} className="text-brand-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white">{card.title}</div>
                  <div className="text-xs text-gray-500 truncate">{card.desc}</div>
                </div>
                <ArrowRight size={13} className="text-gray-600 group-hover:text-brand-blue shrink-0 transition-colors" />
              </a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
