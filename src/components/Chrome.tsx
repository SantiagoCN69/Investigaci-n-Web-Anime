import { useEffect, useState } from "react";
import { LogoWordmark } from "./Logo";
import { useScrollProgress } from "../hooks";

export const NAV = [
  ["contexto", "Contexto"],
  ["evolucion", "Evolución"],
  ["referentes", "Referentes"],
  ["usuarios", "Usuarios"],
  ["solucion", "AniZen"],
  ["fuentes", "Fuentes"],
] as const;

export function Nav() {
  const [prog, setProg] = useState(0);
  const [active, setActive] = useState("");
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setProg(h.scrollTop / (h.scrollHeight - h.clientHeight));
      setSolid(h.scrollTop > 60);
      let cur = "";
      for (const [id] of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  const progressLabel = Math.round(prog * 100);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background,backdrop-filter] duration-500 ${solid ? "bg-ink/80 backdrop-blur-md" : ""}`}
      >
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-6 md:px-10">
          <a href="#top" data-action className="flex min-h-11 items-center gap-2.5">
            <LogoWordmark className="h-auto w-[112px]" />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Secciones del estudio">
            {NAV.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                data-action
                aria-current={active === id ? "location" : undefined}
                className={`mono inline-flex min-h-11 items-center transition-colors duration-300 hover:text-paper ${active === id ? "text-paper" : "text-dim"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="mono min-h-11 border border-line px-3 text-paper md:hidden"
              aria-expanded={open}
              aria-controls="mobile-index"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Cerrar" : "Índice"}
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-line">
          <div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${prog})` }} />
        </div>
      </div>
      {open && (
        <nav
          id="mobile-index"
          aria-label="Índice móvil"
          className="mobile-index fixed inset-x-0 bottom-0 top-[65px] z-40 grid content-start gap-1 overflow-y-auto overscroll-contain border-t border-line bg-ink px-6 py-8 md:hidden"
        >
          {NAV.map(([id, label], index) => (
            <a
              key={id}
              href={`#${id}`}
              data-action
              onClick={() => setOpen(false)}
              className="mobile-index__item flex min-h-14 items-center justify-between border-b border-line text-2xl font-semibold"
              style={{ ["--menu-i" as string]: index }}
            >
              <span>{label}</span>
              <span className="mono text-dim">0{index + 1}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SectionHead({
  title,
  lead,
  centered = false,
  titleClassName = "",
}: {
  title: React.ReactNode;
  lead?: string;
  centered?: boolean;
  titleClassName?: string;
}) {
  return (
    <div className={`mb-14 md:mb-20${centered ? " text-center" : ""}`}>
      <ScrollTitle
        className={`text-[clamp(2.2rem,5.4vw,4.6rem)] font-semibold${centered ? " mx-auto" : ""}${titleClassName ? ` ${titleClassName}` : ""}`}
      >
        {title}
      </ScrollTitle>
      {lead && (
        <p
          className={`mt-6 max-w-[56ch] text-lg text-mute${centered ? " mx-auto" : ""}`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export function ScrollTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollProgress<HTMLHeadingElement>("cross");
  return (
    <h2 ref={ref} className={`scroll-title ${className}`}>
      {children}
    </h2>
  );
}

export const wrap = "mx-auto w-full max-w-[1320px] px-6 md:px-10";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-ink">
      <div className={`${wrap} py-14 md:py-20`}>
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="mono mb-5 text-accent-hi">Créditos del proyecto</div>
            <p className="text-sm text-dim">Investigación y sitio web realizados por</p>
            <a
              href="https://github.com/SantiagoCN69"
              target="_blank"
              rel="noreferrer"
              data-action
              className="mt-2 block w-fit transition-colors transition-transform duration-300 hover:text-accent-hi hover:translate-x-[2px]"
            >
              <p className="font-display text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-none tracking-[-0.04em]">
                Santiago Cardona Nossa
              </p>
            </a>
          </div>

          <div className="space-y-3 md:col-span-4 md:col-start-9">
            <a
              href="https://ani.zenlite.workers.dev/"
              target="_blank"
              rel="noreferrer"
              data-action
              className="group block border border-accent/40 bg-accent/5 p-5 transition-colors duration-300 hover:border-accent-hi/70 hover:bg-accent/10"
              aria-label="Visitar la WAPP de AniZen, se abre en una pestaña nueva"
            >
              <span className="mono text-accent-hi">WAPP en línea</span>
              <span className="mt-5 flex items-end justify-between gap-4">
                <span className="break-all text-lg font-medium">ani.zenlite.workers.dev</span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/SantiagoCN69/Anime-FLV-LITE"
              target="_blank"
              rel="noreferrer"
              data-action
              className="group block border border-line bg-paper/[0.025] p-5 transition-[translate,background-color,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-paper/30 hover:bg-paper/[0.05]"
              aria-label="Ver el repositorio completo de AniZen en GitHub, se abre en una pestaña nueva"
            >
              <span className="mono text-dim">Código fuente completo</span>
              <span className="mt-4 flex items-end justify-between gap-4">
                <span className="break-all text-sm font-medium text-paper transition-colors duration-500 group-hover:text-accent-hi">
                  github.com/SantiagoCN69/Anime-FLV-LITE
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 shrink-0 text-dim transition-[color,filter,translate,scale] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:scale-110 group-hover:text-accent-hi group-hover:drop-shadow-[0_0_8px_rgb(213_169_240_/_0.3)]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
