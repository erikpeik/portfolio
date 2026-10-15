import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ThemeToggle';

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
      <nav className="flex flex-wrap items-center gap-x-6 border-b border-paper py-3 md:gap-x-7 md:gap-y-3 md:py-6">
        <a
          href="#top"
          className="mr-auto py-2.5 text-base font-bold tracking-[-0.01em] hover:text-accent-hover md:py-0"
        >
          Erik Mende
        </a>

        <ul className="order-last grid w-full grid-cols-2 gap-x-6 font-mono text-[13px] sm:flex sm:gap-x-7 md:order-none md:w-auto md:flex-wrap md:gap-y-2">
          {sections.map(({ id, key }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="block py-3.5 hover:text-accent-hover md:py-0"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 font-mono text-[13px] text-muted">
          <ThemeToggle />
          <span aria-hidden="true" className="h-3 w-px bg-line" />
          <div>
            <a
              href="/"
              lang="fi"
              className={cn(
                'relative after:absolute after:-inset-x-2 after:-inset-y-3.5 hover:text-accent-hover',
                !isEn && 'text-paper',
              )}
              aria-current={!isEn ? 'page' : undefined}
            >
              FI
            </a>
            {' / '}
            <a
              href="/en"
              lang="en"
              className={cn(
                'relative after:absolute after:-inset-x-2 after:-inset-y-3.5 hover:text-accent-hover',
                isEn && 'text-paper',
              )}
              aria-current={isEn ? 'page' : undefined}
            >
              EN
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
