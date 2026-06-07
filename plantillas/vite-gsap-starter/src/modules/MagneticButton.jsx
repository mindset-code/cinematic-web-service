import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * MagneticButton — botón que sigue magnéticamente al cursor (micro-interacción).
 * Demuestra: contextSafe de useGSAP para handlers de puntero con cleanup correcto.
 *
 * Props: children, href
 */
export default function MagneticButton({ children, href = "#" }) {
  const ref = useRef(null);

  useGSAP(
    (_ctx, contextSafe) => {
      const el = ref.current;
      const move = contextSafe((e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        gsap.to(el, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: "power3.out" });
      });
      const reset = contextSafe(() => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
      });
      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", reset);
      return () => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", reset);
      };
    },
    { scope: ref }
  );

  return (
    <a className="btn btn--magnetic" href={href} ref={ref}>
      {children}
    </a>
  );
}
