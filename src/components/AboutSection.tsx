import { Card } from "@/components/ui/card";
import { Building2, Users2, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">BuildLink</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BuildLink is a digital ecosystem designed for architects, engineers, planners, 
                students, and construction professionals across Kenya. We're building a unified 
                space to network, learn, showcase, and grow the industry.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users2 className="text-primary" size={20} />
                </div>
                <span className="font-medium">#ProfessionalProfiles</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Building2 className="text-secondary" size={20} />
                </div>
                <span className="font-medium">#ProjectShowcase</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="text-accent" size={20} />
                </div>
                <span className="font-medium">#KnowledgeExchange</span>
              </div>
            </div>
          </div>

          {/* Mockup/Illustration */}
          <div className="relative">
            <Card className="p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <div className="space-y-6">
                <div className="h-40 bg-hero-gradient rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <Building2 size={48} className="mx-auto mb-4" />
                    <p className="font-semibold">BuildLink Platform</p>
                    <p className="text-sm opacity-90">Coming Soon</p>
                  </div>
                </div>
                
                {/* Mock interface elements */}
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>

                <div className="flex space-x-3">
                  <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users2 className="text-primary" size={24} />
                  </div>
                  <div className="h-16 w-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="text-secondary" size={24} />
                  </div>
                  <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="text-accent" size={24} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;