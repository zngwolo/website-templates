import { AlertTriangle, TrendingDown, DollarSign, Clock } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "Wasted Marketing Spend",
      description: "Throwing money at campaigns without knowing what's working"
    },
    {
      icon: TrendingDown,
      title: "Unclear ROI",
      description: "Unable to measure the real impact of business investments"
    },
    {
      icon: Clock,
      title: "Slow Decision Making",
      description: "Spending weeks gathering data instead of acting on insights"
    },
    {
      icon: AlertTriangle,
      title: "Missed Opportunities",
      description: "Missing profitable trends and customer behavior patterns"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Stop <span className="text-destructive">Guessing</span>, Start{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Knowing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses make critical decisions based on gut feelings and incomplete data. 
            This leads to costly mistakes and missed opportunities.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Solution */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 text-center animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            The Solution: Data-Driven Decision Making
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
            Transform your business with real-time analytics, predictive insights, and actionable data visualization. 
            Make confident decisions backed by concrete evidence, not guesswork.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <TrendingDown className="w-8 h-8 text-primary transform rotate-180" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Increase Revenue</h4>
              <p className="text-muted-foreground">Identify profitable opportunities and optimize performance</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Reduce Costs</h4>
              <p className="text-muted-foreground">Eliminate waste and improve operational efficiency</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-chart-tertiary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-chart-tertiary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Save Time</h4>
              <p className="text-muted-foreground">Make faster decisions with automated insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;