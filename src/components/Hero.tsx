import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const roles = ["Software Engineer", "Security Enthusiast", "Full-stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  
  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-navy text-white pt-16 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <p className="inline-block px-3 py-1 text-sm bg-electric/20 text-electric rounded-full mb-4">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all">
            <div className="relative h-[4.5rem] md:h-[5.5rem] lg:h-[7rem] overflow-hidden">
              {roles.map((role, index) => (
                <div 
                  key={index} 
                  className={`absolute w-full transition-all duration-500 ${
                    index === roleIndex 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <span>{role}</span>
                </div>
              ))}
            </div>
            <span className="block text-electric mt-2">Turning Ideas Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Specialized in building robust applications, securing systems, and creating innovative solutions to complex problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="bg-electric text-white px-8 py-4 rounded-lg hover:bg-electric/80 transition-all flex items-center justify-center group"
            >
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#projects" 
              className="border border-electric text-electric px-8 py-4 rounded-lg hover:bg-electric/10 transition-all"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg hover:bg-white/5 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;