import { CheckCircle, Award, Building, CreditCard, Globe, Lock } from "lucide-react";

const ComplianceSection = () => {
  const certifications = [
    {
      icon: Building,
      name: "HIPAA",
      description: "Healthcare Compliance",
      details: "Protect patient health information and ensure healthcare data privacy",
      industries: ["Healthcare", "Medical Devices", "Health Insurance"]
    },
    {
      icon: Globe,
      name: "GDPR",
      description: "Data Privacy Regulation",
      details: "European data protection and privacy compliance for global businesses",
      industries: ["E-commerce", "SaaS", "International Business"]
    },
    {
      icon: CreditCard,
      name: "PCI-DSS",
      description: "Payment Card Security",
      details: "Secure payment processing and cardholder data protection",
      industries: ["Retail", "E-commerce", "Payment Processing"]
    },
    {
      icon: Award,
      name: "SOC 2",
      description: "Security Controls",
      details: "Comprehensive security, availability, and confidentiality controls",
      industries: ["Technology", "SaaS", "Cloud Services"]
    },
    {
      icon: Lock,
      name: "ISO 27001",
      description: "Information Security",
      details: "International standard for information security management systems",
      industries: ["Enterprise", "Government", "Financial Services"]
    },
    {
      icon: CheckCircle,
      name: "Industry-Specific",
      description: "Custom Compliance",
      details: "Tailored compliance solutions for your specific industry requirements",
      industries: ["Legal", "Finance", "Manufacturing"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-security/10 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-security" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industry Compliance & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay compliant with industry regulations and build customer trust through 
            verified security certifications and automated compliance management.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-security/10 rounded-lg flex items-center justify-center group-hover:bg-security/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-security" />
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm font-medium text-security">
                  {cert.description}
                </p>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                {cert.details}
              </p>
              
              <div>
                <div className="text-sm font-semibold text-foreground mb-2">Relevant Industries:</div>
                <div className="flex flex-wrap gap-1">
                  {cert.industries.map((industry, industryIndex) => (
                    <span
                      key={industryIndex}
                      className="px-2 py-1 bg-security/5 text-security text-xs rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Benefits */}
        <div className="bg-card rounded-xl p-8 border border-border mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Why Compliance Matters for Your Business
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Build Trust</h4>
              <p className="text-sm text-muted-foreground">
                Demonstrate your commitment to data protection and earn customer confidence
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-security/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6 text-security" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Avoid Penalties</h4>
              <p className="text-sm text-muted-foreground">
                Prevent costly fines and legal issues with proactive compliance management
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-premium/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-premium" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Competitive Edge</h4>
              <p className="text-sm text-muted-foreground">
                Win more business by showcasing your security and compliance credentials
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-security/5 to-primary/5 rounded-xl p-8 border border-security/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Ensure Your Compliance Today
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our compliance experts will assess your current status and create a 
              customized plan to achieve and maintain the certifications your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-security text-security-foreground hover:bg-security-hover px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Compliance Assessment
              </button>
              <button className="border border-security text-security hover:bg-security/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Download Compliance Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;