import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * HorizontalScroll — fija la sección y desplaza paneles en horizontal con el scroll vertical.
 * Demuestra: ScrollTrigger pin + scrub + mapeo scroll vertical→horizontal (técnica avanzada).
 *
 * Props: panels {Array<{title:string, text:string, image?:string, color?:string}>}
 */
export default function HorizontalScroll({ panels = [] }) {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      const t = track.current;
      const distance = t.scrollWidth - window.innerWidth;
      if (distance <= 0) return;
      gsap.to(t, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + distance,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className="hscroll" ref={root}>
      <div className="hscroll-track" ref={track}>
        {panels.map((p, i) => (
          <article
            key={i}
            className="hscroll-panel"
            style={
              p.image ? { backgroundImage: `url(${p.image})` } : { background: p.color }
            }
          >
            <div className="hscroll-shade" />
            <div className="hscroll-body">
              <span className="hscroll-idx">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
