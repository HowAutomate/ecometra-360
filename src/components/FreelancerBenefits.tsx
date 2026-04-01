import { motion } from "framer-motion";
import { DollarSign, Clock, TrendingUp, Shield, Laptop, Award } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Competitive Pay", desc: "Earn top rates with on-time payments every month." },
  { icon: Clock, title: "Flexible Hours", desc: "Work on your own schedule from anywhere in the world." },
  { icon: TrendingUp, title: "Career Growth", desc: "Build your portfolio working with real brands and businesses." },
  { icon: Shield, title: "Secure Contracts", desc: "Clear agreements with milestone-based payment protection." },
  { icon: Laptop, title: "Remote-First", desc: "100% remote — all you need is a laptop and internet." },
  { icon: Award, title: "Recognition", desc: "Top performers get featured and earn bonuses." },
];

const FreelancerBenefits = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Join Us</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Benefits of Working With Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelancerBenefits;
