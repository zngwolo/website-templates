import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-operations-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            <div className="space-y-8">
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>500+ Hours Saved Weekly for Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-efficiency-metric" />
                  <span>Average 40% Efficiency Increase</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Stop Wasting Time on{" "}
                  <span className="text-primary">Manual Tasks</span> -{" "}
                  <span className="text-secondary">Automate</span> Your Business
                  Operations
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We help businesses save 20+ hours per week by streamlining
                  processes and automating workflows. Transform your operations
                  from time-consuming to time-saving.
                </p>
              </div>

              {/* Industry Examples */}
              <div className="bg-surface-efficiency p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-3">
                  Perfect for businesses like:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <span className="text-muted-foreground">• Restaurants</span>
                  <span className="text-muted-foreground">• Law Firms</span>
                  <span className="text-muted-foreground">• Healthcare</span>
                  <span className="text-muted-foreground">• Retail Stores</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="efficiency" size="xl" className="group">
                  Get Operations Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl">
                  <Clock className="w-5 h-5" />
                  See Automation Examples
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Hours Saved Weekly
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">40%</div>
                  <div className="text-sm text-muted-foreground">
                    Efficiency Increase
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">90%</div>
                  <div className="text-sm text-muted-foreground">
                    Error Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Business Operations Dashboard showing automated workflows and efficiency metrics"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Metrics */}
              <div className="absolute -top-4 -right-4 bg-background p-4 rounded-lg shadow-card border border-border">
                <div className="text-sm font-medium text-muted-foreground">
                  Live Efficiency
                </div>
                <div className="text-2xl font-bold text-success">+42%</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-lg shadow-card border border-border">
                <div className="text-sm font-medium text-muted-foreground">
                  Time Saved Today
                </div>
                <div className="text-2xl font-bold text-primary">8.5h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;