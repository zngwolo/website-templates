import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import AnalyticsSolutions from "@/components/AnalyticsSolutions";
import ROICalculator from "@/components/ROICalculator";
import BusinessTypes from "@/components/BusinessTypes";
import DashboardPreview from "@/components/DashboardPreview";
import BenefitsResults from "@/components/BenefitsResults";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <AnalyticsSolutions />
      <ROICalculator />
      <BusinessTypes />
      <DashboardPreview />
      <BenefitsResults />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;