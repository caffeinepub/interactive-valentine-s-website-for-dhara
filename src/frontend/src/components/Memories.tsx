import { Heart } from 'lucide-react';

export default function Memories() {
  const memories = [
    {
      src: '/assets/generated/memory-1.dim_800x600.png',
      alt: 'Beautiful memory together',
      caption: 'Our special moments'
    },
    {
      src: '/assets/generated/memory-2.dim_800x600.png',
      alt: 'Cherished memory',
      caption: 'Forever in my heart'
    },
    {
      src: '/assets/generated/memory-3.dim_800x600.png',
      alt: 'Precious memory',
      caption: 'Love and laughter'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-cursive text-rose-600">
              Our Memories
            </h2>
            <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
          </div>
          <p className="text-xl text-rose-700 font-light">
            Every moment with you is a treasure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-[4/3] relative bg-gradient-to-br from-rose-100 to-pink-100">
                <img
                  src={memory.src}
                  alt={memory.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-rose-900/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-cursive text-xl text-center">
                  {memory.caption}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <img
            src="/assets/generated/floral-corner-gold-transparent.dim_256x256.png"
            alt="Floral decoration"
            className="w-32 h-32 mx-auto opacity-60 animate-pulse-slow"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
