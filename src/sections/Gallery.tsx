import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";
import g6 from "../assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Portrait" },
  { src: g2, alt: "Neon city" },
  { src: g5, alt: "Red car" },
  { src: g3, alt: "Red smoke" },
  { src: g4, alt: "Workspace" },
  { src: g6, alt: "Sunset" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Visual Diary</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="text-gradient">Gallery</span>
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((ph, i) => (
            <motion.button
              key={ph.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              onClick={() => setOpen(ph.src)}
              className="group relative w-full break-inside-avoid rounded-xl overflow-hidden shadow-card-premium block cursor-zoom-in"
            >
              <img
                src={ph.src}
                alt={ph.alt}
                loading="lazy"
                className="w-full h-auto group-hover:scale-110 transition-smooth duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-smooth" />
              <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-primary/60 rounded-xl transition-smooth" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 text-3xl text-foreground hover:text-primary transition-smooth"
              aria-label="Close"
            >
              <HiX />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={open}
              alt=""
              className="max-w-full max-h-full rounded-xl shadow-glow-strong"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
