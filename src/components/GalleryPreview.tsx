
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
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">Featured Works</h2>
        <p className="text-gray-600 text-center mb-12">A glimpse into the Dankoshi collection</p>
        
        <div className="art-grid mb-12">
          {featuredArt.map((artwork) => (
            <div
              key={artwork.id}
              className="relative overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="art-image w-full h-[400px] object-cover"
              />
              <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                hoveredId === artwork.id ? "opacity-100" : "opacity-0"
              }`}>
                <h3 className="text-white text-xl font-medium">{artwork.title}</h3>
                <p className="text-white/80 mt-2">{artwork.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            asChild 
            className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-md"
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
