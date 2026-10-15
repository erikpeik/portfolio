import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';

const groups = [
  {
    key: 'skills.frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'CSS'],
  },
  {
    key: 'skills.backend',
    items: ['C# / .NET', 'Node.js', 'Express', 'PHP', 'Python', 'C'],
  },
  {
    key: 'skills.tools',
    items: [
      'Azure',
      'Docker',
      'Linux',
      'Git / GitHub',
      'CI/CD',
      'SQL',
    ],
  },
] as const;

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="stack" className="border-t border-paper pt-7 pb-20">
      <SectionHeader index={3} title={t('skills.title')} />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
        {groups.map(({ key, items }) => (
          <div key={key}>
            <h3 className="mb-3 font-mono text-[13px] font-normal text-muted">
              {t(key)}
            </h3>
            <ul className="text-[22px] leading-[1.45] font-medium tracking-[-0.015em]">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
