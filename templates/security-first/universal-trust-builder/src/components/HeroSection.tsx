import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Star, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-security-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(59_130_246)_1px,_transparent_0)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1 bg-security/10 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-security" />
                <span className="text-security font-semibold">Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center space-x-1 bg-primary/10 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Trusted by 10,000+ Businesses</span>
              </div>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Protect Your Business &{" "}
                <span className="bg-gradient-to-r from-primary to-security bg-clip-text text-transparent">
                  Customer Data
                </span>{" "}
                with Enterprise-Grade Security
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Build customer trust and ensure compliance with comprehensive cybersecurity solutions 
                tailored for your industry. Protect what matters most with 24/7 monitoring and expert support.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-security">SOC 2</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-security">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-security">Bank-Level</div>
                <div className="text-sm text-muted-foreground">Security</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                <Shield className="w-5 h-5 mr-2" />
                Get Security Assessment
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Security Features
              </Button>
            </div>

            {/* Industry Examples */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Trusted by businesses in:</p>
              <div className="flex flex-wrap gap-2">
                {["Healthcare", "Finance", "Legal", "Retail", "Manufacturing"].map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-muted rounded-full text-sm text-foreground font-medium"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Security Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Security Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-security rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Zero Breaches</div>
                  <div className="text-sm text-security">100% Protected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;