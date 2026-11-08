import { Footer, Nav } from "./components/Chrome";
import { Hero, Producto, Objetivo, Consumo, EvolucionVisual, Referentes } from "./components/Part1";
import { Demografia, Necesidades, Perfiles, Oportunidades } from "./components/Part2";
import {
  Solucion,
  Funcionalidades,
  UX,
  IA,
  Bases,
  Conclusiones,
  Fuentes,
} from "./components/Part3";

export default function App() {
  return (
    <>
      <div className="ambient-backdrop" aria-hidden="true">
        <span className="ambient-orb ambient-orb--one" />
        <span className="ambient-orb ambient-orb--two" />
        <span className="ambient-orb ambient-orb--three" />
        <span className="ambient-glint ambient-glint--one" />
        <span className="ambient-glint ambient-glint--two" />
        <span className="ambient-glint ambient-glint--three" />
      </div>
      <a
        href="#contenido"
        className="fixed left-4 top-3 z-[70] -translate-y-20 bg-paper px-4 py-3 text-sm font-semibold text-ink transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido" className="relative z-10">
        <Hero />
        <Producto />
        <Objetivo />
        <Consumo />
        <EvolucionVisual />
        <Referentes />
        <Demografia />
        <Necesidades />
        <Perfiles />
        <Oportunidades />
        <Solucion />
        <Funcionalidades />
        <UX />
        <IA />
        <Bases />
        <Conclusiones />
        <Fuentes />
      </main>
      <Footer />
    </>
  );
}
