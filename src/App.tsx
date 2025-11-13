import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ServicesSection } from './components/ServicesSection';
import { ValuePropositionSection } from './components/ValuePropositionSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ValuePropositionSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
