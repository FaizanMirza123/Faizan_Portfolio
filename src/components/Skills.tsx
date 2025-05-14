
import { Code, Book, Briefcase } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: Code,
      skills: ["React.js", "Node.js", "Java", "API Development", "Full Stack Development"]
    },
    {
      title: "AI & ML",
      icon: Book,
      skills: ["Model Training", "Data Analysis", "Machine Learning", "Neural Networks"]
    },
    {
      title: "Security",
      icon: Briefcase,
      skills: ["SQL Injection", "XSS Prevention", "DDoS Protection", "Security Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-electric mr-2" />
                <h3 className="text-xl font-semibold text-navy">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
