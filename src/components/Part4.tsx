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

const pendientes = [2, 3, 4, 5];

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
                <span className="mono text-dim">0{i + 1}</span>
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
                <span className="mono shrink-0 text-dim">0{i + 1}</span>
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
          <span className="mono shrink-0 text-dim">1 / 5 completados</span>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        <Reveal>
          <article className="flex h-full flex-col border border-accent/40 bg-accent/5 p-6">
            <header className="mb-5">
              <div className="mono text-xs text-accent-hi">Participante 01</div>
              <h3 className="mt-1 text-xl font-semibold">Sebastián Almanza</h3>
            </header>
            <ul className="flex-1 space-y-3">
              {reporteSebastian.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-mute">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
        {pendientes.map((n, i) => (
          <Reveal key={n} delay={(i + 1) * 80}>
            <article className="flex h-full min-h-[16rem] flex-col items-center justify-center border border-dashed border-line p-6 text-center">
              <span className="mono text-dim">Participante 0{n}</span>
              <span className="mt-3 text-sm text-dim">Reporte pendiente</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
