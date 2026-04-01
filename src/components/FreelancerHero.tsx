import { motion } from "framer-motion";
import { Users, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, label: "Active Freelancers", value: "150+" },
  { icon: Briefcase, label: "Projects Completed", value: "500+" },
  { icon: Globe, label: "Countries", value: "12+" },
];

const FreelancerHero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary/80">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-secondary/20 text-secondary border border-secondary/30">
            Join Our Freelancer Network
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Work With Top Brands.{" "}
            <span className="text-secondary">Grow Your Career.</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join ecometra360's freelancer network and get access to high-paying digital marketing projects. 
            We connect skilled professionals with businesses that need your expertise.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            <a href="#apply">Apply Now</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="grid grid-cols-3 gap-6 max-w-xl mx-auto mt-16"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <div className="text-2xl font-bold text-primary-foreground">{s.value}</div>
              <div className="text-xs text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FreelancerHero;
