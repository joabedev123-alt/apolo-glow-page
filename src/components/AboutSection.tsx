import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="sobre" ref={ref} className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-3xl mx-auto text-center ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Sobre Nós
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            Sua marca no centro das{" "}
            <span className="gradient-text">atenções</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A Apolo Artes é especializada na criação de experiências visuais impactantes
            através de estandes, cenografia e ativações. Atuamos com excelência em cada
            detalhe, transformando ideias em projetos memoráveis.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Projetos que chamam atenção e geram resultados — essa é a nossa missão.
            Com uma equipe especializada e anos de experiência, entregamos soluções
            criativas de alto padrão para os maiores eventos do Brasil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
