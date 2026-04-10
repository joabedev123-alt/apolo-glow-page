import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Geometric lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-80 h-px bg-gradient-to-l from-transparent via-primary/15 to-transparent" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        
        {/* Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-particle"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="animate-fade-up text-primary font-heading text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6">
            Estandes · Cenografia · Ativações
          </p>

          <h1 className="animate-fade-up-delay-1 font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            Transformamos ideias em{" "}
            <span className="gradient-text">experiências</span>{" "}
            que marcam presença
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Projetos de estandes, cenografia e ativações que elevam sua marca a outro nível.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/5511988906646" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" size="xl">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Button>
            </a>
            <a href="#projetos">
              <Button variant="heroOutline" size="xl">
                <Eye size={20} />
                Ver Projetos
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
