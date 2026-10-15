import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';
import Timeline from '@/components/Timeline';

const certifications = [
  {
    year: '2025',
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
  },
  {
    year: '2023',
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
  },
];

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-12 first:mt-0">
      <h3 className="mb-4 font-mono text-[13px] font-normal text-muted">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function Experience() {
  const { t } = useTranslation();
  const now = t('experience.now');

  const work = [
    {
      period: `2022 — ${now}`,
      title: t('experience.tieto_role'),
      org: t('experience.tieto_company'),
      desc: t('experience.tieto_desc'),
    },
  ];

  const education = [
    {
      period: `2022 — ${now}`,
      title: t('education.helsinki_degree'),
      org: t('education.helsinki_school'),
      desc: t('education.helsinki_desc'),
    },
    {
      period: '2021 — 2022',
      title: t('education.hive_title'),
      org: t('education.hive_school'),
      desc: t('education.hive_desc'),
    },
  ];

  return (
    <section id="experience" className="border-t border-paper pt-7 pb-20">
      <SectionHeader index={2} title={t('experience.title')} />

      <Group title={t('experience.work')}>
        <Timeline entries={work} />
      </Group>

      <Group title={t('education.title')}>
        <Timeline entries={education} />
      </Group>

      <Group title={t('education.certifications')}>
        <ul className="border-b border-line">
          {certifications.map(({ year, name, issuer }) => (
            <li
              key={name}
              className="grid gap-x-10 gap-y-1 border-t border-line py-3.5 md:grid-cols-[140px_1fr] lg:grid-cols-[140px_minmax(0,1fr)_minmax(0,1.65fr)]"
            >
              <span className="font-mono text-[13px] text-muted">{year}</span>
              <span className="font-medium">{name}</span>
              <span className="text-soft md:col-start-2 lg:col-start-3">
                {issuer}
              </span>
            </li>
          ))}
        </ul>
      </Group>
    </section>
  );
}
