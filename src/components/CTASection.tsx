import { Button } from "@/components/ui/button";
import WhatsAppIcon from "./WhatsAppIcon";
import apoloArte03 from "../assets/Apolo artes 03.jpeg";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cta" />
      <div className="absolute inset-0 border-y border-primary/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-up flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={apoloArte03} 
                alt="Arte e Cenografia Apolo Artes" 
                loading="lazy"
                className="relative rounded-2xl w-full max-w-md shadow-2xl glow-primary-intense animate-float"
              />
            </div>
          </div>
          
          <div className="max-w-2xl text-center md:text-center md:ml-auto animate-fade-up-delay-1 flex flex-col items-center md:items-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Seu projeto merece se{" "}
              <span className="gradient-text">destacar</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-center">
              Entre em contato e leve sua marca para outro nível.
            </p>
            <div className="flex justify-center">
              <a href="https://wa.me/5511988906646" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="glow" size="xl" className="w-full sm:w-auto flex items-center justify-center gap-2">
                  <WhatsAppIcon size={20} />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
