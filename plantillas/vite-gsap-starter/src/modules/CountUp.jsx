import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * CountUp — cuenta un número de 0 al valor objetivo cuando entra en viewport.
 * Demuestra: GSAP + ScrollTrigger + interpolación numérica.
 *
 * Props: value {number}, suffix {string}, label {string}, duration {number}
 */
export default function CountUp({ value, suffix = "", label = "", duration = 1.8 }) {
  const numRef = useRef(null);
  const root = useRef(null);

  useGSAP(
    () => {
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration,
        ease: "power2.out",
        scrollTrigger: { trigger: root.current, start: "top 85%" },
        onUpdate: () => {
          if (numRef.current)
            numRef.current.textContent = Math.round(obj.n).toLocaleString("es-ES") + suffix;
        },
      });
    },
    { scope: root }
  );

  return (
    <div className="countup" ref={root}>
      <strong ref={numRef}>0{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}
