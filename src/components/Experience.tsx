
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

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-navy">{exp.company}</h3>
                <span className="text-electric font-medium">{exp.duration}</span>
              </div>
              <div className="mb-3">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
