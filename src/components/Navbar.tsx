import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { HiMenu, HiX } from "react-icons/hi";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "studies", label: "Studies" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          scrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-wider">
            <span className="text-gradient">ALEX</span>
            <span className="text-foreground">.dev</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`text-sm tracking-wide transition-smooth relative ${
                    active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-red rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden text-2xl text-foreground"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>

        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-red"
        />
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-[64px] left-0 right-0 z-40 glass-strong md:hidden"
        >
          <ul className="flex flex-col gap-4 p-6">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`text-base ${active === s.id ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
