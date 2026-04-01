import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const expertiseOptions = [
  "SEO & SEM",
  "Social Media Marketing",
  "Content Writing & Copywriting",
  "Graphic Design",
  "Video Editing & Production",
  "Google Ads / PPC",
  "Meta / Facebook Ads",
  "Email Marketing",
  "Web Development",
  "Marketplace Management (Amazon/Flipkart)",
  "Influencer Outreach",
  "Analytics & Reporting",
];

const FreelancerForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    experience: "",
    expertise: [] as string[],
    about: "",
  });

  const toggleExpertise = (skill: string) => {
    setForm((prev) => ({
      ...prev,
      expertise: prev.expertise.includes(skill)
        ? prev.expertise.filter((s) => s !== skill)
        : [...prev.expertise, skill],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.expertise.length === 0) {
      toast({ title: "Please select at least one expertise area", variant: "destructive" });
      return;
    }
    toast({ title: "Application Submitted! 🎉", description: "We'll review your profile and get back within 48 hours." });
    setForm({ name: "", email: "", phone: "", portfolio: "", experience: "", expertise: [], about: "" });
  };

  return (
    <section id="apply" className="py-24 bg-muted/50">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Apply Now</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
              Join Our Freelancer Network
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tell us about yourself and your skills. We'll match you with the right projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-elevated border border-border space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                type="tel"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <Input
                placeholder="Portfolio / LinkedIn URL"
                value={form.portfolio}
                onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
              />
            </div>
            <Input
              placeholder="Years of Experience *"
              value={form.experience}
              onChange={(e) => setForm({ ...form, experience: e.target.value })}
              required
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                Select Your Expertise Areas *
              </label>
              <div className="flex flex-wrap gap-2">
                {expertiseOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleExpertise(skill)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      form.expertise.includes(skill)
                        ? "bg-secondary text-secondary-foreground border-secondary"
                        : "bg-background text-muted-foreground border-border hover:border-secondary/50"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <Textarea
              placeholder="Tell us about yourself, your experience, and why you'd like to join... *"
              rows={4}
              value={form.about}
              onChange={(e) => setForm({ ...form, about: e.target.value })}
              required
            />

            <Button type="submit" size="lg" className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
              Submit Application <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelancerForm;
