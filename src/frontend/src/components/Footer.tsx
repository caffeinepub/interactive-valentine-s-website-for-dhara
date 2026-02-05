import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-t from-rose-100/80 to-transparent backdrop-blur-sm border-t border-rose-200 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
            <p className="text-rose-700 font-cursive text-lg">
              Made with endless love for Dhara
            </p>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          
          <p className="text-rose-600 text-sm">
            © 2025. Built with <Heart className="w-4 h-4 inline text-rose-500 fill-rose-500" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-rose-700 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
