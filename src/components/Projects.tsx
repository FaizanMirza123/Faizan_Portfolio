
const Projects = () => {
  const projects = [
    {
      title: "Security Testing Platform",
      description: "Developed a comprehensive platform for testing SQL injection, XSS vulnerabilities, and DDoS attacks in a controlled environment.",
      tech: ["React", "Node.js", "Security Tools"],
      type: "Security"
    },
    {
      title: "AI Model Training System",
      description: "Created and trained machine learning models for various applications, implementing neural networks and data analysis.",
      tech: ["Python", "TensorFlow", "Data Analysis"],
      type: "AI/ML"
    },
    {
      title: "Dev Blends CRUD Application",
      description: "Internship project involving development of RESTful APIs and database management systems.",
      tech: ["Node.js", "Express", "MongoDB"],
      type: "Full Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-electric bg-electric/10 rounded">
                {project.type}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-navy">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
