import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, DollarSign, TrendingUp, Clock } from "lucide-react";

const ROICalculator = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [analyticsSpend, setAnalyticsSpend] = useState("");
  const [businessType, setBusinessType] = useState("");

  const calculateROI = () => {
    const revenue = parseFloat(monthlyRevenue) || 0;
    const spend = parseFloat(analyticsSpend) || 0;
    
    // Conservative estimates based on industry data
    const revenueIncrease = revenue * 0.15; // 15% revenue increase
    const costSavings = spend * 2.5; // 2.5x efficiency improvement
    const timeSaved = 20; // 20 hours per month
    
    return {
      revenueIncrease: revenueIncrease,
      costSavings: costSavings,
      timeSaved: timeSaved,
      totalSavings: revenueIncrease + costSavings
    };
  };

  const results = calculateROI();

  return (
    <section id="calculator" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Form */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Calculate Your Potential{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Savings
                </span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              See how much time and money you could save with data-driven decision making. 
              Get your personalized ROI estimate in seconds.
            </p>

            <Card className="p-6 bg-background border-border shadow-medium">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Monthly Revenue
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type="number"
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(e.target.value)}
                      placeholder="50000"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Current Analytics Budget (Monthly)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type="number"
                      value={analyticsSpend}
                      onChange={(e) => setAnalyticsSpend(e.target.value)}
                      placeholder="2000"
                      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Business Type
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select your business type</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="retail">Retail</option>
                    <option value="professional">Professional Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="realestate">Real Estate</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="animate-scale-in">
            <Card className="p-8 bg-background border-border shadow-strong">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Your Potential Monthly Impact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">Revenue Increase</span>
                  </div>
                  <span className="text-xl font-bold text-primary">
                    ${results.revenueIncrease.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-accent" />
                    <span className="font-semibold text-foreground">Cost Savings</span>
                  </div>
                  <span className="text-xl font-bold text-accent">
                    ${results.costSavings.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-chart-tertiary/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-chart-tertiary" />
                    <span className="font-semibold text-foreground">Time Saved</span>
                  </div>
                  <span className="text-xl font-bold text-chart-tertiary">
                    {results.timeSaved} hours
                  </span>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">Total Monthly Benefit</span>
                    <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      ${results.totalSavings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full mt-6">
                Get Custom Analysis
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;