import { ArrowRight, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const services = [
    "SEO Blog Writing",
    "Website Content",
    "Local SEO",
    "Content Strategy",
    "Keyword Research",
    "Performance Tracking"
  ];

  const resources = [
    "Content Calendar Template",
    "SEO Checklist",
    "Local SEO Guide",
    "Keyword Research Worksheet",
    "Case Studies",
    "ROI Calculator"
  ];

  const blogCategories = [
    "SEO Strategy",
    "Content Marketing",
    "Local SEO",
    "Analytics & Tracking",
    "Industry Insights",
    "Tool Reviews"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-background/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Weekly Content & SEO Tips
            </h3>
            <p className="text-background/80 mb-6">
              Join 10,000+ business owners getting actionable strategies to improve their search rankings and attract more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-primary"
              />
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              ContentPro
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              We help businesses dominate search results and attract more customers through expert content marketing and SEO strategies.
            </p>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                hello@contentpro.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                (555) 123-4567
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                New York, NY
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Content & SEO Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Free Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource}>
                  <a
                    href="#"
                    className="text-background/80 hover:text-secondary transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className="font-semibold mb-2">Blog Categories</h5>
            <ul className="space-y-1">
              {blogCategories.slice(0, 3).map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Started</h4>
            <div className="space-y-4 mb-6">
              <Button variant="outline" className="w-full border-background/20 text-background hover:bg-background hover:text-foreground">
                Get Free SEO Audit
              </Button>
              <Button variant="outline" className="w-full border-background/20 text-background hover:bg-background hover:text-foreground">
                Schedule Consultation
              </Button>
            </div>
            
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Certifications */}
            <div className="mt-6 pt-4 border-t border-background/20">
              <p className="text-xs text-background/60 mb-2">Certified & Trusted</p>
              <div className="space-y-1 text-xs text-background/70">
                <p>Google Partner Certified</p>
                <p>HubSpot Content Certified</p>
                <p>SEMrush Certified Professional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 ContentPro. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="text-background/60 text-sm">
            Helping businesses rank higher and attract more customers since 2016.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;