
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Have a project in mind or want to explore collaboration opportunities? I'm just a message away!
        </p>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-electric mr-2" />
              <h3 className="text-xl font-semibold">Contact Information</h3>
            </div>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:faizanmirza4587@gmail.com" className="hover:text-electric transition-colors">
                  faizanmirza4587@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+923009411439" className="hover:text-electric transition-colors">
                  +92 300 9411439
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>Lahore, Pakistan</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Portfolio</p>
                <a href="https://github.com/FaizanMirza123" target="_blank" rel="noopener noreferrer" className="hover:text-electric transition-colors">
                  GitHub Portfolio
                </a>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-3">Social Media</p>
              <div className="flex space-x-4">
                <a href="https://github.com/FaizanMirza123" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-electric transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/faizan-mirza-6a0199247" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-electric transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-electric text-white"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-electric text-white"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-electric text-white"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-electric text-white py-3 px-4 rounded-lg hover:bg-electric/90 transition-colors flex items-center justify-center"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Send Message <Send size={18} className="ml-2" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
