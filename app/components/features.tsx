import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  GitMerge,
  TerminalSquare,
  GitBranch,
  Github,
  Workflow,
  Sparkles,
} from "lucide-react";

const featuresList = [
  {
    icon: <Sparkles className="h-8 w-8 text-secondary-blue" />,
    title: "Por que dominar Git e GitHub?",
    description:
      "Entenda como o versionamento transforma sua carreira e te torna um dev mais profissional.",
  },
  {
    icon: <TerminalSquare className="h-8 w-8 text-secondary-blue" />,
    title: "Instalação e Configuração",
    description:
      "Configure seu ambiente do zero: Git, GitHub e a integração perfeita com o VSCode.",
  },
  {
    icon: <GitMerge className="h-8 w-8 text-secondary-blue" />,
    title: "Comandos Essenciais",
    description:
      "Do 'git init' ao 'git push', domine os comandos que você usará todos os dias.",
  },
  {
    icon: <GitBranch className="h-8 w-8 text-secondary-blue" />,
    title: "Branches, Merge e Conflitos",
    description:
      "Aprenda a trabalhar em paralelo, unir funcionalidades e resolver conflitos como um profissional.",
  },
  {
    icon: <Github className="h-8 w-8 text-secondary-blue" />,
    title: "GitHub na Prática",
    description:
      "Domine Forks, Pull Requests e Issues para colaborar em projetos (inclusive open source).",
  },
  {
    icon: <Workflow className="h-8 w-8 text-secondary-blue" />,
    title: "Boas Práticas e Fluxos",
    description:
      "Aprenda padrões como Commits Semânticos e organize suas branches para um trabalho em equipe eficiente.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          O que você vai <span className="text-secondary-blue">aprender</span>{" "}
          no e-book?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature) => (
            <Card
              key={feature.title}
              className="bg-gray-900 border-gray-700 text-white flex flex-col"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {feature.icon}
                <CardTitle className="text-lg font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
