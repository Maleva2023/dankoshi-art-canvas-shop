
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "The canvas print exceeded my expectations. The colors are so vibrant and it's become the focal point of my living room.",
      author: "Sarah T.",
      location: "New York"
    },
    {
      id: 2,
      text: "I've purchased art from many different artists, but Dankoshi's work has a unique energy that transforms the entire room.",
      author: "Michael R.",
      location: "Los Angeles"
    },
    {
      id: 3,
      text: "The quality of the canvas is exceptional. The print arrived perfectly packaged and was easy to hang. Couldn't be happier!",
      author: "Emma L.",
      location: "Chicago"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-light mb-2 text-center tracking-wide">Customer <span className="font-bold">Testimonials</span></h2>
        <p className="text-gray-600 text-center mb-16 font-light">What collectors are saying about Dankoshi's art</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 mr-1">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-black">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
