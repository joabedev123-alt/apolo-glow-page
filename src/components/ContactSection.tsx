import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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
    <section id="contato" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Contato
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Vamos conversar sobre seu{" "}
            <span className="gradient-text">projeto</span>
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto grid md:grid-cols-2 gap-8 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Atendimento Comercial</p>
              <p className="font-heading text-xl font-bold">Fabiana Jesus</p>
            </div>

            <a
              href="https://wa.me/5511988906646"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={18} />
              </div>
              <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                (11) 98890-6646
              </span>
            </a>

            <a
              href="https://instagram.com/apolooartes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram className="text-primary" size={18} />
              </div>
              <span className="text-foreground group-hover:text-primary transition-colors font-medium">
                @apolooartes
              </span>
            </a>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="text-primary" size={18} />
              </div>
              <div>
                <p className="font-medium text-foreground">Endereço</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Rua General Furtado do Nascimento, 740 – 4º andar
                  <br />
                  Alto de Pinheiros – São Paulo/SP
                </p>
              </div>
            </div>

            <a href="https://wa.me/5511988906646" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" size="lg" className="w-full">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
