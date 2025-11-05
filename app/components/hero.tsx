import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          <span className="bg-gradient-to-r from-primary-blue to-secondary-blue bg-clip-text text-transparent">
            GIT E GITHUB
          </span>
          <br />O Guia Completo para Desenvolvedores
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
          [cite_start]Domine o versionamento de código e transforme sua
          carreira. [cite: 55] [cite_start]Baixe o e-book gratuito e aprenda a
          colaborar, organizar seu código e evoluir em equipe. [cite: 14]
        </p>
        <Button
          size="lg"
          asChild
          className="bg-secondary-blue hover:bg-secondary-blue/90 text-black font-bold px-10 py-6 text-lg"
        >
          {/* ATENÇÃO: Troque 'LINK_DO_SEU_EBOOK.pdf' pelo link real onde o PDF está hospedado */}
          <a href="/E-book Git e GitHub.pdf" download>
            BAIXAR MEU GUIA GRATUITO
          </a>
        </Button>
        <div className="mt-4 text-sm text-gray-400">
          Totalmente gratuito • Download imediato
        </div>
      </div>
    </section>
  );
}
