import hallLogo from "@/assets/hall-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-muted py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={hallLogo} 
            alt="Hall Assessoria" 
            className="h-12"
          />
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Hall Assessoria - Todos os direitos reservados
            </p>
            <p className="text-sm text-muted-foreground">
              <Link 
                to="/politica-de-privacidade" 
                className="text-primary hover:underline font-medium"
              >
                Política de Privacidade
              </Link>
              {" | "}
              CNPJ: 26.227.032/0001-18
            </p>
            <p className="text-sm text-muted-foreground">
              Desenvolvido por{" "}
              <a 
                href="https://oitoin.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Oitoin
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
