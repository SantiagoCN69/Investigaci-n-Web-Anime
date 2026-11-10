import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHead, ScrollTitle, wrap } from "./Chrome";
import { Reveal } from "../hooks";

const protocolo = [
  [
    "Búsqueda",
    "Buscar un anime por título o describir una idea en la barra de búsqueda global o el botón de búsqueda por IA. Se prueban términos como «un anime de acción con peleas escolares».",
    "¿Encontró resultados rápido o ayudó a descubrir algo nuevo?",
  ],
  [
    "Listas",
    "Entrar a la ficha de un anime, iniciar sesión con Google mediante Firebase e interactuar: añadir el título a «Pendientes» o «Favoritos».",
    "¿El inicio de sesión fue fluido y los botones para guardar son claros?",
  ],
  [
    "Directorios",
    "Abrir el directorio desde el menú lateral y aplicar un filtro por género o estado.",
    "¿Funcionaron bien los filtros y la página?",
  ],
  [
    "Reproducción",
    "Abrir el primer capítulo, probar el modo cine, navegar entre capítulos y marcar al menos uno como visto. Después, volver al inicio y verificar el avance.",
    "¿Funcionó fluido el reproductor y se reflejó el avance en el inicio?",
  ],
  [
    "Visual",
    "Ir a preferencias desde la foto de perfil, cambiar el tema (por ejemplo, a modo oscuro / Nocturno) y evaluar el diseño general.",
    "¿Se ve bien y fluye rápido?",
  ],
];

const cierre = [
  "¿Qué términos o ideas de búsqueda probaste y qué tal funcionaron?",
  "¿Qué anime escogiste para revisar su detalle y probar las listas?",
  "Breve comentario general de tu experiencia.",
];

const reporteSebastian = [
  "Búsqueda: al buscar «yaoi» aparece «No se encontraron resultados» como si no hubiera nada, pero más abajo sí se muestran resultados similares.",
  "Listas: bien.",
  "Directorios: funciona muy bien.",
  "Visual (temas): si se implementan temas visuales, debería haber un selector directo con todas las opciones en lugar de varios clics.",
  "Catálogo: la búsqueda de géneros como romance adolescente o Boys' Love / yaoi es muy limitada o inexistente.",
];

const participantes: { n: number; nombre?: string; reporte?: string[] }[] = [
  { n: 1, nombre: "Sebastián Almanza", reporte: reporteSebastian },
  { n: 2 },
  { n: 3 },
  { n: 4 },
  { n: 5 },
];

const PARTICIPANT_TONES = ["#9e41d3", "#f2a93b", "#3ec6d8", "#e86a92", "#d5a9f0"];
const toneOf = (n: number) => PARTICIPANT_TONES[n - 1] ?? "#d5a9f0";

const CAROUSEL_MS = 6000;
const EDGE_MASK =
  "linear-gradient(90deg, transparent, black 14%, black 86%, transparent)";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

