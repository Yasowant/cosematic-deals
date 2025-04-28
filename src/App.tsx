import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Deals from './pages/Deals';
import Makeup from './pages/Makeup';
import Skincare from './pages/Skincare';
import Haircare from './pages/Haircare';
import NewArrivals from './pages/NewArrivals';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/category/makeup" element={<Makeup />} />
          <Route path="/category/skincare" element={<Skincare />} />
          <Route path="/category/haircare" element={<Haircare />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
