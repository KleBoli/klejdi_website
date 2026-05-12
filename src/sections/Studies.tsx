import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";

const studies = [
  {
    period: "2022 — 2024",
    title: "MSc in Computer Science",
    school: "Politecnico di Milano",
    description:
      "Specializzazione in Human-Computer Interaction e sistemi distribuiti. Tesi sull'ottimizzazione di interfacce immersive con WebGL.",
  },
  {
    period: "2019 — 2022",
    title: "BSc in Software Engineering",
    school: "Università di Bologna",
    description:
      "Fondamenti di ingegneria del software, algoritmi, basi di dati e sviluppo web moderno. Laurea con lode.",
  },
  {
    period: "2018",
    title: "Diploma Scientifico",
    school: "Liceo Scientifico G. Galilei",
    description:
      "Indirizzo scienze applicate con focus su matematica, fisica e informatica.",
  },
  {
    period: "Continuous",
    title: "Certificazioni & Corsi",
    school: "Coursera · Frontend Masters · Udemy",
    description:
      "Advanced React Patterns, System Design, UI/UX Design, Cloud Architecture (AWS).",
  },
];

export function Studies() {
  return (
    <section id="studies" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Education</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            My <span className="text-gradient">studies</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {studies.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-red shadow-glow ring-4 ring-background" />

                <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                  <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary/60 hover:shadow-glow transition-smooth group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-red flex items-center justify-center shadow-glow shrink-0">
                        <HiAcademicCap className="text-xl text-primary-foreground" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.3em] text-primary">
                        {s.period}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 mb-3">{s.school}</p>
                    <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
