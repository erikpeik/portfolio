export interface TimelineEntry {
  period: string;
  title: string;
  org: string;
  desc: string;
}

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="border-b border-line">
      {entries.map(({ period, title, org, desc }) => (
        <li
          key={title}
          className="grid gap-x-10 gap-y-3 border-t border-line py-6 md:grid-cols-[140px_1fr] lg:grid-cols-[140px_minmax(0,1fr)_minmax(0,1.65fr)]"
        >
          <span className="font-mono text-[13px] text-muted">{period}</span>
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
  );
}
