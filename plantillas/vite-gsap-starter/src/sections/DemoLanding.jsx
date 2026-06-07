import HeroParallax from "../modules/HeroParallax.jsx";
import ScrollReveal from "../modules/ScrollReveal.jsx";
import AccordionHover from "../modules/AccordionHover.jsx";
import { brand } from "../brand.js";

/**
 * DemoLanding — landing de ejemplo que demuestra los 3 módulos cinematográficos.
 * Marca de muestra: SOLARA (specialty coffee). Todo el color/tipografía sale de brand.js.
 *
 * Para un cliente real, esta sección se reescribe con SU contenido; los módulos
 * (HeroParallax / ScrollReveal / AccordionHover) se reutilizan tal cual.
 */
const menu = [
  { title: "Origen", caption: "Granos de finca única, tostado claro que respeta la acidez del terroir.", color: "#2a1d16" },
  { title: "Espresso", caption: "Extracción de 28 s, crema densa color avellana, cuerpo redondo.", color: "#3a2519" },
  { title: "Filtrado", caption: "V60 y Chemex. Notas florales y cítricas en taza limpia.", color: "#241813" },
  { title: "Cold Brew", caption: "18 horas en frío. Dulzor natural, sin amargor, baja acidez.", color: "#1d130d" },
];

export default function DemoLanding() {
  return (
    <main>
      <HeroParallax
        title={brand.name}
        subtitle={brand.tagline}
        layers={[{ depth: 0.12 }, { depth: 0.45 }]}
      />

      <section className="band">
        <ScrollReveal>
          <p className="eyebrow">Nuestra historia</p>
          <h2>Café como experiencia, no como rutina</h2>
          <p className="lead">
            Cada taza nace de una obsesión por el origen: seleccionamos micro-lotes,
            tostamos en pequeñas tandas y servimos con método. El resultado es una
            experiencia cinematográfica para el paladar.
          </p>
        </ScrollReveal>
      </section>

      <section className="band band--alt">
        <ScrollReveal className="band-head">
          <p className="eyebrow">Carta</p>
          <h2>Nuestras preparaciones</h2>
        </ScrollReveal>
        <AccordionHover items={menu} />
      </section>

      <section className="band">
        <ScrollReveal stagger={0.18}>
          <div className="stat"><strong>12</strong><span>orígenes de finca única</span></div>
          <div className="stat"><strong>48h</strong><span>del tueste a tu taza</span></div>
          <div className="stat"><strong>1987</strong><span>tostando desde</span></div>
        </ScrollReveal>
      </section>

      <section className="band band--cta">
        <ScrollReveal>
          <h2>Visítanos</h2>
          <p className="lead">Carrer Exemple 123 · Barcelona · Abierto 8:00 – 20:00</p>
          <a className="btn" href="#">Reservar mesa</a>
        </ScrollReveal>
      </section>

      <footer className="foot">
        <span>{brand.name}</span>
        <span>Demo · Cinematic Web Service · GSAP + React</span>
      </footer>
    </main>
  );
}
