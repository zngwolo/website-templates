import { PenTool, Globe, MapPin, Target, Search, BarChart } from 'lucide-react';

const ContentServices = () => {
  const services = [
    {
      icon: PenTool,
      title: "SEO Blog Writing",
      description: "Optimized articles that rank on Google and convert readers into customers",
      features: ["Keyword-optimized content", "Expert industry insights", "Conversion-focused writing", "Regular publishing schedule"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Globe,
      title: "Website Content",
      description: "Pages that inform visitors and persuade them to choose your business",
      features: ["Service page optimization", "About page storytelling", "Landing page copy", "Product descriptions"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your area",
      features: ["Google Business Profile", "Local keyword targeting", "Citation building", "Review management"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Target,
      title: "Content Strategy",
      description: "Comprehensive planning that aligns content with your business goals",
      features: ["Content calendar creation", "Competitor analysis", "Audience research", "Goal setting & KPIs"],
      color: "text-premium",
      bgColor: "bg-premium/10"
    },
    {
      icon: Search,
      title: "Keyword Research",
      description: "Find opportunities your competitors are missing",
      features: ["Search volume analysis", "Competition assessment", "Long-tail opportunities", "Intent categorization"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: BarChart,
      title: "Performance Tracking",
      description: "Monitor and improve your content's impact on your business",
      features: ["Traffic analytics", "Ranking monitoring", "Conversion tracking", "ROI reporting"],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Complete Content & SEO Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to establish authority, improve search rankings, and attract more customers through strategic content marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`inline-flex p-3 rounded-lg ${service.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-6 w-6 ${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.bgColor} mr-3`}></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Universal Business Applications */}
        <div className="bg-gradient-to-r from-muted/50 via-background to-muted/50 border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Tailored for Your Industry
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Professional Services</h4>
              <p className="text-sm text-muted-foreground mb-4">Law firms, accounting, consulting, real estate</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Expert thought leadership content</p>
                <p>• Case study development</p>
                <p>• Professional credibility building</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Local Businesses</h4>
              <p className="text-sm text-muted-foreground mb-4">Restaurants, retail, healthcare, home services</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Local SEO optimization</p>
                <p>• Community-focused content</p>
                <p>• Customer attraction strategies</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">E-commerce & B2B</h4>
              <p className="text-sm text-muted-foreground mb-4">Online stores, SaaS, manufacturing, technology</p>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>• Product-focused content</p>
                <p>• Lead generation strategies</p>
                <p>• Technical expertise showcase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentServices;