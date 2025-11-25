import { AlertCircle, CheckCircle } from "lucide-react";
import problemSolutionImage from "@/assets/problem-solution.jpg";

export const ProblemSolutionSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-4xl mx-auto">
          <img 
            src={problemSolutionImage} 
            alt="Do problema à solução com a Hall Assessoria" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-destructive/10 border-l-4 border-destructive p-8 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-destructive">O Problema</h3>
            </div>
            <p className="text-foreground leading-relaxed text-lg">
              Muitos trabalhadores não sabem que têm direito ao Auxílio-Acidente e acabam deixando dinheiro garantido pelo INSS sem reclamar. A burocracia do processo afasta ainda mais as pessoas de buscar esse benefício.
            </p>
          </div>
          
          <div className="bg-primary-light border-l-4 border-primary p-8 rounded-lg">
            <div className="flex items-start gap-3 mb-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <h3 className="text-2xl font-bold text-primary">A Solução</h3>
            </div>
            <p className="text-foreground leading-relaxed text-lg">
              A Hall Assessoria cuida de todo o processo administrativo, reduz a burocracia e aumenta suas chances de aprovação. Você só paga se receber o benefício — sem custo inicial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
