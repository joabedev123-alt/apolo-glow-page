import { useEffect, useRef, useState } from "react";
import { Layers, Theater, Sparkles } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Estandes Personalizados",
    description: "Design estratégico para feiras e eventos que destacam sua marca com impacto visual e funcionalidade.",
  },
  {
    icon: Theater,
    title: "Cenografia",
    description: "Ambientes impactantes e imersivos que criam experiências memoráveis para o seu público.",
  },
  {
    icon: Sparkles,
    title: "Ativações de Marca",
    description: "Experiências que geram conexão e engajamento real entre sua marca e o público.",
  },
];

const ServicesSection = () => {
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
    <section id="servicos" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Criamos experiências, não apenas{" "}
            <span className="gradient-text">estruturas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:glow-border transition-all duration-500 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
