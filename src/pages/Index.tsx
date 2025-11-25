import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitSection } from "@/components/BenefitSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FormSection } from "@/components/FormSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CTAButton } from "@/components/CTAButton";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onCtaClick={scrollToForm} />
      <div id="beneficios">
        <BenefitSection />
      </div>
      <CTAButton onClick={scrollToForm} />
      <ProblemSolutionSection />
      <CTAButton onClick={scrollToForm} />
      <DifferentialsSection />
      <CTAButton onClick={scrollToForm} />
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <FormSection />
      <FinalCTASection onCtaClick={scrollToForm} />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default Index;
