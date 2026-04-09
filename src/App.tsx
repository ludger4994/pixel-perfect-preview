import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
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
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/backdrops" element={<BackdropsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<ComingSoon />} />
          <Route path="/reviews" element={<ComingSoon />} />
          <Route path="/faq" element={<ComingSoon />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
