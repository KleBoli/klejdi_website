import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[150px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Get in touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Let's build <span className="text-gradient">together</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onSubmit={onSubmit}
          className="glass rounded-2xl p-8 md:p-10 shadow-card-premium space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <FormInput name="name" label="Nome" type="text" required />
            <FormInput name="email" label="Email" type="email" required />
          </div>
          <FormInput name="subject" label="Oggetto" type="text" />
          <div className="relative group">
            <textarea
              required
              name="message"
              rows={5}
              placeholder=" "
              className="peer w-full bg-input/50 border border-border rounded-xl px-4 pt-6 pb-3 text-foreground focus:border-primary focus:shadow-glow focus:outline-none transition-smooth resize-none"
            />
            <label className="absolute left-4 top-2 text-xs text-muted-foreground pointer-events-none transition-smooth peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
              Messaggio
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-red text-primary-foreground font-medium shadow-glow hover:shadow-glow-strong hover:scale-[1.02] transition-smooth"
          >
            <FiSend /> {sent ? "Inviato ✓" : "Invia messaggio"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function FormInput({
  name,
  label,
  type,
  required,
}: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div className="relative group">
      <input
        required={required}
        type={type}
        name={name}
        placeholder=" "
        className="peer w-full bg-input/50 border border-border rounded-xl px-4 pt-6 pb-3 text-foreground focus:border-primary focus:shadow-glow focus:outline-none transition-smooth"
      />
      <label className="absolute left-4 top-2 text-xs text-muted-foreground pointer-events-none transition-smooth peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </label>
    </div>
  );
}
