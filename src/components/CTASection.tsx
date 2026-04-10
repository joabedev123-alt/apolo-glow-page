import { Button } from "@/components/ui/button";
import WhatsAppIcon from "./WhatsAppIcon";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-cta" />
      <div className="absolute inset-0 border-y border-primary/10" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Seu projeto merece se{" "}
            <span className="gradient-text">destacar</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Entre em contato e leve sua marca para outro nível.
          </p>
          <a href="https://wa.me/5511988906646" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="glow" size="xl" className="w-full sm:w-auto flex items-center justify-center gap-2">
              <WhatsAppIcon size={20} />
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
