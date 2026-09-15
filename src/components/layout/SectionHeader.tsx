interface SectionHeaderProps {
  number: string;
  tag: string;
  title?: string;
  subtitle?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeader({
  number,
  tag,
  title,
  subtitle,
  className = "",
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Label / Numbering */}
      <div className="flex items-center gap-3">
        <span
          className={`font-mono text-xs tracking-widest uppercase ${
            isDark ? "text-[#C56A3A]" : "text-[#C56A3A]"
          }`}
        >
          {number}
        </span>
        <span
          className={`font-mono text-xs tracking-widest uppercase ${
            isDark ? "text-[#7C8288]" : "text-[#7C8288]"
          }`}
        >
          / {tag}
        </span>
      </div>

      {/* Main Title */}
      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.03em] ${
            isDark ? "text-[#F5F4F0]" : "text-[#17191C]"
          }`}
        >
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-sm md:text-base max-w-2xl leading-relaxed ${
            isDark ? "text-[#BFC2BE]" : "text-[#565B61]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
