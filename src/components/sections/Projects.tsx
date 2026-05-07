import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            {t('projects.title')}
          </h2>
          <p className="text-slate-400">{t('projects.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-glow bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden"
        >
          {/* Glow accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-violet-600/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-bold text-white">
                {t('projects.jonne_name')}
              </h3>
              <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300">
                CS2
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              {t('projects.jonne_desc')}
            </p>

            <a
              href="https://jonnekahvila.fi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30 text-violet-300 hover:border-violet-400/60 hover:text-violet-200 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 text-sm font-medium"
            >
              {t('projects.jonne_link')}
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
