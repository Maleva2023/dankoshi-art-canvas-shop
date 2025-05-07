
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/d8057495-1977-45bc-a439-2ffd6c675bc1.png" 
            alt="Dankoshi Art Logo" 
            className="h-12 w-auto"
          />
          <div className="font-bold text-lg md:text-2xl">
            <a href="/" className="tracking-wider text-black">
              DANKOSHI<span className="text-white">ART</span>
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white hover:text-white/80 transition-colors text-sm uppercase tracking-wider font-medium">
            About
          </a>
          <a href="#gallery" className="text-white hover:text-white/80 transition-colors text-sm uppercase tracking-wider font-medium">
            Gallery
          </a>
        </div>
        
        <Button 
          asChild 
          className="bg-black hover:bg-gray-800 text-white rounded-none px-6 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg"
        >
          <a 
            href="https://dankoshi-canvas.printify.me/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Shop on Printify
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
