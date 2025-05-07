
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import type { ArtworkProps } from "@/types";

const GalleryPreview = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  const featuredArt: ArtworkProps[] = [
    {
      id: 1,
      title: "Geometric Portrait",
      imageUrl: "/lovable-uploads/eae53bcf-5160-4bd9-bdd2-3920b3936d4a.png",
      description: "Vibrant exploration of fragmented identity"
    },
    {
      id: 2,
      title: "Heart and Soul",
      imageUrl: "/lovable-uploads/9ba7d43b-6c77-461b-9b91-1a7342afd468.png",
      description: "A surreal blending of emotion and form"
    },
    {
      id: 3,
      title: "Fragmented Identity",
      imageUrl: "/lovable-uploads/3d62907a-07a2-405d-8bbc-c015fdee67d7.png",
      description: "The mechanical nature of consciousness"
    }
  ];

  const lifestyleShots = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1499916078039-922301b0eb9b?auto=format&fit=crop&q=80&w=800",
      alt: "Canvas in living room"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
      alt: "Canvas in office space"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=800",
      alt: "Canvas in bedroom"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=800",
      alt: "Canvas in hallway"
    }
  ];

  return (
    <section id="gallery" className="py-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-light mb-2 text-center tracking-wide">Image <span className="font-bold">Gallery</span></h2>
        <p className="text-gray-600 text-center mb-16 font-light">Explore Dankoshi's authentic artwork collection</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredArt.map((artwork) => (
            <div
              key={artwork.id}
              className="relative overflow-hidden group rounded-sm shadow-md"
              onMouseEnter={() => setHoveredId(artwork.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[3/4] bg-gray-100">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width="800"
                  height="1000"
                />
              </div>
              <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500 ${
                isMobile || hoveredId === artwork.id ? "opacity-100" : "opacity-0"
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
                    <div className="overflow-hidden rounded-sm shadow-md">
                      <img 
                        src={shot.imageUrl} 
                        alt={shot.alt}
                        className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width="400"
                        height="400"
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
