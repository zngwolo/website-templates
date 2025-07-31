import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, Users, DollarSign } from "lucide-react";
import processImage from "@/assets/process-automation.jpg";
import teamImage from "@/assets/team-efficiency.jpg";

const ShowcaseSection = () => {
  const caseStudies = [
    {
      industry: "Local Restaurant",
      businessType: "Food Service",
      challenge: "Manual order processing and inventory management causing delays and errors",
      solution: "Automated order routing, inventory tracking, and staff scheduling system",
      results: [
        { metric: "60%", label: "Faster order processing", icon: Clock },
        { metric: "90%", label: "Reduction in order errors", icon: TrendingUp },
        { metric: "15hrs", label: "Saved per week", icon: Users },
        { metric: "$18K", label: "Annual labor savings", icon: DollarSign }
      ],
      quote: "Our kitchen runs like clockwork now. Orders flow seamlessly from front to back, and we never run out of ingredients unexpectedly.",
      image: teamImage
    },
    {
      industry: "Professional Services",
      businessType: "Legal Firm",
      challenge: "Time-consuming client onboarding and document management processes",
      solution: "Automated client intake, document generation, and billing workflow",
      results: [
        { metric: "15hrs", label: "Saved weekly on admin", icon: Clock },
        { metric: "75%", label: "Faster client onboarding", icon: TrendingUp },
        { metric: "95%", label: "Document accuracy", icon: Users },
        { metric: "$25K", label: "Annual efficiency gains", icon: DollarSign }
      ],
      quote: "Client onboarding that used to take days now happens in hours. Our lawyers can focus on legal work instead of paperwork.",
      image: processImage
    },
    {
      industry: "Retail Business",
      businessType: "Multi-location Store",
      challenge: "Disconnected inventory systems across locations causing stock issues",
      solution: "Integrated inventory management with real-time synchronization",
      results: [
        { metric: "95%", label: "Inventory accuracy", icon: TrendingUp },
        { metric: "50%", label: "Reduction in stockouts", icon: Clock },
        { metric: "8hrs", label: "Daily time savings", icon: Users },
        { metric: "$35K", label: "Annual profit increase", icon: DollarSign }
      ],
      quote: "We finally have visibility across all locations. No more surprise stockouts or overordering.",
      image: teamImage
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Before & After: Real Business{" "}
            <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses like yours achieved dramatic efficiency improvements with our
            automation solutions.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className={`lg:grid lg:grid-cols-12 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''} mb-8 lg:mb-0`}>
                <Card className="border-border shadow-card">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-primary px-4 py-2 rounded-full">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {study.businessType}
                        </span>
                      </div>
                      <span className="text-muted-foreground">Case Study</span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {study.industry}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>

                    {/* Results Grid */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Results:</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="text-center p-4 bg-surface-efficiency rounded-lg border border-border">
                            <result.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="text-2xl font-bold text-foreground">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-gradient-subtle p-6 rounded-lg border-l-4 border-primary">
                      <blockquote className="text-foreground italic">
                        "{study.quote}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Image */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                    <img
                      src={study.image}
                      alt={`${study.industry} automation success story`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Metric */}
                  <div className="absolute -top-4 -right-4 bg-background p-4 rounded-lg shadow-card border border-border">
                    <div className="text-sm font-medium text-muted-foreground">ROI</div>
                    <div className="text-2xl font-bold text-success">
                      {study.results[3].metric}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-efficiency p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that have streamlined their operations and saved thousands of hours annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" className="group">
                Get Your Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;