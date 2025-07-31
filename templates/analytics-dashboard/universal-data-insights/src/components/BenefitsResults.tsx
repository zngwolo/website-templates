import { TrendingDown, Users, Clock, TrendingUp } from "lucide-react";
import businessTeamImage from "@/assets/business-team.jpg";

const BenefitsResults = () => {
  const benefits = [
    {
      icon: TrendingDown,
      percentage: "40%",
      title: "Reduction in Wasted Marketing Spend",
      description: "Stop throwing money at campaigns that don't work. Our attribution modeling shows exactly which channels deliver ROI.",
      color: "destructive"
    },
    {
      icon: Users,
      percentage: "25%",
      title: "Increase in Customer Retention",
      description: "Identify at-risk customers before they churn and implement targeted retention strategies that work.",
      color: "accent"
    },
    {
      icon: Clock,
      percentage: "60%",
      title: "Faster Decision Making",
      description: "Get instant insights instead of waiting weeks for reports. Make confident decisions with real-time data.",
      color: "chart-tertiary"
    },
    {
      icon: TrendingUp,
      percentage: "20%",
      title: "Revenue Growth Through Optimization",
      description: "Discover hidden opportunities and optimize your business processes for maximum profitability.",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What Our Clients{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Achieve
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Real results from real businesses. See how data-driven decision making transforms 
              companies across industries.
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 bg-${benefit.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 text-${benefit.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-3xl font-bold text-${benefit.color}`}>
                          {benefit.percentage}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={businessTeamImage}
                alt="Business team analyzing data and making decisions"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              
              {/* Overlay Stats */}
              <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-medium">
                <div className="text-2xl font-bold text-accent">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-8 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$2.5M+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15,000+</div>
              <div className="text-muted-foreground">Hours Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-secondary mb-2">300%</div>
              <div className="text-muted-foreground">Avg ROI Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-tertiary mb-2">24/7</div>
              <div className="text-muted-foreground">Real-time Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsResults;