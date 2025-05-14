
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Dev Blends",
      position: "Node.js Intern",
      duration: "3 months",
      location: "Faisal Town, Lahore",
      responsibilities: [
        "Building CRUD applications using MS SQL",
        "Hosted and managed servers through networking and deployment using forwarding and Routing",
        "Gained hands-on experience in RESTful APIs like POSTMAN and deployment processes"
      ]
    }
  ];

  const activities = [
    {
      title: "HackaThon Participant - FAST Coding Competition",
      year: "2024",
      description: [
        "Solved 2 out of 3 challenges, ranking in the top 10 teams among 50+ participants.",
        "Collaborated under time pressure to build innovative solutions."
      ]
    },
    {
      title: "Team Leader – SQA Tool Case Study",
      year: "2024",
      description: [
        "Led a team of 5 in selecting and presenting Apache JMeter for software quality assurance.",
        "Coordinated research, reporting, and final presentation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">Work Experience</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Professional experiences that have shaped my skills and approach to software development.
        </p>

        <div className="max-w-3xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-navy border-b border-gray-200 pb-2">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 pb-10">
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-electric flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <h4 className="text-xl font-bold text-navy">{exp.company}</h4>
                    <span className="text-electric font-medium">{exp.duration}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold text-gray-800">{exp.position}</span>
                    <span className="mx-2 text-gray-400">|</span>
                    <span className="text-gray-600">{exp.location}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-700">{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Leadership & Activities */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-navy border-b border-gray-200 pb-2">Leadership & Activities</h3>
            {activities.map((activity, index) => (
              <div key={index} className="relative pl-10 pb-10">
                {/* Timeline dot and line */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-navy flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                {index < activities.length - 1 && (
                  <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <h4 className="text-lg font-semibold text-navy">{activity.title}</h4>
                    <span className="text-gray-500">{activity.year}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {activity.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
