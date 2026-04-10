import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <a href="#inicio" className="font-heading text-2xl font-bold tracking-tight">
              <span className="text-foreground">APOLO</span>
              <span className="text-primary"> ARTES</span>
            </a>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs">
              Transformamos ideias em experiências que marcam presença.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {["Início", "Serviços", "Projetos", "Sobre", "Contato"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading font-bold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511988906646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={14} />
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
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
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
