import { motion } from 'framer-motion'
import { Users, Target, Sparkles, Briefcase } from 'lucide-react'
import { useData } from '../LanguageContext'

const iconMap = { Users, Target, Sparkles, Briefcase }

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function CareerDirections() {
  const { careerDirections, careerSub } = useData()

  return (
    <section id="career" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="section-heading">
            <span className="gradient-text">Career</span> Direction
          </h2>
          <p className="section-subheading mt-3">{careerSub}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {careerDirections.map((dir, i) => {
            const Icon = iconMap[dir.icon]
            return (
              <motion.div
                key={dir.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card group cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{dir.title}</h3>
                      <span className="text-xs text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">
                        {dir.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {dir.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
