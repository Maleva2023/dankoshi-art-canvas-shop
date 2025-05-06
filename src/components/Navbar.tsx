
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
            <a href="/" className="tracking-wide">
              DANKOSHI<span className="text-gray-500">ART</span>
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-black transition-colors">
            About
          </a>
          <a href="#gallery" className="text-gray-600 hover:text-black transition-colors">
            Gallery
          </a>
        </div>
        
        <Button 
          asChild 
          className="bg-black hover:bg-gray-800 text-white rounded-md"
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
