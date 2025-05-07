
const ArtistStatement = () => {
  return (
    <section id="about" className="py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <img 
              src="/lovable-uploads/f7fdf728-21b5-4943-8e85-76819c385d95.png" 
              alt="Dankoshi Art" 
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">About the <span className="font-bold">Artist</span></h2>
            
            <div className="w-16 h-[1px] bg-black mb-10"></div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
              Known professionally as Dankoshi, is a contemporary artist whose work 
              explores the delicate balance between chaos and harmony. Drawing inspiration from natural landscapes, 
              urban environments, and the subtle moments of everyday beauty that often go unnoticed, 
              each piece invites viewers into a world of emotion and introspection.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
              "My process begins with an emotion or a memory—something intangible that I'm trying to make 
              visible," says Dankoshi. "I want each canvas to evoke a different feeling, to create a unique 
              energy in the space where it lives."
            </p>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed font-light">
              With a background in both traditional and digital art, Dankoshi's work represents a blend of 
              techniques that create depth, movement, and emotional resonance. The Dankoshi canvas collection 
              was established in 2015 as a way to share these visual journeys with a wider audience.
            </p>
            
            <div className="flex justify-start">
              <span className="inline-block px-6 py-2 border border-black text-xs tracking-[0.2em] uppercase font-light">
                EST. 2015
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStatement;