function shuffled<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ResultadosCarousel() {
  const order = useMemo(() => shuffled(participantes), []);
  const count = order.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState({ slide: 0, gap: 20, vp: 0 });

  useEffect(() => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;
    const measure = () => {
      const first = track.querySelector<HTMLElement>("[data-slide]");
      if (!first) return;
      setMetrics({
        slide: first.offsetWidth,
        gap: parseFloat(getComputedStyle(track).columnGap) || 0,
        vp: vp.clientWidth,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(vp);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(
      () => setIndex((i) => (i + 1) % count),
      CAROUSEL_MS,
    );
    return () => window.clearTimeout(t);
  }, [index, paused, count]);

  const go = (d: number) => setIndex((i) => (i + d + count) % count);
  const { slide, gap, vp } = metrics;
  const tx = vp ? vp / 2 - index * (slide + gap) - slide / 2 : 0;

  return (
    <div
      className="relative mx-auto w-full max-w-6xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        className="overflow-hidden pt-10 pb-2"
        style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 will-change-transform"
          style={{
            transform: `translate3d(${tx}px, 0, 0)`,
            transition: "transform 750ms var(--ease-out-expo)",
          }}
        >
          {order.map((p, i) => {
            const d = Math.abs(i - index);
            const side = i < index ? -1 : 1;
            const state =
              d === 0
                ? "opacity-100 blur-0 scale-100"
                : d === 1
                  ? `opacity-55 blur-[2px] scale-[0.93] ${side < 0 ? "-rotate-2" : "rotate-2"}`
                  : "opacity-20 blur-[5px] scale-[0.85]";
            const active = d === 0;
            const tone = toneOf(p.n);
            return (
              <div
                key={p.n}
                data-slide
                className={`report-carousel__slide w-[80%] shrink-0 sm:w-[60%] lg:w-[44%] ${state}`}
              >
                <article
                  className={`flex h-full min-h-[20rem] flex-col border p-6 md:min-h-[23rem] md:p-8 ${
                    p.reporte ? "" : "border-dashed"
                  } ${active ? "report-card--active" : ""}`}
                  style={{
                    borderColor: `color-mix(in srgb, ${tone} ${p.reporte ? 40 : 30}%, transparent)`,
                    background: `color-mix(in srgb, ${tone} ${p.reporte ? 5 : 3}%, transparent)`,
                  }}
                >
                  {p.reporte ? (
                    <>
                      <header className="mb-5">
                        <h3 className="text-2xl font-semibold">{p.nombre}</h3>
                      </header>
                      <ul className="flex-1 space-y-3">
                        {p.reporte.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-relaxed text-mute"
                          >
                            <span
                              className="mt-2 size-1 shrink-0 rounded-full"
                              style={{ background: tone }}
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                      <span className="mono" style={{ color: tone }}>
                        Participante 0{p.n}
                      </span>
                      <span className="font-display text-3xl font-semibold text-dim/60">
                        —
                      </span>
                      <span className="flex items-center gap-2 text-sm text-dim">
                        <span className="relative flex size-1.5" aria-hidden="true">
                          <span
                            className="absolute inline-flex size-full animate-ping rounded-full opacity-60"
                            style={{ background: tone }}
                          />
                          <span
                            className="relative inline-flex size-1.5 rounded-full"
                            style={{ background: tone }}
                          />
                        </span>
                        Reporte pendiente
                      </span>
                    </div>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Reporte anterior"
        className="absolute left-1 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-line bg-ink/70 text-mute backdrop-blur-sm transition-colors hover:border-accent-hi hover:text-accent-hi md:left-3"
      >
        <Chevron dir="left" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Reporte siguiente"
        className="absolute right-1 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-line bg-ink/70 text-mute backdrop-blur-sm transition-colors hover:border-accent-hi hover:text-accent-hi md:right-3"
      >
        <Chevron dir="right" />
      </button>

      <div className="mt-8 flex items-center justify-center gap-2">
        {order.map((p, i) => (
          <button
            key={p.n}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir al reporte del participante 0${p.n}`}
            aria-current={i === index ? "true" : undefined}
            className={`h-1 transition-all duration-500 ${
              i === index ? "w-10" : "w-5 bg-line hover:bg-dim"
            }`}
            style={
              i === index
                ? {
                    background: toneOf(p.n),
                    boxShadow: `0 0 12px ${toneOf(p.n)}80`,
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}

export function Pruebas() {
  return (
    <section id="pruebas" className={`${wrap} section-standard border-t border-line`}>
      <SectionHead
        title="Pruebas con usuarios."
        lead="Cinco participantes recorren la WAPP en PC y móvil completando cinco mini tareas. El protocolo se envía por mensaje y las respuestas se registran aquí para alimentar las iteraciones."
      />

      <div className="mb-6 flex items-baseline justify-between gap-6">
        <div className="mono text-accent-hi">Protocolo</div>
      </div>
      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 xl:grid-cols-5">
        {protocolo.map(([name, task, question], i) => (
          <Reveal key={name} delay={i * 80} className="h-full">
            <article className="flex h-full flex-col bg-ink p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{name}</h3>
                <span className="mono" style={{ color: PARTICIPANT_TONES[i] }}>
                  0{i + 1}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-mute">{task}</p>
              <p className="mt-5 border-t border-line pt-4 text-sm italic leading-relaxed text-dim">
                {question}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 mb-6">
        <div className="mono text-accent-hi">Cierre de la prueba</div>
      </div>
      <Reveal>
        <div className="grid gap-px border border-line bg-line lg:grid-cols-12">
          <div className="bg-ink p-7 lg:col-span-7 lg:p-9">
            <h3 className="text-xl font-semibold">Datos a registrar</h3>
            <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-mute">
              Al terminar las tareas, cada participante responde estas preguntas para
              cerrar su reporte.
            </p>
          </div>
          <ul className="flex flex-col justify-center gap-4 bg-ink p-7 lg:col-span-5 lg:p-9">
            {cierre.map((item, i) => (
              <li key={item} className="flex gap-4 text-sm leading-relaxed text-mute">
                <span
                  className="mono shrink-0"
                  style={{ color: PARTICIPANT_TONES[i] }}
                >
                  0{i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-24 mb-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <ScrollTitle className="text-[clamp(1.8rem,3.6vw,3rem)] font-semibold">
              Resultados por participante
            </ScrollTitle>
          </div>
        </div>
      </div>
      <Reveal>
        <ResultadosCarousel />
      </Reveal>
    </section>
  );
}
