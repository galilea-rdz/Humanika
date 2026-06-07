"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function CTAButton({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[6px] px-6 py-3 text-sm";
  const styles = {
    primary:
      "bg-[#00C2A0] text-white hover:bg-[#00a88a] shadow-sm hover:shadow-md active:scale-[0.98]",
    secondary:
      "border-2 border-[#1173E4] text-[#1173E4] hover:bg-[#D6E8FF] active:scale-[0.98]",
  };

  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
