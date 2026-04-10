import { useEffect, useRef, useState } from "react";
import { Ruler, HeadphonesIcon, Wrench, Users, Award } from "lucide-react";

const differentials = [
  { icon: Ruler, label: "Projetos sob medida" },
  { icon: HeadphonesIcon, label: "Atendimento personalizado" },
  { icon: Wrench, label: "Execução completa" },
  { icon: Users, label: "Equipe especializada" },
  { icon: Award, label: "Alto padrão de acabamento" },
];

const DifferentialsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Por Que Nos Escolher
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Impacto visual que{" "}
            <span className="gradient-text">vende por você</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {differentials.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={22} />
              </div>
              <p className="text-sm font-medium text-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
