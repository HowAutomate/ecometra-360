import { motion } from "framer-motion";
import { Target, ShoppingCart, Palette, Video, Code, ListChecks } from "lucide-react";

const roles = [
  { icon: Target, title: "Performance Marketers", desc: "Meta / Google Ads specialists driving ROAS" },
  { icon: ShoppingCart, title: "Marketplace Specialists", desc: "Amazon, Flipkart, Myntra, Nykaa experts" },
  { icon: Palette, title: "Creative Designers", desc: "Ads, banners, A+ content creators" },
  { icon: Video, title: "Content Creators", desc: "UGC, scripts, reels production" },
  { icon: Code, title: "Shopify / CRO Experts", desc: "Store optimization & conversion specialists" },
  { icon: ListChecks, title: "Catalog & Listing Specialists", desc: "Product listing & catalog management" },
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
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow"
            >
              <role.icon className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-display font-semibold text-foreground text-lg mb-1">{role.title}</h3>
              <p className="text-sm text-muted-foreground">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
