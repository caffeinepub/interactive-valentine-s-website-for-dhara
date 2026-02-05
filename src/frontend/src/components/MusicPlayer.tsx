import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<{ oscillator: OscillatorNode; gainNode: GainNode } | null>(null);

  // Get audio source from environment variable (optional)
  const audioSrc = import.meta.env.VITE_HUM_TERE_PYAAR_MEIN_AUDIO_SRC || '';
  const hasValidAudioSrc = audioSrc && audioSrc.trim() !== '';

  // Initialize audio element if we have a valid source
  useEffect(() => {
    if (hasValidAudioSrc && !audioElementRef.current) {
      const audio = new Audio(audioSrc);
      audio.loop = true;
      audio.volume = (isMuted ? 0 : volume) / 100;
      audioElementRef.current = audio;
    }

    return () => {
      if (audioElementRef.current) {
        audioElementRef.current.pause();
        audioElementRef.current = null;
      }
    };
  }, [hasValidAudioSrc, audioSrc]);

  // Handle HTMLAudioElement playback
  useEffect(() => {
    if (!hasValidAudioSrc || !audioElementRef.current) return;

    const audio = audioElementRef.current;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.error('Audio playback failed:', err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [isPlaying, hasValidAudioSrc]);

  // Update HTMLAudioElement volume
  useEffect(() => {
    if (audioElementRef.current) {
      audioElementRef.current.volume = (isMuted ? 0 : volume) / 100;
    }
  }, [volume, isMuted]);

  // Fallback: Web Audio API tone playback (when no valid audio source)
  useEffect(() => {
    if (hasValidAudioSrc) return; // Skip tone if we have a real audio source

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const audioContext = audioContextRef.current;

    const createRomanticTone = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 440; // A4 note
      gainNode.gain.value = 0;
      
      return { oscillator, gainNode };
    };

    if (isPlaying && !isMuted) {
      const { oscillator, gainNode } = createRomanticTone();
      oscillatorRef.current = { oscillator, gainNode };
      
      oscillator.start();
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume / 500, audioContext.currentTime + 0.1);
      
      return () => {
        if (oscillatorRef.current) {
          const { oscillator: osc, gainNode: gain } = oscillatorRef.current;
          gain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
          osc.stop(audioContext.currentTime + 0.1);
          oscillatorRef.current = null;
        }
      };
    } else {
      // Stop any playing oscillator
      if (oscillatorRef.current) {
        const { oscillator: osc, gainNode: gain } = oscillatorRef.current;
        gain.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.1);
        osc.stop(audioContext.currentTime + 0.1);
        oscillatorRef.current = null;
      }
    }
  }, [isPlaying, volume, isMuted, hasValidAudioSrc]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
    if (value[0] > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card 
        className={`bg-white/95 backdrop-blur-sm border-2 border-rose-200 shadow-xl transition-all duration-300 ${
          isExpanded ? 'w-80' : 'w-auto'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="p-4">
          <div className="flex items-center gap-3">
            <Button
              size="icon"
              onClick={togglePlay}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full shadow-lg shrink-0"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-white" />
              ) : (
                <Play className="w-5 h-5 fill-white" />
              )}
            </Button>

            {isExpanded ? (
              <div className="flex flex-col gap-2 flex-1 animate-in slide-in-from-right duration-300">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-rose-500 shrink-0" />
                  <p className="text-sm font-medium text-rose-900 line-clamp-1">
                    Hum Tere Pyaar Mein — Lata Mangeshkar
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={toggleMute}
                    className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 shrink-0 h-8 w-8"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </Button>
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    onValueChange={handleVolumeChange}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                </div>
              </div>
            ) : (
              <span className="text-sm text-rose-600 font-medium whitespace-nowrap">
                {isPlaying ? '♪ Playing' : 'Music'}
              </span>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
