import { motion } from 'framer-motion'
import { useData } from '../LanguageContext'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

export default function About() {
  const { aboutText } = useData()

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div {...fadeUp}>
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="mt-10 space-y-5">
          {aboutText.intro.map((p, i) => (
            <motion.p
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-gray-300 leading-relaxed text-base md:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
