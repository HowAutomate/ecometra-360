import { motion } from "framer-motion";
import {
  Pen, Megaphone, SearchCheck, Store, BarChart3, Mail,
  Camera, MonitorSmartphone, Bot, TrendingUp, Clock, Star, CheckCircle2
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const services = [
  {
    icon: Pen,
    title: "Content Creation",
    category: "CREATIVE & CONTENT",
    desc: "Scroll-stopping copy, graphics, reels, and videos that tell your brand story and convert audiences into customers.",
    detail: "We handle everything from ideation to execution — social media posts, blog articles, ad copy, product descriptions, UGC scripts, and video production tailored to your brand voice.",
    stats: [
      { icon: TrendingUp, value: "+45%", label: "Engagement Lift" },
      { icon: Clock, value: "20 hrs/wk", label: "Time Saved" },
      { icon: Star, value: "100%", label: "Client Satisfaction" },
    ],
    benefits: [
      "Custom content calendar aligned with your brand goals",
      "Scroll-stopping reels, carousels, and stories",
      "SEO-optimized blog articles and ad copy",
      "UGC scripts and influencer brief creation",
    ],
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    category: "GROWTH & ENGAGEMENT",
    desc: "Strategic management of Instagram, Facebook, LinkedIn & more — grow followers, engagement, and brand loyalty organically.",
    detail: "Full-service social management including content calendars, community management, influencer collaborations, and monthly analytics reports to track growth.",
    stats: [
      { icon: TrendingUp, value: "+60%", label: "Follower Growth" },
      { icon: Clock, value: "15 hrs/wk", label: "Time Saved" },
      { icon: Star, value: "98%", label: "Client Satisfaction" },
    ],
    benefits: [
      "Platform-specific strategy for each social channel",
      "Community management and engagement tracking",
      "Monthly analytics and performance reporting",
      "Influencer outreach and collaboration management",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: SearchCheck,
    title: "SEO & SEM",
    category: "SEARCH & VISIBILITY",
    desc: "Data-driven search engine optimization and paid search campaigns that put you on page one and keep you there.",
    detail: "Technical SEO audits, keyword research, on-page optimization, link building, and Google Ads management with transparent ROI reporting.",
    stats: [
      { icon: TrendingUp, value: "+80%", label: "Organic Traffic" },
      { icon: Clock, value: "3 months", label: "Avg Ranking Time" },
      { icon: Star, value: "100%", label: "Client Satisfaction" },
    ],
    benefits: [
      "Comprehensive technical SEO audit and fixes",
      "Keyword research and on-page optimization",
      "High-quality link building campaigns",
      "Google Ads setup, management, and ROI tracking",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Store,
    title: "Marketplace Listings",
    category: "E-COMMERCE",
    desc: "Optimized product listings on Amazon, Flipkart, Meesho & more — A+ content, keywords, and catalogue management.",
    detail: "End-to-end marketplace management: listing creation, A+ / brand store design, keyword optimization, review management, and advertising on all major platforms.",
    stats: [
      { icon: TrendingUp, value: "+35%", label: "Conversion Rate" },
      { icon: Clock, value: "10 hrs/wk", label: "Time Saved" },
      { icon: Star, value: "100%", label: "Client Satisfaction" },
    ],
    benefits: [
      "A+ content and brand store design",
      "Keyword-optimized product listings",
      "Review management and seller health monitoring",
      "Marketplace advertising and bid optimization",
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: BarChart3,
    title: "Performance Ads",
    category: "PAID MEDIA",
    desc: "High-ROI Google Ads, Meta Ads, and programmatic campaigns crafted around your KPIs with transparent reporting.",
    detail: "We plan, launch, and optimize paid campaigns across Google, Meta, YouTube, and programmatic networks — with weekly performance dashboards and ROAS tracking.",
    stats: [
      { icon: TrendingUp, value: "4.5x", label: "Avg ROAS" },
      { icon: Clock, value: "Weekly", label: "Reports" },
      { icon: Star, value: "100%", label: "Client Satisfaction" },
    ],
    benefits: [
      "Multi-platform campaign strategy and execution",
      "A/B testing for creatives, audiences, and placements",
      "Weekly performance dashboards with actionable insights",
      "Budget optimization to maximize ROAS",
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Marketing",
    category: "RETENTION & AUTOMATION",
    desc: "Automated drip campaigns, newsletters, and WhatsApp broadcasts that nurture leads and boost repeat purchases.",
    detail: "Setup and management of email automation flows, segmented campaigns, WhatsApp Business API integration, and performance tracking for maximum retention.",
    stats: [
      { icon: TrendingUp, value: "+40%", label: "Repeat Purchases" },
      { icon: Clock, value: "Automated", label: "Workflows" },
      { icon: Star, value: "99%", label: "Delivery Rate" },
    ],
    benefits: [
      "Automated email drip sequences and flows",
      "Segmented campaigns for targeted messaging",
      "WhatsApp Business API setup and broadcast management",
      "Performance tracking and A/B testing",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Camera,
    title: "Photo & Video Production",
    category: "VISUAL MEDIA",
    desc: "Professional product shoots, brand films, testimonials, and UGC-style content — studio or on-location.",
    detail: "From concept to final edit — product photography, lifestyle shoots, 360° spins, brand videos, testimonial shoots, and UGC-style content for ads and social.",
    stats: [
      { icon: TrendingUp, value: "+50%", label: "Ad Performance" },
      { icon: Clock, value: "5 days", label: "Avg Turnaround" },
      { icon: Star, value: "100%", label: "Client Satisfaction" },
    ],
    benefits: [
      "Professional product and lifestyle photography",
      "Brand films and testimonial video production",
      "UGC-style content for ads and social media",
      "360° product spins and interactive visuals",
    ],
    gradient: "from-red-500 to-pink-600",
  },
  {
    icon: MonitorSmartphone,
    title: "Website & Landing Pages",
    category: "WEB DEVELOPMENT",
    desc: "Conversion-focused websites and landing pages built with modern design, fast load times, and flawless UX.",
    detail: "Custom Shopify stores, WordPress sites, and high-converting landing pages with mobile-first design, speed optimization, and CRO best practices built in.",
    stats: [
      { icon: TrendingUp, value: "+30%", label: "Conversion Rate" },
      { icon: Clock, value: "<2s", label: "Load Time" },
      { icon: Star, value: "100%", label: "Client Satisfaction" },
    ],
    benefits: [
      "Custom Shopify and WordPress development",
      "Mobile-first, responsive design approach",
      "Speed optimization and Core Web Vitals",
      "CRO best practices and A/B testing setup",
    ],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Bot,
    title: "AI-Powered Services",
    category: "AI & AUTOMATION",
    desc: "Leverage AI for smarter marketing — from automated content to predictive analytics and intelligent chatbots.",
    detail: "We integrate AI tools for content generation, ad copy optimization, customer chatbots, product recommendations, and predictive analytics to scale your marketing efficiently.",
    stats: [
      { icon: TrendingUp, value: "+23%", label: "Avg Revenue Lift" },
      { icon: Clock, value: "15 hrs/wk", label: "Time Saved" },
      { icon: Star, value: "100%", label: "Client Satisfaction" },
    ],
    benefits: [
      "AI-powered content generation and optimization",
      "Intelligent chatbots for customer support",
      "Predictive analytics for smarter decisions",
      "Automated ad copy and creative testing",
    ],
    gradient: "from-fuchsia-500 to-violet-600",
  },
];

const ServicesSection = () => {
  const [selected, setSelected] = useState<(typeof services)[number] | null>(null);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">What We Do</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            End-to-End Digital Marketing Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything your brand needs to thrive online — under one roof, with one dedicated team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(service)}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/40 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient group-hover:text-accent-foreground transition-colors">
                <service.icon className="w-6 h-6 text-secondary group-hover:text-accent-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
            {selected && (
              <>
                {/* Header gradient banner */}
                <div className={`relative h-40 sm:h-48 bg-gradient-to-r ${selected.gradient} rounded-t-lg flex items-end p-6`}>
                  <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                  <div className="relative z-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80 bg-white/20 px-3 py-1 rounded-full">
                      {selected.category}
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
                      {selected.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {selected.detail}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {selected.stats.map((stat) => (
                      <div key={stat.label} className="bg-muted/50 rounded-xl p-4 text-center border border-border">
                        <stat.icon className="w-5 h-5 text-secondary mx-auto mb-2" />
                        <div className="font-display text-xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* What You Get */}
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-3">What You Get</h4>
                    <ul className="space-y-2.5">
                      {selected.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={() => setSelected(null)}
                    className="block w-full text-center bg-accent-gradient text-accent-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get a Quote for {selected.title}
                  </a>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ServicesSection;