import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const { t } = useTranslation();

  const items = [
    {
      school: t('education.hive_school'),
      degree: '',
      period: t('education.hive_period'),
      desc: t('education.hive_desc'),
    },
    {
      school: t('education.helsinki_school'),
      degree: t('education.helsinki_degree'),
      period: t('education.helsinki_period'),
      desc: t('education.helsinki_desc'),
    },
  ];

  return (
    <section id="education" className="py-6 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            {t('education.title')}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glow bg-white/5 border border-white/10 rounded-2xl p-4 md:p-8"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-cyan-600/30 to-violet-600/30 border border-cyan-500/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-cyan-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.school}
                      </h3>
                      {item.degree && (
                        <p className="text-cyan-300 font-medium">
                          {item.degree}
                        </p>
                      )}
                    </div>
                    <span className="text-sm text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
