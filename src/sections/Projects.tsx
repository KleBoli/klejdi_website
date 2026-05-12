import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.jpg";
import p3 from "../assets/project-3.jpg";
import p4 from "../assets/project-4.jpg";

const projects = [
  {
    title: "Nebula Analytics",
    description: "Dashboard real-time con visualizzazioni interattive e dark mode immersiva.",
    image: p1,
    stack: ["React", "TypeScript", "D3.js", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Crimson Commerce",
    description: "App mobile e-commerce premium con animazioni fluide e checkout one-tap.",
    image: p2,
    stack: ["React Native", "Stripe", "Node"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Vertex 3D Studio",
    description: "Configuratore 3D web con shading custom e WebGL ad alte performance.",
    image: p3,
    stack: ["Three.js", "GLSL", "Vite"],
    github: "https://github.com",
  },
  {
    title: "Inferno SaaS",
    description: "Landing + dashboard per piattaforma SaaS, design system completo.",
    image: p4,
    stack: ["Next.js", "Postgres", "tRPC"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Selected Work</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Featured <span className="text-gradient">projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative glass rounded-2xl overflow-hidden shadow-card-premium hover:shadow-glow-strong transition-smooth"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
              </div>

              <div className="p-7">
                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gradient transition-smooth">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-5">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border hover:border-primary hover:shadow-glow transition-smooth text-sm"
                  >
                    <FiGithub /> GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-red text-primary-foreground hover:scale-105 transition-smooth text-sm shadow-glow"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
