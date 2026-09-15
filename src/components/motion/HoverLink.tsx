"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface HoverLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  showArrow?: boolean;
}

export function HoverLink({
  href,
  children,
  external = false,
  className = "",
  showArrow = false,
}: HoverLinkProps) {
  const content = (
    <span className={`inline-flex items-center gap-1 group font-mono text-xs transition-colors ${className}`}>
      <span className="link-underline">{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
