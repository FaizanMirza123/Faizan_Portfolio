
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            I'm a Software Engineering student at FAST-NUCES Lahore, passionate about building innovative solutions and exploring the intersections of software development and cybersecurity.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With hands-on experience in full-stack development, AI/ML, and security testing, I bring a comprehensive understanding of modern software development practices and security principles to every project.
          </p>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy">Education</h3>
            <p className="text-gray-700">
              Bachelor's in Software Engineering<br />
              FAST-NUCES Lahore<br />
              Expected Graduation: 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
