import {
  BookOpen,
  Terminal,
  GitBranch,
  Github,
  Lightbulb,
  MessageSquare,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Contents = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.5 });
  const [topicsRef, topicsInView] = useInView({ threshold: 0.2 });
  const [glossaryRef, glossaryInView] = useInView({ threshold: 0.5 });
  const topics = [
    {
      icon: BookOpen,
      title: "Git e GitHub: conceitos fundamentais",
      description:
        "Entenda a diferença entre Git e GitHub e por que ambos são essenciais",
    },
    {
      icon: Terminal,
      title: "Instalação e configuração completa",
      description: "Configure seu ambiente com Git, GitHub e VSCode integrados",
    },
    {
      icon: Terminal,
      title: "Comandos essenciais na prática",
      description:
        "Domine os comandos mais usados no dia a dia com exemplos reais",
    },
    {
      icon: GitBranch,
      title:
        "Branches, merge, forks, pull requests, issues e resolução de conflitos",
      description:
        "Trabalhe com múltiplas versões e resolva conflitos como um profissional",
    },
    {
      icon: Lightbulb,
      title: "Boas práticas e fluxos de trabalho",
      description:
        "Aprenda os padrões usados por empresas e equipes de alto nível",
    },
    {
      icon: MessageSquare,
      title: "Casos de uso reais e dicas avançadas",
      description: "Solucione problemas reais com estratégias profissionais",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 ${
            titleInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Um guia completo estruturado para levar você do zero ao domínio
            profissional
          </p>
        </div>

        <div
          ref={topicsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-700 hover:scale-105 group transform ${
                topicsInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors">
                <topic.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div
            ref={glossaryRef as React.RefObject<HTMLDivElement>}
            className={`card-gradient rounded-2xl p-8 md:p-12 border border-primary/30 text-center transform transition-all duration-1000 ${
              glossaryInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              + Glossário completo de termos técnicos
            </h3>
            <p className="text-muted-foreground text-lg">
              Nunca mais fique perdido com a terminologia. Todos os termos
              importantes explicados de forma clara e objetiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contents;
