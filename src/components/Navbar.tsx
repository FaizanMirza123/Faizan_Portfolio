
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-xl font-bold">Faizan</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="#about" className="text-gray-300 hover:text-electric transition-colors">About</Link>
            <Link to="#skills" className="text-gray-300 hover:text-electric transition-colors">Skills</Link>
            <Link to="#experience" className="text-gray-300 hover:text-electric transition-colors">Experience</Link>
            <Link to="#projects" className="text-gray-300 hover:text-electric transition-colors">Projects</Link>
            <Link to="#contact" className="text-gray-300 hover:text-electric transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
