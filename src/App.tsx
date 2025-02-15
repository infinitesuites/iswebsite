
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BurbankProperties from "./pages/BurbankProperties";
import LongBeachProperties from "./pages/LongBeachProperties";
import ContactForm from "./pages/ContactForm";
import Services from "./pages/Services";
import CorporateHousing from "./pages/services/CorporateHousing";
import FurnishedRentals from "./pages/services/FurnishedRentals";
import InsuranceRelocations from "./pages/services/InsuranceRelocations";
import ExtendedStays from "./pages/services/ExtendedStays";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties/burbank" element={<BurbankProperties />} />
          <Route path="/properties/long-beach" element={<LongBeachProperties />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/corporate-housing" element={<CorporateHousing />} />
          <Route path="/services/furnished-rentals" element={<FurnishedRentals />} />
          <Route path="/services/insurance-relocations" element={<InsuranceRelocations />} />
          <Route path="/services/extended-stays" element={<ExtendedStays />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
