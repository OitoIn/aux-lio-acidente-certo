import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

interface FinalCTASectionProps {
  onCtaClick: () => void;
}

export const FinalCTASection = ({ onCtaClick }: FinalCTASectionProps) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Não deixe seu direito para depois!
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
          Descubra agora se você tem direito ao Auxílio-Acidente. Nossa análise é 100% gratuita e sem compromisso.
        </p>
        
        <Button 
          variant="cta" 
          size="lg" 
          onClick={onCtaClick}
          className="text-lg px-8 py-6 h-auto mb-8"
        >
          Solicitar Análise Gratuita Agora
        </Button>
        
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="h-6 w-6" />
            <h3 className="text-xl font-bold">Garantia Total</h3>
          </div>
          <p className="text-sm opacity-90">
            Você só paga se receber o benefício. Sem custo inicial, sem surpresas. Nossa equipe trabalha para que você receba o que é seu por direito.
          </p>
        </div>
      </div>
    </section>
  );
};
