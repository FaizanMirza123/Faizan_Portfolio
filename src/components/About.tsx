
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">About Me</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Here's a bit about my background and what drives me.
        </p>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-electric/20 rounded-full"></div>
            <div className="relative z-10 bg-gray-100 rounded-lg p-1">
              <img 
                src="https://custom-doodle.com/wp-content/uploads/doodle/auto-draft/oo-ee-a-e-a-cat-meme-doodle.gif" 
                alt="Software Engineer" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/10 rounded-full"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-navy relative">
              <span className="inline-block relative">
                Software Engineering Student
                <span className="absolute bottom-0 left-0 w-full h-1 bg-electric"></span>
              </span>
            </h3>
            
            <p className="text-gray-700 mb-6">
              I'm a Software Engineering student at FAST-NUCES Lahore, passionate about building innovative solutions and exploring the intersections of software development and cybersecurity.
            </p>
            
            <p className="text-gray-700 mb-6">
              With hands-on experience in full-stack development, AI/ML, and security testing, I bring a comprehensive understanding of modern software development practices and security principles to every project.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-navy">Education</h3>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2Z"/>
                    <path d="M15.495 3.465C14.677 1.759 13.746.187 12.342.012 11.688-.048 7.854.038 7.5.06v.003C7.147.038 3.312-.048 2.658.012 1.254.187.323 1.76-.495 3.465c-.95 1.964-2 5.9 3.5 9.85.8.565 1.617 1.071 2.495 1.535v.003c.878-.464 1.695-.97 2.495-1.535 5.5-3.95 4.45-7.885 3.5-9.85ZM13.995 4c-.952 1.975-3.667 5.274-6.495 7.774C4.672 9.274 1.957 5.975 1.005 4c0 0 0-1 1.75-1h9.49c1.75 0 1.75 1 1.75 1Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-navy font-semibold">Bachelor's in Software Engineering</p>
                  <p className="text-gray-700">FAST-NUCES Lahore</p>
                  <p className="text-gray-500 text-sm">Expected Graduation: 2024</p>
                  <p className="text-gray-500 text-sm">GPA: 2.92 / 4.00</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy font-semibold">Intermediate and Matric</p>
                    <p className="text-gray-500 text-sm">Intermediate: 84%</p>
                    <p className="text-gray-500 text-sm">Matric: 89%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center mt-6 text-electric hover:underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Resume <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
