export function LogoMark({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <span
      className={`logo-mark ${animate ? "logo-mark--animated" : ""} ${className ?? ""}`}
      role="img"
      aria-label="AniZen"
    >
      <img src="/assets/b3fd1.svg" alt="" />
      {animate && <span className="logo-trace" aria-hidden="true" />}
      {animate && <span className="logo-orbit" aria-hidden="true" />}
    </span>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return <img src="/assets/747b0.svg" alt="AniZen" className={className} />;
}
