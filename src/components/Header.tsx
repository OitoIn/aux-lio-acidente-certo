import hallLogo from "@/assets/hall-logo.png";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border py-4">
      <div className="container mx-auto px-4">
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
      </div>
    </header>
  );
};
