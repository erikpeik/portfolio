import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';

export default function Experience() {
  const { t } = useTranslation();
  const now = t('experience.now');

  const rows = [
    {
      period: `2022 — ${now}`,
      title: t('experience.tieto_role'),
      org: t('experience.tieto_company'),
      desc: t('experience.tieto_desc'),
    },
    {
      period: `2022 — ${now}`,
      title: t('experience.helsinki_degree'),
      org: t('experience.helsinki_school'),
      desc: t('experience.helsinki_desc'),
    },
    {
      period: '2021 — 2022',
      title: t('experience.hive_title'),
      org: t('experience.hive_school'),
      desc: t('experience.hive_desc'),
    },
  ];

  return (
    <section id="experience" className="border-t border-paper pt-7 pb-20">
      <SectionHeader index={2} title={t('experience.title')} />

      <ol className="border-b border-line">
        {rows.map(({ period, title, org, desc }) => (
          <li
            key={title}
            className="grid gap-x-10 gap-y-3 border-t border-line py-6 md:grid-cols-[140px_1fr] lg:grid-cols-[140px_minmax(0,1fr)_minmax(0,1.65fr)]"
          >
            <span className="font-mono text-[13px] text-muted">
              {period}
            </span>
            <div>
              <h3 className="text-[22px] font-bold tracking-[-0.02em]">
                {title}
              </h3>
              <p className="text-base text-soft">{org}</p>
            </div>
            <p className="text-base leading-normal text-soft md:col-start-2 lg:col-start-3">
              {desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
