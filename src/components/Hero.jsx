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

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto w-full"
      >
        {/* 姓名 + 标签 + 简介 */}
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

          <p className="text-lg md:text-xl text-gray-400 text-balance leading-relaxed">
            {personal.headline}
          </p>
        </motion.div>

        {/* 分隔线 */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-16 h-px bg-gray-700 mx-auto my-10"
        />

        {/* 关键数字 — 无边无框，纯大字 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-4 gap-4 mb-8"
        >
          {overview.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 导览卡片 — 左侧蓝色强调线 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="grid grid-cols-4 gap-3"
        >
          {overview.cards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <a
                key={card.href}
                href={card.href}
                className="col-span-2 group flex items-center gap-3 p-3 rounded-xl border border-gray-800/50 bg-surface-800/30 hover:border-brand-blue/25 hover:bg-surface-800/50 transition-all duration-300 text-left"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors">
                  <Icon size={15} className="text-brand-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white group-hover:text-brand-blue-light transition-colors">
                    {card.title}
                  </div>
                  <div className="text-xs text-gray-500 truncate">{card.desc}</div>
                </div>
                <ArrowRight size={13} className="text-gray-600 group-hover:text-brand-blue shrink-0 transition-all group-hover:translate-x-0.5" />
              </a>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
