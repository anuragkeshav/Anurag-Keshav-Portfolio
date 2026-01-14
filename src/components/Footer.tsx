import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with{' '}
          <Heart size={16} className="text-primary fill-primary animate-pulse" />
          {' '}by{' '}
          <span className="gradient-text font-semibold">Aryan Kumar</span>
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2">
          © 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
