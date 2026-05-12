import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

type Theme = "dark" | "light";

function getInitial(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored) return stored;
  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", theme === "light");
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary hover:shadow-glow transition-smooth"
    >
      {theme === "dark" ? <HiSun className="text-lg" /> : <HiMoon className="text-lg" />}
    </button>
  );
}
