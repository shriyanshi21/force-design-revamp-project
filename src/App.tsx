
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Analysis from "./pages/Analysis";
import Journal from "./pages/Journal";
import Vision from "./pages/Vision";
import Settings from "./pages/Settings";
import AudioAnalysis from "./pages/AudioAnalysis";
import NotFound from "./pages/NotFound";

// Components
import NewAnalysis from "./components/analysis/NewAnalysis";
import AnalysisHistory from "./components/analysis/AnalysisHistory";
import AnalysisResults from "./components/analysis/AnalysisResults";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journal" element={<Journal />} />
          
          <Route path="/analysis" element={<Analysis />}>
            <Route index element={<NewAnalysis />} />
            <Route path="history" element={<AnalysisHistory />} />
          </Route>
          
          {/* New route for analysis results */}
          <Route 
            path="/analysis/results/text" 
            element={<AnalysisResults 
              type="text" 
              title="Journal Entries Analysis" 
              dateRange="May 10-16, 2023" 
            />} 
          />
          <Route 
            path="/analysis/results/audio" 
            element={<AnalysisResults 
              type="audio" 
              title="Voice Recording Analysis" 
              dateRange="May 12, 2023" 
            />} 
          />
          
          <Route path="/audio-analysis" element={<AudioAnalysis />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
