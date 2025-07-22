import { Award, Users, TrendingUp, Clock } from 'lucide-react';

const ContentBenefits = () => {
  const benefits = [
    {
      icon: Award,
      title: "Build Authority",
      description: "Become the trusted expert in your industry through high-quality, informative content that showcases your expertise.",
      stat: "85% of consumers trust businesses with helpful content",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Attract Customers",
      description: "High-quality content brings qualified leads directly to your business through search engines and social sharing.",
      stat: "3x more leads than outbound marketing",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Improve SEO",
      description: "Rank higher on Google with strategically optimized content that targets your ideal customers' search queries.",
      stat: "97% of users find local businesses online",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Long-term Results",
      description: "Unlike paid ads, quality content continues working for years, compounding your investment over time.",
      stat: "Content marketing costs 62% less than traditional marketing",
      color: "text-premium"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Content Marketing Transforms Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic content marketing isn't just about writing articles—it's about building a sustainable competitive advantage that grows your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-lg bg-background shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                    <IconComponent className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                
                <div className={`text-sm font-semibold ${benefit.color} bg-background/50 px-3 py-2 rounded-full inline-block`}>
                  {benefit.stat}
                </div>
              </div>
            );
          })}
        </div>

        {/* Universal Applications */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Content Marketing Works for Every Industry
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Professional Services</h4>
              <p className="text-muted-foreground text-sm">Law firms, accounting, consulting, real estate, and more build trust through expert insights</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">Local Businesses</h4>
              <p className="text-muted-foreground text-sm">Restaurants, retail, healthcare, and home services attract local customers with valuable content</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-foreground mb-2">E-commerce & B2B</h4>
              <p className="text-muted-foreground text-sm">Online stores and B2B companies generate leads and sales through educational content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBenefits;