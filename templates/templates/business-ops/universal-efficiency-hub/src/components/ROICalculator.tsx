import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calculator, DollarSign, TrendingUp, Clock } from "lucide-react";

const ROICalculator = () => {
  const [weeklyHours, setWeeklyHours] = useState([15]);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [improvementPercent, setImprovementPercent] = useState([60]);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const hoursPerWeek = weeklyHours[0];
    const rate = hourlyRate;
    const improvement = improvementPercent[0] / 100;
    
    const weeklyCost = hoursPerWeek * rate;
    const hoursSaved = hoursPerWeek * improvement;
    const weeklySavings = hoursSaved * rate;
    const monthlySavings = weeklySavings * 4.33; // Average weeks per month
    const annualSavings = weeklySavings * 52;
    
    // Typical automation implementation cost (conservative estimate)
    const implementationCost = Math.max(5000, annualSavings * 0.3);
    const monthsToROI = implementationCost / monthlySavings;
    const yearOneROI = ((annualSavings - implementationCost) / implementationCost) * 100;
    
    return {
      hoursSaved,
      weeklySavings,
      monthlySavings,
      annualSavings,
      implementationCost,
      monthsToROI,
      yearOneROI
    };
  };

  const results = calculateROI();

  const handleCalculate = () => {
    if (hourlyRate > 0) {
      setShowResults(true);
    }
  };

  return (
    <section id="roi-calculator" className="py-20 bg-surface-efficiency">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Calculate Your <span className="text-accent">Operations Improvement</span> ROI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how much time and money you could save by automating your business operations.
            Real numbers, real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Inputs */}
          <Card className="border-border shadow-elevated bg-background">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-efficiency rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                ROI Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Weekly Hours */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground">
                    Weekly hours on manual tasks
                  </label>
                  <span className="text-2xl font-bold text-primary">{weeklyHours[0]}h</span>
                </div>
                <Slider
                  value={weeklyHours}
                  onValueChange={setWeeklyHours}
                  max={50}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 hour</span>
                  <span>50+ hours</span>
                </div>
              </div>

              {/* Hourly Rate */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-foreground">
                  Average hourly cost of team time
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="pl-10"
                    placeholder="25"
                    min="10"
                    max="200"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Include salary, benefits, and overhead costs (typical range: $15-75/hour)
                </p>
              </div>

              {/* Improvement Percentage */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-foreground">
                    Expected efficiency improvement
                  </label>
                  <span className="text-2xl font-bold text-secondary">{improvementPercent[0]}%</span>
                </div>
                <Slider
                  value={improvementPercent}
                  onValueChange={setImprovementPercent}
                  max={90}
                  min={20}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>20% (Conservative)</span>
                  <span>90% (Aggressive)</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Our clients typically see 40-80% efficiency improvements
                </p>
              </div>

              {/* Calculate Button */}
              <div className="text-center pt-6">
                <Button 
                  variant="roi" 
                  size="xl" 
                  onClick={handleCalculate}
                  className="w-full group"
                >
                  Calculate Your Savings
                  <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {showResults ? (
              <>
                {/* Savings Overview */}
                <Card className="border-border shadow-card bg-background">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Clock className="w-6 h-6 text-success" />
                      Your Potential Savings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-surface-efficiency rounded-lg border border-border">
                        <div className="text-2xl font-bold text-primary">{results.hoursSaved.toFixed(1)}h</div>
                        <div className="text-sm text-muted-foreground">Hours Saved Weekly</div>
                      </div>
                      <div className="text-center p-4 bg-surface-efficiency rounded-lg border border-border">
                        <div className="text-2xl font-bold text-secondary">${results.weeklySavings.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Weekly Savings</div>
                      </div>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-efficiency rounded-lg">
                      <div className="text-3xl font-bold text-primary-foreground mb-2">
                        ${results.annualSavings.toLocaleString()}
                      </div>
                      <div className="text-primary-foreground/80">Annual Cost Savings</div>
                    </div>
                  </CardContent>
                </Card>

                {/* ROI Analysis */}
                <Card className="border-border shadow-card bg-background">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-accent" />
                      Investment & ROI Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Implementation Investment:</span>
                        <span className="font-semibold text-foreground">${results.implementationCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly Savings:</span>
                        <span className="font-semibold text-success">${results.monthlySavings.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Payback Period:</span>
                        <span className="font-semibold text-primary">{results.monthsToROI.toFixed(1)} months</span>
                      </div>
                      <div className="flex justify-between items-center pt-3 border-t border-border">
                        <span className="text-muted-foreground">Year 1 ROI:</span>
                        <span className="text-xl font-bold text-accent">
                          {results.yearOneROI > 0 ? '+' : ''}{results.yearOneROI.toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Benefits */}
                <Card className="border-border shadow-card bg-background">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">
                      Beyond Cost Savings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">Improved customer satisfaction through faster service</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-muted-foreground">Reduced errors and improved quality</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">Team can focus on high-value strategic work</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-muted-foreground">Scalable processes that grow with your business</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <div className="text-center">
                  <Button variant="efficiency" size="xl" className="group">
                    Get Custom ROI Analysis
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    Free consultation to validate these projections for your specific business
                  </p>
                </div>
              </>
            ) : (
              /* Placeholder */
              <Card className="border-border shadow-card bg-background">
                <CardContent className="py-16 text-center">
                  <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Your Results Will Appear Here
                  </h3>
                  <p className="text-muted-foreground">
                    Adjust the parameters on the left and click "Calculate Your Savings" to see your potential ROI.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;