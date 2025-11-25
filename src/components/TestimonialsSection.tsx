import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Com a ajuda da Hall, consegui meu benefício em poucos meses. Não sabia que tinha direito e agora recebo minha indenização todo mês. Muito obrigado!",
      author: "Carlos M., São Paulo"
    },
    {
      text: "Sofri um acidente e fiquei com dor nas costas. A Hall cuidou de tudo enquanto eu me recuperava. Recomendo para todos!",
      author: "Marina S., Rio de Janeiro"
    },
    {
      text: "Achei que não tinha direito a nada. A Hall me mostrou que eu podia receber. Processo simples e rápido. Valeu!",
      author: "João P., Minas Gerais"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Histórias de Sucesso
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-l-4 border-success bg-success-light">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cta text-cta" />
                  ))}
                </div>
                <p className="text-foreground italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-primary font-bold text-sm">
                  — {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
