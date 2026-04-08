import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/photo-booths" element={<ComingSoon />} />
          <Route path="/selfie-booth" element={<ComingSoon />} />
          <Route path="/360-booth" element={<ComingSoon />} />
          <Route path="/txr20-booth" element={<ComingSoon />} />
          <Route path="/special-effects" element={<ComingSoon />} />
          <Route path="/cold-sparks" element={<ComingSoon />} />
          <Route path="/dancing-on-the-clouds" element={<ComingSoon />} />
          <Route path="/packages" element={<ComingSoon />} />
          <Route path="/gallery" element={<ComingSoon />} />
          <Route path="/reviews" element={<ComingSoon />} />
          <Route path="/faq" element={<ComingSoon />} />
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
