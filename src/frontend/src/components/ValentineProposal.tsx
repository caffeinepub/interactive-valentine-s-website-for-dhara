import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ValentineProposal() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonAttempts, setNoButtonAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
    setTimeout(() => setShowGif(true), 800);
  };

  const handleNoHover = () => {
    const container = document.getElementById('proposal-container');
    if (!container) return;
    
    const containerRect = container.getBoundingClientRect();
    const buttonWidth = 150;
    const buttonHeight = 60;
    
    const maxX = containerRect.width - buttonWidth - 40;
    const maxY = containerRect.height - buttonHeight - 40;
    
    const newX = Math.max(20, Math.random() * maxX);
    const newY = Math.max(20, Math.random() * maxY);
    
    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonAttempts(prev => prev + 1);
  };

  const handleNoClick = () => {
    handleNoHover();
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: 'url(/assets/generated/heart-pattern-bg.dim_800x600.png)',
          backgroundSize: '400px 300px'
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        {!answered ? (
          <div className="text-center animate-fade-in">
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-cursive text-rose-600 mb-6 animate-scale-in">
                Will you be my Valentine?
              </h1>
              
              <div className="flex justify-center gap-4 mb-8">
                <Heart className="w-12 h-12 text-rose-400 fill-rose-400 animate-pulse" />
                <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-12 h-12 text-rose-400 fill-rose-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>

            <div id="proposal-container" className="relative h-64 flex items-center justify-center overflow-hidden">
              <Button
                onClick={handleYes}
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white text-2xl px-12 py-8 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 font-semibold z-10"
              >
                Yes 💖
              </Button>

              <Button
                onClick={handleNoClick}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                size="lg"
                variant="outline"
                className="absolute text-xl px-8 py-6 rounded-full border-2 border-rose-300 text-rose-600 hover:bg-rose-50 transition-all duration-200 font-semibold"
                style={{
                  left: noButtonAttempts === 0 ? 'auto' : `${noButtonPosition.x}px`,
                  top: noButtonAttempts === 0 ? 'auto' : `${noButtonPosition.y}px`,
                  right: noButtonAttempts === 0 ? '20%' : 'auto',
                  transform: noButtonAttempts === 0 ? 'translateY(0)' : 'none'
                }}
              >
                No 😅
              </Button>
            </div>

            {noButtonAttempts > 0 && (
              <p className="text-rose-500 text-xl font-cursive mt-8 animate-fade-in">
                Try again 😘
              </p>
            )}
          </div>
        ) : (
          <div className="text-center animate-scale-in">
            <div className="relative">
              {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(30)].map((_, i) => (
                    <Heart
                      key={i}
                      className="absolute text-rose-500 fill-rose-500 animate-confetti-heart"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: '-50px',
                        width: `${20 + Math.random() * 30}px`,
                        height: `${20 + Math.random() * 30}px`,
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}

              <h2 className="text-6xl md:text-8xl font-cursive text-rose-600 mb-8">
                Yay! 🎉
              </h2>
              
              <p className="text-3xl md:text-4xl text-rose-700 font-cursive mb-12 leading-relaxed">
                You've made me the happiest person alive!
              </p>

              <div className="flex justify-center gap-6 mb-12">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse-slow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>

              {showGif && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
                  <div className="relative bg-white/95 rounded-3xl p-8 shadow-2xl max-w-md mx-4 animate-scale-in">
                    <div className="absolute -top-4 -left-4">
                      <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-float" />
                    </div>
                    <div className="absolute -top-4 -right-4">
                      <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-float" style={{ animationDelay: '0.3s' }} />
                    </div>
                    <div className="absolute -bottom-4 -left-4">
                      <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-float" style={{ animationDelay: '0.6s' }} />
                    </div>
                    <div className="absolute -bottom-4 -right-4">
                      <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-float" style={{ animationDelay: '0.9s' }} />
                    </div>

                    <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
                        alt="Bear kiss animation"
                        className="w-full h-auto"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <p className="text-3xl font-cursive text-rose-600 mb-6 animate-shimmer-glow">
                      I knew you'd make the right choice 💖
                    </p>

                    <div className="flex justify-center gap-3">
                      {[...Array(3)].map((_, i) => (
                        <Heart
                          key={i}
                          className="w-6 h-6 text-rose-500 fill-rose-500 animate-pulse"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setShowGif(false)}
                      className="mt-6 px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full font-semibold transition-colors duration-200"
                    >
                      Continue 💕
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
