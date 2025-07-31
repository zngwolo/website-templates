import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, DollarSign, Eye } from "lucide-react";
import analyticsImage from "@/assets/analytics-preview.jpg";

const DashboardPreview = () => {
  const metrics = [
    {
      icon: DollarSign,
      label: "Revenue Growth",
      value: "23.5%",
      change: "+5.2%",
      color: "accent"
    },
    {
      icon: Users,
      label: "Customer Acquisition",
      value: "1,247",
      change: "+12.3%",
      color: "primary"
    },
    {
      icon: TrendingUp,
      label: "ROI Improvement",
      value: "187%",
      change: "+34.7%",
      color: "chart-secondary"
    },
    {
      icon: BarChart3,
      label: "Conversion Rate",
      value: "4.8%",
      change: "+8.9%",
      color: "chart-tertiary"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Eye className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold">Live Dashboard Preview</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            See Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Business Intelligence
            </span>{" "}
            Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a real-time view of your business performance with our intuitive dashboard. 
            Monitor key metrics, track trends, and make data-driven decisions instantly.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-4 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 text-${metric.color}`} />
                  <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-bold text-foreground">{metric.value}</span>
                  <span className={`text-xs font-semibold text-${metric.color}`}>{metric.change}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dashboard Image */}
        <div className="relative mb-12 animate-scale-in">
          <div className="rounded-2xl overflow-hidden shadow-strong">
            <img
              src={analyticsImage}
              alt="Business Intelligence Dashboard Interface"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-medium font-semibold animate-pulse">
            Live Data
          </div>
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-medium font-semibold">
            Real-time Updates
          </div>
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center animate-fade-in">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Charts</h3>
            <p className="text-muted-foreground">Drill down into your data with interactive visualizations and custom filters</p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Predictive Insights</h3>
            <p className="text-muted-foreground">Get AI-powered predictions and recommendations for your business</p>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 bg-chart-tertiary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-chart-tertiary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Team Collaboration</h3>
            <p className="text-muted-foreground">Share insights and collaborate with your team in real-time</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-scale-in">
          <Button variant="hero" size="xl" className="mr-4">
            Start Free Trial
          </Button>
          <Button variant="outline" size="xl">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;