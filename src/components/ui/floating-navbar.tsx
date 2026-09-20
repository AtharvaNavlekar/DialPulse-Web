"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface FloatingNavProps {
  children: React.ReactNode;
  className?: string;
  dropdown?: React.ReactNode;
}

/**
 * Aceternity FloatingNav foundation for DialPulse.
 * Fixed in the viewport with no hide-on-scroll behavior.
 * Provides a sleek floating capsule for the navbar, with separate floating dropdown container.
 */
export const FloatingNav = ({
  children,
  className,
  dropdown,
}: FloatingNavProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4 md:px-6">
      <div className="w-full max-w-[1240px] relative pointer-events-auto">
        {/* Floating Navbar Pill */}
        <div
          className={cn(
            "w-full rounded-[22px] transition-[background-color,border-color,box-shadow] duration-200 ease-out",
            "backdrop-blur-xl border",
            // DialPulse Palette: #F8FAF8 (surface), #00695C (primary teal), #191C1B (text)
            scrolled
              ? "bg-[#F8FAF8]/95 border-slate-300/90 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(0,105,92,0.06)]"
              : "bg-[#F8FAF8]/90 border-slate-200/90 shadow-[0_10px_30px_-6px_rgba(15,23,42,0.08),0_1px_3px_rgba(0,0,0,0.04)]",
            className
          )}
        >
          {children}
        </div>

        {/* Floating Dropdown / Mobile Menu */}
        {dropdown}
      </div>
    </header>
  );
};

