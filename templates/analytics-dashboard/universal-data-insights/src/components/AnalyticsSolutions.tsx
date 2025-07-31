import { BarChart3, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnalyticsSolutions = () => {
  const solutions = [
    {
      icon: BarChart3,
      title: "Business Performance Analytics",
      description: "See what's really driving profits with comprehensive performance tracking and revenue analysis.",
      features: ["Revenue tracking", "Profit margin analysis", "Cost optimization", "Performance KPIs"],
      color: "primary"
    },
    {
      icon: Users,
      title: "Customer Behavior Insights",
      description: "Understand your customers better with detailed behavior analysis and segmentation.",
      features: ["Customer journey mapping", "Behavior patterns", "Segmentation analysis", "Lifetime value"],
      color: "accent"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and opportunities with advanced machine learning algorithms.",
      features: ["Sales forecasting", "Trend prediction", "Risk assessment", "Opportunity scoring"],
      color: "chart-secondary"
    },
    {
      icon: Target,
      title: "Marketing ROI Tracking",
      description: "Know which marketing actually works with detailed campaign performance analysis.",
      features: ["Campaign tracking", "ROI measurement", "Attribution modeling", "Channel optimization"],
      color: "chart-tertiary"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Powerful{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Analytics Solutions
            </span>{" "}
            for Every Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive business intelligence tools designed to help you make better decisions, 
            increase profits, and grow your business.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-${solution.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 text-${solution.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className={`w-2 h-2 bg-${solution.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-scale-in">
          <Button variant="hero" size="xl">
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSolutions;