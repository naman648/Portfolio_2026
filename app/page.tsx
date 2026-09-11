import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="projects" className="min-h-screen border-t border-white/5 py-28">
        <div className="site-shell">
          <div className="eyebrow">01 — Selected Work</div>
          <h2 className="display-font mt-5 max-w-3xl text-5xl font-medium tracking-[-0.045em] text-white/95 sm:text-7xl">
            Projects across data engineering, machine learning and AI.
          </h2>
          <div className="mt-12 section-divider" />
        </div>
      </section>

      <section id="experience" className="min-h-[70vh] border-t border-white/5 py-28">
        <div className="site-shell">
          <div className="eyebrow">02 — Experience</div>
        </div>
      </section>

      <section id="about" className="min-h-[70vh] border-t border-white/5 py-28">
        <div className="site-shell">
          <div className="eyebrow">03 — About</div>
        </div>
      </section>

      <section id="contact" className="min-h-[70vh] border-t border-white/5 py-28">
        <div className="site-shell">
          <div className="eyebrow">04 — Contact</div>
        </div>
      </section>
    </main>
  );
}
