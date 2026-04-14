import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SelfieBoothPage from "./pages/SelfieBoothPage.tsx";
import ThreeSixtyBoothPage from "./pages/ThreeSixtyBoothPage.tsx";
import TXR20BoothPage from "./pages/TXR20BoothPage.tsx";
import ColdSparksPage from "./pages/ColdSparksPage.tsx";
import DancingCloudsPage from "./pages/DancingCloudsPage.tsx";
import PackagesPage from "./pages/PackagesPage.tsx";
import BackdropsPage from "./pages/BackdropsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import BookingPage from "./pages/BookingPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import WeddingsPage from "./pages/WeddingsPage.tsx";
import CorporateEventsPage from "./pages/CorporateEventsPage.tsx";
import SpecialEffectsPage from "./pages/SpecialEffectsPage.tsx";
// Event pages
import BirthdaysPage from "./pages/BirthdaysPage.tsx";
import QuinceanerásPage from "./pages/QuinceanerásPage.tsx";
import Sweet16Page from "./pages/Sweet16Page.tsx";
import BabyShowersPage from "./pages/BabyShowersPage.tsx";
import SchoolEventsPage from "./pages/SchoolEventsPage.tsx";
import BrandActivationsPage from "./pages/BrandActivationsPage.tsx";
// City pages
import MiamiPage from "./pages/cities/MiamiPage.tsx";
import FortLauderdalePage from "./pages/cities/FortLauderdalePage.tsx";
import BocaRatonPage from "./pages/cities/BocaRatonPage.tsx";
import WestPalmBeachPage from "./pages/cities/WestPalmBeachPage.tsx";
import HollywoodPage from "./pages/cities/HollywoodPage.tsx";
import CoralSpringsPage from "./pages/cities/CoralSpringsPage.tsx";
import PembrokePinesPage from "./pages/cities/PembrokePinesPage.tsx";
import MiramarPage from "./pages/cities/MiramarPage.tsx";
import DoralPage from "./pages/cities/DoralPage.tsx";
import KendallPage from "./pages/cities/KendallPage.tsx";
import HomesteadPage from "./pages/cities/HomesteadPage.tsx";
import ServiceAreasPage from "./pages/ServiceAreasPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ChatWidget from "./components/ChatWidget";

const queryClient = new QueryClient();

const ScrollProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const bar = document.getElementById('scroll-progress');
      if (bar) bar.style.width = `${progress}%`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="scroll-progress" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollProgressBar />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/selfie-booth" element={<SelfieBoothPage />} />
          <Route path="/360-booth" element={<ThreeSixtyBoothPage />} />
          <Route path="/txr20-booth" element={<TXR20BoothPage />} />
          <Route path="/cold-sparks" element={<ColdSparksPage />} />
          <Route path="/dancing-on-the-clouds" element={<DancingCloudsPage />} />
          <Route path="/special-effects" element={<SpecialEffectsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/backdrops" element={<BackdropsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/weddings" element={<WeddingsPage />} />
          <Route path="/corporate-events" element={<CorporateEventsPage />} />
          {/* Event pages */}
          <Route path="/birthdays-private-parties" element={<BirthdaysPage />} />
          <Route path="/quinceaneras" element={<QuinceanerásPage />} />
          <Route path="/sweet-16" element={<Sweet16Page />} />
          <Route path="/baby-showers" element={<BabyShowersPage />} />
          <Route path="/school-events" element={<SchoolEventsPage />} />
          <Route path="/brand-activations" element={<BrandActivationsPage />} />
          {/* City pages */}
          <Route path="/photo-booth-rental-miami" element={<MiamiPage />} />
          <Route path="/photo-booth-rental-fort-lauderdale" element={<FortLauderdalePage />} />
          <Route path="/photo-booth-rental-boca-raton" element={<BocaRatonPage />} />
          <Route path="/photo-booth-rental-west-palm-beach" element={<WestPalmBeachPage />} />
          <Route path="/photo-booth-rental-hollywood-fl" element={<HollywoodPage />} />
          <Route path="/photo-booth-rental-coral-springs" element={<CoralSpringsPage />} />
          <Route path="/photo-booth-rental-pembroke-pines" element={<PembrokePinesPage />} />
          <Route path="/photo-booth-rental-miramar" element={<MiramarPage />} />
          <Route path="/photo-booth-rental-doral" element={<DoralPage />} />
          <Route path="/photo-booth-rental-kendall" element={<KendallPage />} />
          <Route path="/photo-booth-rental-homestead" element={<HomesteadPage />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
