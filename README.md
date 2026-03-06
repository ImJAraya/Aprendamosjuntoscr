# Aprendamos Juntos CR

Landing de alta conversión para servicios de lecciones privadas bimodales (presencial + virtual), construida con Astro.

## Stack

- Astro 5
- HTML/CSS moderno (mobile-first)
- Configuración central de contenido en `src/data/site.ts`

## Requisitos

- Node.js 18+
- npm 9+

## Desarrollo local

```bash
npm install
ASTRO_TELEMETRY_DISABLED=1 npm run dev -- --host 0.0.0.0 --port 4321
```

Abrir en: `http://localhost:4321/`

## Build de producción

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
npm run preview
```

Salida estática en `dist/`.

## Estructura principal

- `src/pages/index.astro`: landing principal
- `src/layouts/BaseLayout.astro`: metadatos SEO y layout base
- `src/data/site.ts`: datos del negocio, pricing, FAQ y helper de WhatsApp
- `src/styles/global.css`: sistema visual global
- `public/robots.txt`: reglas de rastreo
- `public/sitemap.xml`: sitemap estático
- `netlify.toml`: configuración de build para Netlify

## Contenido editable rápido

Edita `src/data/site.ts` para cambiar:

- Marca, ubicación y WhatsApp
- Perfil académico
- Beneficios, metodología, señales de confianza
- Precios y FAQ
- URL de recursos externos

## Despliegue (Netlify)

Configuración incluida en `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

Canonical base actual: `https://aprendamosjuntoscr.netlify.app`
