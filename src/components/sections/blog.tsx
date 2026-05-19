"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "motion/react";
import SectionWrapper from "../ui/section-wrapper";

import { SectionHeader } from "./section-header";

type Post = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    author?: string;
    tags?: string[];
  };
  wordCount: number;
};

function readTime(wordCount: number) {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <SectionWrapper id="blog" className="max-w-6xl mx-auto py-20 z-10 px-4">
      <SectionHeader id="blog" title="Blog" className="mb-12 md:mb-20" />

      {/* Featured post */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <Link href={`/blogs/${featured.slug}`} className="group block">
            <div className="relative border border-border/50 rounded-2xl p-8 md:p-12 overflow-hidden transition-colors hover:border-[hsl(20,100%,70%)]/30 bg-card/30 backdrop-blur-sm">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[hsl(20,100%,70%)]/10 to-transparent rounded-bl-full" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground font-sans">
                  <span className="text-[hsl(20,100%,70%)] font-semibold tracking-[0.15em] uppercase text-xs">
                    Featured
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {formatDate(featured.metadata.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {readTime(featured.wordCount)} min read
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold leading-[1.15] mb-4 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                  {featured.metadata.title}
                </h3>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-sans">
                  {featured.metadata.summary}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {featured.metadata.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-[hsl(20,100%,70%)]/20 text-[hsl(20,100%,70%)] bg-[hsl(20,100%,70%)]/5 rounded-full px-3 py-0.5 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-[hsl(20,100%,70%)] transition-colors font-sans">
                    Read article
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Divider */}
      {rest.length > 0 && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12 origin-left"
        />
      )}

      {/* Post grid for rest of the posts */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/blogs/${post.slug}`} className="group block h-full">
                <div className="h-full border border-border/50 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-[hsl(20,100%,70%)]/30 hover:bg-card/40 bg-card/20 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-3 h-3" />
                      {formatDate(post.metadata.publishedAt)}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {readTime(post.wordCount)} min read
                    </span>
                  </div>

                  <h4 className="font-display text-lg md:text-xl font-semibold leading-tight mb-3 group-hover:text-[hsl(20,100%,70%)] transition-colors duration-300">
                    {post.metadata.title}
                  </h4>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2 font-sans">
                    {post.metadata.summary}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-1.5 flex-wrap">
                      {post.metadata.tags?.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-border/50 text-muted-foreground text-[10px] rounded-full px-2 py-0 bg-transparent"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(20,100%,70%)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
