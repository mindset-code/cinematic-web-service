# Pipeline / Pipeline

**🇪🇸 [Español](#-español) · 🇬🇧 [English](#-english)**

## 🇪🇸 Español

### 1 · Brand Analysis
Extrae la identidad de la web actual del cliente (con autorización): nombre, paleta de colores
(hex), tipografía, copy, logo, dirección. Herramientas: `agent-browser` + `curl`. Salida: `brand-card.json`.

### 2 · Scene Generation
Genera imágenes hero / texturas desde la `brand-card`. Herramientas €0: **Pexels API** (fotos
licencia comercial) y **Gemini API** (free tier). Salida: assets optimizados (webp).

### 3 · Website Build
Ensambla la landing con los módulos reutilizables. Stack: Vite + React + GSAP (+ R3F opcional).
Inyecta `brand-card.json` como design tokens. Salida: sitio en `dist/`.

### 4 · Polish & Refine
El cliente pide ajustes en lenguaje natural; los módulos están documentados para que el agente los entienda.

### 5 · Deploy
`npm run build && firebase deploy` → URL live como demo para el cliente.

---

## 🇬🇧 English

### 1 · Brand Analysis
Extracts the brand identity from the client's current site (with authorization): name, color
palette (hex), typography, copy, logo, address. Tools: `agent-browser` + `curl`. Output: `brand-card.json`.

### 2 · Scene Generation
Generates hero images / textures from the `brand-card`. Zero-cost tools: **Pexels API**
(commercial-license photos) and **Gemini API** (free tier). Output: optimized assets (webp).

### 3 · Website Build
Assembles the landing with reusable modules. Stack: Vite + React + GSAP (+ optional R3F).
Injects `brand-card.json` as design tokens. Output: site in `dist/`.

### 4 · Polish & Refine
The client requests tweaks in natural language; modules are documented so the agent understands them.

### 5 · Deploy
`npm run build && firebase deploy` → live URL as a demo for the client.
