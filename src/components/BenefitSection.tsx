import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const BenefitSection = () => {
  const benefits = [
    {
      title: "Benefício Indenizatório",
      description: "O Auxílio-Acidente é uma indenização mensal paga pelo INSS para pessoas que sofreram acidentes e ficaram com redução permanente da capacidade de trabalho."
    },
    {
      title: "Quem tem direito?",
      items: [
        "Sofreu acidente (no trabalho ou fora dele)",
        "Ficou com sequelas permanentes",
        "Tem redução parcial da capacidade laboral",
        "Recebeu Auxílio-Doença após o acidente"
      ]
    },
    {
      title: "Valor e Duração",
      description: "O benefício é calculado como um percentual sobre seu salário de benefício e é vitalício. Você recebe enquanto viver, sem limite de tempo.",
      highlight: true
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          O que é o Auxílio-Acidente?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-l-4 border-success shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {benefit.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                    {benefit.highlight && (
                      <span className="block mt-2 font-bold text-success">
                        ✓ Benefício vitalício
                      </span>
                    )}
                  </p>
                )}
                {benefit.items && (
                  <ul className="space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
