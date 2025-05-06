
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80" 
          alt="Featured Artwork" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-xl">
          <h1 
            className={`text-4xl md:text-6xl font-light text-white mb-6 transform transition-all duration-700 tracking-wide ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Experience Art <br />
            <span className="font-bold">That Moves You</span>
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-white/90 mb-10 transform transition-all duration-700 delay-100 font-light ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Unique canvas prints that transform your space with emotion and color
          </p>
          
          <div className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-200 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <Button 
              asChild 
              className="bg-white hover:bg-gray-100 text-black text-sm px-8 py-6 rounded-none uppercase tracking-widest hover:shadow-lg transition-all"
            >
              <a 
                href="https://dankoshi-canvas.printify.me/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Shop Collection
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 text-sm px-8 py-6 rounded-none uppercase tracking-widest"
            >
              <a href="#gallery">
                Explore Art
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
