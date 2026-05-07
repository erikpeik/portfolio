import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8 text-center">
            {t('about.title')}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed text-center">
            {t('about.text')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
