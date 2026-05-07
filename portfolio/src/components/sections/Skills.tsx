import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/20', text: 'text-cyan-300' },
  { name: 'TypeScript', color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/20', text: 'text-blue-300' },
  { name: 'Next.js', color: 'from-white/10 to-white/5', border: 'border-white/10', text: 'text-slate-200' },
  { name: 'C#', color: 'from-violet-500/20 to-violet-500/5', border: 'border-violet-500/20', text: 'text-violet-300' },
  { name: '.NET', color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/20', text: 'text-purple-300' },
  { name: 'Azure', color: 'from-sky-500/20 to-sky-500/5', border: 'border-sky-500/20', text: 'text-sky-300' },
  { name: 'Node.js', color: 'from-green-500/20 to-green-500/5', border: 'border-green-500/20', text: 'text-green-300' },
  { name: 'PHP', color: 'from-indigo-500/20 to-indigo-500/5', border: 'border-indigo-500/20', text: 'text-indigo-300' },
  { name: 'C', color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/20', text: 'text-orange-300' },
  { name: 'Docker', color: 'from-blue-400/20 to-blue-400/5', border: 'border-blue-400/20', text: 'text-blue-200' },
  { name: 'Git', color: 'from-red-500/20 to-red-500/5', border: 'border-red-500/20', text: 'text-red-300' },
  { name: 'Linux', color: 'from-yellow-500/20 to-yellow-500/5', border: 'border-yellow-500/20', text: 'text-yellow-300' },
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            {t('skills.title')}
          </h2>
          <p className="text-slate-400">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`px-5 py-2.5 rounded-full bg-gradient-to-br ${skill.color} border ${skill.border} ${skill.text} font-medium text-sm card-glow cursor-default`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
