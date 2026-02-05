import { Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function LoveLetter() {
  return (
    <section className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
      <Card className="max-w-3xl w-full bg-white/95 backdrop-blur-sm border-2 border-rose-200 shadow-2xl animate-scale-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img 
            src="/assets/generated/heart-pattern-bg.dim_800x600.png" 
            alt="Heart Pattern" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <img 
          src="/assets/generated/floral-corner-gold-transparent.dim_256x256.png" 
          alt="Floral decoration" 
          className="absolute top-0 right-0 w-32 h-32 opacity-40 pointer-events-none"
          loading="lazy"
        />
        <img 
          src="/assets/generated/floral-corner-gold-transparent.dim_256x256.png" 
          alt="Floral decoration" 
          className="absolute bottom-0 left-0 w-32 h-32 opacity-40 pointer-events-none transform rotate-180"
          loading="lazy"
        />
        
        <CardContent className="p-8 md:p-12 space-y-6 relative z-10">
          <div className="text-center space-y-4 mb-8">
            <div className="flex justify-center items-center gap-3">
              <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-cursive text-rose-600">
                My Dearest Dhara
              </h2>
              <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
            <Sparkles className="w-8 h-8 text-rose-400 mx-auto animate-spin-slow" />
          </div>

          <div className="space-y-6 text-rose-900 leading-relaxed">
            <p className="text-lg md:text-xl font-light first-letter:text-6xl first-letter:font-cursive first-letter:text-rose-600 first-letter:float-left first-letter:mr-2 first-letter:leading-none">
              You are the most beautiful blessing that has ever entered my life, and every moment with you feels like a dream come true.
            </p>

            <p className="text-lg md:text-xl font-light">
              I love the way you see the world with such wonder and kindness. I love how you make me laugh even when I don't feel like smiling.
            </p>

            <p className="text-lg md:text-xl font-light">
              You inspire me to be a better person. Jaise ki aap kehte ho i love youu more than these words could ever explain and more than i could i express.
            </p>

            <div className="text-center pt-8 pb-4">
              <p className="text-3xl md:text-4xl font-bold text-rose-600 animate-shimmer-glow">
                I will always love you more mere NONUU 💋
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
