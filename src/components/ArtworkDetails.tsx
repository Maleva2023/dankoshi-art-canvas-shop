
import { Button } from "@/components/ui/button";

const ArtworkDetails = () => {
  return (
    <section id="artwork-details" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">Artwork <span className="font-bold">Details</span></h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
              Each Dankoshi canvas print represents a journey through color and emotion, 
              capturing moments of introspection and revelation. The artwork invites viewers 
              to discover their own interpretations and connections.
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl font-medium mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black mt-2 mr-3"></span>
                  <span className="text-gray-700">Unique coating for high-quality, vibrant images</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black mt-2 mr-3"></span>
                  <span className="text-gray-700">Sustainable, FSC-certified wooden frame</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black mt-2 mr-3"></span>
                  <span className="text-gray-700">Non-toxic, non-hazardous latex inks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black mt-2 mr-3"></span>
                  <span className="text-gray-700">Stable hanging with rubber dots for security</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black mt-2 mr-3"></span>
                  <span className="text-gray-700">Durable cotton and polyester composite fabric</span>
                </li>
              </ul>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="mr-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider">Starting at</p>
                <p className="text-3xl font-light">$94.50</p>
              </div>
              <Button 
                asChild 
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-none text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:shadow-lg ml-auto"
              >
                <a 
                  href="https://dankoshi-canvas.printify.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Add to Cart
                </a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/lovable-uploads/e6136f3b-b2ff-48a8-9fe9-e79bf648a18c.png" 
                alt="Featured Dankoshi Artwork" 
                className="w-full h-auto shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkDetails;
