import { HeroSection } from "@/components/HeroSection";
import { BenefitSection } from "@/components/BenefitSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FormSection } from "@/components/FormSection";
import { FinalCTASection } from "@/components/FinalCTASection";

const Index = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onCtaClick={scrollToForm} />
      <BenefitSection />
      <ProblemSolutionSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <FAQSection />
      <FormSection />
      <FinalCTASection onCtaClick={scrollToForm} />
    </div>
  );
};

export default Index;
