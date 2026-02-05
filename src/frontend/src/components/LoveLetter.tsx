import { Heart, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function LoveLetter() {
  return (
    <section className="container mx-auto px-4 py-16 min-h-[calc(100vh-200px)] flex items-center justify-center">
      <Card className="max-w-3xl w-full bg-white/95 backdrop-blur-sm border-2 border-rose-200 shadow-2xl animate-scale-in relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <img 
            src="/assets/generated/heart-pattern-bg.dim_800x600.png" 
            alt="Heart Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
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
              Every moment with you feels like a beautiful dream I never want to wake from. You are the most precious blessing in my life, and my heart overflows with gratitude for you.
            </p>

            <p className="text-lg md:text-xl font-light">
              Your smile lights up my darkest days. Your laughter is the sweetest melody I know. Your presence brings me a peace I never knew existed. You make everything better just by being you.
            </p>

            <p className="text-lg md:text-xl font-light">
              I love how you see the world with wonder and kindness. I love your strength, your compassion, and the beautiful soul you are. Every day with you is an adventure, and I cherish every memory we create together.
            </p>

            <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg border-2 border-rose-200 text-center my-8">
              <p className="text-2xl md:text-3xl font-cursive text-rose-700 leading-relaxed">
                "You are my today and all of my tomorrows."
              </p>
            </div>

            <p className="text-lg md:text-xl font-light">
              You inspire me to be better. You challenge me to grow, support me when I stumble, and celebrate with me in my victories. Your love has transformed my life in ways I never imagined possible.
            </p>

            <p className="text-lg md:text-xl font-light">
              This Valentine's Day, I want you to know that my love for you grows stronger with each passing moment. You are my best friend, my partner in everything, and the love of my life. I promise to always cherish you, support you, and love you with all my heart.
            </p>

            <div className="text-center pt-8">
              <p className="text-2xl font-cursive text-rose-600">
                Forever yours,
              </p>
              <div className="flex justify-center items-center gap-2 mt-4">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                <p className="text-3xl font-cursive text-rose-700">With all my love</p>
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              </div>
            </div>

            <div className="text-center pt-6 pb-4">
              <p className="text-3xl md:text-4xl font-cursive text-rose-600 animate-shimmer-glow">
                I will always love you more, mere nonuuu 💋
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <img 
              src="/assets/generated/heart-border-frame-transparent.dim_400x300.png" 
              alt="Heart Frame" 
              className="w-48 opacity-60 animate-pulse-slow"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
