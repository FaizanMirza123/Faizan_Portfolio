
import { Code, Book, Briefcase } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: Code,
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 90 },
        { name: "Java", level: 75 },
        { name: "API Development", level: 85 },
        { name: "Full Stack Development", level: 80 }
      ]
    },
    {
      title: "AI & ML",
      icon: Book,
      skills: [
        { name: "Model Training", level: 70 },
        { name: "Data Analysis", level: 75 },
        { name: "Machine Learning", level: 65 },
        { name: "Neural Networks", level: 60 }
      ]
    },
    {
      title: "Security",
      icon: Briefcase,
      skills: [
        { name: "SQL Injection", level: 80 },
        { name: "XSS Prevention", level: 85 },
        { name: "DDoS Protection", level: 75 },
        { name: "Security Testing", level: 80 },
        { name: "Network Security", level: 70 }
      ]
    }
  ];

  const additionalSkills = [
    "Port Forwarding", "Server Hosting", "Firewall Configuration", "TCP Socket Programming", 
    "VPNs", "Encryption", "Traffic Analysis", "Stress Testing", "JMeter"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">Skills & Expertise</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Honed through academic projects, personal explorations, and professional experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title} 
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-electric/10 flex items-center justify-center mr-4 group-hover:bg-electric group-hover:text-white transition-all`}>
                  <category.icon className="w-6 h-6 text-electric group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-electric rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8 text-navy">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white text-navy rounded-full border border-gray-200 text-sm hover:bg-electric hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
