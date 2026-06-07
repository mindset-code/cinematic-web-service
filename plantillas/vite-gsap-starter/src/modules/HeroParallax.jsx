import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * HeroParallax — hero full-screen con imagen de fondo en parallax al hacer scroll.
 * Demuestra: ScrollTrigger scrub, parallax multicapa, entrada/salida del contenido.
 *
 * Props:
 *   title    {string}
 *   subtitle {string}
 *   image    {string}  URL de la imagen de fondo (recomendado)
 *   color    {string}  fallback si no hay imagen (degradado)
 */
export default function HeroParallax({ title, subtitle, image, color }) {
  const root = useRef(null);

  useGSAP(
    () => {
      // La imagen de fondo se desplaza más lento que el scroll (parallax).
      gsap.to(".hp-bg", {
        yPercent: 28,
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      // Entrada del contenido.
      gsap.from(".hp-content > *", {
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.16,
        delay: 0.15,
      });
      // El contenido se desvanece al salir.
      gsap.to(".hp-content", {
        opacity: 0,
        y: -70,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className="hp" ref={root}>
      <div
        className="hp-bg"
        style={
          image
            ? { backgroundImage: `url(${image})` }
            : { background: color || "radial-gradient(120% 90% at 50% 0%, var(--c-bg-alt), var(--c-bg))" }
        }
      />
      <div className="hp-overlay" />
      <div className="hp-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <span className="hp-scroll">scroll ↓</span>
      </div>
    </section>
  );
}
