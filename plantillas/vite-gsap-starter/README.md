# Vite + GSAP Cinematic Starter

Base del **Cinematic Web Service**. Vite + React + GSAP con 3 módulos cinematográficos
reutilizables y una landing demo (marca de muestra: SOLARA, specialty coffee).

## Arrancar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Estructura

```
src/
├── brand.js              # design tokens del cliente (← brand-card.json)
├── App.jsx               # inyecta la marca + monta la landing
├── styles.css            # estilos cinematográficos (usa CSS vars de marca)
├── modules/              # ★ pack reutilizable — copiar a cada proyecto cliente
│   ├── HeroParallax.jsx     hero full-screen con capas en parallax al scroll
│   ├── ScrollReveal.jsx     revela hijos con fade+slide al entrar en viewport
│   └── AccordionHover.jsx   galería de paneles que expanden al hover (accesible)
└── sections/
    └── DemoLanding.jsx   # contenido de ejemplo (se reescribe por cliente)
```

## Re-tematizar para un cliente

1. Sustituye el objeto `brand` en `src/brand.js` por el `brand-card.json` del cliente.
2. Reescribe `src/sections/DemoLanding.jsx` con su contenido real.
3. Los módulos de `src/modules/` se reutilizan sin tocar.

## Patrón GSAP

Todos los módulos usan `useGSAP()` de `@gsap/react` con `scope` → cleanup automático
de tweens y ScrollTriggers al desmontar. Sin fugas, sin warnings de React.

## Deploy

```bash
# Firebase Hosting (Spark, €0) — public: "dist", rewrite SPA a /index.html
npm run build && firebase deploy --only hosting --token "$FIREBASE_TOKEN"
```
