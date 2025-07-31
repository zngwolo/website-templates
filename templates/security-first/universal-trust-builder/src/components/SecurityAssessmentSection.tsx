import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Shield, TrendingUp } from "lucide-react";

const SecurityAssessmentSection = () => {
  const [formData, setFormData] = useState({
    businessType: "",
    currentMeasures: [] as string[],
    dataTypes: [] as string[],
    complianceReqs: [] as string[],
    concerns: [] as string[],
    teamSize: ""
  });

  const handleMultiSelect = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const calculateSecurityScore = () => {
    let score = 50; // Base score
    
    // Current measures bonus
    score += Math.min(formData.currentMeasures.length * 5, 25);
    
    // Data sensitivity penalty
    if (formData.dataTypes.includes("payment-data") || formData.dataTypes.includes("health-records")) {
      score -= 10;
    }
    
    // Compliance requirements penalty
    score -= Math.min(formData.complianceReqs.length * 3, 15);
    
    // Team size factor
    if (formData.teamSize === "1-10") score -= 5;
    if (formData.teamSize === "50+") score += 10;
    
    return Math.max(Math.min(score, 100), 20);
  };

  const businessTypes = [
    "Healthcare", "Financial Services", "Legal", "Retail/E-commerce", 
    "Professional Services", "Manufacturing", "Technology", "Other"
  ];

  const securityMeasures = [
    "Firewalls", "Antivirus Software", "Data Backups", "Employee Training",
    "Two-Factor Authentication", "Encryption", "Security Monitoring", "None"
  ];

  const dataTypes = [
    { value: "customer-info", label: "Customer Information" },
    { value: "payment-data", label: "Payment Data" },
    { value: "health-records", label: "Health Records" },
    { value: "legal-docs", label: "Legal Documents" },
    { value: "financial-data", label: "Financial Data" },
    { value: "employee-data", label: "Employee Data" }
  ];

  const complianceOptions = [
    "HIPAA", "GDPR", "PCI-DSS", "SOC 2", "ISO 27001", "Industry-Specific", "Not Sure"
  ];

  const securityConcerns = [
    "Data Breaches", "Ransomware", "Employee Training", "Compliance", 
    "Backup & Recovery", "Remote Work Security", "Third-Party Risks"
  ];

  const teamSizes = ["1-10", "11-25", "26-50", "50+"];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Free Cybersecurity Risk Assessment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover your security vulnerabilities and get personalized recommendations. 
            This comprehensive assessment takes just 3 minutes and provides immediate insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Assessment Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form className="space-y-8">
                {/* Business Type */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    What type of business do you operate?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {businessTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, businessType: type }))}
                        className={`p-3 text-sm border rounded-lg transition-colors ${
                          formData.businessType === type
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Security Measures */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    What security measures do you currently have? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {securityMeasures.map((measure) => (
                      <button
                        key={measure}
                        type="button"
                        onClick={() => handleMultiSelect("currentMeasures", measure)}
                        className={`p-3 text-sm border rounded-lg transition-colors ${
                          formData.currentMeasures.includes(measure)
                            ? "bg-security text-security-foreground border-security"
                            : "border-border hover:border-security"
                        }`}
                      >
                        {measure}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Data Types */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    What types of sensitive data do you handle?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {dataTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => handleMultiSelect("dataTypes", type.value)}
                        className={`p-3 text-sm border rounded-lg transition-colors text-left ${
                          formData.dataTypes.includes(type.value)
                            ? "bg-premium text-premium-foreground border-premium"
                            : "border-border hover:border-premium"
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Compliance Requirements */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Which compliance standards apply to your business?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {complianceOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleMultiSelect("complianceReqs", option)}
                        className={`p-3 text-sm border rounded-lg transition-colors ${
                          formData.complianceReqs.includes(option)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Security Concerns */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    What are your biggest security concerns?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {securityConcerns.map((concern) => (
                      <button
                        key={concern}
                        type="button"
                        onClick={() => handleMultiSelect("concerns", concern)}
                        className={`p-3 text-sm border rounded-lg transition-colors ${
                          formData.concerns.includes(concern)
                            ? "bg-danger text-danger-foreground border-danger"
                            : "border-border hover:border-danger"
                        }`}
                      >
                        {concern}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    How many employees do you have?
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {teamSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, teamSize: size }))}
                        className={`p-3 text-sm border rounded-lg transition-colors ${
                          formData.teamSize === size
                            ? "bg-security text-security-foreground border-security"
                            : "border-border hover:border-security"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </form>
            </Card>
          </div>

          {/* Security Score Preview */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Your Security Score
                </h3>
                <div className="relative w-32 h-32 mx-auto">
                  <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-primary border-r-transparent transform rotate-45"
                    style={{ 
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + calculateSecurityScore() * 0.5}% 0%, 50% 50%)` 
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-foreground">
                      {calculateSecurityScore()}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Complete the assessment for your full report
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-security mr-2" />
                  <span className="text-sm text-foreground">Current protection level</span>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="w-4 h-4 text-danger mr-2" />
                  <span className="text-sm text-foreground">Vulnerability gaps identified</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-primary mr-2" />
                  <span className="text-sm text-foreground">Recommendations ready</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-security/5 border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">What you'll receive:</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Detailed security risk analysis</li>
                <li>• Personalized protection recommendations</li>
                <li>• Compliance gap assessment</li>
                <li>• Implementation priority guide</li>
                <li>• Free 30-minute consultation</li>
              </ul>
            </Card>

            <Button 
              size="lg" 
              variant="hero" 
              className="w-full"
              disabled={!formData.businessType || formData.currentMeasures.length === 0}
            >
              Get My Security Score
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAssessmentSection;