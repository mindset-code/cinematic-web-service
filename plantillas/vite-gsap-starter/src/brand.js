/**
 * brand.js — Design tokens del cliente.
 *
 * En el pipeline real, la Fase 1 (Brand Analysis) genera un `brand-card.json`
 * con la identidad extraída de la web del cliente. Aquí se mapea a tokens
 * y se inyecta como CSS custom properties en :root.
 *
 * Para un cliente nuevo: reemplaza este objeto por el contenido de su
 * brand-card.json (mismas claves) y todo el sitio se re-tematiza solo.
 */
export const brand = {
  name: "SOLARA",
  tagline: "Specialty Coffee Studio",
  colors: {
    primary: "#c8743c",   // acento cálido
    secondary: "#2a1d16",
    accent: "#e8b04b",
    bg: "#120c08",
    bgAlt: "#1d130d",
    text: "#f3e9df",
    textMuted: "#b29a86",
  },
  fonts: {
    heading: "'Georgia', 'Times New Roman', serif",
    body: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
};

/** Inyecta los tokens de marca como variables CSS en :root. */
export function applyBrand(b = brand) {
  const r = document.documentElement;
  r.style.setProperty("--c-primary", b.colors.primary);
  r.style.setProperty("--c-secondary", b.colors.secondary);
  r.style.setProperty("--c-accent", b.colors.accent);
  r.style.setProperty("--c-bg", b.colors.bg);
  r.style.setProperty("--c-bg-alt", b.colors.bgAlt);
  r.style.setProperty("--c-text", b.colors.text);
  r.style.setProperty("--c-text-muted", b.colors.textMuted);
  r.style.setProperty("--f-heading", b.fonts.heading);
  r.style.setProperty("--f-body", b.fonts.body);
}
