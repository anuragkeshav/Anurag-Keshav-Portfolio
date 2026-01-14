import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-muted-foreground text-lg md:text-xl mb-4 animate-fade-up">
          Hi, I'm
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-fade-up-delay-1">
          <span className="gradient-text glow-text">Aryan Kumar</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-up-delay-2 font-mono">
          <span className="text-primary">{'<'}</span>
          B.Tech CSE (IoT) Student
          <span className="text-primary">{' />'}</span>
          {' | '}
          <span className="text-foreground">Web Developer</span>
        </p>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-fade-up-delay-3">
          Crafting responsive, modern web experiences with clean code and creative solutions.
          Passionate about JavaScript, AI, and building impactful digital products.
        </p>

        <div className="animate-fade-up-delay-4">
          <button onClick={handleContactClick} className="btn-primary-glow">
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
