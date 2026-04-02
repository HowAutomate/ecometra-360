import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const qualities = [
  "Strong portfolio or past work",
  "Understanding of e-commerce ecosystem",
  "Performance-driven mindset",
  "Reliability & timely communication",
  "Attention to detail",
];

const WhatWeLookFor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Expectations</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            What We Look For
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl p-8 shadow-card border border-border"
        >
          <ul className="space-y-4">
            {qualities.map((q) => (
              <li key={q} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-foreground font-medium">{q}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeLookFor;
