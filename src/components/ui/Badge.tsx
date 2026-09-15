import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "accent" | "academic" | "outline" | "personal";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#ECECE7] dark:bg-[#14161A] text-[#17191C] dark:text-[#F5F5F3] border-[#D9D9D4] dark:border-[#1C1F26]",
    brand: "bg-[#DCE8F3] dark:bg-[#1E293B] text-[#174A7E] dark:text-[#60A5FA] border-[#BFC2BE] dark:border-[#383D45]",
    accent: "bg-[#F3DFD3] dark:bg-[#2A1D15] text-[#C56A3A] dark:text-[#FB923C] border-[#D9D9D4] dark:border-[#1C1F26]",
    academic: "bg-[#FBFAF7] dark:bg-[#0C0D0F] text-[#565B61] dark:text-[#9BA1A6] border-[#BFC2BE] dark:border-[#383D45] border-dashed",
    outline: "bg-transparent text-[#565B61] dark:text-[#9BA1A6] border-[#D9D9D4] dark:border-[#1C1F26]",
    personal: "bg-[#ECECE7] dark:bg-[#14161A] text-[#565B61] dark:text-[#9BA1A6] border-[#D9D9D4] dark:border-[#1C1F26]",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-[0.70rem] font-mono tracking-wider uppercase border rounded-[4px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
