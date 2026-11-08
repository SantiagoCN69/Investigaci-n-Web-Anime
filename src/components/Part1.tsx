import { useState } from "react";
import { LogoMark } from "./Logo";
import { ScrollTitle, SectionHead, wrap } from "./Chrome";
import { Reveal, WordScrub, useInView, useScrollProgress } from "../hooks";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-12 pt-28 md:pb-16"
    >
      <div className="pointer-events-none absolute right-[4vw] top-1/2 w-[min(38vw,58vh,500px)] -translate-y-1/2 opacity-70 max-md:-right-[24vw] max-md:top-[18vh] max-md:w-[82vw] max-md:translate-y-0 max-md:opacity-20">
        <LogoMark animate className="w-full" />
      </div>
      <div className={`${wrap} relative`}>
        <h1 className="font-display max-w-[13ch] text-[clamp(3.1rem,8vw,7.8rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
          {["El anime no solo", "se consume.", "Se habita."].map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.08em]">
              <span className="line-in block">
                <span style={{ ["--d" as string]: `${i * 120}ms` }}>
                  {i === 2 ? <em className="not-italic text-accent-hi">{l}</em> : l}
                </span>
              </span>
            </span>
          ))}
        </h1>
        <div className="mt-12 grid items-end gap-8 md:grid-cols-12">
          <Reveal delay={500} className="md:col-span-5">
            <p className="max-w-[40ch] text-lg text-mute">
              Un estudio sobre hábitos, plataformas y decisiones de interfaz para definir AniZen.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const specifics = [
  "Comparar cómo Crunchyroll, Netflix y las webs abiertas organizan el acceso al anime.",
  "Reconocer necesidades, hábitos y perfiles dentro de la muestra universitaria.",
  "Traducir los hallazgos en un producto de streaming competitivo, usable y autosostenible.",
];

