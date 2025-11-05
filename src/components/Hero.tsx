import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import { useInView } from "@/hooks/useInView";

const Hero = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.5 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-3 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-2">
            <img
              src={ebookCover}
              alt="Capa do E-book Git e GitHub"
              className="w-40 md:w-48 lg:w-56 mt-7 h-auto animate-float rounded-lg shadow-2xl"
            />
          </div>

          <h1
            ref={headingRef as React.RefObject<HTMLHeadingElement>}
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight transform transition-all duration-1000 ${
              headingInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Domine <span className="text-gradient">Git e GitHub</span>
            <br />
            do Zero ao Avançado
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            O guia completo e{" "}
            <span className="text-accent font-semibold">100% gratuito</span>{" "}
            para dominar versionamento e colaboração profissional
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-blue text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={scrollToDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar E-book Grátis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={scrollToDownload}
            >
              Saiba Mais
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-3xl mx-auto"
          >
            {[
              { number: "100%", label: "Gratuito" },
              { number: "9", label: "Capítulos" },
              { number: "40+", label: "Páginas" },
              { number: "0", label: "Pré-requisitos" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center transform transition-all duration-700 ${
                  statsInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
