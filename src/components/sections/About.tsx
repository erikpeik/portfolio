import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { sectionVariants, viewportConfig } from '@/lib/animationVariants';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 text-center">
            {t('about.title')}
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed text-center">
            {t('about.text')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
