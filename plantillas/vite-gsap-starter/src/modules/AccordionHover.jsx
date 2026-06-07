import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * AccordionHover — galería horizontal de paneles que se expanden al hover
 * (el "accordion slider" del pipeline). El panel activo crece y revela su caption.
 *
 * Props:
 *   items {Array<{image?:string, color?:string, title:string, caption?:string}>}
 *
 * Uso:
 *   <AccordionHover items={[{title:'Espresso', caption:'...', color:'#3a2a1f'}, ...]} />
 *
 * Funciona con CSS flex-grow (transición suave) + GSAP para revelar el caption
 * de forma context-safe. Accesible por teclado (focus expande igual que hover).
 */
export default function AccordionHover({ items = [] }) {
  const root = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const panels = gsap.utils.toArray(".ah-panel", root.current);

      const expand = contextSafe((panel) => {
        panels.forEach((p) => p.classList.remove("is-active"));
        panel.classList.add("is-active");
        const cap = panel.querySelector(".ah-caption");
        if (cap) gsap.to(cap, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
        panels
          .filter((p) => p !== panel)
          .forEach((p) => {
            const c = p.querySelector(".ah-caption");
            if (c) gsap.to(c, { opacity: 0, y: 12, duration: 0.3, ease: "power2.out" });
          });
      });

      const handlers = [];
      panels.forEach((panel) => {
        const on = () => expand(panel);
        panel.addEventListener("mouseenter", on);
        panel.addEventListener("focus", on);
        handlers.push([panel, on]);
      });
      // Primer panel activo por defecto.
      if (panels[0]) expand(panels[0]);

      return () => {
        handlers.forEach(([panel, on]) => {
          panel.removeEventListener("mouseenter", on);
          panel.removeEventListener("focus", on);
        });
      };
    },
    { scope: root }
  );

  return (
    <div className="ah" ref={root}>
      {items.map((it, i) => (
        <article
          key={i}
          className="ah-panel"
          tabIndex={0}
          style={
            it.image
              ? { backgroundImage: `url(${it.image})` }
              : { background: it.color || "var(--c-bg-alt)" }
          }
        >
          <div className="ah-shade" />
          <div className="ah-body">
            <h3>{it.title}</h3>
            {it.caption && <p className="ah-caption">{it.caption}</p>}
          </div>
        </article>
      ))}
    </div>
  );
}
