import { Phone, Mail, Globe, Briefcase, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="font-display text-xl font-bold tracking-tight">
              ecometra<span className="text-secondary">360</span>
            </span>
            <p className="text-primary-foreground/60 text-sm mt-4 leading-relaxed">
              Your 360° digital growth partner. We build brands that dominate online — from content to conversions.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, Briefcase, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["Content Creation", "Social Media Marketing", "SEO & SEM", "Performance Ads", "Marketplace Listings", "Email Marketing"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-secondary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              {["About Us", "Our Work", "Blog", "Careers", "Contact"].map((s) => (
                <li key={s}><a href={`#${s.toLowerCase().replace(/\s/g, "")}`} className="hover:text-secondary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <a href="tel:+917011721455" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" /> +91 7011721455
              </a>
              <a href="mailto:hello@ecometra360.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" /> hello@ecometra360.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Ecometra360. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
