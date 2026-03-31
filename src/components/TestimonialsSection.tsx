import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, GlowSkin India",
    text: "Ecometra360 took our D2C brand from ₹2L to ₹28L monthly revenue in just 6 months. Their Meta Ads strategy was a game-changer.",
  },
  {
    name: "Rajesh Gupta",
    role: "CEO, FitGear Pro",
    text: "Our Amazon sales grew 4x after their listing optimization. The A+ content and keyword strategy they built is phenomenal.",
  },
  {
    name: "Ananya Verma",
    role: "Marketing Head, UrbanBite",
    text: "Best agency we've worked with. Transparent reporting, creative content, and a team that genuinely cares about results.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Trusted by Ambitious Brands
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur border border-primary-foreground/10 rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <div className="font-display font-semibold text-primary-foreground">{t.name}</div>
                <div className="text-sm text-primary-foreground/50">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
