import hallLogo from "@/assets/hall-logo.png";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
            <span className="text-xl md:text-2xl font-bold text-foreground">
              Hall Assessoria
            </span>
          </div>
          
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
        </div>
      </div>
    </header>
  );
};
