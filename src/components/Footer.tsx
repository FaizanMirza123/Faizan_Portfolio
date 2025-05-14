
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-electric">F</span>aizan
            </h3>
            <p className="text-gray-400 mb-6">
              Software Engineer & Security Enthusiast specializing in building robust and secure applications.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/FaizanMirza123" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-electric flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com/in/faizan-mirza-6a0199247" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-electric flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:l227925@lhr.nu.edu.pk" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-electric flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-electric transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-electric transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-electric transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-electric transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-electric transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-electric" />
                <span className="text-gray-400">l227925@lhr.nu.edu.pk</span>
              </li>
              <li className="text-gray-400">Johar Town, Lahore 54000</li>
              <li className="text-gray-400">Pakistan</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Faizan Mirza. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Software Engineer | FAST-NUCES Lahore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
