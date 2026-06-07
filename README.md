# Cinematic Web Service — Landings premium animadas / Premium animated landings

> **Servicio / Service** · Vite · React · GSAP · React Three Fiber · Firebase Hosting
> **Status:** MVP · Demo desplegada / deployed · 2026-06

[![Demo](https://img.shields.io/badge/Demo-cinematic--demo.web.app-60a5fa?style=for-the-badge&logo=firebase&logoColor=white)](https://cinematic-demo.web.app)
[![Stack](https://img.shields.io/badge/Stack-React%20%2B%20GSAP%20%2B%20R3F-88ce02?style=for-the-badge&logo=greensock&logoColor=white)](.)
[![Domain](https://img.shields.io/badge/Domain-Web%20Animada-c8743c?style=for-the-badge)](.)

**🇪🇸 [Español](#-español) · 🇬🇧 [English](#-english)**

---

## 🇪🇸 Español

Pipeline asistido por IA (Claude Code) que toma la web de un cliente y la transforma en una
**landing premium con animaciones cinematográficas** (scroll parallax, reveals, galerías
interactivas, 3D en tiempo real) en 1-2 días.

A diferencia de soluciones que generan el efecto con vídeo IA (caro y pesado), aquí el
movimiento se construye con **GSAP + React Three Fiber** en código: se ve igual o mejor,
pesa una fracción y no tiene coste de herramientas recurrente.

**Demo live:** [cinematic-demo.web.app](https://cinematic-demo.web.app)

### Estado del proyecto

| Fase | Estado |
|---|---|
| Playbook del servicio (pipeline 5 fases) | Hecho |
| Starter Vite + GSAP | Hecho |
| Módulos cinematográficos | 8/8 |
| Demo desplegada | Hecho |
| Validación de precios | Hecho |

### Características clave

- **5 fases:** Brand Analysis → Scene Generation → Website Build → Polish → Deploy
- **8 módulos GSAP reutilizables:** HeroParallax · ScrollReveal · AccordionHover · Scene3D (R3F) · CountUp · SvgDraw · HorizontalScroll · MagneticButton
- **Sistema de marca inyectable:** un `brand-card.json` re-tematiza toda la web sin tocar módulos
- **Stack de coste cero:** Pexels/Gemini (free) + Firebase Hosting (Spark)
- **Cleanup GSAP correcto:** `useGSAP()` con scope → sin fugas de ScrollTrigger

### Stack técnico

| Capa | Tecnología |
|---|---|
| Build | Vite 6 |
| UI | React 18 |
| Animación | GSAP 3 + ScrollTrigger, React Three Fiber, three.js, drei |
| Imágenes | Pexels API, Gemini API (free) |
| Deployment | Firebase Hosting (Spark) |

### Cómo ejecutar

```bash
git clone https://github.com/mindset-code/cinematic-web-service.git
cd cinematic-web-service/plantillas/vite-gsap-starter
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

### Estructura

```
cinematic-web-service/
├── PLAYBOOK.md                  # pipeline, oferta, precios, checklist
├── modulos-gsap/README.md       # los 8 módulos y qué técnica demuestra cada uno
└── plantillas/
    └── vite-gsap-starter/       # starter + demo desplegable
        ├── src/modules/         # los 8 módulos cinematográficos
        ├── src/sections/        # DemoLanding (showcase SOLARA)
        └── src/brand.js         # design tokens del cliente
```

---

## 🇬🇧 English

AI-assisted pipeline (Claude Code) that takes a client's website and turns it into a
**premium landing page with cinematic animations** (parallax scroll, reveals, interactive
galleries, real-time 3D) in 1-2 days.

Unlike solutions that produce the effect with AI video (expensive and heavy), here the
motion is built with **GSAP + React Three Fiber** in code: it looks as good or better,
weighs a fraction, and has zero recurring tooling cost.

**Live demo:** [cinematic-demo.web.app](https://cinematic-demo.web.app)

### Project status

| Phase | Status |
|---|---|
| Service playbook (5-phase pipeline) | Done |
| Vite + GSAP starter | Done |
| Cinematic modules | 8/8 |
| Demo deployed | Done |
| Pricing validated | Done |

### Key features

- **5 phases:** Brand Analysis → Scene Generation → Website Build → Polish → Deploy
- **8 reusable GSAP modules:** HeroParallax · ScrollReveal · AccordionHover · Scene3D (R3F) · CountUp · SvgDraw · HorizontalScroll · MagneticButton
- **Injectable brand system:** a single `brand-card.json` re-themes the whole site without touching modules
- **Zero-cost stack:** Pexels/Gemini (free) + Firebase Hosting (Spark)
- **Correct GSAP cleanup:** `useGSAP()` with scope → no ScrollTrigger leaks

### Tech stack

| Layer | Technology |
|---|---|
| Build | Vite 6 |
| UI | React 18 |
| Animation | GSAP 3 + ScrollTrigger, React Three Fiber, three.js, drei |
| Images | Pexels API, Gemini API (free) |
| Deployment | Firebase Hosting (Spark) |

### How to run

```bash
git clone https://github.com/mindset-code/cinematic-web-service.git
cd cinematic-web-service/plantillas/vite-gsap-starter
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

---

## Links

- **Demo:** [cinematic-demo.web.app](https://cinematic-demo.web.app)
- **Wiki (ES/EN):** [wiki/Home.md](wiki/Home.md)
- **Portfolio:** [proyectos-personales.web.app](https://proyectos-personales.web.app)
- **LinkedIn:** [Mindset & Code](https://www.linkedin.com/company/mindset-code)
- **Email:** contacto@mindset-code.com

---

*Built by [Mindset & Code](https://github.com/mindset-code) · Data & BI Analyst · MBA · ISC2 CC*
