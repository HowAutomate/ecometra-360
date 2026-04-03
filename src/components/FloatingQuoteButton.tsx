import { MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingQuoteButton = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Get a Quote"
    >
      <Button
        size="lg"
        className="bg-accent-gradient text-accent-foreground hover:opacity-90 rounded-full shadow-elevated h-14 w-14 p-0 md:w-auto md:px-6 md:rounded-xl"
      >
        <MessageSquareQuote className="w-6 h-6 md:mr-2" />
        <span className="hidden md:inline font-semibold">Get a Quote</span>
      </Button>
    </a>
  );
};

export default FloatingQuoteButton;
