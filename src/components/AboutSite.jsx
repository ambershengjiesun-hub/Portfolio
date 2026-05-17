import { motion } from 'framer-motion'
import { useData } from '../LanguageContext'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function AboutSite() {
  const { aboutSite } = useData()

  return (
    <section className="py-24 md:py-32 px-6 bg-surface-800/50">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="mb-10">
          <h2 className="section-heading">
            About This <span className="gradient-text">Site</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {aboutSite.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-gray-300 leading-relaxed text-base"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
