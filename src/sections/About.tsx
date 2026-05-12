import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiFigma, SiPython } from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "Python", icon: SiPython },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-red rounded-2xl blur-2xl opacity-40" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-card-premium">
            <img
              src={profile}
              alt="Profile portrait"
              loading="lazy"
              width={768}
              height={960}
              className="w-full h-full object-cover hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">About Me</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Designing the <span className="text-gradient">future</span>, one pixel at a time.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Sono uno sviluppatore full-stack con la passione per le esperienze digitali immersive.
            Combino design cinematico, performance e attenzione ai dettagli per costruire prodotti
            che rimangono impressi.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Negli ultimi 6 anni ho collaborato con startup, agenzie creative e clienti enterprise
            in tutto il mondo, dal concept al deploy.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-xl p-4 flex flex-col items-center gap-2 hover:border-primary/60 hover:shadow-glow transition-smooth cursor-default"
              >
                <skill.icon className="text-2xl text-primary" />
                <span className="text-xs text-muted-foreground">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
