import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Target } from "lucide-react";
import dashboardImage from "@/assets/dashboard-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-card min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                #1 Business Intelligence Platform
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Turn Your Business{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Data Into Profitable
              </span>{" "}
              Decisions
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stop guessing and start knowing. Our advanced analytics platform helps you make smarter business decisions with real-time insights, predictive analytics, and actionable data visualization.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">Trusted by 500+ businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">40% avg. ROI increase</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-chart-tertiary" />
                <span className="text-sm font-semibold text-foreground">60% faster decisions</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Analyze My Business
              </Button>
              <Button variant="outline" size="xl">
                See ROI Calculator
              </Button>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={dashboardImage}
                alt="Professional Business Intelligence Dashboard"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;