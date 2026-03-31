import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: TrendingUp, value: "350+", label: "Brands Scaled" },
  { icon: Users, value: "2M+", label: "Audience Reached" },
  { icon: BarChart3, value: "97%", label: "Client Retention" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-hero min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174_72%_46%_/_0.15),_transparent_60%)]" />
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-secondary/20 text-secondary mb-6">
              360° Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            We Build Brands That <span className="text-gradient">Dominate</span> Online
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mb-10"
          >
            From content creation to marketplace listings, paid ads to SEO — we deliver end-to-end digital marketing
            that drives real revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent-gradient text-accent-foreground hover:opacity-90 text-base px-8"
            >
              <a href="#contact">
                Start Your Growth <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-black hover:bg-primary-foreground/10 text-base px-8"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8 lg:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/50">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
