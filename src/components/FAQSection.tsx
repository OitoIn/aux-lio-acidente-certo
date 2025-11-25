import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Quem pode solicitar o Auxílio-Acidente?",
      answer: "Qualquer pessoa que sofreu acidente (no trabalho ou fora dele) e ficou com redução permanente da capacidade de trabalho. Você precisa ter recebido Auxílio-Doença após o acidente."
    },
    {
      question: "Preciso de um advogado?",
      answer: "Não é obrigatório, mas ter uma assessoria especializada aumenta muito suas chances de aprovação. A Hall Assessoria cuida de toda a documentação e processo."
    },
    {
      question: "Quanto tempo demora?",
      answer: "A análise gratuita leva poucas horas. O processo completo pode variar, mas a Hall acompanha tudo para você."
    },
    {
      question: "Já recebo outro benefício. Posso receber o Auxílio-Acidente?",
      answer: "Sim! O Auxílio-Acidente pode ser cumulativo com outros benefícios do INSS. Converse com nossa equipe para saber sua situação específica."
    },
    {
      question: "Quanto custa?",
      answer: "A análise gratuita não custa nada. Você só paga se receber o benefício, e o valor é descontado da primeira parcela."
    },
    {
      question: "Como funciona o processo?",
      answer: "Você responde um formulário rápido, nossa equipe analisa, entra em contato pelo WhatsApp e cuida de tudo. Simples assim!"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
