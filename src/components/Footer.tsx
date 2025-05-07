
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-light tracking-wider mb-4">DANKOSHI<span className="text-gray-400">ART</span></h2>
            <p className="text-gray-400 text-sm tracking-wide font-light mb-6">
              Transforming spaces through art that moves you emotionally and aesthetically.
            </p>
            <p className="text-gray-400 text-sm">Contact: info@dankoshiart.com</p>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About the Artist</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</a></li>
              <li><a href="https://dankoshi-canvas.printify.me/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://dankoshi-canvas.printify.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wider border-b border-white pb-1"
              >
                Printify Store
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 font-light tracking-wider mb-4 md:mb-0">© {currentYear} Dankoshi Art. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-300">Terms</a>
            <a href="https://dankoshi-canvas.printify.me/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-gray-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
