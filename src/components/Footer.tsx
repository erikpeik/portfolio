import { SiGithub } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center flex flex-col items-center gap-2">
      <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Erik Mende</p>
      <a
        href="https://github.com/erikpeik/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors"
      >
        <SiGithub size={12} />
        Source code
      </a>
    </footer>
  )
}
