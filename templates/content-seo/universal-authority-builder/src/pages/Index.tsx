import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ContentBenefits from '@/components/ContentBenefits';
import FeaturedContent from '@/components/FeaturedContent';
import SEOResults from '@/components/SEOResults';
import ContentServices from '@/components/ContentServices';
import ContentResources from '@/components/ContentResources';
import AuthorityBuilding from '@/components/AuthorityBuilding';
import ContentAudit from '@/components/ContentAudit';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ContentBenefits />
      <FeaturedContent />
      <SEOResults />
      <ContentServices />
      <ContentResources />
      <AuthorityBuilding />
      <ContentAudit />
      <Footer />
    </div>
  );
};

export default Index;
