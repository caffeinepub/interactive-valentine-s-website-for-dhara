import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Hero() {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <img 
            src="/assets/generated/dhara-monogram-transparent.dim_200x200.png" 
            alt="Dhara" 
            className="w-32 h-32 mx-auto mb-6 animate-float"
            loading="eager"
          />
          <div className="absolute -top-4 -right-4">
            <Sparkles className="w-8 h-8 text-rose-400 animate-pulse" />
          </div>
          <img 
            src="/assets/generated/floral-corner-gold-transparent.dim_256x256.png" 
            alt="Floral decoration" 
            className="absolute -top-8 -left-8 w-24 h-24 opacity-60"
            loading="lazy"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-cursive text-rose-600 mb-4 animate-fade-in">
          To my dearest Dhara, Happy Valentine's Day!
        </h1>
        
        <p className="text-xl md:text-2xl text-rose-700 font-light leading-relaxed animate-fade-in-delay">
          Welcome to a special place created just for you, filled with love, memories, and everything that makes our relationship magical.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay-2">
          <Button
            size="lg"
            onClick={() => scrollToSection('valentine')}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-2 fill-white" />
            Be My Valentine?
          </Button>
        </div>
      </div>
    </section>
  );
}
