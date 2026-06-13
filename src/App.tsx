import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
import APropos from "./pages/APropos";
import AteliersDuFutur from "./pages/AteliersDuFutur";
import Unsubscribe from "./pages/Unsubscribe";
import Conferences from "./pages/Conferences";
import NeuromarketingRennes from "./pages/NeuromarketingRennes";
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
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/ateliers-du-futur" element={<AteliersDuFutur />} />
          <Route path="/prospective" element={<AteliersDuFutur />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/neuromarketing-rennes" element={<NeuromarketingRennes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
