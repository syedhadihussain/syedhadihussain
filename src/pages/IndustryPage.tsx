import { useParams, Navigate } from "react-router-dom";
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
  const { industrySlug } = useParams<{ industrySlug: string }>();
  
  // Extract slug from the full path (local-seo-services-for-{slug})
  const slug = industrySlug?.replace("local-seo-services-for-", "") || "";
  
  if (!isValidIndustrySlug(slug)) {
    return <Navigate to="/404" replace />;
  }

  const industry = getIndustryData(slug);
  
  if (!industry) {
    return <Navigate to="/404" replace />;
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
