import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  ArrowRight,
  Download,
  Zap,
  TrendingUp,
  Users,
  Award,
  Shield,
  Globe
} from "lucide-react";

const Footer = () => {
  const services = [
    "Workflow Automation",
    "System Integration", 
    "Process Optimization",
    "Custom Development",
    "Training & Support",
    "Ongoing Maintenance"
  ];

  const resources = [
    { name: "Efficiency Assessment Guide", type: "PDF", icon: Download },
    { name: "Automation Checklist", type: "Template", icon: Download },
    { name: "ROI Calculation Worksheet", type: "Excel", icon: Download },
    { name: "Implementation Roadmap", type: "Guide", icon: Download }
  ];

  const certifications = [
    { name: "Process Excellence Certified", icon: Award },
    { name: "Systems Integration Specialist", icon: Shield },
    { name: "Automation Framework Expert", icon: Zap },
    { name: "Business Efficiency Consultant", icon: TrendingUp }
  ];

  return (
    <footer id="contact" className="bg-gradient-subtle border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Company Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-efficiency rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                OptiFlow<span className="text-primary">Pro</span>
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Transforming business operations through intelligent automation and process optimization. 
              We help companies save time, reduce costs, and scale efficiently.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">San Francisco, CA & Remote</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@optiflowpro.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Mon-Fri: 8AM-6PM PST</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">Hours Saved Weekly</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-secondary">98%</div>
                <div className="text-xs text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">
              Business Automation Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#solutions" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3 text-sm">Our Expertise:</h4>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <cert.icon className="w-4 h-4 text-accent" />
                    <span className="text-xs text-muted-foreground">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-foreground">
              Efficiency Resources
            </h3>
            <div className="space-y-3">
              {resources.map((resource, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border hover:shadow-card transition-all duration-200 group"
                >
                  <resource.icon className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">{resource.name}</div>
                    <Badge variant="secondary" className="text-xs mt-1">{resource.type}</Badge>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                All Resources Bundle
              </Button>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">
                Weekly Operations & Efficiency Tips
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get actionable automation insights and efficiency strategies delivered to your inbox.
              </p>
              <div className="space-y-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full"
                />
                <Button variant="efficiency" size="sm" className="w-full group">
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe to Tips
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Join 2,000+ business owners improving their operations
              </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-primary p-6 rounded-lg">
              <h4 className="text-lg font-bold text-primary-foreground mb-3">
                Ready to Get Started?
              </h4>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Book a free consultation to discuss your automation needs.
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col lg:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2024 OptiFlowPro. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Security</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Serving businesses worldwide</span>
              </div>
              <Badge variant="outline" className="text-xs">
                ISO 27001 Certified
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;