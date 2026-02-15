import React from "react";
import { Calendar, ArrowRight, Clock, TrendingUp } from "lucide-react";

interface BlogPost {
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

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Investment Opportunities in New Cairo",
    excerpt:
      "Discover the most promising real estate investment opportunities in New Cairo's thriving compounds and developments.",
    author: "Ahmed Hassan",
    authorImage: "https://i.pravatar.cc/150?img=12",
    date: "Feb 10, 2026",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    category: "Investment",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Buying Your First Property",
    excerpt:
      "Everything you need to know before making your first real estate purchase in Egypt's competitive market.",
    author: "Sara Mohamed",
    authorImage: "https://i.pravatar.cc/150?img=45",
    date: "Feb 8, 2026",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    category: "Guides",
  },
  {
    id: 3,
    title: "Smart Home Features That Increase Property Value",
    excerpt:
      "Learn how modern technology and smart home integrations can boost your property's market value.",
    author: "Omar Khalil",
    authorImage: "https://i.pravatar.cc/150?img=33",
    date: "Feb 5, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    category: "Technology",
  },
  {
    id: 4,
    title: "Market Trends: What's Hot in Egyptian Real Estate",
    excerpt:
      "An in-depth analysis of current market trends and what they mean for buyers and investors in 2026.",
    author: "Mona Ali",
    authorImage: "https://i.pravatar.cc/150?img=47",
    date: "Feb 3, 2026",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    category: "Market Analysis",
  },
  {
    id: 5,
    title: "Financing Options: Getting the Best Mortgage Deal",
    excerpt:
      "Navigate the world of real estate financing with our comprehensive guide to securing the best rates.",
    author: "Khaled Adel",
    authorImage: "https://i.pravatar.cc/150?img=15",
    date: "Jan 30, 2026",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=800&h=600&fit=crop",
    category: "Finance",
  },
  {
    id: 6,
    title: "Sustainable Living: Eco-Friendly Compounds in Egypt",
    excerpt:
      "Explore how green developments are shaping the future of residential communities across Egypt.",
    author: "Laila Farouk",
    authorImage: "https://i.pravatar.cc/150?img=38",
    date: "Jan 28, 2026",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    category: "Lifestyle",
  },
];

const LatestBlogs = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-[var(--color-secondary)]" />
              <span
                className="text-sm font-bold uppercase tracking-wider"
                style={{ color: "var(--color-secondary)" }}
              >
                Latest Insights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-3">
              From Our Blog
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-xl">
              Expert insights and market trends to guide your real estate
              journey
            </p>
          </div>

          <button
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:gap-4 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
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

                  <button
                    className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-secondary)",
                    }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-12 md:hidden">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-white"
            style={{ backgroundColor: "var(--color-secondary)" }}
          >
            View All Posts
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
