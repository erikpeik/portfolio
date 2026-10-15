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
            className="flex flex-wrap gap-x-10 gap-y-3 border-t border-line py-6"
          >
            <span className="shrink-0 basis-[140px] font-mono text-[13px] text-muted">
              {period}
            </span>
            <div className="flex-[1_1_240px]">
              <h3 className="text-[22px] font-bold tracking-[-0.02em]">
                {title}
              </h3>
              <p className="text-base text-soft">{org}</p>
            </div>
            <p className="flex-[2_1_360px] text-base leading-normal text-soft">
              {desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
