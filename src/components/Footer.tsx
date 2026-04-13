import { Instagram, MapPin, Mail } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="flex items-center">
              <img src="/Apolo artes-Photoroom.png" alt="Logo Apolo Artes" loading="lazy" className="h-24 md:h-48" />
            </a>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs mx-auto md:mx-0">
              Transformamos ideias em experiências que marcam presença.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-bold text-foreground mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2 items-center md:items-start">
              {["Início", "Serviços", "Projetos", "Sobre", "Contato"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://camaly.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors mt-2"
              >
                Produzida com 🧡 por CAMALY
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading font-bold text-foreground mb-4">Contato</h4>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a
                href="https://wa.me/5511988906646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <WhatsAppIcon size={14} />
                (11) 98890-6646
              </a>
              <a
                href="https://instagram.com/apolooartes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={14} />
                @apolooartes
              </a>
              <a
                href="mailto:Fabiana.jesus@apoloartes.com.br"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={14} />
                Fabiana.jesus@apoloartes.com.br
              </a>
              <div className="flex flex-col items-center md:items-start gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="flex-shrink-0" />
                  <img src="/Apolo artes-Photoroom.png" alt="Logo Apolo Artes" loading="lazy" className="h-6" />
                </div>
                <span>Rua General Furtado do Nascimento, 740 – 4º andar, Alto de Pinheiros – São Paulo/SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Apolo Artes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
