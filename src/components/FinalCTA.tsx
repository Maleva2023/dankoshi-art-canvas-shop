
import { Button } from "@/components/ui/button";
import { CreditCard, Globe, ShieldCheck } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-wide">Don't Miss Out on <span className="font-bold">Dankoshi's Art!</span></h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Bring home a piece that will transform your space and inspire conversations for years to come.
        </p>
        
        <div className="flex justify-center mb-12">
          <Button 
            asChild 
            className="bg-white hover:bg-gray-100 text-black text-base px-12 py-7 rounded-none uppercase tracking-widest hover:shadow-lg transition-all"
          >
            <a 
              href="https://dankoshi-canvas.printify.me/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Buy Now
            </a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Secure Payment</p>
            <div className="flex gap-3 justify-center">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white/80" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-white/80" />
              </div>
            </div>
          </div>
          
          <div className="h-12 w-px bg-gray-700 hidden md:block"></div>
          
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Shipping Worldwide</p>
            <div className="flex gap-2 items-center justify-center">
              <Globe className="h-4 w-4 text-white/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
