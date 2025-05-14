
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Faizan demonstrated exceptional technical skills during the hackathon. His understanding of cybersecurity concepts was impressive.",
      author: "Ahmed Khan",
      position: "Coding Competition Judge",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      text: "Working with Faizan was a pleasure. He's very knowledgeable about backend development and always delivered quality work.",
      author: "Zahra Malik",
      position: "Dev Blends, Project Manager",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      text: "One of the most dedicated students I've mentored. Faizan has a natural talent for problem-solving and a passion for learning.",
      author: "Dr. Usman Ali",
      position: "FAST-NUCES, Professor",
      avatar: "https://i.pravatar.cc/150?img=68"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">What People Say</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Feedback from people I've worked with and learned from throughout my journey.
        </p>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                  <div className="mx-2">
                    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 h-full">
                      <div className="flex items-center mb-6">
                        <div className="flex-shrink-0 mr-4">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy">{testimonial.author}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 mb-4">{testimonial.text}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
