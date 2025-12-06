
import { ArrowRight, Code2, Zap, Cloud, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Expertise",
      description: "Node.js, Express.js, FastAPI",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Database Master",
      description: "SQL, NoSQL, Vector DBs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "AWS, Azure, GCP, Docker",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performance Driven",
      description: "33% Cost Reduction Achieved",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy via-electric to-navy bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Backend Developer with a passion for building scalable, production-ready applications
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Image and quick stats */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-electric to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-2 shadow-xl">
              <div className="bg-gradient-to-br from-navy/90 to-electric/90 rounded-xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold text-electric mb-1">6+</div>
                      <div className="text-gray-300 text-sm">Months Experience</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-cyan-400 mb-1">10+</div>
                      <div className="text-gray-300 text-sm">API Endpoints</div>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <h3 className="text-xl font-bold mb-3">Core Competencies</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-electric rounded-full mr-3"></div>
                        RESTful API Architecture & Design
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        Microservices Development
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Database Optimization & Management
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        Cloud Deployment & DevOps
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                        API Testing & Documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - About content */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4 text-navy flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-electric to-cyan-500 rounded-full mr-3"></span>
                Professional Summary
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Backend Developer with <span className="font-semibold text-electric">6+ months of hands-on experience</span> building 
                scalable RESTful APIs using <span className="font-semibold">Node.js and FastAPI</span>. Proven track record of delivering 
                production-ready applications including voice agent systems, SaaS platforms, and e-commerce solutions.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Currently at <span className="font-semibold text-navy">WeSolvd</span>, where I've architected APIs serving multiple clients 
                and reduced operational costs by <span className="font-semibold text-electric">33%</span> through efficient development and deployment.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Proficient in both SQL and NoSQL databases, cloud deployments (AWS, Azure, GCP), and modern development workflows 
                with Docker. Strong foundation in API design, testing, and optimization with experience in agile methodologies.
              </p>
            </div>
            
            {/* Education Card */}
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-xl p-8 text-white shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-3 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-lg text-electric">Bachelor of Software Engineering</h4>
                      <p className="text-gray-300">FAST-NUCES, Lahore</p>
                    </div>
                    <span className="text-sm bg-electric/20 px-3 py-1 rounded-full">2022-2026</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-400">CGPA</span>
                      <div className="font-bold text-electric">3.00/4.00</div>
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg">
                      <span className="text-sm text-gray-400">Semester</span>
                      <div className="font-bold">7th</div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-4">
                  <h5 className="font-semibold mb-2 text-sm text-gray-300">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "Database Systems", "OS", "Software Engineering", "AI"].map((course) => (
                      <span key={course} className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-bold text-navy mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric to-cyan-500 text-white rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all group"
          >
            Let's Build Something Amazing
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
