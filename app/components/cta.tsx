import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="download" className="py-20 md:py-28 bg-primary-blue">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pronto para dominar o Git e GitHub?
        </h2>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          Não perca mais tempo. Baixe agora o seu e-book completo e transforme a
          forma como você programa.
        </p>
        <Button
          size="lg"
          asChild
          className="bg-primary-blue hover:bg-primary-blue/90 text-white font-bold px-10 py-6 text-lg"
        >
          <a href="/E-book Git e GitHub.pdf" download>
            QUERO MEU E-BOOK GRATUITO!
          </a>
        </Button>
      </div>
    </section>
  );
}
