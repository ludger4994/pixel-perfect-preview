import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import ExperienceStatement from "@/components/home/ExperienceStatement";
import FeaturedServices from "@/components/home/FeaturedServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import PackagesPreview from "@/components/home/PackagesPreview";
import InstagramSection from "@/components/home/InstagramSection";
import ServiceArea from "@/components/home/ServiceArea";
import FAQPreview from "@/components/home/FAQPreview";
import FinalCTA from "@/components/home/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceStatement />
        <FeaturedServices />
        <WhyChooseUs />
        <GalleryPreview />
        <ReviewsPreview />
        <PackagesPreview />
        <InstagramSection />
        <ServiceArea />
        <FAQPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
