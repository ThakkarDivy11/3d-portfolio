"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

import BottomNavBar from "../ui/bottom-nav-bar";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const isHome = usePathname() === "/";
  return (
    <motion.header
      className={cn(
        styles.header,
        "transition-colors delay-100 duration-500 ease-in z-[1000]"
      )}
      style={{
        background: "transparent",
      }}
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        delay: loader ? 3.5 : 0,
        duration: 0.8,
      }}
    >
      {/* <div
        className="absolute inset-0 "
        style={{
          mask: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)",
        }}
      >
      </div> */}
      <div className={cn(styles.bar, "flex items-center w-full relative h-14")}>
        <Link href="/" className={cn(styles.logo, "flex items-center justify-center hover:no-underline")}>
          <Button variant={"link"} className="text-lg font-display tracking-tight text-foreground hover:no-underline">
            {config.author}
          </Button>
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <BottomNavBar stickyBottom={false} />
        </div>

        <div className="absolute right-0 flex items-center gap-2 md:gap-4 pr-3 md:pr-4">
          <FunnyThemeToggle className="w-5 h-5 md:w-6 md:h-6" />
          {isHome && process.env.NEXT_PUBLIC_WS_URL && <OnlineUsers />}
          {config.githubUsername && config.githubRepo && (
            <div className="hidden md:flex">
              <GitHubStarsButton
                username={config.githubUsername}
                repo={config.githubRepo}
              />
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
