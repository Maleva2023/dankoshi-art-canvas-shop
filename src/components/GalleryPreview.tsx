
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { ArtworkProps } from "@/types";

const GalleryPreview = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const featuredArt: ArtworkProps[] = [
    {
      id: 1,
      title: "Cosmic Dreams",
      imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80",
      description: "An exploration of celestial harmony"
    },
    {
      id: 2,
      title: "Rhythm & Flow",
      imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80",
      description: "Organic movements in minimalist form"
    },
    {
      id: 3,
      title: "Textural Study",
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
      description: "Layers of texture creating depth"
    }
  ];

  return (
    <section id="gallery" className="py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-light mb-2 text-center tracking-wide">Featured <span className="font-bold">Works</span></h2>
        <p className="text-gray-600 text-center mb-16 font-light">A glimpse into the Dankoshi collection</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredArt.map((artwork) => (
            <div
              key={artwork.id}
              className="relative overflow-hidden group"
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 ${
                hoveredId === artwork.id ? "opacity-100" : "opacity-0"
              } bg-gradient-to-t from-black/80 to-transparent`}>
                <h3 className="text-white text-xl font-light tracking-wider">{artwork.title}</h3>
                <p className="text-white/80 mt-2 font-light">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            asChild 
            className="bg-black hover:bg-gray-800 text-white px-10 py-6 rounded-none text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg"
          >
            <a 
              href="https://dankoshi-canvas.printify.me/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Full Collection
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
