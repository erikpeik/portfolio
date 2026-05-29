import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  containerVariants,
  sectionVariants,
  cardVariants,
  viewportConfig,
} from '@/lib/animationVariants';

const highlights = ['CS2 Servers', 'Plugin Dev', 'Dedicated Server', 'Website'];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-12 px-6">
      <motion.div
        className="max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <motion.div variants={sectionVariants} className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            {t('projects.title')}
          </h2>
          <p className="text-slate-400">{t('projects.subtitle')}</p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className="card-glow bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Content */}
            <div className="p-8 flex-1">
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

              <div className="flex flex-wrap gap-2 mb-6">
                {highlights.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

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

            {/* Screenshot */}
            <div className="relative md:w-80 border-t border-white/10 md:border-t-0 md:border-l md:border-white/10 overflow-hidden flex-shrink-0">
              <img
                src="/images/jonnekahvila-website.png"
                alt="JonneKahvila website"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                width={1738}
                height={1845}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f1a]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
