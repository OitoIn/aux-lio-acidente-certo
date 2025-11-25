import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  onClick: () => void;
}

export const CTAButton = ({ onClick }: CTAButtonProps) => {
  return (
    <div className="flex justify-center py-8">
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
