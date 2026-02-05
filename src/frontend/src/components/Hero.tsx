import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  setActiveSection: (section: 'home' | 'letter' | 'valentine') => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <img 
            src="/assets/generated/dhara-monogram-transparent.dim_200x200.png" 
            alt="Dhara" 
            className="w-32 h-32 mx-auto mb-6 animate-float"
          />
          <div className="absolute -top-4 -right-4">
            <Sparkles className="w-8 h-8 text-rose-400 animate-pulse" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-cursive text-rose-600 mb-4 animate-fade-in">
          Happy Valentine's Day, Dhara!
        </h1>
        
        <p className="text-xl md:text-2xl text-rose-700 font-light leading-relaxed animate-fade-in-delay">
          Welcome to a special place created just for you, filled with love, memories, and everything that makes our relationship magical.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay-2">
          <Button
            size="lg"
            onClick={() => setActiveSection('valentine')}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-5 h-5 mr-2 fill-white" />
            Be My Valentine?
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={() => setActiveSection('letter')}
            className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Read Love Letter
          </Button>
        </div>

        <div className="pt-12 relative">
          <img 
            src="/assets/generated/heart-border-frame-transparent.dim_400x300.png" 
            alt="Heart Frame" 
            className="w-full max-w-md mx-auto opacity-60 animate-pulse-slow"
          />
        </div>
      </div>
    </section>
  );
}
