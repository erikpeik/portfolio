import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            {t('experience.title')}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-glow bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 border border-violet-500/20 flex items-center justify-center">
              <Briefcase size={22} className="text-violet-300" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {t('experience.tieto_role')}
                  </h3>
                  <p className="text-violet-300 font-medium">{t('experience.tieto_company')}</p>
                </div>
                <span className="text-sm text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {t('experience.tieto_period')}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                {t('experience.tieto_desc')}
              </p>
              <p className="text-sm text-slate-400 font-mono">
                {t('experience.tieto_stack')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
