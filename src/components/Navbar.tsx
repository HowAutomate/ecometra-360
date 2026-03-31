import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-display text-xl font-bold text-primary tracking-tight">
          ecometra<span className="text-secondary">360</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+917011721455" className="flex items-center gap-1.5 text-sm font-medium text-secondary">
            <Phone className="w-4 h-4" />
            +91 7011721455
          </a>
          <Button asChild className="bg-accent-gradient text-accent-foreground hover:opacity-90">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+917011721455" className="flex items-center gap-1.5 text-sm font-medium text-secondary">
            <Phone className="w-4 h-4" />
            +91 7011721455
          </a>
          <Button asChild className="w-full bg-accent-gradient text-accent-foreground">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
