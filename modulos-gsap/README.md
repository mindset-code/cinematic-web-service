# Pack de módulos cinematográficos

Activo reutilizable del Cinematic Web Service. Implementados en
`../plantillas/vite-gsap-starter/src/modules/`. Cada uno demuestra una técnica distinta.

## Estado del pack — 8/8 ✅

| Módulo | Técnica que demuestra |
|---|---|
| `HeroParallax` | ScrollTrigger scrub, imagen de fondo en parallax, entrada/salida |
| `ScrollReveal` | Reveal fade+slide al entrar en viewport (stagger) |
| `AccordionHover` | Galería que expande al hover/focus (accesible), contextSafe |
| `Scene3D` | **React Three Fiber** + drei + three.js + WebGL (esfera distort) |
| `CountUp` | Interpolación numérica animada con ScrollTrigger |
| `SvgDraw` | Trazado de paths SVG (strokeDashoffset, sin plugin de pago) |
| `HorizontalScroll` | Pin + scroll vertical→horizontal (técnica avanzada) |
| `MagneticButton` | Micro-interacción de puntero con contextSafe + cleanup |

Demo viva que los exhibe todos: **https://cinematic-demo.web.app**

## Convención de un módulo
- Componente React autocontenido, `useGSAP()` con scope (cleanup automático).
- Props vía JSDoc + ejemplo de uso en cabecera.
- Sin marca hardcodeada: color/tipografía desde las CSS vars de `brand.js`.

## Notas técnicas
- **3D robusto sin GPU:** `Scene3D` usa `emissive` + `preserveDrawingBuffer` para
  renderizar bien también con SwiftShader (usuarios sin GPU) y ser capturable en previews.
- **Peso:** three.js añade ~340 KB gzip. Para una landing sin 3D, omitir Scene3D baja a ~95 KB.
