import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Lock } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Security Services", href: "#services" },
    { name: "Compliance", href: "#compliance" },
    { name: "Data Protection", href: "#protection" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary to-security rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground">SecureGuard</span>
              <div className="flex items-center space-x-1">
                <Lock className="w-3 h-3 text-security" />
                <span className="text-xs text-security font-medium">SSL SECURED</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-security">
              <div className="w-2 h-2 bg-security rounded-full animate-pulse"></div>
              <span className="font-medium">SOC 2 Compliant</span>
            </div>
            <Button variant="security" size="sm">
              Free Security Assessment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-security mb-3">
                  <div className="w-2 h-2 bg-security rounded-full animate-pulse"></div>
                  <span className="font-medium">SOC 2 Compliant</span>
                </div>
                <Button variant="security" size="sm" className="w-full">
                  Free Security Assessment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;