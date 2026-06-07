import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * SvgDraw — dibuja trazos SVG al entrar en viewport (strokeDashoffset, sin plugin de pago).
 * Demuestra: GSAP sobre SVG, animación de path "handwriting".
 *
 * Props: paths {string[]} lista de atributos `d`; height {number}; stroke {string}
 */
export default function SvgDraw({ paths = [], height = 160, stroke = "var(--c-accent)" }) {
  const root = useRef(null);

  useGSAP(
    () => {
      const els = gsap.utils.toArray("path", root.current);
      els.forEach((p) => {
        const len = p.getTotalLength();
        gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(p, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: { trigger: root.current, start: "top 80%" },
        });
      });
    },
    { scope: root }
  );

  return (
    <div className="svgdraw" ref={root}>
      <svg viewBox="0 0 600 200" height={height} fill="none">
        {paths.map((d, i) => (
          <path key={i} d={d} stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        ))}
      </svg>
    </div>
  );
}
