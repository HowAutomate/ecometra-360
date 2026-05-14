import { useEffect } from "react";
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
  "influencer-marketing-roi": {
    title: "Influencer Marketing ROI: How to Measure What Actually Matters",
    category: "Influencer",
    date: "Apr 02, 2026",
    readTime: "7 min read",
    content: [
      "Influencer marketing in India is now a ₹3,500 crore industry, but most brands still measure success with the wrong metrics. Likes and reach don't pay the bills — revenue does.",
      "Move Beyond Vanity Metrics: Followers, likes, and impressions tell you almost nothing about business impact. Start tracking attributable revenue, cost per acquisition, and incremental lift instead.",
      "Unique Tracking Links: Give every creator a UTM-tagged link or a unique discount code. This is the single highest-leverage change you can make to understand which partnerships actually convert.",
      "Cost Per Engaged Follower: Divide your total spend by the number of meaningful interactions (saves, shares, comments, story replies). This metric reveals quality far better than reach.",
      "Tier Strategy: Nano (1K-10K) and micro (10K-100K) creators consistently outperform mega-influencers on engagement rate and conversion — at a fraction of the cost.",
      "Content Repurposing: Negotiate usage rights upfront. Influencer content used as paid ads (whitelisting) often outperforms brand-produced creative by 2-3x on Meta and YouTube.",
      "Long-Term Partnerships: One-off posts rarely move the needle. 3-6 month ambassador programs build trust with the creator's audience and compound returns over time.",
      "Brand Lift Studies: For larger campaigns, run pre/post brand lift surveys to measure changes in awareness, consideration, and purchase intent — the upper-funnel impact ads dashboards miss.",
      "At Ecometra360 we've managed 500+ creator partnerships. The brands that win treat influencer marketing as a performance channel, not a PR exercise.",
    ],
  },
  "quick-commerce-india-d2c": {
    title: "Quick Commerce in India: How D2C Brands Are Winning on Blinkit & Zepto",
    category: "Marketplace",
    date: "Apr 09, 2026",
    readTime: "6 min read",
    content: [
      "Quick commerce platforms like Blinkit, Zepto, and Instamart now drive over 15% of online grocery and impulse-purchase volume in metro India. For D2C brands, ignoring them is no longer an option.",
      "Why Quick Commerce Matters: 10-minute delivery has fundamentally changed buying behavior for snacks, beauty, personal care, and home essentials. Shoppers no longer plan — they crave and convert.",
      "SKU Selection: Not every product belongs on quick commerce. Focus on impulse-friendly, single-unit, lower-priced SKUs (₹99-₹499) that fit the platform's psychology.",
      "Pricing Strategy: Quick commerce shoppers are less price-sensitive than Amazon buyers but expect parity with your D2C site. Avoid deep discounting that erodes brand equity.",
      "Listing Optimization: Pack shots, ingredient callouts, and benefit-led titles drive conversion in a feed-based interface where users decide in under 3 seconds.",
      "In-App Advertising: Sponsored placements and category banners on Blinkit and Zepto now offer ROAS comparable to Meta — often 3-5x for well-optimized brands.",
      "Inventory Discipline: Stockouts kill ranking. Maintain 30+ days of cover at each dark store cluster, especially during festive and weekend demand spikes.",
      "Our quick commerce clients at Ecometra360 are seeing 25-40% month-on-month growth on these platforms — often outpacing their Amazon and Flipkart channels combined.",
    ],
  },
  "email-marketing-flows-revenue": {
    title: "Email Marketing Is Not Dead: 7 Flows That Generate 30% of Our Clients' Revenue",
    category: "Email",
    date: "Apr 16, 2026",
    readTime: "8 min read",
    content: [
      "Every quarter someone declares email marketing dead. Every quarter our clients generate 25-35% of their total revenue from email — most of it from automated flows set up once and optimized over time.",
      "1. Welcome Series: A 3-5 email sequence that introduces your brand, story, and bestsellers to new subscribers. Typically delivers the highest open rate of any flow you'll ever send.",
      "2. Abandoned Cart: Recover 10-15% of lost revenue with a 3-email sequence sent at 1 hour, 24 hours, and 72 hours after abandonment. Add a small incentive only on the final email.",
      "3. Browse Abandonment: For shoppers who viewed products but didn't add to cart. Lower urgency than abandoned cart, but still recovers 3-5% of would-be lost sales.",
      "4. Post-Purchase: Order confirmation, shipping updates, delivery follow-up, and a how-to-use email. Builds trust, reduces support tickets, and primes the next purchase.",
      "5. Replenishment: For consumables, time the next email to land just before a typical reorder window. Drives 20-30% repeat purchase rates with almost no effort.",
      "6. Win-Back: Customers who haven't purchased in 60-90 days get a thoughtful re-engagement series. Reactivating dormant buyers is 5-10x cheaper than acquiring new ones.",
      "7. VIP / Loyalty: Identify your top 10% of customers by lifetime value and treat them differently — early access, exclusive bundles, personal notes. They'll repay you many times over.",
      "Segmentation Beats Volume: Sending the right email to 10,000 segmented subscribers will always outperform blasting 100,000 a generic newsletter. Engagement signals also protect your inbox placement.",
      "At Ecometra360 we set up these 7 flows for every retainer client in their first 30 days. The compounding revenue impact is the closest thing to free money in marketing.",
    ],
  },
  "generative-ai-marketing-tools": {
    title: "Generative AI for Marketers: Tools We Actually Use Every Day at Ecometra360",
    category: "AI & Tools",
    date: "Apr 23, 2026",
    readTime: "9 min read",
    content: [
      "There are now thousands of AI tools for marketers. Most are noise. Here's the actual stack our team uses every day to ship work 3x faster without compromising on quality.",
      "Content Ideation: We use large language models to brainstorm hooks, headlines, and angle variations — but never to write final copy. The first draft is AI; the voice and edit are always human.",
      "SEO Briefs: AI dramatically accelerates competitive analysis, keyword clustering, and outline generation. What used to take a strategist 4 hours now takes 45 minutes.",
      "Ad Creative Variations: For paid social, generative image tools let us test 20-30 visual concepts per week instead of 3-4. The winning creatives still come from human judgment, but we get there faster.",
      "Video Editing: AI-powered editors handle rough cuts, captioning, and aspect-ratio reframing automatically. Editors then focus on pacing, music, and storytelling — the work that actually matters.",
      "Customer Support Drafts: AI suggests replies to repetitive queries, which agents review and personalize. Response time drops by 60% with no loss of warmth.",
      "Reporting & Insights: Instead of static weekly decks, AI summarizes campaign performance and surfaces anomalies in plain English — letting strategists spend time on action, not analysis.",
      "What AI Still Can't Do: Original strategy, brand voice, taste, and trust. The agencies winning right now aren't replacing humans with AI — they're amplifying their best people with it.",
      "Our internal rule at Ecometra360: AI handles the first 70% of any task. The final 30% — judgment, polish, and accountability — stays human. That's the only way to scale quality.",
    ],
  },

  "influencer-marketing-roi": {
    title: "Measuring Influencer Marketing ROI: A Data-Driven Framework",
    category: "Influencer Marketing",
    date: "Jan 30, 2026",
    readTime: "7 min read",
    excerpt: "Most brands guess at influencer ROI. Here is a data-driven framework for measuring real returns — from reach to revenue.",
    content: [
      "Influencer marketing in India is projected to hit Rs 3,375 crore by 2026 — yet most brands still measure success by follower count and likes.",
      "Why Vanity Metrics Fail: Reach and impressions do not tell you how many bought, how much revenue was generated, or whether the spend was justified.",
      "The Correct ROI Formula: Influencer ROI = (Revenue Generated - Campaign Cost) / Campaign Cost x 100. Use tracked UTM links and unique discount codes per influencer.",
      "Tiering Your Influencer Mix: Micro-influencers (10K-100K) deliver the best engagement-to-cost ratio. For D2C brands, a 70% micro and 30% macro mix typically delivers the best blended ROI.",
      "Attribution Models: Use multi-touch attribution models and compare CAC from influencer channels on a 30-day and 90-day window.",
      "At Ecometra360, we build influencer strategies with full attribution tracking built in from day one.",
    ],
  },
  "quick-commerce-india-d2c": {
    title: "Quick Commerce and D2C in India: What Brands Need to Know in 2026",
    category: "E-commerce",
    date: "Jan 22, 2026",
    readTime: "8 min read",
    excerpt: "Blinkit, Zepto, Swiggy Instamart — quick commerce is reshaping D2C in India. Here is how brands should adapt their strategy.",
    content: [
      "Quick commerce — delivering products in 10-30 minutes — has moved from niche to mainstream in India metro cities. Blinkit, Zepto, Swiggy Instamart, and BigBasket Now collectively process millions of orders daily.",
      "Why Q-Commerce Changes D2C Strategy: When a customer buys your product on Blinkit, you get no customer data, limited brand visibility, and razor-thin margins after platform fees.",
      "The Hybrid Approach: Run both channels simultaneously. Q-commerce for trial and repeat purchases. Owned D2C website for hero products, bundles, and high-margin SKUs.",
      "Listing Optimisation: Use product title with primary keywords, high-quality hero images, competitive pricing, and maintain high availability scores.",
      "Data Strategy: Include QR codes on packaging linking to your website. Create loyalty programmes that reward customers regardless of purchase channel.",
      "At Ecometra360, we help D2C brands build integrated strategies that capture q-commerce volume while protecting D2C margins.",
    ],
  },
  "email-marketing-flows-revenue": {
    title: "Email Marketing Flows That Drive Revenue: A Complete Automation Guide",
    category: "Email Marketing",
    date: "Jan 15, 2026",
    readTime: "9 min read",
    excerpt: "Email delivers $36 for every $1 spent — but only with the right automated flows. Here are the 6 flows every e-commerce brand needs.",
    content: [
      "Email marketing delivers an average ROI of $36 for every $1 spent — higher than any other digital channel.",
      "Flow 1 — Welcome Series (Days 1, 3, 7): The most important flow you will ever build. Email 1: brand story. Email 2: social proof. Email 3: best-seller showcase and first-purchase offer.",
      "Flow 2 — Abandoned Cart (1 hour, 24 hours, 72 hours): 70% of e-commerce shopping carts are abandoned. A three-email sequence recovers 5-15% of those orders.",
      "Flow 3 — Post-Purchase (Day 1, Day 4, Day 14): Order confirmation, usage tips, then review request and cross-sell. Post-purchase flows increase repeat purchase rate by 20-30%.",
      "Flow 4 — Win-Back (60 days, 90 days): A win-back sequence can reactivate 10-15% of your lapsed customer base.",
      "Flow 5 — VIP Loyalty: Identify top 10-20% of customers by lifetime value. Send early access, exclusive bundles, and personalised thank-you emails.",
      "At Ecometra360, we set up and optimise email automation for D2C brands end-to-end. Our clients average 25-40% contribution from email to total revenue within 90 days.",
    ],
  },
  "generative-ai-marketing-tools": {
    title: "Generative AI Marketing Tools: What Works, What Does Not in 2026",
    category: "AI Marketing",
    date: "Jan 8, 2026",
    readTime: "8 min read",
    excerpt: "After testing 30+ AI tools with real clients, here is our honest verdict on what actually delivers marketing ROI in 2026.",
    content: [
      "After integrating generative AI into workflows for 50+ clients over 18 months, here is our honest assessment of what actually moves the needle.",
      "What Works — AI Copywriting with human editing: Tools like Claude, ChatGPT, and Gemini genuinely accelerate ad copy and product descriptions. Time savings: 40-60% on copy production.",
      "What Works — AI Image Generation for Ads: Our performance ads team now uses AI for 30-40% of static ad creative, particularly for testing new angles before a full shoot.",
      "What Works — AI for Data Analysis: Analysing ad performance, identifying patterns in customer reviews, and summarising competitive intelligence are high-ROI applications.",
      "What Does Not Work — AI SEO Content at Scale: Google Helpful Content system is increasingly effective at detecting low-quality AI content. Always add expert human editing.",
      "What Does Not Work — Fully Automated Social Media: AI-generated social content feels generic. Keep a human in the loop for tone, timing, and trend response.",
      "At Ecometra360, we have integrated AI thoughtfully across content, ads, and analytics workflows — delivering faster turnaround without sacrificing quality.",
    ],
  },
};

const blogSlugs = Object.keys(blogData);

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? blogData[slug] : null;
  useEffect(() => {
    if (blog) {
      document.title = blog.title + " | Ecometra360";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", blog.content[0]?.slice(0, 160) || "");
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", blog.title);
    }
    return () => { document.title = "Ecometra360 — 360° Digital Marketing Agency India"; };
  }, [blog]);


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
