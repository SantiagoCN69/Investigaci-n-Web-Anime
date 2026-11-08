import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  variant = "fade",
  style,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  variant?: "fade" | "mask" | "pop" | "rise";
  style?: CSSProperties;
}) {
  const [ref, seen] = useInView<HTMLElement>(0.12);

  return (
    <Tag
      ref={ref}
      className={[
        "reveal",
        `reveal--${variant}`,
        seen ? "reveal--visible" : "",
        className ?? "",
      ].join(" ")}
      style={{ ["--d" as string]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/** Writes 0..1 progress of an element crossing the viewport to a CSS variable. */
export function useScrollProgress<T extends HTMLElement>(
  mode: "cross" | "sticky" = "cross",
  onChange?: (p: number) => void,
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p: number;
      if (mode === "sticky") p = -r.top / Math.max(1, r.height - vh);
      else p = (vh - r.top) / (vh + r.height);
      p = Math.min(1, Math.max(0, p));
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--p-pct", `${(p * 100).toFixed(1)}%`);
      onChange?.(p);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, [mode, onChange]);
  return ref;
}

export function CountUp({
  to,
  decimals = 1,
  suffix = "%",
  duration = 1600,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const [ref, seen] = useInView<HTMLSpanElement>(0.4);
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      setV(to * (1 - Math.pow(1 - k, 4)));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);
  return (
    <span ref={ref} className="tabular-nums">
      {v.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
}

/** Words light up as the paragraph scrolls through the viewport. */
export function WordScrub({ text, className }: { text: string; className?: string }) {
  return <p className={className}>{text}</p>;
}
