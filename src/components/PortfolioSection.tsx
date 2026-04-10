import { useEffect, useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: portfolio1, title: "Estande Premium", category: "Feiras & Eventos" },
  { img: portfolio2, title: "Cenografia Imersiva", category: "Cenografia" },
  { img: portfolio3, title: "Ativação Interativa", category: "Ativações de Marca" },
  { img: portfolio4, title: "Lounge Corporativo", category: "Estandes" },
  { img: portfolio5, title: "Palco & Cenografia", category: "Cenografia" },
  { img: portfolio6, title: "Experience Zone", category: "Ativações de Marca" },
];

const PortfolioSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projetos" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Portfólio
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Projetos que{" "}
            <span className="gradient-text">impressionam</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                width={768}
                height={512}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-1">
                  {project.category}
                </p>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
