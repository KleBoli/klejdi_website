import { motion } from "framer-motion";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { ParticlesBackground } from "../components/ParticlesBackground";
import heroBg from "../assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <ParticlesBackground />

      {/* glow orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base uppercase tracking-[0.4em] text-primary mb-6"
        >
          Full-Stack Developer & Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight"
        >
          <span className="text-gradient red-glow-text">Alex</span>
          <br />
          <span className="text-foreground">Morgan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Crafting immersive digital experiences with cinematic precision and futuristic design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-8 py-4 rounded-full bg-gradient-red text-primary-foreground font-medium tracking-wide shadow-glow hover:shadow-glow-strong transition-smooth hover:scale-105"
          >
            <span className="relative z-10">Contattami</span>
          </a>
          <a
            href="/cv.pdf"
            download
            className="group flex items-center gap-2 px-8 py-4 rounded-full glass border border-primary/40 text-foreground font-medium tracking-wide hover:border-primary hover:bg-primary/10 transition-smooth"
          >
            <HiDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
            Scarica CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <HiArrowDown className="text-2xl" />
      </motion.div>
    </section>
  );
}
