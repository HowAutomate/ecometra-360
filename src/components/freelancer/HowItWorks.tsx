import { motion } from "framer-motion";
import { Send, Search, Rocket } from "lucide-react";

const steps = [
  { icon: Send, step: "Step 1", title: "Apply", desc: "Submit your details and portfolio" },
  { icon: Search, step: "Step 2", title: "Review", desc: "Our team evaluates your experience and expertise" },
  { icon: Rocket, step: "Step 3", title: "Get Opportunities", desc: "We connect you with relevant projects based on your skillset" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Process</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3">
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-border" />
          
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center mx-auto mb-5 relative z-10 bg-background">
                <s.icon className="w-8 h-8 text-secondary" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{s.step}</span>
              <h3 className="font-display font-bold text-foreground text-xl mt-1 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
