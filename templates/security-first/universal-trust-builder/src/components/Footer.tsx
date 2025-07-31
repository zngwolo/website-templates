import { Shield, Mail, Phone, MapPin, CheckCircle, Lock, FileText, BookOpen } from "lucide-react";

const Footer = () => {
  const securityServices = [
    "Cybersecurity Assessment",
    "Data Protection Services", 
    "Compliance Management",
    "Security Monitoring",
    "Incident Response",
    "Employee Training"
  ];

  const complianceOfferings = [
    "HIPAA Compliance",
    "GDPR Compliance", 
    "PCI-DSS Certification",
    "SOC 2 Auditing",
    "ISO 27001 Implementation",
    "Industry-Specific Standards"
  ];

  const securityResources = [
    "Security Best Practices Guide",
    "Compliance Checklists",
    "Threat Intelligence Reports",
    "Industry Security Updates",
    "Security Training Materials",
    "Emergency Response Plans"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-security rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">SecureGuard</span>
                <div className="flex items-center space-x-1">
                  <Lock className="w-3 h-3 text-security" />
                  <span className="text-xs text-security font-medium">ENTERPRISE SECURITY</span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Protecting businesses and their customers with enterprise-grade cybersecurity 
              solutions. We're committed to keeping your most sensitive data secure and 
              ensuring compliance with industry regulations.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-security" />
                <span className="text-foreground">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-security" />
                <span className="text-foreground">Zero Breach Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="w-4 h-4 text-security" />
                <span className="text-foreground">24/7 Security Monitoring</span>
              </div>
            </div>
          </div>

          {/* Security Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Security Services
            </h3>
            <ul className="space-y-2">
              {securityServices.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Offerings */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-security" />
              Compliance Solutions
            </h3>
            <ul className="space-y-2">
              {complianceOfferings.map((offering, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-security transition-colors text-sm"
                  >
                    {offering}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Security Resources & Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-premium" />
              Security Resources
            </h3>
            <ul className="space-y-2 mb-6">
              {securityResources.slice(0, 4).map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-premium transition-colors text-sm"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Emergency Security Support</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-danger" />
                  <span className="text-foreground font-medium">24/7 Hotline: (555) 123-SECURE</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">security@secureguard.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-security" />
                  <span className="text-muted-foreground">Global Security Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/5 to-security/5 rounded-xl p-6 border border-primary/10 mb-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Monthly Security Threats & Protection Updates
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Stay informed about the latest cybersecurity threats and protection strategies
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              />
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-r-lg hover:bg-primary-hover transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Security Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          {["SOC 2", "ISO 27001", "HIPAA", "GDPR", "PCI-DSS", "CSA"].map((cert, index) => (
            <div key={index} className="bg-muted/30 rounded-lg p-3 text-center border border-border">
              <div className="w-8 h-8 bg-security/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-4 h-4 text-security" />
              </div>
              <div className="text-xs font-medium text-foreground">{cert}</div>
              <div className="text-xs text-muted-foreground">Certified</div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 SecureGuard. All rights reserved. | Enterprise Cybersecurity Solutions
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Security Notice
              </a>
              <div className="flex items-center space-x-1 text-security">
                <Lock className="w-3 h-3" />
                <span className="font-medium">SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;