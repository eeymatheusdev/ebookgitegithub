import { GraduationCap, Code, Users, BookOpen } from "lucide-react";
import authorPhoto from "@/assets/author.jpg";
import { useInView } from "@/hooks/useInView";

const Author = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.5 });
  const [cardRef, cardInView] = useInView({ threshold: 0.2 });
  const [photoRef, photoInView] = useInView({ threshold: 0.5 });
  const [credentialsRef, credentialsInView] = useInView({ threshold: 0.3 });

  const credentials = [
    {
      icon: GraduationCap,
      text: "Bacharel em Ciências da Computação",
    },
    {
      icon: GraduationCap,
      text: "Pós-graduado em Desenvolvimento Web e IA",
    },
    {
      icon: Code,
      text: "Analista de Desenvolvimento de Software",
    },
    {
      icon: Users,
      text: "Professor de Desenvolvimento de Sistemas",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 transform transition-all duration-1000 ${
              titleInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Sobre o <span className="text-gradient">autor</span>
            </h2>
          </div>

          <div
            ref={cardRef as React.RefObject<HTMLDivElement>}
            className={`card-gradient rounded-2xl p-8 md:p-12 border border-border transform transition-all duration-1000 ${
              cardInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-8 items-center">
              <div
                ref={photoRef as React.RefObject<HTMLDivElement>}
                className={`flex-shrink-0 transform transition-all duration-1000 ${
                  photoInView ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
              >
                <img
                  src={authorPhoto}
                  alt="Matheus Dev"
                  className="w-48 h-48 rounded-2xl object-cover border-2 border-primary/20"
                />
              </div>

              <div className="space-y-6 w-full">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Minha jornada com a tecnologia começou aos{" "}
                  <span className="text-foreground font-semibold">13 anos</span>
                  , quando tive minha primeira oportunidade em uma Lan House.
                  Desde então, entendi que resolver problemas reais com soluções
                  digitais não é só uma habilidade — é um propósito que
                  transformou minha vida e guia minha carreira até hoje.
                </p>

                <div
                  ref={credentialsRef as React.RefObject<HTMLDivElement>}
                  className="grid md:grid-cols-2 gap-4 py-6"
                >
                  {credentials.map((credential, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 bg-background/50 rounded-lg p-4 transform transition-all duration-700 ${
                        credentialsInView
                          ? "translate-x-0 opacity-100"
                          : "translate-x-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <credential.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm">{credential.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hoje, foco no desenvolvimento{" "}
                  <span className="text-foreground font-semibold">
                    Full Stack
                  </span>
                  , criando aplicações escaláveis e intuitivas com React,
                  Next.js e Node.js, sempre buscando entregar soluções
                  eficientes, modernas e com excelente experiência de uso.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-8">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-base leading-relaxed">
                      Além de desenvolver, também crio conteúdo para ajudar
                      outros devs a evoluírem de forma estruturada. Ofereço{" "}
                      <span className="text-accent font-semibold">
                        cursos, e-books, mentorias e dicas práticas
                      </span>{" "}
                      que facilitam o aprendizado, o direcionamento e a entrada
                      no mercado de tecnologia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
