import { useLocation, Navigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getIndustryData, isValidIndustrySlug } from "@/lib/industries-config";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import IndustrySEOHead from "@/components/industry/IndustrySEOHead";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryMap from "@/components/industry/IndustryMap";
import IndustryEntities from "@/components/industry/IndustryEntities";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import IndustryContact from "@/components/industry/IndustryContact";
import RelatedIndustries from "@/components/industry/RelatedIndustries";

const IndustryPage = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  // Extract industry slug from URL path
  // URL format: /:lang/local-seo-services-for-{industrySlug}
  const pathParts = location.pathname.split('/').filter(Boolean);
  const industrySegment = pathParts.find(part => part.startsWith('local-seo-services-for-'));
  
  // Extract the slug after "local-seo-services-for-"
  const slug = industrySegment 
    ? industrySegment.replace('local-seo-services-for-', '')
    : '';

  if (!slug || !isValidIndustrySlug(slug)) {
    return <Navigate to={`/${language}/404`} replace />;
  }

  const industry = getIndustryData(slug);
  
  if (!industry) {
    return <Navigate to={`/${language}/404`} replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <IndustrySEOHead industry={industry} />
      <Navigation />
      <main>
        <IndustryHero industry={industry} />
        <IndustryServices industry={industry} />
        <IndustryEntities industry={industry} />
        <IndustryMap industry={industry} />
        <IndustryFAQ industry={industry} />
        <RelatedIndustries industry={industry} />
        <IndustryContact industry={industry} />
      </main>
      <Footer />
    </div>
  );
};

export default IndustryPage;
