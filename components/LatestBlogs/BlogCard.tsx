import React from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "@/i18n/navigation";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article
      className="group rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
      style={{
        backgroundColor: "var(--color-background-alt)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-sm text-[var(--color-text-secondary)]">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 line-clamp-2 group-hover:text-[var(--color-secondary)] transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-[var(--color-text-secondary)] mb-5 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Author */}
        <div
          className="flex items-center justify-between pt-4 border-t"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="flex items-center gap-3">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">
              {post.author}
            </span>
          </div>

          <Link
            href={`/blogs/${post.title}`}
            className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-secondary)",
            }}
          >
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
