import { motion } from "framer-motion";
import {
  Pen, Megaphone, SearchCheck, Store, BarChart3, Mail,
  Camera, MonitorSmartphone, Bot
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const services = [
  {
    icon: Pen,
    title: "Content Creation",
    desc: "Scroll-stopping copy, graphics, reels, and videos that tell your brand story and convert audiences into customers.",
    detail: "We handle everything from ideation to execution — social media posts, blog articles, ad copy, product descriptions, UGC scripts, and video production tailored to your brand voice.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    desc: "Strategic management of Instagram, Facebook, LinkedIn & more — grow followers, engagement, and brand loyalty organically.",
    detail: "Full-service social management including content calendars, community management, influencer collaborations, and monthly analytics reports to track growth.",
  },
  {
    icon: SearchCheck,
    title: "SEO & SEM",
    desc: "Data-driven search engine optimization and paid search campaigns that put you on page one and keep you there.",
    detail: "Technical SEO audits, keyword research, on-page optimization, link building, and Google Ads management with transparent ROI reporting.",
  },
  {
    icon: Store,
    title: "Marketplace Listings",
    desc: "Optimized product listings on Amazon, Flipkart, Meesho & more — A+ content, keywords, and catalogue management.",
    detail: "End-to-end marketplace management: listing creation, A+ / brand store design, keyword optimization, review management, and advertising on all major platforms.",
  },
  {
    icon: BarChart3,
    title: "Performance Ads",
    desc: "High-ROI Google Ads, Meta Ads, and programmatic campaigns crafted around your KPIs with transparent reporting.",
    detail: "We plan, launch, and optimize paid campaigns across Google, Meta, YouTube, and programmatic networks — with weekly performance dashboards and ROAS tracking.",
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Marketing",
    desc: "Automated drip campaigns, newsletters, and WhatsApp broadcasts that nurture leads and boost repeat purchases.",
    detail: "Setup and management of email automation flows, segmented campaigns, WhatsApp Business API integration, and performance tracking for maximum retention.",
  },
  {
    icon: Camera,
    title: "Photo & Video Production",
    desc: "Professional product shoots, brand films, testimonials, and UGC-style content — studio or on-location.",
    detail: "From concept to final edit — product photography, lifestyle shoots, 360° spins, brand videos, testimonial shoots, and UGC-style content for ads and social.",
  },
  {
    icon: MonitorSmartphone,
    title: "Website & Landing Pages",
    desc: "Conversion-focused websites and landing pages built with modern design, fast load times, and flawless UX.",
    detail: "Custom Shopify stores, WordPress sites, and high-converting landing pages with mobile-first design, speed optimization, and CRO best practices built in.",
  },
  {
    icon: Bot,
    title: "AI-Powered Services",
    desc: "Leverage AI for smarter marketing — from automated content to predictive analytics and intelligent chatbots.",
    detail: "We integrate AI tools for content generation, ad copy optimization, customer chatbots, product recommendations, and predictive analytics to scale your marketing efficiently.",
  },
];

const ServicesSection = () => {
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

        <TooltipProvider delayDuration={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Tooltip key={service.title}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-secondary/40 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-accent-gradient group-hover:text-accent-foreground transition-colors">
                      <service.icon className="w-6 h-6 text-secondary group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs text-sm p-3">
                  {service.detail}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ServicesSection;
