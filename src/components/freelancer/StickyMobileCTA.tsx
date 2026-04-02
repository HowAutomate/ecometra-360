import { Button } from "@/components/ui/button";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/90 backdrop-blur-md border-t border-border md:hidden">
      <Button
        size="lg"
        asChild
        className="w-full bg-accent-gradient text-accent-foreground hover:opacity-90"
      >
        <a href="#apply">Apply Now</a>
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
