import React from "react";

export type SocialBrand = "github" | "linkedin" | "email";

interface SocialIconProps {
  brand: SocialBrand;
  size?: number;
  className?: string;
}

export function SocialIcon({
  brand,
  size = 18,
  className = "",
}: SocialIconProps) {
  const brandLogos: Record<SocialBrand, { src: string; label: string }> = {
    github: { src: "/logos/github.svg", label: "GitHub" },
    linkedin: { src: "/logos/linkedin.svg", label: "LinkedIn" },
    email: { src: "/logos/email.svg", label: "Email" },
  };

  const item = brandLogos[brand];
  const isMonoDark = brand === "github";

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title={item.label}
      aria-label={item.label}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={`${item.label} logo`}
        width={size}
        height={size}
        className={`icon-social ${isMonoDark ? "icon-dark-invert" : ""}`}
        style={{ width: size, height: size, objectFit: "contain" }}
        loading="lazy"
      />
    </span>
  );
}
