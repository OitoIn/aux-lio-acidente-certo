import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-worker.jpg";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Teve um acidente e ficou com sequelas? Você pode ter direito a uma indenização mensal vitalícia do INSS.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            O Auxílio-Acidente é um benefício pouco divulgado, mas você pode garantir esse direito com apoio da Hall Assessoria.
          </p>
          
          <div className="my-12 max-w-2xl mx-auto">
            <img 
              src={heroImage} 
              alt="Trabalhador recuperado confiante" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <Button 
            variant="cta" 
            size="lg" 
            onClick={onCtaClick}
            className="text-lg px-8 py-6 h-auto"
          >
            Solicitar Análise Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};
