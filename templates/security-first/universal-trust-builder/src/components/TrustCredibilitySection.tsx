import { Star, Users, Award, Shield, TrendingUp, CheckCircle } from "lucide-react";

const TrustCredibilitySection = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Businesses Protected",
      description: "Trusted by companies across all industries"
    },
    {
      icon: Shield,
      value: "15+",
      label: "Years Experience",
      description: "Deep cybersecurity expertise and proven track record"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Threat Prevention",
      description: "Industry-leading detection and response rates"
    },
    {
      icon: Award,
      value: "Zero",
      label: "Client Breaches",
      description: "100% protection success rate for our clients"
    }
  ];

  const certifications = [
    "SOC 2 Type II Certified",
    "ISO 27001 Compliant",
    "CISSP Certified Team",
    "Microsoft Security Partner",
    "AWS Security Specialty",
    "CompTIA Security+ Team"
  ];

  const testimonials = [
    {
      quote: "SecureGuard transformed our security posture completely. We went from constant worry about data breaches to complete confidence in our protection.",
      author: "Sarah Johnson",
      title: "CTO, HealthTech Solutions",
      industry: "Healthcare"
    },
    {
      quote: "The compliance automation alone saved us hundreds of hours and ensured we never miss a regulatory requirement. Outstanding service.",
      author: "Michael Chen",
      title: "IT Director, First National Bank",
      industry: "Financial Services"
    },
    {
      quote: "Their 24/7 monitoring caught and stopped a ransomware attack before it could impact our operations. They literally saved our business.",
      author: "Lisa Rodriguez",
      title: "Operations Manager, Legal Associates",
      industry: "Legal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Businesses Trust Us With Their Most Sensitive Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven track record, expert certifications, and zero-breach guarantee 
            make us the trusted choice for enterprise-grade cybersecurity protection.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-xl p-8 border border-border mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Professional Certifications & Partnerships
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-security/5 rounded-lg border border-security/10"
              >
                <CheckCircle className="w-5 h-5 text-security flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            What Our Clients Say About Our Security Protection
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                  <div className="text-xs text-primary font-medium mt-1">
                    {testimonial.industry} Industry
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-security/5 to-primary/5 rounded-xl p-8 border border-security/10 text-center">
          <div className="w-16 h-16 bg-security rounded-xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-security-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Zero-Breach Guarantee
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're so confident in our security solutions that we back them with a 
            zero-breach guarantee. If a security incident occurs due to our protected 
            systems, we'll cover the costs and provide immediate response support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-security text-security-foreground hover:bg-security-hover px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn About Our Guarantee
            </button>
            <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Insurance Coverage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCredibilitySection;