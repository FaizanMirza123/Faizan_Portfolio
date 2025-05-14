import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const projects = [
    {
      title: "Security Testing Platform",
      description: "Developed a comprehensive platform for testing SQL injection, XSS vulnerabilities, and DDoS attacks in a controlled environment.",
      tech: ["React", "Node.js", "Security Tools"],
      type: "Security",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "AI Model Training System",
      description: "Created and trained machine learning models for various applications, implementing neural networks and data analysis.",
      tech: ["Python", "TensorFlow", "Data Analysis"],
      type: "AI/ML",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Dev Blends CRUD Application",
      description: "Internship project involving development of RESTful APIs and database management systems.",
      tech: ["Node.js", "Express", "MongoDB"],
      type: "Full Stack",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Weather App",
      description: "Built a self-hosted app where the database was hosted on an online personal computer using MSSQL.",
      tech: ["Java", "MSSQL", "Server Hosting"],
      type: "Full Stack",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Voting App",
      description: "Developed a Tkinter GUI application and hosted its server, using a static IP to connect to a MySQL database.",
      tech: ["Python", "Tkinter", "MySQL"],
      type: "Desktop App",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "LESCO Billing System",
      description: "The server used threading to handle multiple client IP connections via TCP socket programming.",
      tech: ["Socket Programming", "Threading", "TCP/IP"],
      type: "Networking",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Voting System",
      description: "Developed a desktop voting system in Python with a user-friendly Tkinter GUI, integrated with SQL Server.",
      tech: ["Python", "Tkinter", "MSSQL"],
      type: "Desktop App",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Game Server Hosting",
      description: "Hosted game servers, providing multiplayer experiences for users, ensuring robust server management for hosting games.",
      tech: ["Server Management", "Networking", "Game Hosting"],
      type: "Hosting",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Enterprise Software Stress Testing",
      description: "Performed enterprise-level stress testing using Apache JMeter to analyze application performance under high load conditions.",
      tech: ["JMeter", "Performance Testing", "QA"],
      type: "Testing",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">Featured Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here are some projects I've worked on. Each one has helped me grow as a developer and expand my skillset.
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === type
                  ? "bg-electric text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <div key={project.title} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-electric bg-electric/10 rounded-full">
                  {project.type}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-electric font-medium flex items-center text-sm hover:underline mt-auto">
                  View Project <ArrowRight size={16} className="ml-1" />
                </button>
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
