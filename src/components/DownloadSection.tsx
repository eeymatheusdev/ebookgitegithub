import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const DownloadSection = () => {
  const [cardRef, cardInView] = useInView({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/E-book_Git_e_GitHub.pdf";
    link.download = "Ebook_Git_GitHub_MatheusDev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    "PDF de alta qualidade",
    "Conteúdo atualizado e revisado",
    "Download imediato e vitalício",
    "Compatível com todos os dispositivos",
    "Material 100% gratuito",
    "Sem necessidade de cadastro complexo",
    "Aprenda no seu próprio ritmo",
    "Ideal para iniciantes e intermediários",
    "Acesso offline após o download",
    "Layout moderno e fácil de ler",
  ];

  return (
    <section id="download" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            ref={cardRef as React.RefObject<HTMLDivElement>}
            className={`card-gradient rounded-3xl p-8 md:p-12 border border-primary/30 shadow-2xl glow-blue transform transition-all duration-1000 ${
              cardInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 mb-6">
                <FileText className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Baixe seu e-book{" "}
                <span className="text-gradient">gratuitamente</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Comece agora sua jornada para dominar Git e GitHub.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 bg-background/50 rounded-lg p-4 transform transition-all duration-700 ${
                    cardInView
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow-cyan text-xl px-12 py-8 h-auto font-bold transition-all hover:scale-105"
                onClick={handleDownload}
              >
                <Download className="mr-3 h-6 w-6" />
                Baixar E-book Agora
              </Button>
            </div>
          </div>

          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className={`mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center transform transition-all duration-1000 ${
              statsInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Gratuito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Páginas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">9</div>
              <div className="text-sm text-muted-foreground">Capítulos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
