import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSubmissions } from "@/contexts/SubmissionsContext";

const serviceOptions = [
  "Content Creation",
  "Social Media Marketing",
  "SEO & SEM",
  "Marketplace Listings",
  "Performance Ads",
  "Email & WhatsApp Marketing",
  "Photo & Video Production",
  "Website & Landing Pages",
  "AI-Powered Services",
  "Other",
];

const ContactSection = () => {
  const { toast } = useToast();
  const { addSubmission } = useSubmissions();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSubmission({
      id: crypto.randomUUID(),
      type: "quote",
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
      status: "new",
      assignedTo: "",
      createdAt: new Date().toISOString(),
    });
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Get In Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Let's Grow Your Brand Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Ready to scale? Drop us a message or give us a call. Our team responds within 24 hours — no bots, no templates, just real humans who care about your growth.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <a href="tel:+917011721455" className="text-foreground font-semibold text-lg hover:text-secondary transition-colors">
                    +91 7011721455
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <a href="mailto:hello@ecometra360.com" className="text-foreground font-semibold text-lg hover:text-secondary transition-colors">
                    hello@ecometra360.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Visit Us</div>
                  <span className="text-foreground font-semibold">New Delhi, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-elevated border border-border space-y-5">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Request a Free Consultation</h3>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <Select
                value={form.service}
                onValueChange={(value) => setForm({ ...form, service: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <Button type="submit" size="lg" className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;