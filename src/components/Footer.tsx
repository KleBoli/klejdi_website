export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} <span className="text-foreground font-semibold">Alex Morgan</span>.
          Crafted with passion.
        </p>
        <p className="tracking-wider uppercase text-xs">
          Designed in dark mode <span className="text-primary">●</span>
        </p>
      </div>
    </footer>
  );
}
