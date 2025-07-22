import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, FileText, Search, TrendingUp, Users } from 'lucide-react';

const ContentAudit = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    email: '',
    industry: '',
    challenges: [] as string[],
    goals: [] as string[]
  });

  const industries = [
    "Professional Services (Law, Accounting, Consulting)",
    "Healthcare & Medical",
    "Real Estate",
    "Home Services (HVAC, Plumbing, Electric)",
    "Restaurant & Food Service",
    "Retail & E-commerce",
    "Technology & Software",
    "Manufacturing",
    "Financial Services",
    "Education",
    "Non-profit",
    "Other"
  ];

  const challenges = [
    "Low website traffic",
    "Poor search engine rankings",
    "Lack of quality content",
    "No content strategy",
    "Inconsistent publishing",
    "Not generating leads",
    "Competitors outranking us",
    "Local SEO issues"
  ];

  const goals = [
    "Increase organic traffic",
    "Improve search rankings",
    "Generate more leads",
    "Build industry authority",
    "Increase brand awareness",
    "Improve conversion rates",
    "Expand market reach",
    "Beat competitors"
  ];

  const auditProcess = [
    {
      icon: FileText,
      title: "Content Analysis",
      description: "We review your existing content, identify gaps, and assess quality against industry standards."
    },
    {
      icon: Search,
      title: "SEO Assessment",
      description: "Technical SEO audit, keyword analysis, and competitive positioning evaluation."
    },
    {
      icon: TrendingUp,
      title: "Performance Review",
      description: "Traffic analysis, ranking assessment, and conversion opportunity identification."
    },
    {
      icon: Users,
      title: "Strategy Recommendations",
      description: "Custom action plan with prioritized recommendations for maximum impact."
    }
  ];

  const handleChallengeChange = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }));
  };

  const handleGoalChange = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Free Content & SEO Audit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a comprehensive analysis of your current content performance and a custom strategy to improve your search rankings and attract more customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Audit Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get Your Free Audit Report
            </h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Website URL *
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Industry *
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Current Content Challenges (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-2">
                  {challenges.map((challenge) => (
                    <label key={challenge} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.challenges.includes(challenge)}
                        onChange={() => handleChallengeChange(challenge)}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-muted-foreground">{challenge}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Goals for Content Marketing (Select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-2">
                  {goals.map((goal) => (
                    <label key={goal} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleGoalChange(goal)}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-muted-foreground">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full text-lg py-6">
                Get My Free Audit Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </div>

          {/* Audit Process & Value */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What You'll Receive
              </h3>
              
              <div className="space-y-6">
                {auditProcess.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {step.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-border rounded-xl p-6">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Audit Timeline & Delivery
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Complete analysis within 48 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">Detailed PDF report with actionable insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">15-minute strategy call included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-muted-foreground">No obligation • 100% free</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-3">
                What Makes Our Audit Different?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Industry-specific analysis tailored to your business type</li>
                <li>• Competitive comparison with top performers in your market</li>
                <li>• Immediate quick-win opportunities you can implement today</li>
                <li>• Long-term strategy roadmap for sustained growth</li>
                <li>• ROI projections based on your industry benchmarks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentAudit;