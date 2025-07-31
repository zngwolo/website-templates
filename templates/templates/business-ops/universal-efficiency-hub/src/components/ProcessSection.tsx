import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ClipboardCheck, Lightbulb, Settings, GraduationCap, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Operations Audit",
      subtitle: "Identify inefficiencies and opportunities",
      icon: ClipboardCheck,
      duration: "1-2 weeks",
      description: "Comprehensive analysis of your current operations to identify automation opportunities and efficiency bottlenecks.",
      details: [
        "Current workflow mapping and analysis",
        "System integration assessment",
        "Time and cost inefficiency identification",
        "Automation opportunity prioritization",
        "ROI projections for recommended changes"
      ],
      deliverable: "Detailed operations assessment report with prioritized recommendations"
    },
    {
      number: "02", 
      title: "Custom Solution Design",
      subtitle: "Tailored automation strategy",
      icon: Lightbulb,
      duration: "1-3 weeks",
      description: "Design a comprehensive automation strategy specifically tailored to your business needs and existing systems.",
      details: [
        "Custom workflow automation blueprints",
        "System integration architecture planning",
        "User experience and interface design",
        "Implementation timeline and milestones",
        "Risk assessment and mitigation strategies"
      ],
      deliverable: "Complete automation blueprint with technical specifications"
    },
    {
      number: "03",
      title: "Implementation & Integration", 
      subtitle: "Seamless system setup",
      icon: Settings,
      duration: "2-6 weeks",
      description: "Execute the automation plan with minimal business disruption, ensuring all systems work together perfectly.",
      details: [
        "Automated workflow development and testing",
        "System integrations and data migration",
        "Quality assurance and performance optimization",
        "Security implementation and compliance",
        "User interface customization and branding"
      ],
      deliverable: "Fully operational automated systems with complete integration"
    },
    {
      number: "04",
      title: "Training & Optimization",
      subtitle: "Team onboarding and continuous improvement", 
      icon: GraduationCap,
      duration: "1-2 weeks",
      description: "Comprehensive team training and ongoing optimization to ensure maximum efficiency gains and user adoption.",
      details: [
        "Comprehensive team training programs",
        "Documentation and standard operating procedures",
        "Performance monitoring and analytics setup",
        "Continuous optimization and fine-tuning",
        "Ongoing support and maintenance planning"
      ],
      deliverable: "Trained team with optimized processes and ongoing support plan"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple <span className="text-primary">4-Step Process</span> to Operational Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology ensures smooth implementation with measurable results at every stage.
            From analysis to optimization, we guide you through complete operational transformation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`lg:grid lg:grid-cols-12 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Step Number and Timeline */}
              <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-11' : 'lg:col-start-1'} mb-8 lg:mb-0`}>
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <Badge variant="outline" className="block w-fit mx-auto lg:mx-0">
                    {step.duration}
                  </Badge>
                </div>
              </div>

              {/* Step Content */}
              <div className={`lg:col-span-10 ${index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-3'}`}>
                <Card className="border-border shadow-elevated bg-surface-efficiency">
                  <CardHeader className="pb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-foreground mb-2">
                          {step.title}
                        </CardTitle>
                        <p className="text-lg text-muted-foreground">{step.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">What's Included:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverable */}
                    <div className="bg-background p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Key Deliverable:</h4>
                      <p className="text-sm text-muted-foreground">{step.deliverable}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Overview */}
        <div className="mt-16 bg-gradient-subtle p-8 rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Complete Transformation Timeline
            </h3>
            <p className="text-muted-foreground">
              From initial assessment to fully optimized operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5-12</div>
              <div className="text-sm text-muted-foreground">Total weeks for complete transformation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">40-80%</div>
              <div className="text-sm text-muted-foreground">Typical efficiency improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Hours saved per week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">6-18</div>
              <div className="text-sm text-muted-foreground">Months to full ROI</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="roi" size="xl" className="group">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Free consultation to discuss your specific needs and timeline
            </p>
          </div>
        </div>

        {/* Success Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-efficiency p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Our Implementation Guarantee
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              We guarantee measurable efficiency improvements within 90 days of implementation,
              or we'll continue working until you achieve your automation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl">
                Learn About Our Guarantee
              </Button>
              <Button variant="outline" size="xl" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;