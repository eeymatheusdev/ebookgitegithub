import { Code2, Users, Shield, Rocket } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Benefits = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.5 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const benefits = [
    {
      icon: Code2,
      title: "Histórico Completo",
      description:
        "Cada passo do seu projeto registrado e organizado para você evoluir com segurança",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Experimente sem medo. Volte no tempo, teste e reverta mudanças quando precisar",
    },
    {
      icon: Users,
      title: "Colaboração Pro",
      description:
        "Trabalhe em equipe com revisões, sugestões e integração profissional",
    },
    {
      icon: Rocket,
      title: "Open Source",
      description:
        "Contribua com projetos do mundo todo e mostre seu trabalho para empresas",
    },
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
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
            Por que dominar <span className="text-gradient">Git e GitHub</span>
            <br />
            transforma sua carreira?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Sem versionamento, o desenvolvimento é arriscado e limitado. Com Git
            e GitHub, você ganha superpoderes.
          </p>
        </div>

        <div
          ref={benefitsRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`card-gradient rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl group transform ${
                benefitsInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
