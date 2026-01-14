import { Heart, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border/50 relative">
      <div className="container mx-auto px-6">
        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border/50 hover:border-primary/30"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with{' '}
            <Heart size={16} className="text-primary fill-primary animate-pulse" />
            {' '}by{' '}
            <span className="gradient-text font-semibold">Anurag Keshav</span>
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
