interface SectionHeadingProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeading({
  number,
  title,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-3 mb-14 ${className}`}>
      <span className="font-mono text-accent text-sm tracking-wider shrink-0">
        {number}.
      </span>
      <h2 className="font-syne text-xl sm:text-2xl font-bold text-slate-100 whitespace-nowrap">
        {title}
      </h2>
      <div className="section-line" />
    </div>
  );
}
