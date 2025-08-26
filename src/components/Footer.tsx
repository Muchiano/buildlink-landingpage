import { Building2, Mail, Linkedin, X, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
           <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/0da7972b-b02a-46e2-be61-3918d1873dda.png" 
              alt="BuildLink Logo" 
              className="w-full h-12"
            />
            <span className="text-xl font-bold text-primary text-white">BuildLink</span>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-6">
              <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                About
              </a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Contact
              </a>
              <a href="#blog" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Blog
              </a>
              <a href="#terms" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                Privacy
              </a>
            </div>
          </div>

          {/* Contact Icons */}
          <div className="flex justify-end space-x-4">
            <a href="mailto:hello@buildlink.co.ke" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <X size={20} />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} BuildLink. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;