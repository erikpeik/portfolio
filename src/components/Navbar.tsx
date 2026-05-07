import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language === 'en' ? 'fi' : 'en')
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="gradient-text font-bold text-lg tracking-tight">
          Erik Mende
        </span>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {t(`nav.${s}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 text-slate-400 hover:border-violet-500/50 hover:text-violet-300 transition-all"
          >
            {i18n.language === 'en' ? 'FI' : 'EN'}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1a]/95 backdrop-blur-md border-b border-white/5 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {sections.map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${s}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
