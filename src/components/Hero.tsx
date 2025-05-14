
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-navy text-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Software Engineer & Security Enthusiast
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in">
          Turning Complex Problems into Elegant Solutions
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-electric text-white px-6 py-3 rounded-lg hover:bg-electric/80 transition-colors">
            Get in Touch
          </a>
          <a href="#projects" className="border border-electric text-electric px-6 py-3 rounded-lg hover:bg-electric/10 transition-colors">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
