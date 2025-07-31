import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SecurityThreatsSection from "@/components/SecurityThreatsSection";
import SecuritySolutionsSection from "@/components/SecuritySolutionsSection";
import ComplianceSection from "@/components/ComplianceSection";
import SecurityAssessmentSection from "@/components/SecurityAssessmentSection";
import TrustCredibilitySection from "@/components/TrustCredibilitySection";
import DataProtectionShowcase from "@/components/DataProtectionShowcase";
import IndustrySecuritySection from "@/components/IndustrySecuritySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <SecurityThreatsSection />
        
        <section id="services">
          <SecuritySolutionsSection />
        </section>
        
        <section id="compliance">
          <ComplianceSection />
        </section>
        
        <SecurityAssessmentSection />
        
        <section id="about">
          <TrustCredibilitySection />
        </section>
        
        <section id="protection">
          <DataProtectionShowcase />
        </section>
        
        <IndustrySecuritySection />
      </main>
      
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
};

export default Index;
