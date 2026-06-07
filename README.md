# Cinematic Web Service — Landings premium animadas

> **Servicio / Producto** · Vite · React · GSAP · React Three Fiber · Firebase Hosting
> **Status:** MVP · Demo desplegada · 2026-06

[![Demo](https://img.shields.io/badge/Demo-cinematic--demo.web.app-60a5fa?style=for-the-badge&logo=firebase&logoColor=white)](https://cinematic-demo.web.app)
[![Stack](https://img.shields.io/badge/Stack-React%20%2B%20GSAP-88ce02?style=for-the-badge&logo=greensock&logoColor=white)](.)
[![Domain](https://img.shields.io/badge/Domain-Web%20Animada-c8743c?style=for-the-badge)](.)

---

## Project Status

| Phase | Status |
|---|---|
| Playbook del servicio (pipeline 5 fases) | Done |
| Starter Vite + GSAP | Done |
| Módulos cinematográficos | 3/8 (v1 vendible) |
| Demo desplegada | Done — [cinematic-demo.web.app](https://cinematic-demo.web.app) |
| Validación de precios | Pendiente |

**Current phase:** MVP funcional con demo live; ampliando el pack de módulos.

---

## Project Overview

Pipeline asistido por IA (Claude Code) que toma la web de un cliente y la transforma
en una **landing premium con animaciones cinematográficas** (scroll parallax, reveals,
galerías interactivas) en 1-2 días.

A diferencia de soluciones que generan el efecto con vídeo IA (caro y pesado), aquí el
movimiento se construye con **GSAP + React Three Fiber** en código: se ve igual o mejor,
pesa una fracción (94 KB gzip) y no tiene coste de herramientas recurrente.

---

## Key Features

- **5 fases:** Brand Analysis → Scene Generation → Website Build → Polish → Deploy
- **Pack de módulos GSAP reutilizables:** HeroParallax · ScrollReveal · AccordionHover (+roadmap)
- **Sistema de marca inyectable:** un `brand-card.json` re-tematiza toda la web sin tocar módulos
- **Stack de coste cero:** Gemini (free tier) + Pollinations + Firebase Hosting (Spark)
- **Cleanup GSAP correcto:** `useGSAP()` con scope → sin fugas de ScrollTrigger

---

## Tech Stack

| Layer | Technology |
|---|---|
| Build | Vite 6 |
| UI | React 18 |
| Animación | GSAP 3 + ScrollTrigger, React Three Fiber (3D opcional) |
| Imágenes | Gemini API (free), Pollinations |
| Deployment | Firebase Hosting (Spark) |

---

## Repository Structure

```
cinematic-web-service/
├── PLAYBOOK.md                  # pipeline, oferta, checklist operativo
├── modulos-gsap/README.md       # roadmap del pack de módulos
└── plantillas/
    └── vite-gsap-starter/       # starter + demo desplegable
        ├── src/modules/         # HeroParallax, ScrollReveal, AccordionHover
        ├── src/sections/        # DemoLanding (ejemplo SOLARA)
        └── src/brand.js         # design tokens del cliente
```

---

## How to Run

```bash
git clone https://github.com/mindset-code/cinematic-web-service.git
cd cinematic-web-service/plantillas/vite-gsap-starter
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

---

## Links

- **Demo live:** [cinematic-demo.web.app](https://cinematic-demo.web.app)
- **Portfolio:** [proyectos-personales.web.app](https://proyectos-personales.web.app)
- **LinkedIn:** [Mindset & Code](https://www.linkedin.com/company/mindset-code)
- **Email:** contacto@mindset-code.com

---

*Built by [Mindset & Code](https://github.com/mindset-code) · Data & BI Analyst · MBA · ISC2 CC*
