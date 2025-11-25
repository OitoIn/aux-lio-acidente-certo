import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CTAButtonProps {
  onClick: () => void;
}

export const CTAButton = ({ onClick }: CTAButtonProps) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`flex justify-center py-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Button 
        variant="cta" 
        size="lg" 
        onClick={onClick}
        className="text-lg px-8 py-6 h-auto group"
      >
        Saiba se tem direito
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};
