import { AlertTriangle, Database, Mail, FileText } from "lucide-react";

const SecurityThreatsSection = () => {
  const threats = [
    {
      icon: Database,
      title: "Data Breaches",
      description: "Customer information theft and exposure",
      impact: "Average cost: $4.45M per breach",
      consequence: "Reputation damage, legal liability, customer loss"
    },
    {
      icon: AlertTriangle,
      title: "Ransomware Attacks",
      description: "Business operations shutdown and data hostage",
      impact: "Average downtime: 23 days",
      consequence: "Revenue loss, operational disruption, recovery costs"
    },
    {
      icon: Mail,
      title: "Phishing Scams",
      description: "Employee and customer credential theft",
      impact: "95% of breaches start with phishing",
      consequence: "Account takeovers, financial fraud, data theft"
    },
    {
      icon: FileText,
      title: "Compliance Violations",
      description: "Regulatory fines and legal consequences",
      impact: "GDPR fines up to €20M",
      consequence: "Heavy penalties, legal action, business restrictions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-danger" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cyber Threats Your Business Faces Every Day
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't wait for a security incident to realize the importance of cybersecurity. 
            These threats are actively targeting businesses like yours right now.
          </p>
        </div>

        {/* Threats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center group-hover:bg-danger/20 transition-colors">
                  <threat.icon className="w-6 h-6 text-danger" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {threat.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {threat.description}
              </p>
              
              <div className="space-y-2">
                <div className="bg-danger/5 rounded-lg p-3">
                  <div className="text-sm font-semibold text-danger mb-1">Impact</div>
                  <div className="text-sm text-foreground">{threat.impact}</div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-foreground mb-1">Consequences</div>
                  <div className="text-sm text-muted-foreground">{threat.consequence}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-danger/5 rounded-xl p-8 border border-danger/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Don't Become a Statistic
            </h3>
            <p className="text-muted-foreground mb-6">
              60% of small businesses close within 6 months of a cyber attack. 
              Protect your business before it's too late.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-danger text-danger-foreground hover:bg-danger-hover px-6 py-3 rounded-lg font-semibold transition-colors">
                Assess My Risk Now
              </button>
              <button className="border border-danger text-danger hover:bg-danger/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                Learn About Protection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityThreatsSection;