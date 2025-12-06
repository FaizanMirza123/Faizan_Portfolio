import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const roles = ["Backend Developer", "API Architect", "Cloud Engineer", "Full-Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-[#0f1420] to-navy text-white pt-16 relative overflow-hidden">
      {/* Animated background with mouse parallax */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-electric/20 rounded-full blur-[120px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px] animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '1s'
          }}
        />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" 
          style={{ animationDelay: '2s' }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          {/* Badge with animation */}
          <div className="inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-electric/30 to-cyan-500/30 text-electric rounded-full mb-6 border border-electric/30 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            Available for Backend Development Opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all">
            <div className="mb-4">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Hi, I'm{" "}
              </span>
              <span className="bg-gradient-to-r from-electric via-cyan-400 to-electric bg-clip-text text-transparent animate-pulse">
                Faizan Saleh
              </span>
            </div>
            
            <div className="relative h-[5rem] md:h-[6rem] lg:h-[8rem] overflow-hidden">
              {roles.map((role, index) => (
                <div 
                  key={index} 
                  className={`absolute w-full transition-all duration-700 ${
                    index === roleIndex 
                      ? "opacity-100 translate-y-0 scale-100" 
                      : "opacity-0 translate-y-10 scale-95"
                  }`}
                >
                  <span className="bg-gradient-to-r from-electric via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Building <span className="text-electric font-semibold">scalable RESTful APIs</span> with Node.js & FastAPI
            <br />
            <span className="text-gray-400">6+ months crafting production-ready solutions | AWS, Azure & GCP deployments</span>
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-electric">6+</div>
              <div className="text-sm text-gray-400">Months Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-electric">10+</div>
              <div className="text-sm text-gray-400">Projects Deployed</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/10">
              <div className="text-3xl font-bold text-electric">33%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-electric to-cyan-500 text-white px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] transition-all flex items-center justify-center group font-semibold"
            >
              <Mail className="mr-2" size={20} />
              Get in Touch
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#projects" 
              className="bg-white/10 backdrop-blur-sm border border-electric/50 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              className="bg-white/5 backdrop-blur-sm border border-white/20 text-gray-300 px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2" size={18} />
              Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/FaizanMirza123" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-electric transition-all hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/faizan-mirza-6a0199247" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-electric transition-all hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="mailto:faizanmirza4587@gmail.com"
               className="text-gray-400 hover:text-electric transition-all hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;