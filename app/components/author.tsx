import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Author() {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          [cite_start]Sobre o <span className="text-primary-blue">Autor</span>{" "}
          [cite: 16]
        </h2>
        <Card className="bg-gray-900 border-gray-700 text-white overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-1/3 bg-gray-800 flex items-center justify-center p-8">
              <Avatar className="h-40 w-40 border-4 border-primary-blue">
                {/* ATENÇÃO: Troque pela URL da sua foto */}
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Matheus Willian Bento"
                />
                <AvatarFallback className="text-5xl bg-primary-blue text-white">
                  MW
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="md:w-2/3 p-8">
              [cite_start]
              <h3 className="text-3xl font-bold text-white mb-2">
                Matheus Willian Bento [cite: 305]
              </h3>
              <p className="font-semibold text-primary-blue text-lg mb-4">
                [cite_start]Analista de Desenvolvimento de Software e Professor
                [cite: 20]
              </p>
              <p className="text-gray-300 mb-4">
                [cite_start]Formado em Ciências da Computação e pós-graduado em
                Desenvolvimento Web e Inteligência Artificial. [cite: 19]
              </p>
              <p className="text-gray-300">
                [cite_start]Hoje, foca no desenvolvimento Full Stack, criando
                aplicações escaláveis com React, Next.js e Node.js [cite:
                21][cite_start], e também cria conteúdo para ajudar outros devs
                a evoluírem. [cite: 22]
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
