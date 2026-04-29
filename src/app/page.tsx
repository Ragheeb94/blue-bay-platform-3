import HeroSection from "@/components/sections/HeroSection";
import AudienceSection from "@/components/sections/AudienceSection";
import BrandsMarquee from "@/components/sections/BrandsMarquee";
import ProductCategoriesSection from "@/components/sections/ProductCategoriesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TrustStatsSection from "@/components/sections/TrustStatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <BrandsMarquee />
      <ProductCategoriesSection />
      <HowItWorksSection />
      <TrustStatsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
