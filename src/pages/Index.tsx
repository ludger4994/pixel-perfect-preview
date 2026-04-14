import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import HeroSection from "@/components/home/HeroSection";
import ExperienceStatement from "@/components/home/ExperienceStatement";
import FeaturedServices from "@/components/home/FeaturedServices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PackagesPreview from "@/components/home/PackagesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import InstagramSection from "@/components/home/InstagramSection";
import ServiceArea from "@/components/home/ServiceArea";
import FAQPreview from "@/components/home/FAQPreview";
import FinalCTA from "@/components/home/FinalCTA";
import MobileBookBar from "@/components/MobileBookBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceStatement />
        <FeaturedServices />
        <WhyChooseUs />
        <PackagesPreview />
        <HeroSlideshow />
        <GalleryPreview />
        <ReviewsPreview />
        <InstagramSection />
        <ServiceArea />
        <FAQPreview />
        <FinalCTA />
        <MobileBookBar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
