import React from "react";

interface TechIconProps {
  name: string;
  logo?: string;
  className?: string;
  size?: number;
}

const MONO_DARK_LOGOS = new Set([
  "nextjs",
  "next.js",
  "express",
  "express.js",
  "vercel",
  "github",
]);

export function TechIcon({
  name,
  logo,
  className = "",
  size = 18,
}: TechIconProps) {
  if (!logo) {
    return null;
  }

  const isMonoDark =
    MONO_DARK_LOGOS.has(name.toLowerCase()) ||
    logo.includes("nextjs") ||
    logo.includes("express") ||
    logo.includes("vercel") ||
    logo.includes("github");

  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      title={name}
      aria-label={name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${name} icon`}
        width={size}
        height={size}
        className={`icon-tech ${isMonoDark ? "icon-dark-invert" : ""}`}
        style={{ width: size, height: size, objectFit: "contain" }}
        loading="lazy"
      />
    </span>
  );
}
