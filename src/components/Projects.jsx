import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  AlertTriangle,
  UserCheck,
  TrendingUp,
  Brain,
  ArrowRight,
} from 'lucide-react'
import { useData } from '../LanguageContext'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

function AnimatedMetric({ from, to, unit, label }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = from
          const end = to
          const duration = 1500
          const startTime = Date.now()
          const tick = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(start + (end - start) * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [from, to])

  return (
    <div ref={ref} className="text-center py-4">
      <div className="text-4xl md:text-5xl font-bold gradient-text tabular-nums">
        {count}
        <span className="text-2xl">{unit}</span>
      </div>
      <p className="text-sm text-gray-400 mt-2">{label}</p>
    </div>
  )
}

function BigNumber({ value, unit, label }) {
  return (
    <div className="text-center py-4">
      <motion.div
        {...fadeUp}
        className="text-5xl md:text-6xl font-bold text-white tabular-nums"
      >
        {value}
        <span className="text-3xl text-brand-blue ml-1">{unit}</span>
      </motion.div>
      <p className="text-sm text-gray-400 mt-2">{label}</p>
    </div>
  )
}

function StatCards({ data }) {
  if (!data) return null

  return (
    <motion.div {...fadeUp} className="mt-6">
      <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
        {data.title}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {data.items.map((item, i) => {
          const colorMap = {
            positive: 'text-green-400',
            negative: 'text-red-400',
            neutral: 'text-yellow-400',
          }
          const valueColor = item.sentiment
            ? colorMap[item.sentiment]
            : 'text-white'

          return (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-surface-700/50 border border-gray-700 rounded-xl p-4 text-center"
            >
              <div className={`text-2xl md:text-3xl font-bold tabular-nums ${valueColor}`}>
                {item.value}
              </div>
              <div className="text-xs text-gray-400 mt-1 leading-snug">
                {item.label}
              </div>
              {item.sub && (
                <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
              )}
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

function DataSources({ sources }) {
  if (!sources) return null
  return (
    <motion.div {...fadeUp} className="mt-6">
      <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
        Multi-source Data Integration
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {sources.map((s, i) => (
          <div
            key={i}
            className="bg-surface-700/50 border border-gray-700 rounded-xl p-3 text-center"
          >
            <div className="text-sm font-medium text-white">{s.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.detail}</div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function MethodDiagram({ diagram }) {
  if (!diagram) return null
  return (
    <motion.div {...fadeUp} className="mt-6">
      <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
        {diagram.title}
      </p>
      <div className="bg-surface-700/50 border border-gray-700 rounded-xl p-5">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-brand-blue shrink-0">
            {diagram.mainChannel.label}
          </span>
          <ArrowRight size={14} className="text-gray-600 shrink-0 hidden sm:block" />
          <div className="flex gap-1.5 flex-wrap">
            {diagram.mainChannel.questions.map((q, j) => (
              <span
                key={j}
                className="px-2.5 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full"
              >
                {q}
              </span>
            ))}
          </div>
          <ArrowRight size={14} className="text-gray-600 shrink-0 hidden sm:block" />
          <span className="text-xs text-gray-300">{diagram.mainChannel.action}</span>
        </div>

        <div className="border-t border-gray-700 my-4" />

        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-gray-400 shrink-0">
            {diagram.subChannel.label}
          </span>
          <ArrowRight size={14} className="text-gray-600 shrink-0 hidden sm:block" />
          <span className="px-2.5 py-1 text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700 rounded-full">
            {diagram.subChannel.trigger}
          </span>
          <ArrowRight size={14} className="text-gray-600 shrink-0 hidden sm:block" />
          <span className="text-xs text-gray-300">{diagram.subChannel.action}</span>
        </div>
      </div>
    </motion.div>
  )
}

function NarrativeBlock({ icon: Icon, label, content, children, delay }) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay }}
      className="flex gap-3"
    >
      <div className="shrink-0 w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center mt-0.5">
        <Icon size={15} className="text-brand-blue" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-brand-blue mb-1">{label}</h4>
        {content && (
          <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
        )}
        {children}
      </div>
    </motion.div>
  )
}

function ProjectCard({ project, labels }) {
  return (
    <motion.div {...fadeUp} className="card" id={project.id}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t, i) => (
            <span key={i} className="tag text-xs">
              {t}
            </span>
          ))}
        </div>
      </div>

      {project.metricFrom != null && project.metricTo != null && (
        <AnimatedMetric
          from={project.metricFrom}
          to={project.metricTo}
          unit={project.metricUnit || '%'}
          label={project.metricLabel}
        />
      )}

      {project.bigNumber && <BigNumber {...project.bigNumber} />}

      <div className="mt-6 space-y-5">
        <NarrativeBlock
          icon={Lightbulb}
          label={labels.background}
          content={project.background}
          delay={0}
        />
        <NarrativeBlock
          icon={AlertTriangle}
          label={labels.problem}
          content={project.problem}
          delay={0.1}
        />
        <NarrativeBlock icon={UserCheck} label={labels.role} delay={0.2}>
          <p className="text-gray-400 text-sm mb-3">{project.role}</p>
          <ul className="space-y-2">
            {project.actions.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-brand-blue mt-1 shrink-0">▸</span>
                {a}
              </li>
            ))}
          </ul>
        </NarrativeBlock>

        <NarrativeBlock icon={TrendingUp} label={labels.results} delay={0.3}>
          <ul className="space-y-2">
            {project.results.map((r, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-green-400 mt-1 shrink-0">✓</span>
                {r}
              </li>
            ))}
          </ul>
        </NarrativeBlock>

        <NarrativeBlock
          icon={Brain}
          label={labels.reflection}
          content={project.reflection}
          delay={0.4}
        />
      </div>

      <StatCards data={project.statCards} />
      <MethodDiagram diagram={project.methodDiagram} />
      <DataSources sources={project.dataSources} />
    </motion.div>
  )
}

export default function Projects() {
  const { projects, projectsHeading, projectsSub, projectLabels } = useData()

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="mb-14">
          <h2 className="section-heading">
            <span className="gradient-text">Key</span> Projects
          </h2>
          <p className="section-subheading mt-3">{projectsSub}</p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              labels={projectLabels}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
