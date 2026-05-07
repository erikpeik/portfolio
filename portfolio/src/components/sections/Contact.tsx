import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links = [
  {
    key: 'github',
    icon: FaGithub,
    href: 'https://github.com/erikpeik',
    color: 'hover:border-slate-400/50 hover:text-slate-200',
    glow: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]',
  },
  {
    key: 'linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/erikpeik/',
    color: 'hover:border-sky-500/50 hover:text-sky-300',
    glow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]',
  },
  {
    key: 'email',
    icon: Mail,
    href: 'mailto:erikpeik@outlook.com',
    color: 'hover:border-violet-500/50 hover:text-violet-300',
    glow: 'hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-slate-400 mb-10">{t('contact.subtitle')}</p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {links.map(({ key, icon: Icon, href, color, glow }) => (
              <a
                key={key}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 ${color} ${glow}`}
              >
                <Icon size={18} />
                {t(`contact.${key}`)}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
