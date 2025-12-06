import { Briefcase, Calendar, MapPin, TrendingUp, Sparkles } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "WeSolvd",
      position: "Full Stack Developer (Backend Focus)",
      duration: "June 2024 - Present",
      location: "Johar Town, Lahore",
      type: "Full-time",
      color: "from-blue-600 to-cyan-500",
      achievements: [
        "Architected and deployed RESTful APIs using Express.js and FastAPI for production applications",
        "Developed Shopify inventory analytics SaaS platform with real-time data processing",
        "Built voice agent API systems handling concurrent requests with optimized response times",
        "Reduced client operational costs by 33% through efficient development",
        "Currently implementing AI-powered RAG-based chatbot with transformer models"
      ],
      tags: ["Express.js", "FastAPI", "Docker", "AWS", "Real-time Processing"]
    },
    {
      company: "Dev Blends",
      position: "Backend Development Intern",
      duration: "June 2024 - Aug 2024",
      location: "Mustafa Town, Lahore",
      type: "Internship",
      color: "from-purple-600 to-pink-500",
      achievements: [
        "Designed and implemented 10+ RESTful API endpoints using Express.js",
        "Managed production SQL database with 1,000+ records",
        "Continued contributing to 2 live database systems post-internship",
        "Gained hands-on experience in API design patterns and database optimization"
      ],
      tags: ["Node.js", "Express.js", "SQL", "Postman", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-electric" />
            <span className="text-electric font-semibold text-sm">Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-navy via-electric to-navy bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Building production-ready solutions and driving measurable business impact
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric via-purple-500 to-transparent hidden md:block"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="absolute left-0 top-0 md:left-8 md:-translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="ml-24 md:ml-24">
                  <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                    
                    <div className="p-8 relative z-10">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-2xl font-bold text-navy">{exp.company}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                              {exp.type}
                            </span>
                          </div>
                          <p className="text-lg font-semibold text-electric mb-2">{exp.position}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        {index === 0 && (
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 rounded-lg text-white font-semibold text-sm shadow-md animate-pulse">
                            Current Role
                          </div>
                        )}
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-navy mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-electric" />
                          Key Achievements & Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></div>
                              <span className="flex-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-electric/10 hover:text-electric transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-navy">Measurable Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl font-bold mb-2">33%</div>
              <div className="text-blue-100 font-medium">Cost Reduction</div>
              <div className="text-sm text-blue-50 mt-2">Optimized workflows</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-purple-100 font-medium">API Endpoints</div>
              <div className="text-sm text-purple-50 mt-2">Production-grade</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="text-5xl font-bold mb-2">1K+</div>
              <div className="text-orange-100 font-medium">Database Records</div>
              <div className="text-sm text-orange-50 mt-2">Managed integrity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
