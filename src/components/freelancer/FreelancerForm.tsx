import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSubmissions } from "@/contexts/SubmissionsContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const expertiseOptions = [
  "Performance Marketing",
  "Marketplace Management",
  "Creative Design",
  "Content Creation",
  "Shopify / CRO",
  "Other",
];

const experienceOptions = ["0–1", "1–3", "3–5", "5+"];

const FreelancerForm = () => {
  const { toast } = useToast();
  const { addSubmission } = useSubmissions();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    portfolio: "",
    tools: "",
    intro: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.expertise) {
      toast({ title: "Please select your area of expertise", variant: "destructive" });
      return;
    }
    if (!form.experience) {
      toast({ title: "Please select your experience level", variant: "destructive" });
      return;
    }
    addSubmission({
      id: crypto.randomUUID(),
      type: "freelancer",
      name: form.name,
      email: form.email,
      phone: form.phone,
      expertise: form.expertise,
      experience: form.experience,
      portfolio: form.portfolio,
      tools: form.tools,
      intro: form.intro,
      status: "new",
      assignedTo: "",
      createdAt: new Date().toISOString(),
    });
    toast({
      title: "Application Submitted! 🎉",
      description: "Thanks for applying. We'll review and get back to you.",
    });
    setForm({ name: "", email: "", phone: "", expertise: "", experience: "", portfolio: "", tools: "", intro: "" });
  };

  return (
    <section id="apply" className="py-24 bg-muted/50">
      <div className="container max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Apply Now</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-3">
              Join Ecometra360
            </h2>
            <p className="text-muted-foreground">
              Tell us about yourself. We'll match you with the right projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-elevated border border-border space-y-5">
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
            <Input
              type="tel"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />

            <Select value={form.expertise} onValueChange={(v) => setForm({ ...form, expertise: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Area of Expertise *" />
              </SelectTrigger>
              <SelectContent>
                {expertiseOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={form.experience} onValueChange={(v) => setForm({ ...form, experience: v })}>
              <SelectTrigger>
                <SelectValue placeholder="Years of Experience *" />
              </SelectTrigger>
              <SelectContent>
                {experienceOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Portfolio / Work Links *"
              value={form.portfolio}
              onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
              required
            />

            <Input
              placeholder="Tools & Platforms You Use (optional)"
              value={form.tools}
              onChange={(e) => setForm({ ...form, tools: e.target.value })}
            />

            <Textarea
              placeholder="Short Introduction — tell us about yourself... *"
              rows={4}
              value={form.intro}
              onChange={(e) => setForm({ ...form, intro: e.target.value })}
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
