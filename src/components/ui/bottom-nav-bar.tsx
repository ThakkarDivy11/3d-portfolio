"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Home,
  Code,
  Briefcase,
  LayoutGrid,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: LayoutGrid },
  { label: "Blog", href: "#blog", icon: BookOpen },
  { label: "Contact", href: "#contact", icon: MessageCircle },
];

const MOBILE_LABEL_WIDTH = 72;

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = true,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-card dark:bg-card border border-border dark:border-sidebar-border rounded-full flex items-center p-2 shadow-xl space-x-1 min-w-[320px] max-w-[95vw] h-[52px]",
        stickyBottom && "fixed inset-x-0 bottom-4 mx-auto z-50 w-fit",
        className,
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <Link href={item.href} key={item.label} onClick={() => setActiveIndex(idx)}>
            <motion.button
              whileTap={{ scale: 0.97 }}
              className={cn(
                "flex items-center gap-0 px-3 py-2 rounded-full transition-colors duration-200 relative h-10 min-w-[44px] min-h-[40px] max-h-[44px]",
                isActive
                  ? "bg-primary/10 dark:bg-primary/15 text-primary dark:text-primary gap-2"
                  : "bg-transparent text-muted-foreground dark:text-muted-foreground hover:bg-muted dark:hover:bg-muted",
                "focus:outline-none focus-visible:ring-0",
              )}
              aria-label={item.label}
              type="button"
            >
              <Icon
                size={22}
                strokeWidth={2}
                aria-hidden
                className="transition-colors duration-200"
              />

              <motion.div
                initial={false}
                animate={{
                  width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                  opacity: isActive ? 1 : 0,
                  marginLeft: isActive ? "8px" : "0px",
                }}
                transition={{
                  width: { type: "spring", stiffness: 350, damping: 32 },
                  opacity: { duration: 0.19 },
                  marginLeft: { duration: 0.19 },
                }}
                className={cn("overflow-hidden flex items-center max-w-[72px]")}
              >
                <span
                  className={cn(
                    "font-medium text-xs whitespace-nowrap select-none transition-opacity duration-200 overflow-hidden text-ellipsis text-[clamp(0.625rem,0.5263rem+0.5263vw,1rem)] leading-[1.9]",
                    isActive ? "text-primary dark:text-primary" : "opacity-0",
                  )}
                  title={item.label}
                >
                  {item.label}
                </span>
              </motion.div>
            </motion.button>
          </Link>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;
