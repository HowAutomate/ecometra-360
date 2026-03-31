import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Full-Stack Digital Team — Strategy, Creative, Tech & Analytics",
  "Transparent Reporting & Real-Time Dashboards",
  "Proven ROI Across 50+ Industries",
  "Dedicated Account Managers for Every Client",
  "Agile Sprints — Weekly Deliverables, No Long Lock-ins",
  "India's Best-Value Performance Marketing Partner",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Ecometra360</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Brand Deserves a 360° Growth Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not just another agency. Ecometra360 blends creativity with hard data to 
              deliver measurable growth across every digital channel. Whether you're a startup 
              finding product-market fit or an enterprise scaling to new markets — we've got your back.
            </p>

            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "8+", label: "Years in Business" },
              { value: "350+", label: "Brands Served" },
              { value: "₹50Cr+", label: "Ad Spend Managed" },
              { value: "15+", label: "Industry Verticals" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-8 text-center shadow-card border border-border"
              >
                <div className="font-display text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
