import { motion } from "framer-motion";
import { Crosshair, Store, Paintbrush, Clapperboard, MonitorSmartphone, ClipboardList, Camera, SearchCheck, Bot } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const roles = [
  { icon: Crosshair, title: "Performance Marketers", desc: "Meta / Google Ads specialists driving ROAS", detail: "Run paid campaigns on Meta, Google & programmatic platforms. Optimize ad spend, A/B test creatives, and deliver measurable ROAS for e-commerce brands." },
  { icon: Store, title: "Marketplace Specialists", desc: "Amazon, Flipkart, Myntra, Nykaa experts", detail: "Manage product listings, pricing strategies, promotions, and advertising on major Indian & global marketplaces to maximize sales velocity." },
  { icon: Paintbrush, title: "Creative Designers", desc: "Ads, banners, A+ content creators", detail: "Design scroll-stopping ad creatives, social media graphics, A+ / brand store content, and packaging designs that convert browsers into buyers." },
  { icon: Clapperboard, title: "Content Creators", desc: "UGC, scripts, reels production", detail: "Produce short-form video content — reels, UGC ads, unboxings, and product demos — that drive engagement and sales on social platforms." },
  { icon: MonitorSmartphone, title: "Shopify / CRO Experts", desc: "Store optimization & conversion specialists", detail: "Build, customize, and optimize Shopify stores. Improve conversion rates through UX audits, landing page design, and checkout flow optimization." },
  { icon: ClipboardList, title: "Catalog & Listing Specialists", desc: "Product listing & catalog management", detail: "Create and manage accurate, SEO-optimized product catalogs across multiple channels — from data entry to rich media content." },
  { icon: Camera, title: "Photoshoot Specialists", desc: "Product photography & visual content", detail: "Plan and execute professional product photoshoots — flat-lays, lifestyle shots, model shoots, and 360° imagery for e-commerce listings." },
  { icon: SearchCheck, title: "SEO Specialists", desc: "On-page, off-page & technical SEO", detail: "Conduct keyword research, technical audits, link building, and content optimization to boost organic rankings and drive sustainable traffic." },
  { icon: Bot, title: "AI Tools Specialists", desc: "AI-powered marketing & automation", detail: "Leverage AI tools for content generation, ad copy, chatbots, predictive analytics, and workflow automation to scale marketing output efficiently." },
];

const WhoCanApply = () => {
  return (
    <section id="roles" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Open Roles</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Who Can Apply
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(role)}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:border-secondary/40 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <role.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-1">{role.title}</h3>
              <p className="text-sm text-muted-foreground">{role.desc}</p>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selected?.title}</DialogTitle>
              <DialogDescription>{selected?.detail}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default WhoCanApply;
