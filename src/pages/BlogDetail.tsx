import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogData: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "content-strategies-tripled-engagement": {
    title: "10 Content Strategies That Tripled Our Client's Engagement in 90 Days",
    category: "Content Marketing",
    date: "Mar 25, 2026",
    readTime: "6 min read",
    content: [
      "In the fast-paced world of digital marketing, content remains king — but not just any content. Our team at Ecometra360 recently worked with a D2C beauty brand that was struggling with flat engagement rates despite posting consistently.",
      "The problem wasn't frequency — it was strategy. Here are the 10 tactics we implemented that resulted in a 3x increase in engagement within 90 days.",
      "1. Audience Persona Deep-Dive: We conducted thorough research into the brand's ideal customer avatar, mapping out their pain points, aspirations, and content consumption habits across platforms.",
      "2. Content Pillars Framework: We established 5 core content pillars — education, entertainment, inspiration, promotion, and community — and created a balanced mix across all channels.",
      "3. Reel-First Strategy: Short-form video content was prioritized. We created 4-5 reels per week featuring product demos, behind-the-scenes, and user-generated content that drove 60% of total engagement.",
      "4. Carousel Posts for Education: In-depth carousel posts covering skincare routines, ingredient breakdowns, and myth-busting became the brand's highest-saved content type.",
      "5. Story-Driven Engagement: Daily stories with polls, quizzes, and Q&A sessions created a two-way conversation with followers, boosting story views by 200%.",
      "6. Hashtag Strategy Overhaul: We moved from generic hashtags to a mix of niche, branded, and trending hashtags — increasing discoverability by 45%.",
      "7. Collaboration Content: Partnering with micro-influencers (5K-50K followers) for authentic content pieces that resonated with the target demographic.",
      "8. User-Generated Content Campaigns: Monthly UGC contests encouraged customers to share their experiences, providing social proof and fresh content simultaneously.",
      "9. Analytics-Driven Optimization: Weekly performance reviews allowed us to double down on what worked and quickly pivot from underperforming content types.",
      "10. Consistent Brand Voice: We developed a distinct, relatable brand voice that made every piece of content instantly recognizable — building trust and loyalty over time.",
      "The results speak for themselves: engagement rate jumped from 1.2% to 3.8%, follower growth increased by 150%, and most importantly, website traffic from social channels grew by 280%.",
    ],
  },
  "amazon-a-plus-content-guide": {
    title: "Amazon A+ Content: The Ultimate Guide to Higher Conversions",
    category: "Marketplace",
    date: "Mar 18, 2026",
    readTime: "8 min read",
    content: [
      "If you're selling on Amazon without A+ Content, you're leaving money on the table. Studies show that A+ Content can increase conversion rates by 3-10% and reduce return rates significantly.",
      "A+ Content (formerly Enhanced Brand Content) allows brand-registered sellers to replace their standard text descriptions with rich media — images, comparison charts, brand stories, and more.",
      "Why A+ Content Matters: Standard product descriptions are plain text with limited formatting. A+ Content lets you showcase your product's unique value proposition through visually compelling modules.",
      "Module Selection Strategy: Amazon offers multiple module types. Our recommendation is to use a hero image module at the top, followed by feature highlights, a comparison chart, and a brand story module.",
      "Image Optimization: Every image should be high-resolution (minimum 970x600 pixels), lifestyle-oriented, and include text overlays that highlight key benefits — not just features.",
      "Keyword Integration: While A+ Content isn't directly indexed for search, the improved conversion rate sends positive signals to Amazon's algorithm, indirectly boosting your organic ranking.",
      "Mobile-First Design: Over 70% of Amazon shoppers browse on mobile. Design your A+ Content with mobile viewing in mind — larger fonts, vertical layouts, and concise copy.",
      "A/B Testing: Use Amazon's Manage Your Experiments tool to test different A+ Content versions. We've seen winning variations improve conversion by an additional 5-8%.",
      "Brand Story Integration: The Brand Story module appears above your A+ Content and links to your brand's other products. This is prime real estate for cross-selling and building brand loyalty.",
      "At Ecometra360, we've optimized A+ Content for 200+ ASINs across categories from beauty to electronics. Our average client sees a 7% conversion lift within the first 30 days.",
    ],
  },
  "meta-ads-2026-strategy": {
    title: "Meta Ads in 2026: What Changed and How to Adapt Your Strategy",
    category: "Paid Ads",
    date: "Mar 10, 2026",
    readTime: "7 min read",
    content: [
      "Meta's advertising platform has undergone significant changes in 2026, and marketers who haven't adapted are seeing diminishing returns. Here's what's different and how to stay ahead.",
      "AI-Powered Audiences: Advantage+ audiences have become the default. Instead of detailed interest targeting, Meta's AI now builds audiences based on your creative signals and conversion data.",
      "Creative is King: With less control over targeting, your ad creative is now the primary lever for performance. Invest in diverse creative formats — UGC, testimonials, product demos, and lifestyle content.",
      "The Rise of Reels Ads: Reels placements now account for 40% of Meta's ad inventory. Vertical video ads (9:16) with hook-first storytelling are outperforming traditional formats by 2-3x.",
      "Conversion API is Non-Negotiable: With browser-based tracking becoming less reliable, server-side tracking through Meta's Conversion API is essential for accurate attribution and optimization.",
      "Budget Optimization: Campaign Budget Optimization (CBO) combined with Advantage+ placements gives Meta's algorithm more room to find the best opportunities across the platform.",
      "Landing Page Experience: Meta now factors landing page load speed and experience into ad delivery. Pages that load in under 2 seconds see 30% lower CPAs compared to slower alternatives.",
      "At Ecometra360, we manage ₹5Cr+ monthly ad spend across Meta platforms. Our Performance Ads team stays ahead of every algorithm update to deliver consistent ROAS for our clients.",
    ],
  },
  "whatsapp-marketing-repeat-purchases": {
    title: "WhatsApp Marketing: How Brands Are Driving 40% Repeat Purchases",
    category: "Automation",
    date: "Feb 28, 2026",
    readTime: "5 min read",
    content: [
      "WhatsApp has over 500 million users in India alone, yet most brands treat it as an afterthought. The smart ones are using it as their most profitable marketing channel.",
      "Why WhatsApp Works: 98% open rates, 45% click-through rates, and the most personal communication channel available. When done right, WhatsApp marketing feels like a conversation, not a promotion.",
      "Broadcast Lists vs. Groups: Broadcast lists let you send personalized messages at scale without the chaos of group chats. Each recipient sees the message as a private conversation.",
      "Automated Flows: Set up post-purchase flows — order confirmation, shipping updates, delivery follow-up, and review requests. These touchpoints build trust and encourage repeat purchases.",
      "Catalogue Integration: WhatsApp Business catalogues let customers browse and order directly within the app. Combined with payment integration, it becomes a complete sales channel.",
      "Segmentation Strategy: Segment your audience by purchase history, engagement level, and preferences. Send targeted offers that feel relevant, not spammy.",
      "Re-engagement Campaigns: For dormant customers, a simple 'We miss you' message with an exclusive discount code can reactivate 15-20% of your inactive customer base.",
      "Our clients at Ecometra360 using WhatsApp automation see an average of 40% repeat purchase rate — compared to 15-20% through email alone.",
    ],
  },
  "seo-ecommerce-technical-audit": {
    title: "SEO for E-commerce: A Step-by-Step Technical Audit Checklist",
    category: "SEO",
    date: "Feb 20, 2026",
    readTime: "10 min read",
    content: [
      "Technical SEO is the foundation of any successful e-commerce website. Without it, even the best content and backlink strategies will underperform.",
      "Crawlability: Ensure search engines can access all important pages. Check your robots.txt, XML sitemap, and internal linking structure. Use tools like Screaming Frog for a comprehensive crawl analysis.",
      "Site Speed: Page load time directly impacts rankings and conversions. Compress images, minify CSS/JS, implement lazy loading, and consider a CDN for faster global delivery.",
      "Mobile Optimization: Google uses mobile-first indexing. Your mobile experience must be flawless — responsive design, touch-friendly navigation, and fast mobile load times are non-negotiable.",
      "Structured Data: Implement Product, Review, Breadcrumb, and FAQ schema markup. Rich snippets increase click-through rates by up to 30% in search results.",
      "Canonical Tags: E-commerce sites often have duplicate content issues from filters, sorting, and pagination. Proper canonical tags prevent dilution of your page authority.",
      "URL Structure: Clean, descriptive URLs with target keywords outperform parameter-heavy URLs. Implement a logical hierarchy: domain.com/category/subcategory/product.",
      "Internal Linking: Create a strategic internal linking structure that passes authority from high-performing pages to important product and category pages.",
      "Core Web Vitals: LCP, FID, and CLS metrics directly impact your rankings. Monitor these through Google Search Console and address any issues promptly.",
      "At Ecometra360, our SEO audits have helped e-commerce clients achieve an average 65% increase in organic traffic within 6 months.",
    ],
  },
  "brand-identity-framework": {
    title: "Building a Brand Identity from Scratch: The Ecometra360 Framework",
    category: "Branding",
    date: "Feb 12, 2026",
    readTime: "9 min read",
    content: [
      "A strong brand identity is the difference between a forgettable business and a market leader. At Ecometra360, we've helped 100+ startups build brands that resonate and endure.",
      "Discovery Phase: Before designing anything, we deep-dive into your market, competitors, target audience, and unique value proposition. This research forms the foundation of every brand decision.",
      "Brand Positioning: Define where you sit in the market. Are you the premium option? The affordable alternative? The innovative disruptor? Your positioning guides every subsequent choice.",
      "Visual Identity: Logo, color palette, typography, and imagery style — these elements must work together cohesively across every touchpoint, from your website to your packaging.",
      "Brand Voice: How does your brand speak? Formal or casual? Authoritative or friendly? Document your tone, vocabulary preferences, and communication style in a comprehensive brand guide.",
      "Brand Story: Every great brand has a compelling origin story. Craft yours in a way that connects emotionally with your audience and communicates your 'why' authentically.",
      "Consistency Framework: Create brand guidelines that ensure consistency across teams, agencies, and platforms. Include dos and don'ts, template systems, and approval workflows.",
      "Digital Application: Apply your brand identity across your website, social media, email marketing, and advertising. Ensure every digital touchpoint reinforces your brand promise.",
      "Evolution Strategy: Great brands evolve without losing their essence. Plan for periodic brand refreshes that keep you current while maintaining the equity you've built.",
      "Our Brand Identity Framework has been refined through 100+ projects. The result? Brands that don't just look good — they build lasting connections with their audience.",
    ],
  },
};

const blogSlugs = Object.keys(blogData);

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogData[slug] : null;

  if (!blog) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center container">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/#blog"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-28 pb-20">
        <div className="container max-w-3xl">
          <Link to="/#blog" className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" /> {blog.date}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" /> {blog.readTime}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            {blog.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            {blog.content.map((paragraph, i) => (
              <p key={i} className="text-foreground/80 leading-relaxed mb-5 text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">Ready to grow your brand?</h3>
            <Button asChild className="bg-accent-gradient text-accent-foreground hover:opacity-90">
              <a href="/#contact">Get a Free Consultation</a>
            </Button>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export { blogSlugs };
export default BlogDetail;
