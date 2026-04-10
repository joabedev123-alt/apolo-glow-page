import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import heroBg from "@/assets/Apolo artes 01.jpeg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}

      
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

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 md:gap-0">
        <div className="w-full md:w-1/2 p-4 text-center md:text-left order-2 md:order-1">
          <div className="max-w-4xl mx-auto">
            <p className="animate-fade-up text-primary font-heading text-[10px] md:text-base font-semibold tracking-[0.3em] uppercase mb-4 md:mb-6">
              Estandes · Cenografia · Ativações
            </p>

            <h1 className="animate-fade-up-delay-1 font-heading text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
              Transformamos ideias em{" "}
              <span className="gradient-text">experiências</span>{" "}
              que marcam presença
            </h1>

            <p className="animate-fade-up-delay-2 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12">
              Projetos de estandes, cenografia e ativações que elevam sua marca a outro nível.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="https://wa.me/5511988906646" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="glow" size="xl" className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <WhatsAppIcon size={20} />
                  Solicitar Orçamento
                </Button>
              </a>
              <a href="#projetos" className="w-full sm:w-auto">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  <Eye size={20} />
                  Ver Projetos
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4 order-1 md:order-2">
          <img src={heroBg} alt="Apolo Artes" className="max-w-[80%] md:max-w-full h-auto object-contain" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
