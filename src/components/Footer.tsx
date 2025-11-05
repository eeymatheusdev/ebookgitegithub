import logo from "@/assets/logo.png";
import { useInView } from "@/hooks/useInView";

const Footer = () => {
  const [logoRef, logoInView] = useInView({ threshold: 0.5 });
  const [contentRef, contentInView] = useInView({ threshold: 0.3 });

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            ref={logoRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-8 transform transition-all duration-1000 ${
              logoInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <img
              src={logo}
              alt="eeyMatheusDev Logo"
              className="w-48 h-auto mx-auto mb-4 opacity-80 hover:opacity-100 transition-all duration-300"
            />
            <p className="text-muted-foreground">
              Transformando desenvolvedores através da educação!
            </p>
          </div>

          <div className="border-t border-border my-8" />

          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`text-center space-y-4 transform transition-all duration-1000 ${
              contentInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-sm text-muted-foreground">
              © 2025 Matheus Dev. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Este e-book é 100% gratuito e pode ser compartilhado livremente.
              Proibida a venda ou uso comercial sem autorização.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
