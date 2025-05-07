
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
              Daniel (alias Dankoshi)
              Born near Madrid, grew up as the fifth of eight siblings in a modest family. His name reflects his lifelong passion for martial arts, combining "Dan" from his name and "Koshi" in tribute to Gichin Funakoshi, the founder of Shoto-kan karate.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
              Later in life, Dankoshi discovered his love for painting, inspired by artist and priest Don Francisco Hernández. Starting as a self-taught painter, he drew influence from Kandinsky, exploring bold forms and emotional expression through oil on canvas.
            </p>
            
            <p className="text-lg text-gray-700 mb-12 leading-relaxed font-light">
              Dankoshi's art delves into life's raw emotions and daily realities, transforming them into visual stories. Each piece invites the viewer to uncover hidden characters, feelings, and narratives, sparking imagination and personal connection.
              Since 2015, the Dankoshi canvas collection has shared these journeys with the world, always reminding us of his motto: <span className="font-bold">"Put a Dankoshi in your life."</span>
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
