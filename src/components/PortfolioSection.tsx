import { useEffect, useMemo, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

// ─── Importação EXPLÍCITA de cada pasta ───────────────────────────────────────
const g01 = import.meta.glob("../assets/1 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g02 = import.meta.glob("../assets/2 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g03 = import.meta.glob("../assets/3 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g04 = import.meta.glob("../assets/4 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g05 = import.meta.glob("../assets/5 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g06 = import.meta.glob("../assets/6 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g07 = import.meta.glob("../assets/7 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g08 = import.meta.glob("../assets/8 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g09 = import.meta.glob("../assets/9 Estande/**/*",    { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g10 = import.meta.glob("../assets/10 Estande/**/*",   { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g11 = import.meta.glob("../assets/11 Estande/**/*",   { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g12 = import.meta.glob("../assets/12 Estande/**/*",   { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g13 = import.meta.glob("../assets/13 cenografia/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g14 = import.meta.glob("../assets/14 cenografia/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g15 = import.meta.glob("../assets/15 cenografia/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g16 = import.meta.glob("../assets/16 cenografia/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g17 = import.meta.glob("../assets/17 cenografia/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g18 = import.meta.glob("../assets/18 Ativaçoes/**/*", { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g19 = import.meta.glob("../assets/19 Ativaçoes/**/*", { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g20 = import.meta.glob("../assets/20 Ativações!/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g21 = import.meta.glob("../assets/21 Ativações!/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g22 = import.meta.glob("../assets/22 Ativaçoes/**/*", { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const g23 = import.meta.glob("../assets/23 Ativações!/**/*",{ eager: true, query: "?url", import: "default" }) as Record<string,string>;
// ─────────────────────────────────────────────────────────────────────────────

const toUrls = (glob: Record<string, string>) =>
  Object.values(glob).filter((v): v is string => typeof v === "string").sort();

interface Project {
  id: number;
  folderName: string;
  category: string;
  images: string[];
  coverIndex?: number;
}

// ─── Mapeamento direto e explícito de todos os projetos ──────────────────────
const ALL_PROJECTS: Project[] = [
  { id: 1,  folderName: "Estande",    category: "Estande",    images: toUrls(g01) },
  { id: 2,  folderName: "Estande",    category: "Estande",    images: toUrls(g02) },
  { id: 3,  folderName: "Estande",    category: "Estande",    images: toUrls(g03) },
  { id: 4,  folderName: "Estande",    category: "Estande",    images: toUrls(g04) },
  { id: 5,  folderName: "Estande",    category: "Estande",    images: toUrls(g05) },
  { id: 6,  folderName: "Estande",    category: "Estande",    images: toUrls(g06) },
  { id: 7,  folderName: "Estande",    category: "Estande",    images: toUrls(g07) },
  { id: 8,  folderName: "Estande",    category: "Estande",    images: toUrls(g08) },
  { id: 9,  folderName: "Estande",    category: "Estande",    images: toUrls(g09) },
  { id: 10, folderName: "Estande",    category: "Estande",    images: toUrls(g10) },
  { id: 11, folderName: "Estande",    category: "Estande",    images: toUrls(g11) },
  { id: 12, folderName: "Estande",    category: "Estande",    images: toUrls(g12), coverIndex: 1 },
  { id: 13, folderName: "Cenografia", category: "Cenografia", images: toUrls(g13) },
  { id: 14, folderName: "Cenografia", category: "Cenografia", images: toUrls(g14), coverIndex: 1 },
  { id: 15, folderName: "Cenografia", category: "Cenografia", images: toUrls(g15), coverIndex: 1 },
  { id: 16, folderName: "Cenografia", category: "Cenografia", images: toUrls(g16) },
  { id: 17, folderName: "Cenografia", category: "Cenografia", images: toUrls(g17) },
  { id: 18, folderName: "Ativações",  category: "Ativações",  images: toUrls(g18) },
  { id: 19, folderName: "Ativações",  category: "Ativações",  images: toUrls(g19) },
  { id: 20, folderName: "Ativações",  category: "Ativações",  images: toUrls(g20) },
  { id: 21, folderName: "Ativações",  category: "Ativações",  images: toUrls(g21), coverIndex: 1 },
  { id: 22, folderName: "Ativações",  category: "Ativações",  images: toUrls(g22) },
  { id: 23, folderName: "Ativações",  category: "Ativações",  images: toUrls(g23) },
].filter(p => p.images.length > 0);

const CATEGORIES = [
  { id: "estande",    title: "Estande",    subtitle: "Espaços que comunicam",    filter: "Estande"    },
  { id: "cenografia", title: "Cenografia", subtitle: "Ambientes imersivos",      filter: "Cenografia" },
  { id: "ativacoes",  title: "Ativações",  subtitle: "Experiências memoráveis",  filter: "Ativações"  },
];
// ─────────────────────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const coverIdx = project.coverIndex ?? 0;

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex(prev => (prev + 1) % project.images.length);
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex(prev => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="group relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-muted/20 border border-white/10 hover:border-primary/50 transition-all duration-500">
          <img
            src={project.images[coverIdx]}
            alt={project.folderName}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
              <Maximize2 className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
              PROJETO {project.id}
            </p>
            <h3 className="font-heading text-lg font-bold text-foreground capitalize">
              {project.folderName.toLowerCase()}
            </h3>
            <p className="text-white/60 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.images.length} fotos
            </p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-[95vw] max-h-[95vh] w-fit h-fit p-0 border-none bg-black/95 overflow-hidden flex items-center justify-center">
        <DialogHeader className="sr-only">
          <DialogTitle>{project.folderName}</DialogTitle>
        </DialogHeader>

        <div className="relative flex items-center justify-center group">
          <img
            src={project.images[currentImgIndex]}
            alt={`${project.folderName} - ${currentImgIndex + 1}`}
            className="max-w-full max-h-[90vh] md:max-h-[92vh] object-contain transition-all duration-500 ease-in-out select-none"
            onDragStart={e => e.preventDefault()}
          />

          <div className="absolute top-4 right-4 z-[60]">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-all border border-white/10"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {project.images.length > 1 && (
            <>
              <button onClick={prevImg} className="absolute left-2 md:left-4 p-3 md:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 md:opacity-0 group-hover:opacity-100">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button onClick={nextImg} className="absolute right-2 md:right-4 p-3 md:p-3 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 md:opacity-0 group-hover:opacity-100">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white text-[10px] font-bold tracking-widest border border-white/10 md:opacity-0 group-hover:opacity-100 transition-opacity">
                {currentImgIndex + 1} / {project.images.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PortfolioSection = () => {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const categories = useMemo(() =>
    CATEGORIES.map(cat => ({
      ...cat,
      items: ALL_PROJECTS.filter(p => p.category === cat.filter),
    })),
  []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projetos" ref={ref} className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Portfólio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Projetos que{" "}
            <span className="gradient-text">impressionam</span>
          </h2>
        </div>

        <div className="space-y-24 max-w-7xl mx-auto">
          {categories.map((category, catIdx) => (
            <div
              key={category.id}
              className={`space-y-8 transition-all duration-1000 transform ${
                visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${catIdx * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 md:gap-4 px-1 md:px-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.subtitle}</p>
                </div>
              </div>

              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: false })]}
                className="w-full relative"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {category.items.map(project => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      <ProjectCard project={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-3 mt-8 md:absolute md:-top-16 md:right-0">
                  <CarouselPrevious className="static translate-y-0 h-10 w-10 border-white/10 bg-muted/40 hover:bg-primary hover:text-white transition-all shadow-lg" />
                  <CarouselNext className="static translate-y-0 h-10 w-10 border-white/10 bg-muted/40 hover:bg-primary hover:text-white transition-all shadow-lg" />
                </div>
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
