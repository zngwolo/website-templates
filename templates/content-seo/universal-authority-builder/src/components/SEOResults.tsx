import { TrendingUp, Target, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SEOResults = () => {
  const caseStudies = [
    {
      clientType: "Local Law Firm",
      industry: "Legal Services",
      challenge: "Poor online visibility, competing with large firms",
      results: [
        { metric: "Organic Traffic", increase: "300%", timeframe: "6 months" },
        { metric: "First Page Rankings", value: "45 keywords", timeframe: "1 year" },
        { metric: "New Client Inquiries", increase: "250%", timeframe: "6 months" }
      ],
      testimonial: "Our phone hasn't stopped ringing since we started working with ContentPro. We're now the go-to firm for personal injury cases in our city.",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      clientType: "E-commerce Store",
      industry: "Retail Fashion",
      challenge: "Low product visibility, high competition",
      results: [
        { metric: "Revenue from SEO", increase: "400%", timeframe: "8 months" },
        { metric: "Product Page Rankings", value: "Top 3 positions", timeframe: "6 months" },
        { metric: "Conversion Rate", increase: "85%", timeframe: "4 months" }
      ],
      testimonial: "We went from struggling to compete to dominating our niche. Our SEO traffic now drives 60% of our total sales.",
      icon: Target,
      color: "text-secondary"
    },
    {
      clientType: "Home Service Business",
      industry: "HVAC Services",
      challenge: "Seasonal demand fluctuations, local competition",
      results: [
        { metric: "Local Search Visibility", increase: "500%", timeframe: "4 months" },
        { metric: "Service Area Coverage", value: "3x expansion", timeframe: "1 year" },
        { metric: "Average Job Value", increase: "150%", timeframe: "8 months" }
      ],
      testimonial: "ContentPro's local SEO strategy transformed our business. We're now booked solid year-round instead of just during peak seasons.",
      icon: Users,
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proven SEO & Content Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses, real results. See how our strategic content and SEO approach has transformed companies across different industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => {
            const IconComponent = study.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-background shadow-sm mr-3`}>
                    <IconComponent className={`h-6 w-6 ${study.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{study.clientType}</h3>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                </div>

                <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2 font-medium">Challenge:</p>
                  <p className="text-sm text-foreground">{study.challenge}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-foreground">Results Achieved:</h4>
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{result.metric}:</span>
                      <div className="text-right">
                        <span className={`font-bold ${study.color}`}>
                          {result.increase || result.value}
                        </span>
                        <p className="text-xs text-muted-foreground">{result.timeframe}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary/20 pl-4 mb-4">
                  "{study.testimonial}"
                </blockquote>

                <div className="pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="w-full">
                    View Full Case Study
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Applications */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Success Across All Industries
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Of clients see traffic increase within 90 days</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary mb-2">250%</div>
              <p className="text-sm text-muted-foreground">Average organic traffic growth in first year</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-2">80+</div>
              <p className="text-sm text-muted-foreground">Industries successfully served</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-premium mb-2">$2.5M+</div>
              <p className="text-sm text-muted-foreground">Additional revenue generated for clients</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            Get Your SEO Analysis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-2">Free audit • No obligation • Industry-specific insights</p>
        </div>
      </div>
    </section>
  );
};

export default SEOResults;