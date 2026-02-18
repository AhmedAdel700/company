"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Link2,
} from "lucide-react";
import BlogCard from "@/components/LatestBlogs/BlogCard";
import { blogPosts } from "@/lib/data";
import Image, { StaticImageData } from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BlogPost {
  id: string | number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime?: string;
  image?: string | StaticImageData;
  content?: string;
  tags?: string[];
}

// ─── Share Buttons ────────────────────────────────────────────────────────────
function ShareButtons({ title }: { title: string }) {
  const copyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="rounded-2xl border border-(--border-color) p-5">
      <p className="text-xs font-extrabold uppercase tracking-widest text-(--color-text-secondary) mb-3 flex items-center gap-2">
        <Share2 className="w-3.5 h-3.5 text-(--color-secondary)" />
        Share Article
      </p>
      <div className="flex flex-col gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-bold text-(--color-text-primary) border border-(--border-color) hover:border-(--color-secondary) hover:text-(--color-secondary) transition-all"
        >
          <Facebook className="w-4 h-4" />
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-bold text-(--color-text-primary) border border-(--border-color) hover:border-(--color-secondary) hover:text-(--color-secondary) transition-all"
        >
          <Twitter className="w-4 h-4" />
          Twitter / X
        </a>
        <button
          onClick={copyLink}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-bold text-(--color-text-primary) border border-(--border-color) hover:border-(--color-secondary) hover:text-(--color-secondary) transition-all"
        >
          <Link2 className="w-4 h-4" />
          Copy Link
        </button>
      </div>
    </div>
  );
}

// ─── Author Card ──────────────────────────────────────────────────────────────
function AuthorCard({ author }: { author: string }) {
  return (
    <div className="rounded-2xl border border-(--border-color) p-5 flex items-center gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-lg"
        style={{ backgroundColor: "var(--color-secondary)" }}
      >
        {author.charAt(0).toUpperCase()}
      </div>
      <div>
        <p className="font-extrabold text-(--color-text-primary) text-sm">
          {author}
        </p>
        <p className="text-xs text-(--color-text-secondary)">
          Real Estate Expert
        </p>
      </div>
    </div>
  );
}

