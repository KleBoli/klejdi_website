import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { CV } from "../sections/CV";
import { Projects } from "../sections/Projects";
import { Studies } from "../sections/Studies";
import { Social } from "../sections/Social";
import { Contact } from "../sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Klejdi Tahiri's Website" },
      {
        name: "description",
        content:
          "Portfolio cinematico di Klejdi Tahiri: progetti, CV, studi e contatti. Design futuristico in burgundy e nero.",
      },
      { property: "og:title", content: "Klejdi Tahiri — Portfolio" },
      {
        property: "og:description",
        content: "Esperienze digitali immersive con design cinematico.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <CV />
        <Projects />
        <Studies />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
