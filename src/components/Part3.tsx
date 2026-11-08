import { useState } from "react";
import { ScrollTitle, SectionHead, wrap } from "./Chrome";
import { Reveal, useInView } from "../hooks";

const needs = [
  ["Centralizar", "Catálogo, reproducción y seguimiento dentro del mismo recorrido."],
  ["Recordar", "Series, capítulos y favoritos conservan su estado entre sesiones."],
  ["Encontrar", "Filtros específicos reducen el tiempo entre buscar y reproducir."],
];
const funcs = [
  [
    "Estados de visualización",
    "Cada título puede marcarse como viendo, completado, pendiente o favorito.",
  ],
  [
    "Filtros combinados",
    "Género, año, estudio y estado de ánimo pueden cruzarse en una misma consulta.",
  ],
  [
    "Personalización",
    "Tema, densidad y navegación se ajustan sin alterar la estructura del catálogo.",
  ],
  [
    "Catálogo especializado",
    "Taxonomías de anime reemplazan las categorías genéricas de una plataforma generalista.",
  ],
];

function ProductJourneyVisual() {
  const [ref, seen] = useInView<HTMLDivElement>(0.25);

  return (
    <div ref={ref} data-product-in={seen} className="product-journey">
      <div className="product-journey__rail" aria-hidden="true">
        <span />
        <span />
      </div>

      <figure className="product-shot product-shot--detail">
        <figcaption>
          <span></span>
          <span>Ficha + estado</span>
        </figcaption>
        <div className="product-shot__viewport">
          <img
            src="/assets/anizen-series-detail.webp"
            alt="Ficha de una serie en AniZen con géneros, estado y progreso de episodios"
            width="1802"
            height="836"
            loading="lazy"
            decoding="async"
          />
          <span className="product-shot__scan" aria-hidden="true" />
        </div>
      </figure>

      <figure className="product-shot product-shot--episodes">
        <figcaption>
          <span>Continuidad por episodio</span>
        </figcaption>
        <div className="product-shot__viewport">
          <img
            src="/assets/anizen-episode-selector.webp"
            alt="Selector de episodios de AniZen con capítulos vistos y episodio activo"
            width="790"
            height="316"
            loading="lazy"
            decoding="async"
          />
        </div>
      </figure>

      <div className="product-journey__signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function Solucion() {
  return (
    <section
      id="solucion"
      className="section-immersive relative overflow-hidden border-t border-line bg-ink-2"
    >
      <div className={wrap}>
        <div className="grid items-center gap-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <div className="mono mb-8 flex items-center gap-3 text-accent-hi">
              <span>09</span>
              <span className="h-px w-8 bg-accent-hi/50" />
              <span className="text-dim">Definición de producto</span>
            </div>
            <ScrollTitle className="text-[clamp(2.4rem,6vw,5.4rem)] font-semibold">
              Descubrir, organizar y continuar{" "}
              <span className="text-accent-hi">sin cambiar de contexto.</span>
            </ScrollTitle>
            <p className="mt-8 max-w-[52ch] text-lg text-mute">
              AniZen reúne reproducción, biblioteca, seguimiento de capítulos y filtros
              especializados. Cada función responde a una fricción observada.
            </p>
          </div>
          <div className="md:col-span-5">
            <ProductJourneyVisual />
          </div>
        </div>

        <div className="mt-16 grid border-t border-line md:mt-20 md:grid-cols-3">
          {needs.map(([t, d], i) => (
            <Reveal
              key={t}
              delay={i * 90}
              className="border-b border-line py-8 md:border-b-0 md:pr-10"
            >
              <span className="mono text-accent-hi">0{i + 1}</span>
              <h3 className="mt-6 text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-mute">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Funcionalidades() {
  return (
    <section className={`${wrap} section-compact`}>
      <SectionHead
        n="10"
        kicker="Sistema de producto"
        title="Menos fricción. Más control."
        lead="Cuatro decisiones convierten los hallazgos de la investigación en comportamiento de producto."
      />
      <div className="border-t border-line">
        {funcs.map(([t, d], i) => (
          <Reveal
            key={t}
            delay={i * 70}
            className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline"
          >
            <span className="mono text-accent-hi md:col-span-1">0{i + 1}</span>
            <h3 className="text-2xl font-semibold md:col-span-4 md:text-3xl">{t}</h3>
            <p className="max-w-[52ch] text-mute md:col-span-6 md:col-start-7">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function UX() {
  return (
    <section className="section-standard border-t border-line bg-ink-2">
      <div className={wrap}>
        <SectionHead
          n="11"
          kicker="Continuidad"
          title="Recordar dónde ibas no debería ser trabajo."
        />
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-display max-w-[32ch] text-[clamp(1.6rem,3.2vw,2.8rem)] font-medium leading-[1.18] tracking-[-0.02em]">
                La portada prioriza episodios recientes, historial y estados de visualización. El
                objetivo no es mostrar más contenido, sino hacer visible el siguiente paso.
              </p>
            </Reveal>
            <Reveal as="figure" variant="mask" delay={120} className="continuity-shot mt-12">
              <div className="continuity-shot__viewport">
                <img
                  src="/assets/anizen-continue-watching.webp"
                  alt="Sección Continuar viendo de AniZen con tres series, episodios activos y barras de progreso"
                  width="1004"
                  height="648"
                  loading="lazy"
                  decoding="async"
                />
                <span className="continuity-shot__trace" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            {[
              [
                "Control de progreso",
                "La biblioteca conserva la serie, el episodio y el estado de visualización.",
              ],
              [
                "Seguimiento centralizado",
                "El historial evita depender de notas, hojas de cálculo o servicios separados.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 100} className="border-t border-line py-6">
                <h3 className="font-sans text-xl font-semibold tracking-normal">{t}</h3>
                <p className="mt-2 text-sm text-mute">{d}</p>
              </Reveal>
            ))}
            <p className="border-t border-line pt-4 text-xs text-dim">
              Alcance funcional del proyecto; implementación y validación por confirmar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const ia = [
  [
    "Búsqueda contextual",
    "Interpreta una descripción incompleta y la traduce en criterios de catálogo.",
  ],
  [
    "Historial conectado",
    "Distingue entre series vistas, abandonadas y guardadas antes de recomendar.",
  ],
  [
    "Preferencias en lenguaje natural",
    "Permite describir tono, ritmo o temática sin conocer la taxonomía del catálogo.",
  ],
  [
    "Rutas relacionadas",
    "Conecta títulos por afinidad narrativa y explica por qué aparecen juntos.",
  ],
];

export function IA() {
  return (
    <section className={`${wrap} section-compact`}>
      <div className="mb-16 max-w-4xl">
        <div className="mono mb-8 flex items-center gap-3 text-accent-hi">
          <span>12</span>
          <span className="h-px w-8 bg-accent-hi/50" />
          <span className="text-dim">Inteligencia artificial</span>
        </div>
        <ScrollTitle className="text-[clamp(2.4rem,6vw,5.2rem)] font-semibold">
          IA que orienta. <span className="text-accent">No que estorba.</span>
        </ScrollTitle>
        <p className="mt-6 text-mute">
          Funciones previstas para reducir el esfuerzo de búsqueda. Su implementación y validación
          aún forman parte del alcance futuro.
        </p>
      </div>
      <div className="border-t border-line">
        {ia.map(([t, d], i) => (
          <Reveal
            key={t}
            delay={i * 70}
            className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline"
          >
            <span className="mono text-accent md:col-span-1">0{i + 1}</span>
            <h3 className="text-2xl font-semibold md:col-span-4">{t}</h3>
            <p className="max-w-[52ch] text-mute md:col-span-6 md:col-start-7">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const tech = [
  [
    "Lenguajes web",
    "Estructura, estilos, accesibilidad y comportamiento en el navegador.",
    "/assets/9da02.svg",
  ],
  [
    "API",
    "Define el contrato entre catálogo, búsqueda, perfiles y servicios.",
    "/assets/88ea7.svg",
  ],
  ["Servidores", "Resuelven autenticación, permisos y reglas de negocio.", "/assets/158a1.svg"],
  [
    "Base de datos",
    "Conserva usuarios, listas, progreso, títulos y relaciones.",
    "/assets/3444c.svg",
  ],
  [
    "Nube",
    "Sostiene despliegue, observabilidad y crecimiento de la plataforma.",
    "/assets/65ffa.svg",
  ],
];

const placements = [
  "md:col-span-6 md:row-start-1 -rotate-2 md:rotate-[-2deg] md:-translate-y-3",
  "md:col-span-5 md:col-start-8 md:row-start-1 md:translate-y-24 rotate-1 md:rotate-[2deg]",
  "md:col-span-5 md:col-start-1 md:row-start-2 md:-translate-y-8 -rotate-1 md:rotate-[2deg]",
  "md:col-span-4 md:col-start-7 md:row-start-2 md:translate-y-12 rotate-2 md:rotate-[-2deg] md:scale-[1.03]",
  "md:col-span-6 md:col-start-4 md:row-start-3 md:-translate-y-14 -rotate-2 md:rotate-[1.5deg] md:scale-[0.97]",
];

function TechIcon({ src, index }: { src: string; index: number }) {
  const [ref, seen] = useInView<HTMLDivElement>(0.3);
  return (
    <div
      ref={ref}
      data-tech-in={seen}
      className="tech-icon"
      style={{ ["--icon-delay" as string]: `${index * 70}ms` }}
      aria-hidden="true"
    >
      <img src={src} alt="" loading="lazy" decoding="async" />
      <span className="tech-icon__echo">
        <img src={src} alt="" loading="lazy" decoding="async" />
      </span>
      <span className="tech-icon__tick" />
    </div>
  );
}

export function Bases() {
  return (
    <section className="section-standard border-y border-line bg-ink-2">
      <div className={wrap}>
        <SectionHead
          n="13"
          kicker="Tecnología"
          title="Cinco capas, una sola experiencia."
          lead="La interfaz es solo la superficie. AniZen también necesita contratos de datos, lógica de servidor, persistencia y una infraestructura operable."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-12 md:gap-x-6 md:gap-y-28">
          {tech.map(([title, description, icon], i) => (
            <Reveal
              key={title}
              delay={i * 70}
              className={`tech-row group relative p-6 md:p-7 ${placements[i] ?? ""}`}
            >
              <TechIcon src={icon} index={i} />
              <h3
                className="mt-6 text-2xl font-semibold md:text-3xl"
                style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif" }}
              >
                {title}
              </h3>
              <p
                className="mt-2 max-w-[34ch] text-sm text-mute md:text-base"
                style={{ fontFamily: "'Inter:Regular', Inter, sans-serif" }}
              >
                {description}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 border-t border-line pt-8">
          <p className="max-w-[58ch] text-mute">
            Los cursos de <span className="font-semibold text-paper">SoyDalton</span> y{" "}
            <span className="font-semibold text-paper">Midudev</span> sirven como punto de partida
            para profundizar estas cinco capas y aplicarlas al desarrollo de AniZen.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const concl = [
  ["Dispersión", "centralización", "Catálogo y reproducción dentro de AniZen, en un mismo lugar."],
  [
    "Seguimiento",
    "biblioteca",
    "Series, favoritos y control de capítulos en una biblioteca personal.",
  ],
  [
    "Búsqueda",
    "descubrimiento",
    "Filtros específicos y recomendaciones como alcance del proyecto.",
  ],
];

export function Conclusiones() {
  return (
    <section className={`${wrap} section-compact`}>
      <SectionHead
        n="14"
        kicker="Conclusiones"
        title="Investigar antes de diseñar cambia el resultado."
        lead="Los referentes definieron el estándar, la muestra reveló las necesidades y AniZen convierte ambos aprendizajes en decisiones verificables."
      />
      <div className="border-t border-line">
        {concl.map(([a, b, d], i) => (
          <Reveal key={a} delay={i * 80}>
            <div className="grid items-center gap-4 border-b border-line py-10 md:grid-cols-12">
              <h3 className="text-[clamp(2rem,4.6vw,4.2rem)] font-semibold md:col-span-8">
                <span className="text-dim">{a}</span>
                <span className="mx-4 inline-block text-accent">→</span>
                <span>{b}</span>
              </h3>
              <p className="max-w-[34ch] text-mute md:col-span-4">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const recursos = [
  {
    title: "Tailwind CSS",
    category: "Recursos de desarrollo",
    description:
      "Curso completo para estudiar composición, utilidades y sistemas visuales adaptables.",
    crop: { x: 71, y: 254, w: 252, h: 190, frame: 91 },
  },
  {
    title: "Fundamentos web",
    category: "Recursos de desarrollo",
    description:
      "Bases del desarrollo web full stack y del recorrido completo entre interfaz y servidor.",
    crop: { x: 400, y: 258, w: 246, h: 202, frame: 84 },
  },
  {
    title: "JavaScript / React",
    category: "Recursos de desarrollo",
    description:
      "JavaScript moderno, componentes y fundamentos de React aplicados a interfaces reales.",
    crop: { x: 74, y: 485, w: 249, h: 197, frame: 87 },
  },
  {
    title: "HTML y CSS",
    category: "Recursos de desarrollo",
    description:
      "Estructura semántica, estilos y principios esenciales para construir la capa visual.",
    crop: { x: 1239, y: 415, w: 263, h: 210, frame: 86 },
  },
  {
    title: "JavaScript",
    category: "Recursos de desarrollo",
    description:
      "Fundamentos del lenguaje para interacción, estado y comportamiento en el navegador.",
    crop: { x: 1239, y: 682, w: 242, h: 201, frame: 83 },
  },
  {
    title: "Firebase",
    category: "Recursos de desarrollo",
    description:
      "Servicios administrados para autenticación, datos y despliegues de primeras versiones.",
    crop: { x: 670, y: 700, w: 284, h: 165, frame: 100 },
  },
  {
    title: "Node.js (midudev)",
    category: "Backend y análisis de interfaces",
    description:
      "Introducción práctica al entorno de servidor y a la construcción de servicios con JavaScript.",
    crop: { x: 71, y: 701, w: 598, h: 169, frame: 100 },
  },
  {
    title: "Portfolios / comunidad",
    category: "Backend y análisis de interfaces",
    description: "Análisis crítico de portfolios y productos creados por perfiles de programación.",
    crop: { x: 413, y: 485, w: 735, h: 190, frame: 100 },
  },
  {
    title: "Páginas web de seguidores",
    category: "Backend y análisis de interfaces",
    description:
      "Lectura comparativa de jerarquía, navegación y decisiones visuales en sitios de comunidad.",
    crop: { x: 963, y: 705, w: 205, h: 165, frame: 85 },
  },
];

function ResourceVisual({
  resource,
  priority = false,
  decorative = false,
}: {
  resource: (typeof recursos)[number];
  priority?: boolean;
  decorative?: boolean;
}) {
  const { crop } = resource;
  const positionX = (crop.x / (1589 - crop.w)) * 100;
  const positionY = (crop.y / (905 - crop.h)) * 100;

  return (
    <div
      className={`relative aspect-[16/11] overflow-hidden bg-[#101010] ${priority ? "ring-1 ring-accent/40" : ""}`}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : `Miniatura de ${resource.title}`}
      aria-hidden={decorative || undefined}
    >
      <div
        className="absolute left-1/2 top-1/2 bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        style={{
          width: `${crop.frame}%`,
          aspectRatio: crop.w / crop.h,
          transform: "translate(-50%, -50%)",
          backgroundImage: "url('/assets/study-resources.webp')",
          backgroundSize: `${(1589 / crop.w) * 100}% auto`,
          backgroundPosition: `${positionX}% ${positionY}%`,
        }}
      />
    </div>
  );
}

export function Fuentes() {
  const [active, setActive] = useState(0);
  const selected = recursos[active];

  return (
    <section id="fuentes" className="section-standard-top border-t border-line bg-ink-2 pb-14">
      <div className={wrap}>
        <div className="mb-16 grid gap-6 md:grid-cols-12">
          <div className="mono flex items-center gap-3 text-accent-hi md:col-span-3">
            <span>15</span>
            <span className="h-px w-8 bg-accent-hi/50" />
            <span className="text-dim">Fuentes</span>
          </div>
          <div className="md:col-span-9">
            <div className="flex items-start justify-between gap-6">
              <ScrollTitle className="text-[clamp(2.2rem,5.4vw,4.6rem)] font-semibold">
                Fuentes y recursos de estudio
              </ScrollTitle>
              <span className="font-display text-3xl font-semibold text-amber md:text-5xl">
                2025
              </span>
            </div>
            <p className="mt-6 max-w-[56ch] text-lg text-mute">
              Recursos para estudiar desarrollo web y analizar interfaces. Selección de estudio —
              2025.
            </p>
          </div>
        </div>
        <Reveal>
          <div className="grid overflow-hidden border border-line bg-ink md:grid-cols-12">
            <div className="group p-3 md:col-span-8 md:p-5">
              <ResourceVisual resource={selected} priority />
            </div>
            <div className="flex min-h-[18rem] flex-col justify-between border-t border-line p-7 md:col-span-4 md:border-l md:border-t-0 md:p-9">
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="mono text-accent-hi"
                    style={{ fontFamily: "'Inter:Medium', Inter, sans-serif" }}
                  >
                    {selected.category}
                  </span>
                  <span className="mono tabular-nums text-dim">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(recursos.length).padStart(2, "0")}
                  </span>
                </div>
                <h3
                  className="mt-8 text-3xl font-semibold md:text-4xl"
                  style={{ fontFamily: "'Inter:Semi Bold', Inter, sans-serif" }}
                >
                  {selected.title}
                </h3>
                <p
                  className="mt-4 max-w-[34ch] text-mute"
                  style={{ fontFamily: "'Inter:Regular', Inter, sans-serif" }}
                >
                  {selected.description}
                </p>
              </div>
              <div className="mt-10">
                <div className="mb-3 flex justify-between text-[10px] text-dim">
                  <span className="mono">Índice visual</span>
                  <span className="mono">Selecciona para explorar</span>
                </div>
                <div className="h-px bg-line">
                  <div
                    className="h-full origin-left bg-accent transition-transform duration-500"
                    style={{ transform: `scaleX(${(active + 1) / recursos.length})` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="resource-scroll mt-4 grid auto-cols-[minmax(10.5rem,1fr)] grid-flow-col gap-3 overflow-x-auto pb-4"
            aria-label="Selector de recursos de estudio"
            role="group"
          >
            {recursos.map((resource, i) => (
              <button
                key={resource.title}
                type="button"
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-pressed={active === i}
                aria-label={`Mostrar ${resource.title}`}
                title={resource.title}
                className={`group min-w-0 border text-left transition-colors duration-300 ${
                  active === i
                    ? "border-accent bg-accent/5"
                    : "border-line bg-ink hover:border-paper/30"
                }`}
              >
                <ResourceVisual resource={resource} decorative />
                <span className="flex items-center justify-between gap-3 border-t border-line px-3 py-3">
                  <span
                    className={`truncate text-sm ${active === i ? "text-paper" : "text-mute"}`}
                    style={{ fontFamily: "'Inter:Medium', Inter, sans-serif" }}
                  >
                    {resource.title}
                  </span>
                  <span className={`mono ${active === i ? "text-accent-hi" : "text-dim"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
