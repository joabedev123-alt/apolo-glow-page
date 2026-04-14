import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";


const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      
      // Only show when at the very top
      if (currentY <= 10) {
        setShow(true);
      } else {
        setShow(false);
      }
      
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border" : "bg-transparent"
      } ${show ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-28 px-4">
        <a href="#inicio" className="flex items-center">
          <img src="/Apolo artes-Photoroom.png" alt="Logo Apolo Artes" loading="lazy" className="h-12 sm:h-14 md:h-20" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="https://wa.me/5511988906646" target="_blank" rel="noopener noreferrer">
            <Button variant="glow" size="lg" className="flex items-center gap-2">
              <WhatsAppIcon size={18} />
              Solicitar Orçamento
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5511988906646" target="_blank" rel="noopener noreferrer">
              <Button variant="glow" size="lg" className="w-full mt-2 flex items-center justify-center gap-2">
                <WhatsAppIcon size={18} />
                Solicitar Orçamento
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
