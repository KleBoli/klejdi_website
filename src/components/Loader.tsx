import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-hero" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative font-display text-5xl md:text-7xl font-bold text-gradient red-glow-text"
          >
            ALEX.dev
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute bottom-1/3 h-[2px] bg-gradient-red rounded-full shadow-glow"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
