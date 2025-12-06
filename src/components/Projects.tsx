import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ExternalLink, Sparkles, Rocket } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const projects = [
    {
      title: "E-commerce Backend API",
      description: "Full-featured REST API supporting admin and customer frontends with authentication, product management, order processing, and payment integration. Built with FastAPI and deployed with Docker.",
      tech: ["FastAPI", "Docker", "PostgreSQL", "JWT", "Payment Integration"],
      type: "Production",
      link: "breevias.duckdns.org/docs",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: true
    },
    {
      title: "Voice Agent Personal Assistant",
      description: "Real-time voice processing API with WebSocket support for low-latency communication, speech-to-text integration, and context management using FastAPI.",
      tech: ["FastAPI", "WebSocket", "Speech-to-Text", "Real-time Processing"],
      type: "Production",
      link: "fastapi123.duckdns.org/docs",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: true
    },
    {
      title: "Shopify Inventory Analytics SaaS",
      description: "Enterprise SaaS platform with real-time data processing and automated reorder suggestions for Shopify store management. Handles inventory analytics and provides actionable insights.",
      tech: ["Express.js", "Real-time Analytics", "Shopify API", "MongoDB"],
      type: "Production",
      link: "benefab.duckdns.org/docs",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: true
    },
    {
      title: "Voice Agent Admin Panel",
      description: "Administrative dashboard for managing voice agent systems with concurrent request handling and optimized response times. Built for scalability and performance.",
      tech: ["Node.js", "Express.js", "Admin Dashboard", "API Management"],
      type: "Production",
      link: "admin.employai.online/docs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: false
    },
    {
      title: "RAG-based AI Chatbot",
      description: "Currently implementing AI-powered chatbot using Retrieval-Augmented Generation with transformer models and vector databases for enhanced context understanding.",
      tech: ["Python", "Transformers", "Vector DB", "RAG", "AI/ML"],
      type: "In Progress",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: false
    },
    {
      title: "RESTful API Endpoints - Dev Blends",
      description: "Designed and implemented 10+ production-grade RESTful API endpoints with comprehensive testing via Postman, serving live database systems.",
      tech: ["Express.js", "SQL", "Postman", "API Design"],
      type: "Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: false
    }
  ];

  // Get unique types for filtering
  const types = ["All", ...Array.from(new Set(projects.map(p => p.type)))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  // Split projects into featured and others
  const featuredProjects = filteredProjects.slice(0, 3);
  const otherProjects = filteredProjects.slice(3);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric/10 px-4 py-2 rounded-full mb-4">
            <Rocket className="w-4 h-4 text-electric" />
            <span className="text-electric font-semibold text-sm">Live Deployments & Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy via-electric to-navy bg-clip-text text-transparent">
            Key Projects & Deployments
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Production-ready applications serving real users with measurable impact
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all transform hover:scale-105 ${
                activeFilter === type
                  ? "bg-gradient-to-r from-electric to-cyan-500 text-white shadow-lg shadow-electric/30"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {featuredProjects.map((project) => (
            <div key={project.title} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>
              
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                {project.link && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-navy">Live</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-electric bg-electric/10 rounded-full self-start">
                  {project.type}
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-electric font-semibold text-sm hover:gap-2 transition-all mt-auto group/link"
                  >
                    View Live Project 
                    <ExternalLink size={16} className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Carousel */}
        <h3 className="text-2xl font-semibold text-center mb-8 text-navy">More Projects</h3>
        <div className="px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {otherProjects.map((project) => (
                <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col p-1">
                    <div className="h-40 overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-electric bg-electric/10 rounded-full w-fit">
                        {project.type}
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-navy">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