export function Objetivo() {
  return (
    <section id="contexto" className={`${wrap} section-standard`}>
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="mono flex items-center gap-3 text-accent-hi md:sticky md:top-28">
            <span>01</span>
            <span className="h-px w-8 bg-accent-hi/50" />
            <span className="text-dim">Objetivo general</span>
          </div>
        </div>
        <div className="md:col-span-9">
          <WordScrub
            className="font-display text-[clamp(1.9rem,4.4vw,3.8rem)] font-medium leading-[1.12] tracking-[-0.025em]"
            text="Analizar el ecosistema digital del anime como base para el desarrollo de AniZen."
          />
          <div className="mt-16 space-y-8 md:mt-20">
            {specifics.map((t, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className="relative border border-line bg-paper/[0.02] px-6 pb-6 pt-9 md:px-8 md:pb-8 md:pt-10"
              >
                <div className="absolute left-5 top-0 -translate-y-1/2 border border-line bg-ink px-3 py-1.5 md:left-7">
                  <span className="mono text-accent-hi">Objetivo {i + 1}</span>
                </div>
                <p className="max-w-[58ch] text-lg text-mute md:text-xl">{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const formats = [
  ["Televisión", "Emisión por cable y horarios fijos", "tv"],
  ["DVD físico", "Compra y coleccionismo doméstico", "disc"],
  ["Descargas", "Archivos digitales y P2P", "download"],
  ["Streaming", "Plataformas y apps bajo demanda", "stream"],
] as const;

function FormatIcon({ type }: { type: (typeof formats)[number][2] }) {
  const paths = {
    tv: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="m8 2 4 4 4-4M8 22h8" />
      </>
    ),
    disc: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 3v6.5M18.4 18.4l-4.6-4.6" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
        <path d="M4 17v3h16v-3" />
      </>
    ),
    stream: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="m10 9 5 3-5 3V9Z" />
      </>
    ),
  };

  return (
    <span className="format-icon block text-dim md:mb-7" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        className="size-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[type]}
      </svg>
    </span>
  );
}

export function Consumo() {
  const ref = useScrollProgress<HTMLDivElement>("cross");
  return (
    <section className="section-standard border-y border-line bg-ink-2">
      <div className={wrap}>
        <SectionHead
          n="02"
          kicker="Consumo"
          title={<>Del horario fijo a la elección infinita.</>}
        />
        <div ref={ref} className="relative">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" />
          <div
            className="absolute left-0 top-[7px] hidden h-px w-full origin-left bg-accent md:block"
            style={{ transform: "scaleX(clamp(0, calc((var(--p) - 0.25) * 3.2), 1))" }}
          />
          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {formats.map(([t, d, icon], i) => (
              <Reveal
                key={t}
                delay={i * 110}
                className="group border-t border-line py-6 first:border-t-0 md:border-0 md:py-0"
              >
                <div className="mb-5 flex items-center justify-between md:mb-0 md:block">
                  <span
                    className={`relative block size-[15px] rounded-full border md:mb-7 ${i === 3 ? "border-accent bg-accent" : "border-paper/40 bg-ink-2"}`}
                  />
                  <FormatIcon type={icon} />
                </div>
                <h3 className="text-3xl font-semibold">{t}</h3>
                <p className="mt-2 max-w-[24ch] text-mute">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center md:mt-32">
          <Reveal>
            <div className="slam-in relative mx-auto max-w-4xl px-8 py-10 md:px-12 md:py-14">
              <span className="pointer-events-none absolute left-0 top-0 size-6 border-l-2 border-t-2 border-accent/70" />
              <span className="pointer-events-none absolute right-0 top-0 size-6 border-r-2 border-t-2 border-accent/70" />
              <span className="pointer-events-none absolute bottom-0 left-0 size-6 border-b-2 border-l-2 border-accent/70" />
              <span className="pointer-events-none absolute bottom-0 right-0 size-6 border-b-2 border-r-2 border-accent/70" />
              <h3 className="text-3xl font-semibold md:text-4xl">¿Por qué importa esta evolución?</h3>
              <p className="mx-auto mt-6 max-w-[70ch] text-mute">
                Cada formato de acceso ha modificado hábitos y expectativas de quienes
                consumen anime: amplió el catálogo y la comodidad, aunque también introdujo
                fragilidades como la inestabilidad, la inseguridad y la dependencia de
                plataformas ajenas. Entender este recorrido permite distinguir qué necesidades
                han persistido y cuáles emergieron con cada cambio, y qué aprendizajes pueden
                orientar decisiones más sólidas para AniZen.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Visual evolution: pinned, scroll-driven ---------- */

const eras = [
  { y: "1990 — 2000", t: "Web tradicional", d: "Tablas, colores planos y navegación básica." },
  {
    y: "2005 — 2010",
    t: "Web moderna",
    d: "Tipografía cuidada, composición en grillas y jerarquía visual.",
  },
  {
    y: "2010 — 2020",
    t: "Era streaming",
    d: "Tarjetas, portadas grandes, carruseles y modo oscuro.",
  },
  {
    y: "2020 — hoy",
    t: "Interfaces actuales",
    d: "Animaciones, personalización, navegación fluida y diseño adaptativo.",
  },
];

const covers = [
  "#e8506a",
  "#3a7bd5",
  "#f2a93b",
  "#6c4bd8",
  "#2fb59a",
  "#d14fb0",
  "#e2663b",
  "#4a9be0",
];

function EraMock({ i }: { i: number }) {
  const common = "era-layer absolute inset-0";
  return (
    <div className="era-window relative aspect-[16/10] w-full overflow-hidden rounded-[10px] border border-line bg-black shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex h-7 items-center gap-1.5 border-b border-line bg-ink-3 px-3">
        {[0, 1, 2].map((k) => (
          <span key={k} className="size-2 rounded-full bg-paper/20" />
        ))}
        <span className="mono ml-4 rounded bg-black/40 px-3 py-0.5 text-[9px] normal-case tracking-normal text-dim">
          {
            [
              "http://www.anime-fans.net/index.html",
              "blog.animefan.com/temas",
              "streaming.tv/browse",
              "app.anime/descubrir",
            ][i]
          }
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-7">
        {/* 1: 90s */}
        <div
          className={`${common} bg-[#c9c9c9] p-4 font-serif text-[#111] ${i === 0 ? "era-layer--active" : ""}`}
        >
          <div className="mx-auto max-w-[80%] border-2 border-[#555] bg-[#e9e9e9] p-3 text-center">
            <div className="text-lg font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
              WELCOME TO ANIME-FANS
            </div>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {["#2a2aa0", "#a02a2a", "#2aa02a", "#a0a02a"].map((c) => (
                <div key={c} className="h-12" style={{ background: c }} />
              ))}
            </div>
            <div className="mt-3 space-y-1 text-left text-[11px] leading-tight">
              <div>
                <u className="text-[#00e]">Episodios</u> | <u className="text-[#00e]">Foros</u> |{" "}
                <u className="text-[#00e]">Enlaces</u>
              </div>
              <div className="h-1.5 w-full bg-[#999]" />
              <div className="h-1.5 w-4/5 bg-[#999]" />
              <div className="h-1.5 w-3/5 bg-[#999]" />
            </div>
          </div>
        </div>
        {/* 2: 2000s grid */}
        <div className={`${common} flex bg-[#f3f3ef] ${i === 1 ? "era-layer--active" : ""}`}>
          <div className="w-[22%] bg-[#2b2f36] p-3">
            {[0, 1, 2, 3, 4].map((k) => (
              <div
                key={k}
                className="mb-2 h-1.5 rounded-sm bg-white/30"
                style={{ width: `${90 - k * 9}%` }}
              />
            ))}
          </div>
          <div className="grid flex-1 grid-cols-3 gap-2.5 p-3">
            {covers.slice(0, 6).map((c, k) => (
              <div key={k} className="rounded-sm bg-white p-1.5 shadow-sm">
                <div
                  className="h-[52%] min-h-9 rounded-sm"
                  style={{ background: c, opacity: 0.8 }}
                />
                <div className="mt-1.5 h-1 w-3/4 bg-[#bbb]" />
                <div className="mt-1 h-1 w-1/2 bg-[#ddd]" />
              </div>
            ))}
          </div>
        </div>
        {/* 3: streaming */}
        <div className={`${common} bg-[#0b0b0d] ${i === 2 ? "era-layer--active" : ""}`}>
          <div className="relative h-[52%] bg-gradient-to-br from-[#5b1b2a] via-[#2a1a3d] to-[#0b0b0d]">
            <div className="absolute bottom-3 left-4">
              <div className="h-3 w-28 bg-white/90" />
              <div className="mt-2 h-1.5 w-40 bg-white/40" />
              <div className="mt-3 h-5 w-14 rounded-sm bg-[#e50914]" />
            </div>
          </div>
          <div className="mt-2.5 flex gap-2 overflow-hidden px-3">
            {covers.map((c, k) => (
              <div
                key={k}
                className="h-16 w-[17%] shrink-0 rounded-sm"
                style={{ background: c, opacity: 0.85 }}
              />
            ))}
          </div>
        </div>
        {/* 4: now */}
        <div className={`${common} bg-[#100c1c] p-3 ${i === 3 ? "era-layer--active" : ""}`}>
          <div className="flex gap-1.5">
            {["Todo", "Acción", "Drama", "Ciencia ficción", "Seinen"].map((c, k) => (
              <span
                key={c}
                className={`rounded-full px-2.5 py-1 text-[9px] ${k === 0 ? "bg-accent text-ink" : "bg-white/10 text-white/60"}`}
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {covers.map((c, k) => (
              <div
                key={k}
                className="relative overflow-hidden rounded-lg"
                style={{ background: c, aspectRatio: "3/4" }}
              >
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1.5">
                  <div className="h-1 w-3/4 rounded bg-white/80" />
                  <div className="mt-1 h-1 w-1/2 rounded bg-white/40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function EvolucionVisual() {
  const [idx, setIdx] = useState(0);
  const ref = useScrollProgress<HTMLDivElement>("sticky", (p) =>
    setIdx(Math.min(3, Math.floor(p * 4))),
  );
  return (
    <section ref={ref} id="evolucion" className="relative h-[360vh] md:h-[420vh]">
      <div className="sticky top-0 flex h-[100svh] items-start overflow-hidden pt-24 md:items-center md:pt-0">
        <div className={wrap}>
          <div className="grid items-center gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="mono mb-6 flex items-center gap-3 text-accent-hi">
                <span>03</span>
                <span className="h-px w-8 bg-accent-hi/50" />
                <span className="text-dim">Evolución visual</span>
              </div>
              <ScrollTitle className="text-[clamp(2.2rem,4.6vw,4.2rem)] font-semibold">
                La interfaz siguió al hábito.
              </ScrollTitle>
              <div className="relative mt-10 h-36 md:h-40">
                {eras.map((e, k) => (
                  <div
                    key={e.t}
                    className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out"
                    style={{
                      opacity: k === idx ? 1 : 0,
                      transform: `translateY(${k === idx ? 0 : k < idx ? -12 : 12}px) scale(${k === idx ? 1 : 0.985})`,
                    }}
                  >
                    <h3 className="text-3xl font-semibold md:text-4xl">{e.t}</h3>
                    <p className="mt-3 flex max-w-[44ch] items-baseline gap-3 text-mute">
                      <span>{e.d}</span>
                      <span className="mono ml-auto shrink-0 whitespace-nowrap text-right text-accent-hi self-end">
                        {e.y}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                {eras.map((e, k) => (
                  <span key={e.t} className="h-[3px] flex-1 overflow-hidden rounded bg-line">
                    <span
                      className="block h-full origin-left bg-accent transition-transform duration-700 ease-out"
                      style={{ transform: `scaleX(${k <= idx ? 1 : 0})` }}
                    />
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-7">
              <div key={idx} className="era-window-stage">
                <div
                  style={{
                    transform: `perspective(1400px) rotateY(${-6 + idx * 1.5}deg) rotateX(2deg)`,
                  }}
                >
                  <EraMock i={idx} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const refs = [
  {
    name: "Crunchyroll",
    year: "2006",
    description:
      "Un catálogo especializado, simulcasts y una experiencia construida alrededor del aficionado.",
    tag: "Especialista",
    icon: "/assets/fefd3.svg",
    iconSize: { width: 17, height: 17 },
    iconScale: 2.38,
    tone: "reference-icon--crunchyroll",
  },
  {
    name: "Netflix",
    year: "1997",
    description:
      "Escala global, continuidad entre dispositivos y un sistema de recomendación generalista.",
    tag: "Generalista",
    icon: "/assets/80c26.svg",
    iconSize: { width: 9, height: 17 },
    iconScale: 2.53,
    tone: "reference-icon--netflix",
  },
  {
    name: "AnimeFLV",
    year: "2010",
    description:
      "Acceso inmediato desde la web y amplitud de títulos, con fricciones de seguridad y estabilidad.",
    tag: "Web abierta",
    icon: "/assets/d58b3.svg",
    iconSize: { width: 18, height: 18 },
    iconScale: 2.24,
    tone: "reference-icon--web",
  },
];

function GlobalReachGraphic() {
  const [ref, seen] = useInView<HTMLElement>(0.25);
  const nodes = [
    [112, 166],
    [320, 151],
    [520, 143],
    [612, 166],
  ];

  return (
    <figure
      ref={ref}
      className="global-reach md:col-span-2"
      data-reach-in={seen}
      aria-hidden="true"
    >
      <svg viewBox="0 0 720 190" role="presentation">
        <defs>
          <linearGradient id="reach-horizon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#9e41d3" stopOpacity="0" />
            <stop offset=".48" stopColor="#d5a9f0" stopOpacity=".9" />
            <stop offset="1" stopColor="#9e41d3" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="reach-arc" x1="0" y1="1" x2=".55" y2="0">
            <stop offset="0" stopColor="#9e41d3" stopOpacity=".3" />
            <stop offset=".55" stopColor="#fafcf3" />
            <stop offset="1" stopColor="#d5a9f0" stopOpacity=".55" />
          </linearGradient>
          <radialGradient id="reach-surface" cx=".5" cy=".2" r=".8">
            <stop offset="0" stopColor="#d5a9f0" stopOpacity=".16" />
            <stop offset=".72" stopColor="#9e41d3" stopOpacity=".035" />
            <stop offset="1" stopColor="#9e41d3" stopOpacity="0" />
          </radialGradient>
          <clipPath id="reach-hemisphere">
            <path d="M55 183C102 72 220 25 360 25s258 47 305 158H55Z" />
          </clipPath>
        </defs>

        <path d="M55 183C102 72 220 25 360 25s258 47 305 158H55Z" fill="url(#reach-surface)" />
        <g className="global-reach__grid" clipPath="url(#reach-hemisphere)">
          <ellipse cx="360" cy="183" rx="305" ry="158" />
          <ellipse cx="360" cy="183" rx="164" ry="67" />
          <path d="M360 25C272 66 244 123 250 183" />
          <path d="M360 25C448 66 476 123 470 183" />
        </g>

        <g className="global-reach__routes" fill="none">
          <path
            className="global-reach__arc"
            pathLength="1"
            style={{ ["--route-delay" as string]: "0s" }}
            d="M112 166Q190 24 320 151"
          />
          <path
            className="global-reach__arc"
            pathLength="1"
            style={{ ["--route-delay" as string]: "0.16s" }}
            d="M208 126Q345 -34 520 143"
          />
          <path
            className="global-reach__arc"
            pathLength="1"
            style={{ ["--route-delay" as string]: "0.32s" }}
            d="M320 151Q476 18 612 166"
          />
        </g>

        <path className="global-reach__horizon" d="M36 183H684" />
        <g className="global-reach__nodes">
          {nodes.map(([cx, cy], index) => (
            <g
              key={`${cx}-${cy}`}
              className="global-reach__node"
              style={{ ["--node-delay" as string]: `${0.5 + index * 0.12}s` }}
            >
              <circle cx={cx} cy={cy} r="8" />
              <circle cx={cx} cy={cy} r="2.5" />
            </g>
          ))}
        </g>
      </svg>
    </figure>
  );
}

export function Producto() {
  return (
    <section id="producto" className={`${wrap} pt-12 md:pt-16`}>
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <ScrollTitle className="max-w-[12ch] text-[clamp(2.4rem,5.4vw,4.8rem)] font-semibold">
            La investigación toma forma.
          </ScrollTitle>
        </div>
        <p className="max-w-[48ch] text-lg text-mute md:col-span-5 md:col-start-8">
          AniZen convierte los hallazgos en una portada que permite descubrir, retomar y organizar
          anime sin abandonar el mismo recorrido.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:mt-24 md:grid-cols-3 md:items-end md:gap-6">
        {[
          {
            title: "Descubrimiento",
            description: "Episodios, estrenos y recomendaciones visibles desde el inicio.",
            icon: (
              <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="40" cy="40" r="22" />
                <path d="M57 57l19 19" />
                <path d="M33 40l5 5 9-10" />
              </svg>
            ),
            height: "md:min-h-[17rem]",
          },
          {
            title: "Continuidad",
            description: "Historial y progreso para volver al punto correcto.",
            icon: (
              <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M72 44a28 28 0 1 1-8-19" />
                <path d="M72 18v14H58" />
                <path d="M48 34v14l10 6" />
              </svg>
            ),
            height: "md:min-h-[21rem]",
          },
          {
            title: "Biblioteca personal",
            description: "Favoritos, pendientes, viendo y completados en un solo lugar.",
            icon: (
              <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M24 20h48v56H24z" />
                <path d="M32 32h32M32 44h32M32 56h20" />
                <path d="M68 32v44" />
              </svg>
            ),
            height: "md:min-h-[25rem]",
          },
        ].map(({ title, description, icon, height }, i) => (
          <Reveal
            key={title}
            delay={i * 140}
            className={`group relative flex flex-col overflow-hidden border border-line bg-paper/[0.02] p-6 transition-[border-color,background-color] duration-500 hover:border-accent/40 hover:bg-paper/[0.04] md:p-8 ${height}`}
          >
            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{title}</h3>
            <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-mute">{description}</p>
            <div
              className="pointer-events-none absolute -bottom-12 -right-12 -rotate-6 size-56 text-accent/10 transition-colors duration-500 group-hover:text-accent/20 md:-bottom-20 md:-right-20 md:size-72 [&_svg]:size-full"
              aria-hidden="true"
            >
              {icon}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="figure" variant="mask" className="mt-8">
        <img
          src="/assets/anizen-product.webp"
          alt="Prototipo de AniZen con menú lateral, portada destacada, últimos episodios e historial"
          width="2560"
          height="2977"
          decoding="async"
          className="block h-auto w-full outline outline-1 -outline-offset-1 outline-white/10"
        />
      </Reveal>
    </section>
  );
}

export function Referentes() {
  return (
    <section id="referentes" className={`${wrap} section-standard`}>
      <SectionHead
        n="04"
        kicker="Referentes"
        title="Tres modelos para una misma audiencia."
        lead="Crunchyroll especializa, Netflix personaliza y la web abierta prioriza el acceso. La comparación permite separar estándares, ventajas y fricciones."
      />
      <div className="gap-y-3 flex flex-col">
        {refs.map((reference, i) => (
          <Reveal key={reference.name} delay={i * 80}>
            <div className="reference-row group grid grid-cols-[4rem_1fr] items-start gap-x-4 gap-y-5 py-10 px-5 md:grid-cols-12 md:items-center md:gap-4">
              <span
                className={`reference-icon ${reference.tone} col-start-1 row-span-3 row-start-1 flex size-[3.75rem] items-center justify-center overflow-hidden rounded-2xl border md:col-span-1 md:col-start-auto md:row-auto`}
                aria-hidden="true"
              >
                <img
                  src={reference.icon}
                  alt=""
                  width={reference.iconSize.width}
                  height={reference.iconSize.height}
                  className="reference-icon__asset"
                  style={
                    {
                      "--reference-scale": reference.iconScale,
                      "--reference-delay": `${i * -1.15}s`,
                    } as React.CSSProperties
                  }
                />
              </span>
              <h3 className="col-start-2 row-start-1 text-[clamp(2.4rem,5.4vw,4.8rem)] font-semibold md:col-span-5 md:col-start-auto md:row-start-auto">
                {reference.name}
              </h3>
              <p className="col-start-2 row-start-2 max-w-[40ch] text-mute md:col-span-3 md:col-start-auto md:row-start-auto">
                {reference.description}
              </p>
              <div className="col-start-2 row-start-3 flex items-baseline justify-between md:col-span-3 md:col-start-auto md:row-start-auto md:flex-col md:items-end md:gap-2">
                <span className="font-display text-5xl font-semibold tabular-nums text-dim">
                  {reference.year}
                </span>
                <span className="mono text-dim">{reference.tag}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20 grid gap-10 py-10 md:grid-cols-12 md:items-end md:py-14">
        <Reveal className="md:col-span-4">
          <h3 className="text-3xl font-semibold md:text-4xl">
            La escala confirma que no es un nicho.
          </h3>
          <p className="mt-4 max-w-[38ch] text-mute">
            No son cifras comparables uno a uno: Netflix reporta membresías globales y Crunchyroll
            una audiencia activa especializada. Juntas dimensionan el contexto donde compite una
            experiencia de anime.
          </p>
        </Reveal>
        <div className="grid gap-x-8 gap-y-8 md:col-span-7 md:col-start-6 md:grid-cols-2">
          <GlobalReachGraphic />
          <Reveal delay={100}>
            <div className="font-display text-[clamp(3.8rem,6.2vw,6.25rem)] font-semibold leading-none tracking-[-0.06em]">
              300<span className="text-accent-hi">M+</span>
            </div>
            <h4 className="mt-5 text-xl font-semibold">Netflix</h4>
            <p className="mt-1 text-sm text-mute">membresías activas globales</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="font-display text-[clamp(3.8rem,6.2vw,6.25rem)] font-semibold leading-none tracking-[-0.06em]">
              14<span className="text-accent-hi">M</span>
            </div>
            <h4 className="mt-5 text-xl font-semibold">Crunchyroll</h4>
            <p className="mt-1 text-sm text-mute">usuarios activos reportados</p>
          </Reveal>
        </div>
        <p className="text-xs leading-relaxed text-dim md:col-span-7 md:col-start-6">
          Fuentes de referencia: Netflix, resultados del cuarto trimestre de 2024; Crunchyroll /
          Sony Pictures Entertainment, cifras corporativas de 2024. Valores redondeados para lectura
          editorial.
        </p>
      </div>
    </section>
  );
}
