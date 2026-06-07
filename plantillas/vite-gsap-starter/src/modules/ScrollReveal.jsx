import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * ScrollReveal — revela sus hijos directos con fade + slide cuando entran en viewport.
 *
 * Props:
 *   children            elementos a revelar (cada hijo directo se anima en secuencia)
 *   y        {number}   desplazamiento inicial en px (default 48)
 *   stagger  {number}   separación entre hijos (default 0.12)
 *   start    {string}   posición ScrollTrigger (default "top 80%")
 *   once     {boolean}  si true, no se re-oculta al salir (default true)
 *
 * Uso:
 *   <ScrollReveal><h2>Título</h2><p>Texto</p></ScrollReveal>
 */
export default function ScrollReveal({
  children,
  y = 48,
  stagger = 0.12,
  start = "top 80%",
  once = true,
  className = "",
}) {
  const root = useRef(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(root.current.children);
      if (!targets.length) return;
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: root.current,
          start,
          toggleActions: once
            ? "play none none none"
            : "play none none reverse",
        },
      });
    },
    { scope: root }
  );

  return (
    <div className={`sr ${className}`} ref={root}>
      {children}
    </div>
  );
}
