import { SectionHead, wrap } from "./Chrome";
import { CountUp, Reveal } from "../hooks";

const SOURCE =
  "Fuente: Cobos, T. L., Robledo, N. y Arias, F. (2023). «Anime en Colombia: una exploración desde usos y gratificaciones en la población universitaria de Cartagena de Indias».";

function Bar({
  v,
  max = 100,
  delay = 0,
  tone = "accent",
}: {
  v: number;
  max?: number;
  delay?: number;
  tone?: "accent" | "paper";
}) {
  return (
    <div className="h-[6px] w-full bg-line">
      <div
        className={`draw-x h-full ${tone === "accent" ? "bg-accent" : "bg-paper/70"}`}
        style={{ width: `${(v / max) * 100}%`, ["--d" as string]: `${delay}ms` }}
      />
    </div>
  );
}

const motivos: [string, number][] = [
  [
    "Por tramas complejas, diversas y diferentes a las caricaturas occidentales tradicionales",
    58.8,
  ],
  ["Atraído por el estilo y la estética del dibujo", 48.0],
  ["Por considerar el contenido más entretenido", 46.8],
  ["Por la calidad y técnica de animación", 46.2],
  ["Motivado por las escenas de acción y combate", 44.5],
];

export function Demografia() {
  return (
    <section id="usuarios" className="section-standard border-t border-line bg-ink-2">
      <div className={wrap}>
        <SectionHead
          n="05"
          kicker="Demografía"
          title="Joven, digital y exigente."
          lead="Población universitaria de Cartagena · n = 350. Los resultados se limitan a esta muestra."
        />
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <div className="font-display text-[clamp(4.5rem,10vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-accent-hi">
                <CountUp to={93.4} />
              </div>
              <div className="mt-3 flex items-baseline justify-between border-b border-line pb-6 text-mute">
                <span>Estudiantes</span>
                <span className="tabular-nums">
                  <b className="font-semibold text-paper">6,5%</b> docentes
                </span>
              </div>
            </Reveal>
            <Reveal className="mt-10" delay={100}>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-6xl font-semibold tracking-[-0.04em]">
                  <CountUp to={84.7} />
                </span>
                <span className="text-mute">jóvenes entre 17 y 25 años</span>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  ["Entre 20 y 25 años", 50.5],
                  ["Entre 17 y 19 años", 34.2],
                ].map(([l, v], i) => (
                  <div key={l as string}>
                    <div className="mb-2 flex justify-between text-sm text-mute">
                      <span>{l}</span>
                      <span className="tabular-nums text-paper">
                        {String(v).replace(".", ",")}%
                      </span>
                    </div>
                    <Bar v={v as number} delay={i * 120} tone="paper" />
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="mt-10" delay={160}>
              <div className="flex h-10 w-full overflow-hidden text-sm font-medium text-ink">
                <div
                  className="draw-x flex items-center bg-accent-hi px-3"
                  style={{ width: "59.4%" }}
                >
                  Hombres 59,4%
                </div>
                <div
                  className="draw-x flex items-center bg-paper px-3"
                  style={{ width: "39.7%", ["--d" as string]: "200ms" }}
                >
                  Mujeres 39,7%
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="mb-8 text-sm text-dim">
              Motivos: respuestas independientes · % de encuestados
            </p>
            <div className="border-t border-line">
              {motivos.map(([l, v], i) => (
                <Reveal key={l} delay={i * 70} className="border-b border-line py-6">
                  <div className="mb-4 flex items-start justify-between gap-6">
                    <span className="max-w-[34ch] text-paper/90">{l}</span>
                    <span className="font-display text-3xl font-semibold tabular-nums">
                      {v.toFixed(1).replace(".", ",")}%
                    </span>
                  </div>
                  <Bar v={v} delay={i * 90} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-16 max-w-[90ch] text-xs leading-relaxed text-dim">
          {SOURCE} Porcentajes originales; no se normalizan ni se añaden categorías.
        </p>
      </div>
    </section>
  );
}

const necesidadesClave = [
  ["57,1", "Introspección", "El anime ha motivado reflexión sobre la propia vida."],
  ["50,5", "Hábito", "Forma parte de la rutina cotidiana de esparcimiento."],
  ["43,1", "Aprendizaje", "También se consume para acercarse a otras culturas."],
];

const efectos = [
  ["37,1", "creó manga o fanart"],
  ["32,5", "estudió cultura, idioma o costumbres japonesas"],
  ["30,2", "asiste a convenciones y eventos temáticos"],
];

export function Necesidades() {
  return (
    <section className={`${wrap} section-standard`}>
      <SectionHead
        n="06"
        kicker="Necesidades"
        title="El anime deja huella en la vida cotidiana."
        lead="El entretenimiento domina, pero la influencia también alcanza la rutina, la reflexión y el aprendizaje."
      />
      <div className="grid gap-16 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-5">
          <div className="font-display text-[clamp(4.5rem,9.5vw,8rem)] font-semibold leading-[0.82] tracking-[-0.06em]">
            <CountUp to={96.2} />
          </div>
          <h3 className="mt-7 text-2xl font-semibold md:text-3xl">Diversión y entretenimiento</h3>
          <p className="mt-3 max-w-[38ch] text-mute">
            Es el motivo dominante. Además, el 75,1% declara una satisfacción muy alta.
          </p>
        </Reveal>

        <div className="md:col-span-6 md:col-start-7">
          <div className="border-t border-line">
            {necesidadesClave.map(([n, title, description], i) => (
              <Reveal
                key={title}
                delay={i * 70}
                className="grid gap-3 border-b border-line py-6 sm:grid-cols-[7rem_1fr] sm:items-baseline"
              >
                <div className="font-display text-4xl font-semibold tracking-[-0.04em]">
                  <CountUp to={parseFloat(n.replace(",", "."))} />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold tracking-normal">{title}</h3>
                  <p className="mt-1 text-sm text-mute">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="mt-20 border-y border-line py-6">
        <div className="grid gap-6 md:grid-cols-3">
          {efectos.map(([n, description]) => (
            <div key={n} className="flex items-baseline gap-4">
              <span className="font-display text-3xl font-semibold text-accent-hi">{n}%</span>
              <p className="max-w-[26ch] text-sm text-mute">{description}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <p className="mt-16 max-w-[90ch] text-xs leading-relaxed text-dim">{SOURCE}</p>
    </section>
  );
}

const perfiles = [
  ["El", "explorador", "Busca nuevos títulos y necesita recorrer géneros con criterio."],
  ["El", "seguidor", "Quiere volver al episodio correcto sin reconstruir su recorrido."],
  [
    "El",
    "organizador",
    "Ordena favoritos, pendientes y series completadas en una biblioteca propia.",
  ],
  ["El", "casual", "Quiere decidir rápido y necesita pocas opciones, pero bien elegidas."],
];
const comport = [
  ["Consumo por temporadas", "Seguimiento riguroso de estrenos semanales (simulcasts)."],
  ["Decisión asistida", "Filtros y recomendaciones reducen el tiempo dedicado a elegir."],
  [
    "Gestión personal",
    "Uso de listas externas (MyAnimeList) para organizar lo visto; guardado independiente.",
  ],
];

export function Perfiles() {
  return (
    <section className="section-standard border-t border-line bg-ink-2">
      <div className={wrap}>
        <SectionHead
          n="07"
          kicker="Usuarios"
          title="No existe un solo tipo de usuario."
          lead="Estos arquetipos hipotéticos sintetizan patrones observados y orientan decisiones iniciales; no sustituyen una segmentación validada con usuarios."
        />
        <Reveal className="mb-10">
          <p className="max-w-[72ch] text-sm leading-relaxed text-dim">
            Son perfiles de trabajo construidos a partir de los hallazgos de la muestra y del
            análisis del ecosistema. No representan grupos estadísticos cerrados: deben contrastarse
            mediante entrevistas, pruebas de uso y datos de comportamiento.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6 md:pb-10">
          {perfiles.map(([article, title, description], i) => (
            <Reveal
              key={title}
              delay={i * 70}
              className={`profile-card profile-card--${i % 2 === 0 ? "left" : "right"} flex min-h-[15rem] flex-col justify-between bg-paper/[0.035] px-6 py-7 md:px-9 md:py-9 ${i % 2 === 0 ? "" : "md:relative md:top-10"}`}
            >
              <div>
                <span className="mono text-accent-hi">{article}</span>
                <h3 className="mt-2 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95]">
                  {title}
                </h3>
              </div>
              <p className="mt-12 max-w-[38ch] text-mute">{description}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <h3 className="text-3xl font-semibold md:text-4xl">
                Comportamiento del usuario actual
              </h3>
            </Reveal>
            <div className="mt-10">
              {comport.map(([t, d], i) => (
                <Reveal key={t} delay={i * 80} className="border-t border-line py-5">
                  <h4 className="font-semibold">{t}</h4>
                  <p className="mt-1 text-sm text-mute">{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <h3 className="text-3xl font-semibold md:text-4xl">
                ¿Cómo actúa el usuario frente al catálogo?
              </h3>
            </Reveal>
            <ul className="mt-10">
              {[
                "Busca referencias detalladas antes de iniciar una serie nueva.",
                "Requiere filtros específicos por género, demografía, estudio y año.",
                "Demanda acceso web rápido, limpio y sin publicidad maliciosa.",
              ].map((t, i) => (
                <Reveal
                  as="li"
                  key={t}
                  delay={i * 90}
                  className="flex items-baseline gap-5 border-t border-line py-5 text-lg last:border-b"
                >
                  <span className="mono text-accent-hi">→</span>
                  {t}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const cols = ["Catálogo", "Búsqueda / organización", "Experiencia de uso"];
const opp: [string, string[]][] = [
  [
    "Crunchyroll",
    [
      "Especialización y estrenos simultáneos; la disponibilidad cambia por región.",
      "Géneros y colecciones conviven con una taxonomía irregular.",
      "La publicidad y las funciones sociales añaden capas al recorrido.",
    ],
  ],
  [
    "Netflix",
    [
      "Catálogo amplio, pero sin continuidad garantizada entre temporadas.",
      "La recomendación prima sobre los filtros específicos del anime.",
      "Retomar es sencillo; comprender una franquicia completa, no siempre.",
    ],
  ],
  [
    "AnimeFLV / webs online",
    [
      "Acceso amplio con enlaces y disponibilidad variables.",
      "La búsqueda directa funciona mejor que el descubrimiento guiado.",
      "La publicidad, la seguridad y el reproductor concentran la fricción.",
    ],
  ],
];

export function Oportunidades() {
  return (
    <section className={`${wrap} section-compact`}>
      <SectionHead
        n="08"
        kicker="Comparación"
        title="Tres modelos, tres vacíos."
        lead="La comparación no busca declarar un ganador, sino identificar qué resuelve cada referente y qué deja pendiente."
      />
      <div className="hidden grid-cols-[1.1fr_1fr_1fr_1fr] gap-6 border-b border-line pb-4 md:grid">
        <span />
        {cols.map((c) => (
          <span key={c} className="mono text-accent-hi">
            {c}
          </span>
        ))}
      </div>
      {opp.map(([name, cells], i) => (
        <Reveal
          key={name}
          delay={i * 80}
          className="grid gap-4 border-b border-line py-8 md:grid-cols-[1.1fr_1fr_1fr_1fr] md:gap-6"
        >
          <h3 className="text-3xl font-semibold">{name}</h3>
          {cells.map((c, k) => (
            <div key={k}>
              <div className="mono mb-2 text-accent-hi md:hidden">{cols[k]}</div>
              <p className="text-sm leading-relaxed text-mute">{c}</p>
            </div>
          ))}
        </Reveal>
      ))}
      <p className="mt-8 max-w-[80ch] text-xs text-dim">
        Lectura comparativa centrada en catálogo, organización y experiencia de uso.
      </p>
    </section>
  );
}
