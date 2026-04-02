import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-hero">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to work with us?
          </h2>
          <Button
            size="lg"
            asChild
            className="bg-accent-gradient text-accent-foreground hover:opacity-90"
          >
            <a href="#apply">
              Apply to Join Ecometra360 <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
