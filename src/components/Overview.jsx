import { motion } from 'framer-motion'
import { User, FolderOpen, Wrench, Compass, ArrowRight } from 'lucide-react'
import { useData } from '../LanguageContext'

const iconMap = { User, FolderOpen, Wrench, Compass }

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function Overview() {
  const { overview } = useData()

  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 关键数字 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {overview.stats.map((stat, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center p-4 rounded-xl border border-gray-800 bg-surface-800/50"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 导览标题 */}
        <motion.p
          {...fadeUp}
          className="text-xs text-gray-500 uppercase tracking-wider text-center mb-5"
        >
          {overview.heading}
        </motion.p>

        {/* 导览卡片 */}
        <div className="grid sm:grid-cols-2 gap-4">
          {overview.cards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.a
                key={card.href}
                href={card.href}
                {...fadeUp}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="card group flex items-center gap-4 hover:border-brand-blue/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">{card.desc}</p>
                </div>
                <ArrowRight size={15} className="text-gray-600 group-hover:text-brand-blue shrink-0 transition-colors" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
