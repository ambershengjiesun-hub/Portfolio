import { motion } from 'framer-motion'
import { GraduationCap, Building2 } from 'lucide-react'
import { useData } from '../LanguageContext'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

function TimelineItem({ item, icon: Icon, isWork }) {
  return (
    <motion.div {...fadeUp} className="relative pl-10 pb-12 last:pb-0">
      <div className="absolute left-[15px] top-2 bottom-0 w-px bg-gray-800 last:hidden" />
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface-700 border border-gray-700 flex items-center justify-center">
        <Icon size={14} className="text-brand-blue" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <h3 className="font-semibold text-white">
          {isWork ? item.company : item.school}
        </h3>
        <span className="text-xs text-gray-500 font-mono whitespace-nowrap">
          {item.period}
        </span>
      </div>

      <p className="text-sm font-medium text-gray-400 mb-2">
        {isWork ? item.role : item.degree}
      </p>

      {item.description && (
        <p className="text-sm text-gray-500 mb-3">{item.description}</p>
      )}

      {item.highlights && item.highlights.length > 0 && (
        <ul className="space-y-1.5">
          {item.highlights.map((h, i) => (
            <li key={i} className="text-sm text-gray-400 flex gap-2">
              <span className="text-brand-blue mt-1 shrink-0">·</span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

export default function Timeline() {
  const { education, workExperience, workLabel, eduLabel } = useData()

  return (
    <section className="py-24 md:py-32 px-6 bg-surface-800/50">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="section-heading">
            <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="mb-14">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            {workLabel}
          </h3>
          {workExperience.map((item, i) => (
            <TimelineItem key={i} item={item} icon={Building2} isWork />
          ))}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            {eduLabel}
          </h3>
          {education.map((item, i) => (
            <TimelineItem key={i} item={item} icon={GraduationCap} />
          ))}
        </div>
      </div>
    </section>
  )
}
