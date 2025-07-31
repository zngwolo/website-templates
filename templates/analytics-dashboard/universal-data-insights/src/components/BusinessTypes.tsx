import { UtensilsCrossed, ShoppingBag, Briefcase, Heart, ShoppingCart, Home } from "lucide-react";

const BusinessTypes = () => {
  const businessTypes = [
    {
      icon: UtensilsCrossed,
      title: "Restaurants",
      description: "Track peak hours, popular dishes, customer patterns",
      examples: ["Optimize menu pricing", "Reduce food waste", "Staff scheduling", "Customer loyalty analysis"],
      color: "chart-accent"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Inventory optimization, sales forecasting, customer trends",
      examples: ["Stock management", "Sales predictions", "Customer behavior", "Seasonal planning"],
      color: "primary"
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Client acquisition costs, project profitability",
      examples: ["Client ROI analysis", "Project tracking", "Resource allocation", "Service optimization"],
      color: "accent"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient flow, appointment optimization, revenue tracking",
      examples: ["Appointment efficiency", "Patient outcomes", "Resource utilization", "Revenue optimization"],
      color: "chart-secondary"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Conversion rates, customer lifetime value, inventory",
      examples: ["Conversion optimization", "Customer segments", "Inventory turnover", "Marketing attribution"],
      color: "chart-tertiary"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Market trends, lead quality, closing rates",
      examples: ["Market analysis", "Lead scoring", "Sales pipeline", "Property valuation"],
      color: "chart-quaternary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perfect for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our analytics platform adapts to your industry's unique needs, providing relevant insights 
            and metrics that matter to your business success.
          </p>
        </div>

        {/* Business Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((business, index) => {
            const Icon = business.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 bg-${business.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 text-${business.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {business.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {business.description}
                </p>

                {/* Examples */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Analytics:</h4>
                  <ul className="space-y-1">
                    {business.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${business.color} rounded-full mr-2`}></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 animate-scale-in">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Don't See Your Industry?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our platform is highly customizable and works with any business that generates data. 
              Contact us to discuss your specific analytics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
                View All Industries
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;