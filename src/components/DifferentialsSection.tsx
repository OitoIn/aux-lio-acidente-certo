import { Target, Smartphone, DollarSign, CheckCircle, Zap, Handshake } from "lucide-react";
import teamImage from "@/assets/team-advisory.jpg";

export const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Target,
      title: "Especialização",
      description: "Atendimento especializado em benefícios do INSS com equipe qualificada."
    },
    {
      icon: Smartphone,
      title: "100% Digital",
      description: "Processo completamente digital e seguro. Tudo feito online, sem sair de casa."
    },
    {
      icon: DollarSign,
      title: "Sem Custo Inicial",
      description: "Você só paga se receber o benefício. Sem risco para você."
    },
    {
      icon: CheckCircle,
      title: "Milhares Atendidos",
      description: "Centenas de clientes já recebem seu benefício com nossa ajuda."
    },
    {
      icon: Zap,
      title: "Processo Rápido",
      description: "Análise gratuita em poucas horas. Começamos logo."
    },
    {
      icon: Handshake,
      title: "Suporte Total",
      description: "Acompanhamento completo do seu caso do início ao fim."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Por que escolher a Hall Assessoria?
        </h2>
        
        <div className="mb-12 max-w-3xl mx-auto">
          <img 
            src={teamImage} 
            alt="Equipe de assessoria profissional da Hall" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-card p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
