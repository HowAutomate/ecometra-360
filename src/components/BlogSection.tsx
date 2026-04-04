import { motion } from "framer-motion";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const blogs = [
  {
    title: "10 Content Strategies That Tripled Our Client's Engagement in 90 Days",
    excerpt: "Discover the exact playbook we used to skyrocket organic reach for a D2C beauty brand — from reels to carousels and everything in between.",
    category: "Content Marketing",
    date: "Mar 25, 2026",
    readTime: "6 min read",
    slug: "content-strategies-tripled-engagement",
  },
  {
    title: "Amazon A+ Content: The Ultimate Guide to Higher Conversions",
    excerpt: "A+ content can boost your conversion rate by 3–10%. Here's how to write, design, and optimize listings that outsell your competition.",
    category: "Marketplace",
    date: "Mar 18, 2026",
    readTime: "8 min read",
    slug: "amazon-a-plus-content-guide",
  },
  {
    title: "Meta Ads in 2026: What Changed and How to Adapt Your Strategy",
    excerpt: "Algorithm shifts, AI audiences, Advantage+ — here's what's working right now in Facebook and Instagram advertising.",
    category: "Paid Ads",
    date: "Mar 10, 2026",
    readTime: "7 min read",
    slug: "meta-ads-2026-strategy",
  },
  {
    title: "WhatsApp Marketing: How Brands Are Driving 40% Repeat Purchases",
    excerpt: "From broadcast lists to automated flows, WhatsApp is the most under-utilized channel in India. Learn how to use it like the top 1% of brands.",
    category: "Automation",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    slug: "whatsapp-marketing-repeat-purchases",
  },
  {
    title: "SEO for E-commerce: A Step-by-Step Technical Audit Checklist",
    excerpt: "Crawl budget, canonical tags, structured data — our complete checklist covers every technical SEO element your store needs to rank higher.",
    category: "SEO",
    date: "Feb 20, 2026",
    readTime: "10 min read",
    slug: "seo-ecommerce-technical-audit",
  },
  {
    title: "Building a Brand Identity from Scratch: The Ecometra360 Framework",
    excerpt: "Logo, voice, palette, positioning — we walk you through our proven brand-building framework used by 100+ startups.",
    category: "Branding",
    date: "Feb 12, 2026",
    readTime: "9 min read",
    slug: "brand-identity-framework",
  },
];

const BlogSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Insights</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-muted-foreground text-lg">
              Actionable strategies, case studies, and industry trends from our marketing experts.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-secondary/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="min-w-[320px] sm:min-w-[360px] snap-start"
            >
              <Link
                to={`/blog/${blog.slug}`}
                className="group block bg-card rounded-xl overflow-hidden shadow-card border border-border hover:shadow-elevated transition-all duration-300 h-full"
              >
                <div className="h-2 bg-accent-gradient" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{blog.date}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-secondary group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;