
const ArtistStatement = () => {
  return (
    <section id="about" className="py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-wide">The <span className="font-bold">Dankoshi</span> Vision</h2>
          
          <div className="w-16 h-[1px] bg-black mx-auto mb-10"></div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-light">
            At Dankoshi Art, we believe in the transformative power of visual expression. Each canvas 
            is a journey into emotion, color, and form — created to bring unique energy into your space.
          </p>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed font-light">
            Our pieces explore the delicate balance between chaos and harmony, drawing inspiration from 
            natural landscapes, urban environments, and the subtle moments of everyday beauty that often 
            go unnoticed.
          </p>
          
          <div className="flex justify-center">
            <span className="inline-block px-6 py-2 border border-black text-xs tracking-[0.2em] uppercase font-light">
              EST. 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStatement;
