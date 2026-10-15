import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'work', key: 'nav.work' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'contact', key: 'nav.contact' },
] as const;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <header className="top-0 z-50 bg-ink/95 backdrop-blur-sm md:sticky">
      <nav className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-paper py-6">
        <a
          href="#top"
          className="text-base font-bold tracking-[-0.01em] hover:text-accent-hover"
        >
          Erik Mende
        </a>

        <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 font-mono text-[13px]">
          {sections.map(({ id, key }) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-accent-hover">
                {t(key)}
              </a>
            </li>
          ))}
          <li className="text-muted">
            <a
              href="/"
              lang="fi"
              className={cn('hover:text-accent-hover', !isEn && 'text-paper')}
              aria-current={!isEn ? 'page' : undefined}
            >
              FI
            </a>
            {' / '}
            <a
              href="/en"
              lang="en"
              className={cn('hover:text-accent-hover', isEn && 'text-paper')}
              aria-current={isEn ? 'page' : undefined}
            >
              EN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
