"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface FloatingNavProps {
  children: React.ReactNode;
  className?: string;
  dropdown?: React.ReactNode;
  isMenuOpen?: boolean;
}

/**
 * Aceternity FloatingNav foundation for DialPulse.
 * Fixed in the viewport with no hide-on-scroll behavior.
 * Provides a sleek floating capsule for the navbar, coordinating surface elevation with attached dropdowns.
 */
export const FloatingNav = ({
  children,
  className,
  dropdown,
  isMenuOpen = false,
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
            "w-full rounded-2xl lg:rounded-[20px] transition-[background-color,border-color,box-shadow] duration-200 ease-out",
            "backdrop-blur-xl border",
            // DialPulse Palette: White / #F8FAF9 surface with subtle restrained shadows
            scrolled || isMenuOpen
              ? "bg-white/95 border-slate-200/90 shadow-[0_12px_32px_-6px_rgba(15,23,42,0.08),0_2px_8px_rgba(0,0,0,0.03)]"
              : "bg-white/85 border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.05),0_1px_2px_rgba(0,0,0,0.02)]",
            className
          )}
        >
          {children}
        </div>

        {/* Unified Floating Dropdown / Mobile Menu */}
        {dropdown}
      </div>
    </header>
  );
};

