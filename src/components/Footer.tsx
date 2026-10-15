import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-wrap justify-between gap-3 border-t border-paper pt-6 pb-10 font-mono text-xs text-muted">
      <span>© {new Date().getFullYear()} Erik Mende</span>
      <a
        href="https://github.com/erikpeik/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="relative after:absolute after:-inset-x-2 after:-inset-y-3.5 hover:text-accent-hover"
      >
        {t('footer.source')}
      </a>
    </footer>
  );
}
