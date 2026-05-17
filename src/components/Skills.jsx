import { motion } from 'framer-motion'
import { useData } from '../LanguageContext'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function Skills() {
  const { skillCategories } = useData()

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-surface-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="section-heading">
            <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card"
            >
              <h3 className="font-semibold text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 text-xs rounded-lg bg-surface-700 text-gray-300 border border-gray-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
