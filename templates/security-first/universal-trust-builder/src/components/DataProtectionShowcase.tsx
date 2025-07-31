import { Search, Shield, GraduationCap, Eye, ArrowRight, CheckCircle } from "lucide-react";

const DataProtectionShowcase = () => {
  const protectionSteps = [
    {
      icon: Search,
      step: "01",
      title: "Security Audit",
      description: "Comprehensive vulnerability assessment",
      details: [
        "Network security analysis",
        "Data flow mapping",
        "Compliance gap assessment",
        "Risk prioritization"
      ],
      duration: "1-2 weeks",
      color: "primary"
    },
    {
      icon: Shield,
      step: "02", 
      title: "Protection Implementation",
      description: "Multi-layered security deployment",
      details: [
        "Advanced threat protection",
        "Data encryption deployment",
        "Backup system setup",
        "Monitoring configuration"
      ],
      duration: "2-4 weeks",
      color: "security"
    },
    {
      icon: GraduationCap,
      step: "03",
      title: "Team Training",
      description: "Employee security awareness and protocols",
      details: [
        "Security awareness training",
        "Phishing simulation",
        "Incident response training",
        "Ongoing education program"
      ],
      duration: "1 week",
      color: "premium"
    },
    {
      icon: Eye,
      step: "04",
      title: "Ongoing Monitoring",
      description: "24/7 threat detection and response",
      details: [
        "Real-time threat monitoring",
        "Automated incident response",
        "Regular security updates",
        "Continuous improvement"
      ],
      duration: "Ongoing",
      color: "primary"
    }
  ];

  const getColorStyles = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/20",
          text: "text-primary",
          accent: "bg-primary"
        };
      case "security":
        return {
          bg: "bg-security/10",
          border: "border-security/20", 
          text: "text-security",
          accent: "bg-security"
        };
      case "premium":
        return {
          bg: "bg-premium/10",
          border: "border-premium/20",
          text: "text-premium", 
          accent: "bg-premium"
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/20",
          text: "text-primary",
          accent: "bg-primary"
        };
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-security/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-security" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Data Protection Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial assessment to ongoing protection, our proven 4-step process 
            ensures comprehensive security coverage tailored to your business needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {protectionSteps.map((step, index) => {
            const colorStyles = getColorStyles(step.color);
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < protectionSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-full w-0.5 h-8 bg-border transform -translate-x-1/2 z-0"></div>
                )}
                
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2 lg:text-right' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${colorStyles.bg} rounded-xl flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${colorStyles.text}`} />
                      </div>
                      <div className={`px-3 py-1 ${colorStyles.accent} text-white rounded-full text-sm font-bold`}>
                        Step {step.step}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <div className={`inline-flex items-center px-3 py-1 ${colorStyles.bg} rounded-full text-sm font-medium ${colorStyles.text}`}>
                        Duration: {step.duration}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-foreground">
                          <CheckCircle className={`w-4 h-4 ${colorStyles.text} mr-3 flex-shrink-0`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Visual Card */}
                  <div className={`${isEven ? 'lg:order-1' : ''}`}>
                    <div className={`bg-card rounded-xl p-8 border ${colorStyles.border} hover:shadow-lg transition-all duration-300`}>
                      <div className="text-center">
                        <div className={`w-20 h-20 ${colorStyles.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <step.icon className={`w-10 h-10 ${colorStyles.text}`} />
                        </div>
                        <div className={`text-4xl font-bold ${colorStyles.text} mb-2`}>
                          {step.step}
                        </div>
                        <div className="text-lg font-semibold text-foreground">
                          {step.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Summary */}
        <div className="bg-card rounded-xl p-8 border border-border mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Complete Protection Timeline
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Week 1-2</div>
              <div className="text-sm text-muted-foreground">Security Assessment</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-security mb-1">Week 3-6</div>
              <div className="text-sm text-muted-foreground">Implementation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-premium mb-1">Week 7</div>
              <div className="text-sm text-muted-foreground">Team Training</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">Ongoing</div>
              <div className="text-sm text-muted-foreground">24/7 Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-security/5 rounded-xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Start Your Protection Plan Today
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait for a security incident to protect your business. 
              Begin your comprehensive security journey with a free assessment and 
              personalized protection roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Start Protection Plan
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataProtectionShowcase;