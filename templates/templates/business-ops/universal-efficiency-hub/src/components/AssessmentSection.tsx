import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ClipboardCheck, TrendingUp } from "lucide-react";

const AssessmentSection = () => {
  const [formData, setFormData] = useState({
    businessType: "",
    teamSize: "",
    challenges: [] as string[],
    goals: [] as string[],
    timeSpent: ""
  });
  const [showResults, setShowResults] = useState(false);

  const businessTypes = [
    "Restaurant / Food Service",
    "Professional Services (Legal, Accounting, Consulting)",
    "Healthcare / Medical Practice",
    "Retail / E-commerce",
    "Manufacturing",
    "Real Estate",
    "Education / Training",
    "Technology / Software",
    "Other Service Business"
  ];

  const challenges = [
    "Manual data entry and paperwork",
    "Disconnected systems and tools",
    "Poor communication between teams",
    "Inefficient customer management",
    "Time-consuming reporting",
    "Inventory or resource management issues",
    "Billing and invoicing delays",
    "Compliance and documentation problems"
  ];

  const automationGoals = [
    "Reduce manual data entry",
    "Improve team communication",
    "Streamline customer interactions",
    "Automate reporting and analytics",
    "Integrate existing systems",
    "Digitize paper processes",
    "Improve project management",
    "Enhance quality control"
  ];

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      challenges: checked 
        ? [...prev.challenges, challenge]
        : prev.challenges.filter(c => c !== challenge)
    }));
  };

  const handleGoalChange = (goal: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      goals: checked 
        ? [...prev.goals, goal]
        : prev.goals.filter(g => g !== goal)
    }));
  };

  const calculateScore = () => {
    let score = 0;
    
    // Base score for business type complexity
    if (formData.businessType) score += 20;
    
    // Score based on challenges (more challenges = higher automation potential)
    score += formData.challenges.length * 8;
    
    // Score based on goals (more goals = higher benefit potential)
    score += formData.goals.length * 8;
    
    // Score based on time spent on manual tasks
    const timeMultipliers: { [key: string]: number } = {
      "1-5 hours": 10,
      "6-10 hours": 20,
      "11-20 hours": 30,
      "21-30 hours": 40,
      "30+ hours": 50
    };
    score += timeMultipliers[formData.timeSpent] || 0;

    return Math.min(score, 100);
  };

  const getScoreCategory = (score: number) => {
    if (score >= 80) return { category: "High Priority", color: "text-accent", message: "Your business has significant automation opportunities with immediate ROI potential." };
    if (score >= 60) return { category: "Good Candidate", color: "text-primary", message: "Strong automation potential with multiple areas for efficiency improvements." };
    if (score >= 40) return { category: "Moderate Potential", color: "text-secondary", message: "Several automation opportunities that could streamline your operations." };
    return { category: "Basic Optimization", color: "text-muted-foreground", message: "Some automation opportunities available for gradual efficiency improvements." };
  };

  const handleSubmit = () => {
    if (formData.businessType && formData.challenges.length > 0 && formData.timeSpent) {
      setShowResults(true);
    }
  };

  const isFormComplete = formData.businessType && formData.challenges.length > 0 && formData.timeSpent;

  return (
    <section id="assessment" className="py-20 bg-surface-productivity">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Free Business <span className="text-secondary">Operations Assessment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your automation potential and get a personalized efficiency roadmap in under 3 minutes.
          </p>
        </div>

        <Card className="border-border shadow-elevated bg-background">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-8 h-8 text-secondary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">
              Operations Efficiency Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {!showResults ? (
              <>
                {/* Business Type */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">
                    What type of business do you operate? *
                  </label>
                  <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Team Size */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">
                    What's your team size?
                  </label>
                  <Select value={formData.teamSize} onValueChange={(value) => setFormData(prev => ({ ...prev, teamSize: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5 employees</SelectItem>
                      <SelectItem value="6-15">6-15 employees</SelectItem>
                      <SelectItem value="16-50">16-50 employees</SelectItem>
                      <SelectItem value="51-100">51-100 employees</SelectItem>
                      <SelectItem value="100+">100+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Current Challenges */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-foreground">
                    What are your current operational challenges? * (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {challenges.map((challenge) => (
                      <div key={challenge} className="flex items-center space-x-3">
                        <Checkbox
                          id={challenge}
                          checked={formData.challenges.includes(challenge)}
                          onCheckedChange={(checked) => handleChallengeChange(challenge, checked as boolean)}
                        />
                        <label htmlFor={challenge} className="text-sm text-muted-foreground cursor-pointer">
                          {challenge}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Automation Goals */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-foreground">
                    What automation goals interest you? (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {automationGoals.map((goal) => (
                      <div key={goal} className="flex items-center space-x-3">
                        <Checkbox
                          id={goal}
                          checked={formData.goals.includes(goal)}
                          onCheckedChange={(checked) => handleGoalChange(goal, checked as boolean)}
                        />
                        <label htmlFor={goal} className="text-sm text-muted-foreground cursor-pointer">
                          {goal}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Spent */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground">
                    How many hours per week does your team spend on manual/administrative tasks? *
                  </label>
                  <Select value={formData.timeSpent} onValueChange={(value) => setFormData(prev => ({ ...prev, timeSpent: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5 hours">1-5 hours per week</SelectItem>
                      <SelectItem value="6-10 hours">6-10 hours per week</SelectItem>
                      <SelectItem value="11-20 hours">11-20 hours per week</SelectItem>
                      <SelectItem value="21-30 hours">21-30 hours per week</SelectItem>
                      <SelectItem value="30+ hours">30+ hours per week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button 
                    variant="roi" 
                    size="xl" 
                    onClick={handleSubmit}
                    disabled={!isFormComplete}
                    className="group"
                  >
                    Get My Operations Score
                    <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Button>
                  {!isFormComplete && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Please complete all required fields (*)
                    </p>
                  )}
                </div>
              </>
            ) : (
              /* Results */
              <div className="space-y-8">
                {(() => {
                  const score = calculateScore();
                  const scoreData = getScoreCategory(score);
                  return (
                    <>
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">
                          Your Operations Efficiency Score
                        </h3>
                        <div className="relative">
                          <div className="text-6xl font-bold text-foreground mb-2">{score}/100</div>
                          <div className={`text-lg font-semibold ${scoreData.color}`}>
                            {scoreData.category}
                          </div>
                        </div>
                        <Progress value={score} className="h-4" />
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          {scoreData.message}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-surface-efficiency rounded-lg border border-border">
                          <div className="text-2xl font-bold text-primary mb-2">
                            {formData.challenges.length}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Areas for Improvement
                          </div>
                        </div>
                        <div className="text-center p-6 bg-surface-efficiency rounded-lg border border-border">
                          <div className="text-2xl font-bold text-secondary mb-2">
                            {formData.goals.length}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Automation Goals
                          </div>
                        </div>
                        <div className="text-center p-6 bg-surface-efficiency rounded-lg border border-border">
                          <div className="text-2xl font-bold text-accent mb-2">
                            {formData.timeSpent.split(' ')[0]}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Weekly Manual Hours
                          </div>
                        </div>
                      </div>

                      <div className="text-center space-y-4">
                        <h4 className="text-xl font-bold text-foreground">
                          Ready to Transform Your Operations?
                        </h4>
                        <p className="text-muted-foreground">
                          Get a custom automation roadmap and ROI analysis for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button variant="efficiency" size="xl" className="group">
                            Book Free Consultation
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                          <Button variant="outline" size="xl">
                            Download Detailed Report
                          </Button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AssessmentSection;