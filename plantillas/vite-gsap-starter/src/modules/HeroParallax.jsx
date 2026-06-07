import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * HeroParallax — hero a pantalla completa con capas en parallax al hacer scroll.
 *
 * Props:
 *   title    {string}  titular grande
 *   subtitle {string}  subtítulo
 *   layers   {Array<{color?:string, image?:string, depth:number}>}
 *            capas de fondo. `depth` 0 = fijo, 1 = se mueve a la velocidad del scroll.
 *            Si pasas `image` usa esa URL; si no, un degradado con `color`.
 *
 * Uso:
 *   <HeroParallax title="SOLARA" subtitle="Specialty Coffee"
 *     layers={[{depth:0.1}, {image:'/hero.webp', depth:0.45}]} />
 */
export default function HeroParallax({ title, subtitle, layers = [] }) {
  const root = useRef(null);

  useGSAP(
    () => {
      // Cada capa se desplaza en Y proporcional a su `depth` mientras el hero sale de pantalla.
      gsap.utils.toArray(".hp-layer").forEach((el) => {
        const depth = parseFloat(el.dataset.depth || "0");
        gsap.to(el, {
          yPercent: depth * 40,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // El contenido (título) entra y se desvanece al salir.
      gsap.from(".hp-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.1,
      });
      gsap.to(".hp-content", {
        opacity: 0,
        y: -60,
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
      {layers.map((l, i) => (
        <div
          key={i}
          className="hp-layer"
          data-depth={l.depth}
          style={
            l.image
              ? { backgroundImage: `url(${l.image})` }
              : {
                  background:
                    l.color ||
                    "radial-gradient(120% 80% at 50% 0%, var(--c-bg-alt), var(--c-bg))",
                }
          }
        />
      ))}
      <div className="hp-overlay" />
      <div className="hp-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <span className="hp-scroll">scroll ↓</span>
      </div>
    </section>
  );
}
