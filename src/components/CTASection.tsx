import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rotate-45"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rotate-45"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rotate-12"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Users size={32} />
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Building size={32} />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join Kenya's First Dedicated Platform
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Connect with professionals, showcase your work, and unlock opportunities 
            in Kenya's built environment industry.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-sm opacity-80">To Join</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Access</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold mb-2">Growing</div>
              <div className="text-sm opacity-80">Community</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-xl"
            >
              Get Started Free
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-6 border-2 border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>

          {/* Small print */}
          <p className="text-sm opacity-70 mt-8">
            No credit card required • Join in under 2 minutes • Trusted by 50+ professionals
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;