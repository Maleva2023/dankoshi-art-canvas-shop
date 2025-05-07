
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
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

  const lifestyleShots = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&q=80",
      alt: "Canvas in living room"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
      alt: "Canvas in office space"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80",
      alt: "Canvas in bedroom"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80",
      alt: "Canvas in hallway"
    }
  ];

  return (
    <section id="gallery" className="py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-light mb-2 text-center tracking-wide">Image <span className="font-bold">Gallery</span></h2>
        <p className="text-gray-600 text-center mb-16 font-light">Explore Dankoshi's artwork in different settings</p>
        
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
        
        <div className="mb-16">
          <h3 className="text-2xl font-light text-center mb-10">Lifestyle <span className="font-medium">Shots</span></h3>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {lifestyleShots.map((shot) => (
                <CarouselItem key={shot.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="overflow-hidden">
                      <img 
                        src={shot.imageUrl} 
                        alt={shot.alt}
                        className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
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
