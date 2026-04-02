import { motion } from "framer-motion";

const FreelancerIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4">
            At Ecometra360, we work with a curated network of skilled professionals to deliver high-quality results for e-commerce brands.
          </p>
          <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed">
            If you're passionate about growth, performance, and creativity — we'd love to collaborate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelancerIntro;
