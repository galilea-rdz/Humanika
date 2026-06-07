interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#191616] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[#5A6478] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
