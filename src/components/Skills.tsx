
import { Code, Database, Cloud, Zap, Server, TestTube } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: Server,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js & Express.js", level: 90 },
        { name: "FastAPI & Python", level: 88 },
        { name: "RESTful API Design", level: 92 },
        { name: "WebSocket & Real-time", level: 85 },
        { name: "Microservices", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL & PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Vector Databases", level: 75 },
        { name: "Database Optimization", level: 82 },
        { name: "Query Performance", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-green-500 to-emerald-500",
      skills: [
        { name: "AWS Deployment", level: 85 },
        { name: "Azure & GCP", level: 80 },
        { name: "Docker", level: 88 },
        { name: "CI/CD Pipelines", level: 78 },
        { name: "Cloud Architecture", level: 80 }
      ]
    },
    {
      title: "API & Testing",
      icon: TestTube,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Postman & Thunder Client", level: 92 },
        { name: "Apache JMeter", level: 85 },
        { name: "API Documentation", level: 90 },
        { name: "Performance Testing", level: 82 },
        { name: "Unit Testing", level: 80 }
      ]
    },
    {
      title: "Development Tools",
      icon: Code,
      gradient: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Socket Programming", level: 82 },
        { name: "Multi-Threading", level: 80 },
        { name: "Code Review", level: 85 }
      ]
    },
    {
      title: "Full Stack & AI",
      icon: Zap,
      gradient: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React & JavaScript", level: 82 },
        { name: "AI/ML Integration", level: 78 },
        { name: "Data Processing", level: 80 },
        { name: "Transformer Models", level: 75 },
        { name: "Performance Optimization", level: 85 }
      ]
    }
  ];

  const additionalSkills = [
    "Java", "C++", "Python", "Pandas", "Socket Programming", 
    "Multi-Threading", "SQLite", "Data Structures", "Algorithms",
    "System Design", "API Security", "Load Balancing"
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-navy via-[#1e2432] to-navy relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric/20 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4 text-electric" />
            <span className="text-electric font-semibold text-sm">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-electric to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Comprehensive technical stack built through production experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-electric/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-electric text-sm font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20 hover:bg-electric/20 hover:border-electric/50 hover:scale-105 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Key Strengths Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-electric/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-electric/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-electric mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Backend Architecture</h4>
                  <p className="text-gray-300 text-sm">Designing scalable RESTful APIs and microservices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Database Management</h4>
                  <p className="text-gray-300 text-sm">Optimizing queries and ensuring data integrity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Cloud Deployment</h4>
                  <p className="text-gray-300 text-sm">AWS, Azure, GCP with Docker containerization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-pink-400 mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Performance Optimization</h4>
                  <p className="text-gray-300 text-sm">Reducing costs and improving response times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
