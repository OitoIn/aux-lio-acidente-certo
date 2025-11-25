import { useState } from "react";
import { Menu, X } from "lucide-react";
import hallLogo from "@/assets/hall-logo.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <header className="bg-background border-b border-border py-4 sticky top-0 z-40 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src={hallLogo} 
              alt="Hall Assessoria" 
              className="h-12 md:h-16"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('form-section')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => scrollToSection('beneficios')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 px-4 hover:bg-accent rounded-md"
                >
                  Benefícios
                </button>
                <button
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 px-4 hover:bg-accent rounded-md"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 px-4 hover:bg-accent rounded-md"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection('form-section')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2 px-4 hover:bg-accent rounded-md"
                >
                  Contato
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
