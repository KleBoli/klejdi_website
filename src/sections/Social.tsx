import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

const socials = [
  { icon: FiGithub, href: "https://github.com/KleBoli", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/klejdi-tahiri-ab69bb291/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:kleiditahiri@gmail.com", label: "Email" },
];

export function Social() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-primary mb-8"
        >
          Let's connect
        </motion.p>
        <div className="flex justify-center gap-5 md:gap-7">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.1 }}
              className="group relative w-14 h-14 md:w-16 md:h-16 rounded-full glass border border-border flex items-center justify-center text-xl md:text-2xl text-foreground hover:border-primary hover:shadow-glow-strong hover:text-primary transition-smooth"
            >
              <s.icon />
              <span className="absolute -bottom-8 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth">
                {s.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
