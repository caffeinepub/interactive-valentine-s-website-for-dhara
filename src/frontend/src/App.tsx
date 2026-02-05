import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import ValentineProposal from './components/ValentineProposal';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';
import FloatingMessages from './components/FloatingMessages';
import MusicPlayer from './components/MusicPlayer';
import Sparkles from './components/Sparkles';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
        <FloatingHearts />
        <Sparkles />
        <FloatingMessages />
        <MusicPlayer />
        
        <Header />
        
        <main className="relative z-10">
          <section id="home">
            <Hero />
          </section>
          
          <section id="letter">
            <LoveLetter />
          </section>
          
          <section id="valentine">
            <ValentineProposal />
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
