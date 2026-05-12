import { motion } from "framer-motion";
import { HiDownload, HiDocumentText } from "react-icons/hi";

export function CV() {
  return (
    <section id="cv" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Curriculum</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            My <span className="text-gradient">resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
          className="group relative glass rounded-2xl p-10 md:p-14 shadow-card-premium hover:shadow-glow-strong transition-smooth overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-red opacity-0 group-hover:opacity-10 transition-smooth pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/30 blur-3xl group-hover:bg-primary/50 transition-smooth" />

          <div className="relative flex flex-col md:flex-row items-center gap-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-red blur-2xl opacity-50" />
              <div className="relative w-32 h-40 rounded-xl bg-gradient-to-br from-burgundy to-background border border-primary/40 flex items-center justify-center shadow-glow">
                <HiDocumentText className="text-6xl text-primary" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Klejdi Tahiri — CV 2026
              </h3>
              
              <a
  href="/cv.pdf"
  download
  className="mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-red text-primary-foreground font-medium shadow-glow hover:shadow-glow-strong hover:scale-105 transition-smooth"
>
  <HiDownload className="text-lg" />
  Download PDF
</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
