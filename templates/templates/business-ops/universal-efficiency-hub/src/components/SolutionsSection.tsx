import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Workflow, 
  Link, 
  FileCheck, 
  Users, 
  UserCheck, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Eliminate repetitive manual tasks with smart automation that handles routine work 24/7",
      benefits: [
        "80% reduction in manual data entry",
        "Automatic task routing and approvals",
        "24/7 processing without human intervention"
      ],
      industries: "Perfect for: Order processing, invoice handling, customer onboarding"
    },
    {
      icon: Link,
      title: "System Integration",
      description: "Connect all your business tools to work together seamlessly and share data automatically",
      benefits: [
        "Real-time data synchronization",
        "Eliminate duplicate data entry",
        "Single source of truth for all information"
      ],
      industries: "Perfect for: CRM + Accounting, POS + Inventory, Marketing + Sales"
    },
    {
      icon: FileCheck,
      title: "Digital Document Management",
      description: "Transform paper-based processes into efficient digital workflows",
      benefits: [
        "Instant document retrieval",
        "Automated approval workflows",
        "Version control and audit trails"
      ],
      industries: "Perfect for: Contracts, invoices, compliance documents, HR files"
    },
    {
      icon: Users,
      title: "Team Communication Tools",
      description: "Streamline collaboration with automated notifications and task management",
      benefits: [
        "Automatic project updates",
        "Smart notification routing",
        "Progress tracking and reporting"
      ],
      industries: "Perfect for: Project management, client updates, internal coordination"
    },
    {
      icon: UserCheck,
      title: "Customer Management Automation",
      description: "Automate customer interactions from first contact to ongoing relationship management",
      benefits: [
        "Automated lead nurturing",
        "Scheduled follow-up reminders",
        "Customer lifecycle tracking"
      ],
      industries: "Perfect for: Sales pipelines, customer support, retention campaigns"
    },
    {
      icon: BarChart3,
      title: "Reporting & Analytics",
      description: "Automated performance tracking with real-time insights and custom dashboards",
      benefits: [
        "Real-time business metrics",
        "Automated report generation",
        "Predictive analytics and trends"
      ],
      industries: "Perfect for: Sales reports, operational KPIs, financial dashboards"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-surface-efficiency">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Smart <span className="text-primary">Automation Solutions</span>{" "}
            That Transform Your Operations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven automation frameworks adapt to any business type, delivering immediate efficiency gains
            and long-term operational excellence.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-elevated transition-all duration-300 bg-background border-border">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industry Applications */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground italic">
                    {solution.industries}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Universal Applications */}
        <div className="bg-background p-8 rounded-2xl border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Universal Business Applications
            </h3>
            <p className="text-muted-foreground">
              These automation solutions work across all industries and business types
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-secondary">85%</div>
              <div className="text-sm text-muted-foreground">Faster task completion</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">60%</div>
              <div className="text-sm text-muted-foreground">Reduction in errors</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">20+</div>
              <div className="text-sm text-muted-foreground">Hours saved weekly</div>
            </div>
          </div>

          <div className="text-center">
            <Button variant="efficiency" size="xl" className="group">
              See How Automation Transforms Your Business
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;