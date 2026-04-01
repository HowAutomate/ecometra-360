import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useMode } from "@/contexts/ModeContext";

const clientLinks = [
  { label: "Home", hash: "#home" },
  { label: "Services", hash: "#services" },
  { label: "About", hash: "#about" },
  { label: "Blog", hash: "#blog" },
  { label: "Contact", hash: "#contact" },
];

const freelancerLinks = [
  { label: "Home", hash: "#home" },
  { label: "Benefits", hash: "#benefits" },
  { label: "Apply", hash: "#apply" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, setMode } = useMode();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const getHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const navLinks = mode === "client" ? clientLinks : freelancerLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href={getHref("#home")} className="font-display text-xl font-bold text-primary tracking-tight">
          ecometra<span className="text-secondary">360</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={getHref(link.hash)}
              className="text-sm font-semibold text-foreground hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className={mode === "client" ? "text-secondary" : "text-muted-foreground"}>Client</span>
            <Switch
              checked={mode === "freelancer"}
              onCheckedChange={(checked) => setMode(checked ? "freelancer" : "client")}
            />
            <span className={mode === "freelancer" ? "text-secondary" : "text-muted-foreground"}>Freelancer</span>
          </div>
          {mode === "client" && (
            <>
              <a href="tel:+917011721455" className="flex items-center gap-1.5 text-sm font-medium text-secondary">
                <Phone className="w-4 h-4" />
                +91 7011721455
              </a>
              <Button asChild className="bg-accent-gradient text-accent-foreground hover:opacity-90">
                <a href={getHref("#contact")}>Get a Quote</a>
              </Button>
            </>
          )}
          {mode === "freelancer" && (
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href={getHref("#apply")}>Apply Now</a>
            </Button>
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6 space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium py-2">
            <span className={mode === "client" ? "text-secondary" : "text-muted-foreground"}>Client</span>
            <Switch
              checked={mode === "freelancer"}
              onCheckedChange={(checked) => setMode(checked ? "freelancer" : "client")}
            />
            <span className={mode === "freelancer" ? "text-secondary" : "text-muted-foreground"}>Freelancer</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={getHref(link.hash)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {mode === "client" && (
            <>
              <a href="tel:+917011721455" className="flex items-center gap-1.5 text-sm font-medium text-secondary">
                <Phone className="w-4 h-4" />
                +91 7011721455
              </a>
              <Button asChild className="w-full bg-accent-gradient text-accent-foreground">
                <a href={getHref("#contact")}>Get a Quote</a>
              </Button>
            </>
          )}
          {mode === "freelancer" && (
            <Button asChild className="w-full bg-secondary text-secondary-foreground">
              <a href={getHref("#apply")}>Apply Now</a>
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
