import BlogDetailPage from "./BlogDetails";
import blogImage from '@/app/images/blog.png'


// ─── Static Blog Post Data ─────────────────────────────────────────────────────
const post = {
  id: "blog-001",
  title: "Egypt's Real Estate Market: Trends & Investment Opportunities",
  excerpt:
    "Explore the latest insights on Egypt's booming real estate sector, key investment trends, and what investors should know to maximize returns.",
  category: "Real Estate",
  author: "Ahmed Adel",
  date: "Feb 18, 2026",
  readTime: "8 min",
  image: blogImage,
  content: `## Introduction

Egypt's real estate market has been witnessing remarkable growth in recent years. Both domestic and international investors are showing strong interest in premium residential and commercial projects.

## Market Overview

The real estate sector in Egypt continues to demonstrate resilience and expansion opportunities. Demand is rising across multiple segments, including affordable housing, luxury compounds, and commercial spaces.

### Key Drivers

- Government infrastructure projects enhancing accessibility
- Rising population and urbanization rates
- Increasing purchasing power and investment confidence
- Strong interest from foreign investors

## Investment Considerations

Investors should focus on location, developer reputation, and long-term growth potential. Choosing the right compound or city is key to maximizing ROI.

> Real estate location remains the most critical factor in determining investment success.

### What to Look For

- Established developers with track records
- Flexible payment plans and installment options
- Prime locations near Cairo, New Administrative Capital, or coastal cities
- Amenities and lifestyle offerings aligned with target buyers

## Conclusion

Egypt's real estate sector offers investors a blend of growth potential and lifestyle opportunities. Staying informed and strategic ensures maximum returns for both new and experienced investors.
`,
  tags: ["Egypt Real Estate", "Investment", "Property", "Market Trends"],
};

// ─── Related Blog Posts for Sidebar/Related Section ──────────────────────────
export const blogPosts = [
  {
    id: "blog-002",
    title: "Investing in New Cairo: Top Compounds for 2026",
    excerpt:
      "Discover the best investment compounds in New Cairo for 2026, highlighting ROI and amenities.",
    category: "Real Estate",
    author: "Sara Hossam",
    date: "Feb 10, 2026",
    readTime: "6 min",
    image: blogImage,
  },
  {
    id: "blog-003",
    title: "Luxury Living in Egypt: Top 10 Compounds",
    excerpt:
      "A curated list of Egypt's top 10 luxury compounds offering premium amenities and lifestyle.",
    category: "Real Estate",
    author: "Mohamed Salah",
    date: "Jan 28, 2026",
    readTime: "7 min",
    image: blogImage,
  },
  {
    id: "blog-004",
    title: "Affordable Housing in Egypt: Opportunities for Investors",
    excerpt:
      "Exploring affordable housing trends in Egypt and why it’s an attractive sector for new investors.",
    category: "Real Estate",
    author: "Nour El-Din",
    date: "Feb 5, 2026",
    readTime: "5 min",
    image: blogImage,
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function page() {
  return <BlogDetailPage post={post} />;
}
