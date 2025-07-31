import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Database, PaperclipIcon, MessageSquare, DollarSign, Clock } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      icon: FileText,
      title: "Manual Data Entry",
      description: "Hours wasted on repetitive tasks that could be automated",
      impact: "15-20 hours/week lost",
      cost: "$15,000+ annually in labor costs",
      color: "text-accent"
    },
    {
      icon: Database,
      title: "Disconnected Systems",
      description: "Information silos causing delays and data inconsistencies",
      impact: "30% productivity loss",
      cost: "Missed opportunities & errors",
      color: "text-primary"
    },
    {
      icon: PaperclipIcon,
      title: "Paper-Based Processes",
      description: "Slow, error-prone workflows that don't scale",
      impact: "2x longer processing times",
      cost: "Poor customer experience",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      title: "Poor Communication",
      description: "Team coordination inefficiencies and missed updates",
      impact: "Project delays by 25%",
      cost: "Client dissatisfaction",
      color: "text-accent"
    }
  ];

  return (
    <section id="problems" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Common Business <span className="text-accent">Inefficiencies</span>{" "}
            Costing You Time & Money
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These operational bottlenecks are draining your resources and limiting your growth potential.
            Sound familiar?
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-card transition-all duration-300 border-border">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {problem.description}
                </p>
                
                {/* Impact Metrics */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Impact:</span>
                    </div>
                    <span className="text-xs font-medium text-foreground">{problem.impact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Cost:</span>
                    </div>
                    <span className="text-xs font-medium text-foreground">{problem.cost}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface-efficiency p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              How many of these problems affect your business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Even one of these inefficiencies can cost thousands in lost productivity annually.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-accent">$50,000+</div>
                <div className="text-sm text-muted-foreground">Average annual cost of inefficiencies</div>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Of time spent on manual tasks</div>
              </div>
              <div className="bg-background p-4 rounded-lg border border-border">
                <div className="text-2xl font-bold text-secondary">25%</div>
                <div className="text-sm text-muted-foreground">Revenue growth potential lost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;