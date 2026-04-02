import { motion } from "framer-motion";
import { Building2, Clock, TrendingUp, FolderOpen } from "lucide-react";

const benefits = [
  { icon: Building2, title: "Work on Real Brands", desc: "Gain hands-on experience with growing e-commerce businesses" },
  { icon: Clock, title: "Flexible Opportunities", desc: "Work on projects that match your skills and availability" },
  { icon: TrendingUp, title: "Growth-Focused Environment", desc: "Be part of a performance-driven team" },
  { icon: FolderOpen, title: "Build Your Portfolio", desc: "Work on impactful campaigns and creatives" },
];

const WhyJoinUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Benefits</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Why Join Us
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