// ─── Rendered Content ─────────────────────────────────────────────────────────
// Renders a simple markdown-like plain text with paragraph & heading detection.
function ArticleContent({ content }: { content: string }) {
  const lines = content.split("\n").filter((l) => l.trim() !== "");

  return (
    <div className="prose-custom space-y-5">
      {lines.map((line, i) => {
        if (line.startsWith("## ")) {
          const text = line.slice(3);
          const id = text.toLowerCase().replace(/\s+/g, "-");
          return (
            <h2
              key={i}
              id={id}
              className="text-2xl font-extrabold text-(--color-text-primary) mt-10 mb-3 flex items-center gap-2"
            >
              <span
                className="w-1 h-6 rounded-full flex-shrink-0 inline-block"
                style={{ backgroundColor: "var(--color-secondary)" }}
              />
              {text}
            </h2>
          );
        }
        if (line.startsWith("### ")) {
          const text = line.slice(4);
          const id = text.toLowerCase().replace(/\s+/g, "-");
          return (
            <h3
              key={i}
              id={id}
              className="text-lg font-extrabold text-(--color-text-primary) mt-7 mb-2"
            >
              {text}
            </h3>
          );
        }
        if (line.startsWith("- ")) {
          return (
            <div key={i} className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                style={{ backgroundColor: "var(--color-secondary)" }}
              />
              <p className="text-(--color-text-secondary) leading-relaxed text-base">
                {line.slice(2)}
              </p>
            </div>
          );
        }
        if (line.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="border-l-4 pl-5 py-2 italic text-(--color-text-secondary) text-base"
              style={{ borderColor: "var(--color-secondary)" }}
            >
              {line.slice(2)}
            </blockquote>
          );
        }
        return (
          <p
            key={i}
            className="text-(--color-text-secondary) leading-relaxed text-base"
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function BlogDetailPage({ post }: { post: BlogPost }) {
  const router = useRouter();

  // Related posts: same category, excluding current
  const related = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const defaultContent = `## Introduction

${post.excerpt}

## Market Overview

Egypt's real estate sector continues to demonstrate remarkable resilience and growth. With increasing demand from both local buyers and international investors, the market presents compelling opportunities across various segments — from affordable housing to ultra-luxury compounds.

### Key Drivers of Growth

- Strong population growth driving consistent housing demand
- Government infrastructure investments reshaping accessibility
- Increasing purchasing power among Egypt's growing middle class
- Foreign investment interest bolstered by competitive pricing

## Investment Considerations

Understanding where and how to invest is critical to maximizing returns. Location, developer reputation, payment plans, and delivery timelines all play pivotal roles in shaping the value of a real estate investment.

> Location remains the single most important factor in Egyptian real estate — proximity to new infrastructure corridors can dramatically impact long-term appreciation.

### What to Look For

- Developer track record and financial stability
- Flexible payment plans with reasonable down payments
- Proximity to New Administrative Capital, New Cairo, or coastal hubs
- Compound amenities that align with target tenant or buyer profiles

## Conclusion

Whether you are a first-time buyer or a seasoned investor, Egypt's property market offers a rare combination of affordability, growth potential, and lifestyle appeal. Staying informed and working with trusted advisors is the key to making the most of the opportunities available today.`;

  const content = post.content ?? defaultContent;
  const tags = post.tags ?? [
    post.category,
    "Egypt Real Estate",
    "Investment",
    "Property",
  ];

  return (
    <div
      className="min-h-screen pt-18 sm:pt-20"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* ── Top bar ── */}
      <div className="border-b border-(--border-color)">
        <div className="container mx-auto px-4 max-w-7xl py-4 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-semibold text-(--color-text-secondary) hover:text-(--color-secondary) transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </button>
        </div>
      </div>

      {/* ── Hero image ── */}
      {post.image && (
        <div className="w-full h-[50vh] min-h-75 max-h-120 overflow-hidden relative">
          <Image
            fill
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>
      )}

      {/* ── Main layout ── */}
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ── Article ── */}
          <div className="lg:col-span-2">
            {/* Meta */}
            <div className="mb-6">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full text-white mb-4"
                style={{ backgroundColor: "var(--color-secondary)" }}
              >
                <Tag className="w-3 h-3" />
                {post.category}
              </span>

              <h1 className="text-3xl md:text-4xl font-black text-(--color-text-primary) leading-tight mb-5">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-5 text-sm text-(--color-text-secondary) font-semibold pb-6 border-b border-(--border-color)">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-(--color-secondary)" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-(--color-secondary)" />
                  {post.date}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-(--color-secondary)" />
                    {post.readTime} read
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <ArticleContent content={content} />

            {/* Tags */}
            {tags.length > 0 && (
              <div className="mt-10 pt-8 border-t border-(--border-color)">
                <p className="text-xs font-extrabold uppercase tracking-widest text-(--color-text-secondary) mb-3">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-bold border border-(--border-color) text-(--color-text-secondary) hover:border-(--color-secondary) hover:text-(--color-secondary) cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author bio */}
            <div className="mt-10 pt-8 border-t border-(--border-color)">
              <p className="text-xs font-extrabold uppercase tracking-widest text-(--color-text-secondary) mb-4">
                About the Author
              </p>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-(--border-color)">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-xl"
                  style={{ backgroundColor: "var(--color-secondary)" }}
                >
                  {post.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-extrabold text-(--color-text-primary)">
                    {post.author}
                  </p>
                  <p className="text-xs text-(--color-text-secondary) mt-0.5">
                    Senior Real Estate Analyst with over 10 years of experience
                    covering Egypt is property market. Specializes in investment
                    strategy, market trends, and compound evaluations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-1 space-y-6">
            {/* Sticky wrapper */}
            <div className="sticky top-24 space-y-5">
              <AuthorCard author={post.author} />
              <ShareButtons title={post.title} />
            </div>
          </div>
        </div>

        {/* ── Related Articles ── */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-(--border-color)">
            <div className="flex items-center gap-3 mb-8">
              <span
                className="w-1 h-7 rounded-full flex-shrink-0"
                style={{ backgroundColor: "var(--color-secondary)" }}
              />
              <h2 className="text-2xl font-extrabold text-(--color-text-primary)">
                Related Articles
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
