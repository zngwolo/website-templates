import { Heart, DollarSign, Scale, ShoppingBag, Building2, Cpu } from "lucide-react";

const IndustrySecuritySection = () => {
  const industries = [
    {
      icon: Heart,
      name: "Healthcare",
      color: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      compliance: "HIPAA Compliance",
      description: "Protect patient data and ensure healthcare privacy",
      features: [
        "Patient data protection",
        "Medical device security", 
        "HIPAA compliance automation",
        "Secure communication protocols"
      ],
      challenges: "PHI protection, medical device vulnerabilities, telehealth security"
    },
    {
      icon: DollarSign,
      name: "Financial Services", 
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      compliance: "PCI-DSS Compliance",
      description: "Secure transactions and meet regulatory requirements",
      features: [
        "Transaction security",
        "Fraud prevention",
        "PCI-DSS compliance",
        "Anti-money laundering"
      ],
      challenges: "Payment security, regulatory compliance, fraud detection"
    },
    {
      icon: Scale,
      name: "Legal",
      color: "text-blue-600",
      bgColor: "bg-blue-50", 
      borderColor: "border-blue-200",
      compliance: "Attorney-Client Privilege",
      description: "Maintain client confidentiality and protect sensitive case information",
      features: [
        "Client confidentiality",
        "Document security",
        "Privilege protection",
        "Secure communications"
      ],
      challenges: "Client privilege, document security, communication privacy"
    },
    {
      icon: ShoppingBag,
      name: "Retail/E-commerce",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200", 
      compliance: "PCI Compliance",
      description: "Secure customer payments and protect shopping data",
      features: [
        "Payment processing security",
        "Customer data protection",
        "Inventory security",
        "POS system protection"
      ],
      challenges: "Payment card security, customer data, supply chain protection"
    },
    {
      icon: Building2,
      name: "Professional Services",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      compliance: "Client Data Protection", 
      description: "Safeguard client information and intellectual property",
      features: [
        "Client data security",
        "IP protection",
        "Project confidentiality",
        "Secure collaboration"
      ],
      challenges: "Client confidentiality, intellectual property, project security"
    },
    {
      icon: Cpu,
      name: "Manufacturing",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      compliance: "Trade Secret Protection",
      description: "Protect trade secrets and secure operational data",
      features: [
        "Trade secret protection",
        "Operational security", 
        "Supply chain security",
        "Industrial IoT protection"
      ],
      challenges: "Trade secrets, operational technology, supply chain security"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Specialized Security for Your Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every industry has unique security challenges and compliance requirements. 
            Our specialized solutions are tailored to meet the specific needs of your sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 border ${industry.borderColor} hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Header */}
              <div className="mb-4">
                <div className={`w-12 h-12 ${industry.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <industry.icon className={`w-6 h-6 ${industry.color}`} />
                </div>
              </div>
              
              {/* Title and Compliance */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {industry.name}
                </h3>
                <div className={`inline-flex items-center px-2 py-1 ${industry.bgColor} ${industry.color} text-xs font-medium rounded-full`}>
                  {industry.compliance}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {industry.description}
              </p>
              
              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Security Features:</h4>
                <ul className="space-y-1">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 ${industry.color.replace('text-', 'bg-')} rounded-full mr-2 flex-shrink-0`}></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Challenges */}
              <div className={`${industry.bgColor} rounded-lg p-3`}>
                <h4 className="text-sm font-semibold text-foreground mb-1">Security Challenges:</h4>
                <p className="text-xs text-muted-foreground">{industry.challenges}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Selector */}
        <div className="bg-card rounded-xl p-8 border border-border mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Get Industry-Specific Security Guidance
          </h3>
          
          <div className="text-center mb-6">
            <p className="text-muted-foreground mb-4">
              Select your industry to receive tailored security recommendations and compliance guidance:
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 ${industry.bgColor} ${industry.borderColor} border rounded-lg hover:shadow-md transition-all duration-200`}
                >
                  <industry.icon className={`w-4 h-4 ${industry.color}`} />
                  <span className={`text-sm font-medium ${industry.color}`}>
                    {industry.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
              Get Industry Security Plan
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Compliance Guide
            </button>
          </div>
        </div>

        {/* Universal Security Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-security/5 to-primary/5 rounded-xl p-8 border border-security/10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Universal Security Principles
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              While every industry has unique requirements, the core principles of cybersecurity 
              remain constant: protect data, ensure compliance, train employees, and maintain 
              constant vigilance against evolving threats.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-semibold text-foreground">Data Protection</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-security/10 rounded-lg flex items-center justify-center mx-auto">
                  <Scale className="w-6 h-6 text-security" />
                </div>
                <div className="text-sm font-semibold text-foreground">Compliance</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-premium/10 rounded-lg flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-premium" />
                </div>
                <div className="text-sm font-semibold text-foreground">Employee Training</div>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center mx-auto">
                  <Cpu className="w-6 h-6 text-danger" />
                </div>
                <div className="text-sm font-semibold text-foreground">Threat Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySecuritySection;