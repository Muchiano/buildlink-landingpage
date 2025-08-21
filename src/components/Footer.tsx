import { Building2, Mail, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <span className="text-xl font-bold">BuildLink</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Connecting Kenya's built environment professionals through a unified digital platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#directory" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Directory
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#resources" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-secondary" />
                <span className="text-primary-foreground/80">hello@buildlink.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 size={16} className="text-secondary" />
                <span className="text-primary-foreground/80">Nairobi, Kenya</span>
              </div>
            </div>
            
            {/* AAK Support */}
            <div className="mt-6 p-3 bg-primary-foreground/10 rounded-lg">
              <p className="text-xs text-primary-foreground/70">
                Supported by the Architectural Association of Kenya (AAK)
              </p>
            </div>
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