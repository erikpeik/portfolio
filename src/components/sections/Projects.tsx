import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';

export default function Projects() {
  const { t } = useTranslation();

  const details = [
    { label: t('projects.role'), value: t('projects.role_value') },
    { label: t('projects.built'), value: t('projects.built_value') },
    { label: t('projects.status'), value: t('projects.status_value') },
  ];

  return (
    <section id="work" className="border-t border-paper pt-7 pb-14">
      <SectionHeader
        index={1}
        title={t('projects.title')}
        aside={t('projects.count')}
      />

      <a
        href="https://jonnekahvila.fi/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-wrap items-center gap-6 sm:gap-8"
      >
        <div className="aspect-[4/3] w-32 shrink-0 overflow-hidden border border-edge bg-surface sm:w-40">
          <img
            src="/images/jonnekahvila-website.png"
            alt=""
            className="block h-full w-full object-cover object-top"
            loading="lazy"
            width={1738}
            height={1845}
          />
        </div>

        <div className="flex flex-[1_1_320px] flex-col gap-3.5">
          <h3 className="text-[34px] leading-none font-extrabold tracking-[-0.03em] group-hover:text-accent-hover">
            {t('projects.jonne_name')} <span aria-hidden="true">↗</span>
          </h3>
          <p className="max-w-[520px] text-base leading-normal text-soft">
            {t('projects.jonne_desc')}
          </p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-paper pt-4 font-mono text-[13px]">
            {details.map(({ label, value }) => (
              <div key={label} className="contents">
                <dt className="text-muted">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </a>
    </section>
  );
}
