import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import AssessmentSection from "@/components/AssessmentSection";
import ToolsSection from "@/components/ToolsSection";
import ROICalculator from "@/components/ROICalculator";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ShowcaseSection />
      <AssessmentSection />
      <ToolsSection />
      <ROICalculator />
      <ProcessSection />
      <Footer />
    </div>
  );
};

export default Index;
