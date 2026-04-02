import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/freelancer-hero.jpg";

const FreelancerHero = () => {
  return (
    <section className="relative pt-28 pb-20 bg-hero overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-secondary/20 text-secondary border border-secondary/30">
              Join Our Network
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Work With{" "}
              <span className="text-secondary">Ecometra360</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
              Collaborate with a team focused on scaling e-commerce brands through strategy, creatives, and performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-accent-gradient text-accent-foreground hover:opacity-90"
              >
                <a href="#apply">Apply Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="#roles">View Roles</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroImg}
              alt="Creative team working together"
              className="rounded-2xl shadow-elevated w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerHero;
