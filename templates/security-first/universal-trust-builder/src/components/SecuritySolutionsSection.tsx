import { Shield, HardDrive, GraduationCap, FileCheck, Eye, AlertCircle } from "lucide-react";

const SecuritySolutionsSection = () => {
  const solutions = [
    {
      icon: Shield,
      title: "Data Encryption",
      description: "Advanced protection for sensitive information",
      benefits: ["AES-256 encryption", "End-to-end security", "Compliance ready"],
      color: "primary"
    },
    {
      icon: HardDrive,
      title: "Secure Backup Systems",
      description: "Automated, encrypted data backup and recovery",
      benefits: ["Real-time backups", "Instant recovery", "Multi-location storage"],
      color: "security"
    },
    {
      icon: GraduationCap,
      title: "Employee Security Training",
      description: "Human firewall against social engineering",
      benefits: ["Phishing simulation", "Security awareness", "Regular updates"],
      color: "premium"
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "HIPAA, GDPR, PCI-DSS compliance automation",
      benefits: ["Automated reporting", "Policy management", "Audit support"],
      color: "primary"
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Real-time threat detection and response",
      benefits: ["SOC team monitoring", "Instant alerts", "Threat intelligence"],
      color: "security"
    },
    {
      icon: AlertCircle,
      title: "Incident Response Planning",
      description: "Rapid recovery from security events",
      benefits: ["Response playbooks", "Expert guidance", "Business continuity"],
      color: "premium"
    }
  ];

  const getColorStyles = (color: string) => {
    switch (color) {
      case "primary":
        return {
          iconBg: "bg-primary/10 group-hover:bg-primary/20",
          iconColor: "text-primary",
          accent: "border-primary/20"
        };
      case "security":
        return {
          iconBg: "bg-security/10 group-hover:bg-security/20",
          iconColor: "text-security",
          accent: "border-security/20"
        };
      case "premium":
        return {
          iconBg: "bg-premium/10 group-hover:bg-premium/20",
          iconColor: "text-premium",
          accent: "border-premium/20"
        };
      default:
        return {
          iconBg: "bg-primary/10 group-hover:bg-primary/20",
          iconColor: "text-primary",
          accent: "border-primary/20"
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
            Comprehensive Security Solutions That Protect Your Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From data encryption to incident response, our enterprise-grade security solutions 
            provide complete protection for businesses of all sizes and industries.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const colorStyles = getColorStyles(solution.color);
            return (
              <div
                key={index}
                className={`bg-card rounded-xl p-6 border ${colorStyles.accent} hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 ${colorStyles.iconBg} rounded-lg flex items-center justify-center transition-colors`}>
                    <solution.icon className={`w-6 h-6 ${colorStyles.iconColor}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 ${colorStyles.iconColor.replace('text-', 'bg-')} rounded-full mr-2 flex-shrink-0`}></div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-security/5 rounded-xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Ready to Secure Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a personalized security assessment and discover which solutions 
              are right for your business. Our experts will analyze your current setup 
              and recommend the best protection strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Custom Security Plan
              </button>
              <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Solutions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySolutionsSection;