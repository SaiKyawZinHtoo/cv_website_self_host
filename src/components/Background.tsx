export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
      <div className="absolute inset-0 bg-[var(--background)] transition-colors duration-300" />
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[var(--blob-cyan)] blur-[120px]" />
      <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[var(--blob-violet)] blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[var(--blob-blue)] blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
