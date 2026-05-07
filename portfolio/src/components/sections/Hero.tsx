import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-700/20 blur-3xl" />
        <div className="blob blob-delay-2 absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-600/15 blur-3xl" />
        <div className="blob blob-delay-4 absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-purple-600/15 blur-3xl" />
        {/* Grid overlay */}
        <div className="hero-grid absolute inset-0 opacity-[0.03]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-slate-400 text-lg mb-4 tracking-widest uppercase text-sm"
        >
          {t('hero.greeting')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="gradient-text glow-text text-6xl md:text-8xl font-bold mb-4 leading-tight"
        >
          Erik Mende
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-slate-300 font-light mb-6"
        >
          {t('hero.role')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-lg max-w-xl mx-auto mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="https://github.com/erikpeik"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-violet-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
          >
            <FaGithub size={18} />
            {t('hero.cta_github')}
          </a>
          <a
            href="https://www.linkedin.com/in/erikpeik/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium hover:from-violet-500 hover:to-cyan-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300"
          >
            <FaLinkedin size={18} />
            {t('hero.cta_linkedin')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-violet-400 transition-colors animate-bounce"
        aria-label={t('hero.scroll_down')}
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
