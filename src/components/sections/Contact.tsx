import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';

const EMAIL = 'erikpeik@outlook.com';

const links = [
  { label: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'GitHub', href: 'https://github.com/erikpeik' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erikpeik/' },
  { label: 'Discord', href: 'https://discord.com/users/183537301526282241' },
];

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="border-t border-paper pt-7 pb-16">
      <SectionHeader index={4} title={t('contact.title')} />

      <a
        href={`mailto:${EMAIL}`}
        className="inline-block text-[clamp(44px,8vw,120px)] leading-[0.9] font-extrabold tracking-[-0.05em] hover:text-accent-hover"
      >
        {t('contact.cta')}
        <span className="text-accent">.</span>
      </a>

      <ul className="mt-12 flex flex-wrap gap-7 font-mono text-sm">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              {...(href.startsWith('mailto:')
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' })}
              className="relative border-b border-paper after:absolute after:-inset-x-2 after:-inset-y-3 hover:border-accent-hover hover:text-accent-hover"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
