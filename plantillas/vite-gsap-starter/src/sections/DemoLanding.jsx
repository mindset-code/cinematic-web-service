import HeroParallax from "../modules/HeroParallax.jsx";
import ScrollReveal from "../modules/ScrollReveal.jsx";
import AccordionHover from "../modules/AccordionHover.jsx";
import Scene3D from "../modules/Scene3D.jsx";
import CountUp from "../modules/CountUp.jsx";
import SvgDraw from "../modules/SvgDraw.jsx";
import HorizontalScroll from "../modules/HorizontalScroll.jsx";
import MagneticButton from "../modules/MagneticButton.jsx";
import { brand } from "../brand.js";

const menu = [
  { title: "Origen", caption: "Granos de finca única, tueste claro que respeta la acidez del terroir.", image: "/img/origen.jpg" },
  { title: "Espresso", caption: "Extracción de 28 s, crema densa color avellana, cuerpo redondo.", image: "/img/espresso.jpg" },
  { title: "Filtrado", caption: "V60 y Chemex. Notas florales y cítricas en taza limpia.", image: "/img/filtrado.jpg" },
  { title: "Cold Brew", caption: "18 horas en frío. Dulzor natural, sin amargor, baja acidez.", image: "/img/coldbrew.jpg" },
];

const proceso = [
  { title: "Selección", text: "Catamos micro-lotes de productores que respetan el grano.", image: "/img/origen.jpg" },
  { title: "Tueste", text: "Pequeñas tandas, perfil ajustado a cada origen.", image: "/img/espresso.jpg" },
  { title: "Método", text: "Espresso, V60, Chemex o cold brew según la taza ideal.", image: "/img/filtrado.jpg" },
  { title: "Servicio", text: "De nuestra barra a tu mesa en menos de 48 h del tueste.", image: "/img/coldbrew.jpg" },
];

// Trazos SVG (firma "SOLARA" estilizada simplificada en curvas)
const sign = [
  "M40 140 C 60 40, 100 40, 110 140 M70 110 L 100 110",
  "M150 140 L 150 60 C 150 50, 210 50, 200 95 C 195 120, 150 105, 150 105 L 210 145",
  "M250 145 L 270 60 L 290 145 M258 115 L 282 115",
  "M330 60 L 330 145 L 390 145",
  "M430 140 C 450 40, 490 40, 500 140 M460 110 L 490 110",
];

const stack = [
  "React 18", "Vite 6", "GSAP 3", "ScrollTrigger", "React Three Fiber",
  "three.js", "drei", "WebGL", "CSS animations", "Firebase Hosting",
];

export default function DemoLanding() {
  return (
    <main>
      {/* 1 · Hero parallax con imagen real */}
      <HeroParallax
        title={brand.name}
        subtitle={brand.tagline}
        image="/img/hero.jpg"
      />

      {/* 2 · Scroll reveal */}
      <section className="band">
        <ScrollReveal>
          <p className="eyebrow">Nuestra historia · scroll reveal</p>
          <h2>Café como experiencia, no como rutina</h2>
          <p className="lead">
            Cada taza nace de una obsesión por el origen: seleccionamos micro-lotes,
            tostamos en pequeñas tandas y servimos con método. Una experiencia
            cinematográfica para el paladar.
          </p>
        </ScrollReveal>
      </section>

      {/* 3 · Escena 3D (React Three Fiber) */}
      <section className="band band--3d">
        <div className="band--3d-grid">
          <ScrollReveal>
            <p className="eyebrow">En 3D · React Three Fiber</p>
            <h2>Textura viva, renderizada en tiempo real</h2>
            <p className="lead">
              Un material distorsionado que flota y reacciona a la luz — WebGL puro,
              sin vídeo. Arrastra para girarlo.
            </p>
          </ScrollReveal>
          <Scene3D color={brand.colors.primary} />
        </div>
      </section>

      {/* 4 · Galería accordion hover */}
      <section className="band band--alt">
        <ScrollReveal className="band-head">
          <p className="eyebrow">Carta · accordion hover</p>
          <h2>Nuestras preparaciones</h2>
        </ScrollReveal>
        <AccordionHover items={menu} />
      </section>

      {/* 5 · Scroll horizontal pinned */}
      <section className="band-head band-head--center">
        <p className="eyebrow">Proceso · scroll horizontal</p>
        <h2>Del grano a tu taza</h2>
      </section>
      <HorizontalScroll panels={proceso} />

      {/* 6 · Contadores animados */}
      <section className="band band--cta">
        <div className="countup-row">
          <CountUp value={12} label="orígenes de finca única" />
          <CountUp value={48} suffix="h" label="del tueste a tu taza" />
          <CountUp value={1987} label="tostando desde" />
        </div>
      </section>

      {/* 7 · Firma SVG dibujándose */}
      <section className="band band--center">
        <p className="eyebrow">Marca · SVG draw</p>
        <SvgDraw paths={sign} />
      </section>

      {/* 8 · CTA con botón magnético */}
      <section className="band band--cta">
        <ScrollReveal>
          <h2>Visítanos</h2>
          <p className="lead lead--center">
            Carrer Exemple 123 · Barcelona · Abierto 8:00 – 20:00
          </p>
          <MagneticButton>Reservar mesa</MagneticButton>
        </ScrollReveal>
      </section>

      {/* 9 · Stack técnico (modo portafolio) */}
      <section className="band band--stack">
        <ScrollReveal className="band-head band-head--center">
          <p className="eyebrow">Cómo está hecho</p>
          <h2>Stack técnico de esta demo</h2>
          <p className="lead lead--center">
            Cada sección de arriba demuestra una técnica distinta. Todo construido a mano,
            desplegado en Firebase Hosting, coste de herramientas €0.
          </p>
        </ScrollReveal>
        <ScrollReveal className="badges">
          {stack.map((s) => (
            <span className="badge" key={s}>{s}</span>
          ))}
        </ScrollReveal>
      </section>

      <footer className="foot">
        <span>{brand.name}</span>
        <span>Cinematic Web Service · React + GSAP + R3F · Mindset & Code</span>
      </footer>
    </main>
  );
}
