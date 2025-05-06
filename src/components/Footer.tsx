
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-light tracking-wider">DANKOSHI<span className="text-gray-400">ART</span></h2>
            <p className="text-gray-400 mt-2 text-sm tracking-wide font-light">Transforming spaces through art</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Twitter</a>
              <a 
                href="https://dankoshi-canvas.printify.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Printify Store
              </a>
            </div>
            <p className="text-xs text-gray-500 font-light tracking-wider">© {currentYear} Dankoshi Art. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
