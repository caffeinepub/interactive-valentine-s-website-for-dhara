import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  activeSection: 'home' | 'letter' | 'valentine';
  setActiveSection: (section: 'home' | 'letter' | 'valentine') => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as const, label: 'Home' },
    { id: 'valentine' as const, label: 'Be My Valentine?' },
    { id: 'letter' as const, label: 'Love Letter' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-rose-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="relative">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
              <img 
                src="/assets/generated/dhara-monogram-transparent.dim_200x200.png" 
                alt="Dhara" 
                className="absolute inset-0 w-8 h-8 object-contain opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <span className="text-2xl font-cursive text-rose-600 font-bold">For Dhara</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`font-medium transition-all duration-300 hover:text-rose-600 ${
                  activeSection === item.id
                    ? 'text-rose-600 border-b-2 border-rose-500'
                    : 'text-rose-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-rose-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-rose-100 text-rose-700 font-semibold'
                    : 'text-rose-800 hover:bg-rose-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
