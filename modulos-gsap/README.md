# Pack de módulos cinematográficos GSAP

Activo reutilizable del Cinematic Web Service. Los módulos viven implementados en
`../plantillas/vite-gsap-starter/src/modules/` y se copian a cada proyecto cliente.

## Estado del pack

| Módulo | Estado | Efecto |
|---|---|---|
| `HeroParallax` | ✅ hecho | Hero full-screen, capas en parallax al scroll, contenido que entra/sale |
| `ScrollReveal` | ✅ hecho | Revela hijos con fade+slide al entrar en viewport (stagger configurable) |
| `AccordionHover` | ✅ hecho | Galería de paneles que expanden al hover/focus (accesible por teclado) |
| `SvgDraw` | ⬜ pendiente | Trazado de logo/líneas dibujándose (DrawSVGPlugin / strokeDashoffset) |
| `PinnedSection` | ⬜ pendiente | Sección fijada mientras animan elementos internos |
| `ImageSequence` | ⬜ pendiente | Secuencia de frames tipo vídeo en canvas (scrub) |
| `CountUp` | ⬜ pendiente | Métricas que cuentan hacia arriba al entrar |
| `Product3D` | ⬜ opcional | Objeto GLB rotando (React Three Fiber — tier Cinematic 3D) |

**v1 lista para vender: 3/8 módulos.** Suficiente para una landing premium completa
(hero + secciones reveladas + galería interactiva). El resto se añade bajo demanda.

## Convención de un módulo

- Componente React autocontenido en `src/modules/<Nombre>.jsx`.
- `useGSAP()` de `@gsap/react` con `scope` → cleanup automático.
- Props tipadas vía JSDoc + ejemplo de uso en el encabezado del archivo.
- Sin estado de marca dentro: el color/tipografía viene de las CSS vars de `brand.js`.

## Verificado

Build de producción OK (`npm run build`, 94 KB gzip). Demo validada visualmente:
hero SOLARA + galería accordion funcionando (capturas en sesión 2026-06-07).
