interface SectionHeaderProps {
  index: number;
  title: string;
  aside?: string;
}

export default function SectionHeader({
  index,
  title,
  aside,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex justify-between gap-4 font-mono text-[13px]">
      <h2 className="font-normal">
        {String(index).padStart(2, '0')} — {title}
      </h2>
      {aside && <span className="text-muted">{aside}</span>}
    </div>
  );
}
