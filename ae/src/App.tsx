import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { EngineeringSidebar } from "./components/EngineeringSidebar";
import Index from "./pages/Index";
import Breaker from "./pages/Breaker";
import Certificate from "./pages/Certificate";
import Completion from "./pages/Completion";
import Earthing from "./pages/Earthing";
import Kit from "./pages/Kit";
import ToolBox from "./pages/ToolBox";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex min-h-screen w-full bg-background">
      {!isHomePage && (
        <EngineeringSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      )}
      <main
        className={`flex-1 transition-all duration-300 ${
          !isHomePage ? (sidebarCollapsed ? "ml-16" : "ml-64") : ""
        }`}
      >
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/breaker" element={<Breaker />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/earthing" element={<Earthing />} />
          <Route path="/kit" element={<Kit />} />
          <Route path="/toolbox" element={<ToolBox />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="engineering-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
