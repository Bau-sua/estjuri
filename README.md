# ESTJURI — Landing Page para Estudio Jurídico

Template de landing page estática para estudios jurídicos y despachos de abogados. Diseño moderno, minimalista y orientado a la conversión. Listo para personalizar y deployar en minutos.

![Stack](https://img.shields.io/badge/astro-v6.3-FF5D01?logo=astro) ![Tailwind](https://img.shields.io/badge/tailwind-v4.3-06B6D4?logo=tailwindcss) ![TypeScript](https://img.shields.io/badge/typescript-strict-3178C6?logo=typescript) ![Lighthouse](https://img.shields.io/badge/lighthouse-100%2F100-4CAF50)

> **Status: COMPLETED** ✅ — June 2026

## 🎯 Secciones incluidas

| Sección               | Descripción                                        |
| --------------------- | -------------------------------------------------- |
| **Hero**              | Propuesta de valor, estadísticas, CTAs principales |
| **Servicios**         | 4 áreas de práctica con íconos y resumen           |
| **Por qué elegirnos** | 4 pilares diferenciales del estudio                |
| **Cómo trabajamos**   | 3 pasos del proceso legal                          |
| **Equipo**            | Perfiles profesionales con foto y matrícula        |
| **Testimonios**       | Citas de clientes con tipo de caso                 |
| **FAQ**               | Preguntas frecuentes con accordion interactivo     |
| **Contacto**          | Formulario + teléfono, dirección, email, horarios  |

## 🚀 Stack

- **[Astro](https://astro.build)** — Static site generation, 0 JS por defecto
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first con design tokens personalizados
- **TypeScript** — Tipado estricto
- **Playfair Display + Inter** — Fuentes self-hosted vía `@fontsource`
- **Cloudflare Pages** — Hosting gratuito con CDN global

## 📦 Primeros pasos

```bash
# 1. Cloná el template
git clone https://github.com/Bau-sua/estjuri.git mi-estudio
cd mi-estudio

# 2. Instalá dependencias
npm install

# 3. Levantá el servidor de desarrollo
npm run dev
```

Abrí `http://localhost:4321` para ver la landing en vivo.

## ✏️ Personalización

### Datos del estudio

Todos los textos, nombres, teléfonos y direcciones están como placeholders en los componentes dentro de `src/components/sections/`. Editá cada archivo para reflejar tu estudio:

| Archivo                           | Qué cambiar                                        |
| --------------------------------- | -------------------------------------------------- |
| `Hero.astro`                      | Stats, propuesta de valor, CTAs                    |
| `Servicios.astro`                 | Áreas de práctica, íconos, descripciones           |
| `Equipo.astro`                    | Nombres, cargos, especialidades, matrículas, fotos |
| `Testimonios.astro`               | Citas, nombres de clientes, tipos de caso          |
| `FAQ.astro`                       | Preguntas y respuestas                             |
| `Footer.astro` + `Contacto.astro` | Dirección, teléfono, email, horarios               |

### Colores y fuentes

El tema se define en `src/styles/global.css` con la directiva `@theme` de Tailwind v4:

```css
@theme {
  --color-primary: #1e3a5f; /* Azul profundo */
  --color-accent: #c9a84c; /* Dorado sobrio */
  --font-heading: "Playfair Display", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
}
```

Cambiá estos valores para adaptar la identidad visual a tu estudio.

### Fotos del equipo

1. Agregá las fotos en `public/`
2. En `Equipo.astro`, reemplazá `foto: null` por la ruta (ej. `foto: "/equipo/juan.jpg"`)
3. Las iniciales se muestran automáticamente como placeholder si no hay foto

### Favicon

El favicon es un SVG con motivo de columna/pilar jurídico. Para reemplazarlo:

```bash
# Editá public/favicon.svg con tu diseño
# Luego regenerá el .ico multi-resolución
node scripts/generate-favicon.mjs
```

## 🏗️ Build y deploy

```bash
npm run build    # Genera la versión de producción en dist/
npm run preview  # Previsualizá el build localmente
```

### Cloudflare Pages

1. Conectá tu repo en [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages
2. Configuración del build:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build directory**: `dist`
3. Cada push a `main` dispara un deploy automático

### Otros hosts

El proyecto genera HTML estático en `dist/`. Funciona en cualquier hosting de sitios estáticos:

- **Netlify**: Conectá el repo, build command `npm run build`, publish dir `dist`
- **Vercel**: Conectá el repo, detecta Astro automáticamente
- **GitHub Pages**: Usá un action como `withastro/action`

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Header.astro          # Navegación fija + menú mobile
│   ├── Footer.astro          # Footer con enlaces y datos de contacto
│   └── sections/             # Una sección por archivo
│       ├── Hero.astro
│       ├── Servicios.astro
│       ├── PorQueElegirnos.astro
│       ├── ComoTrabajamos.astro
│       ├── Equipo.astro
│       ├── Testimonios.astro
│       ├── FAQ.astro
│       └── Contacto.astro
├── layouts/
│   └── Layout.astro          # Layout base con SEO, fuentes, JSON-LD
├── pages/
│   └── index.astro           # Página principal
└── styles/
    └── global.css            # Theme Tailwind v4 + estilos base
```

## 📄 Licencia

Este template es de uso libre. Modificalo, compartilo y usalo para el estudio jurídico que quieras. Si te sirvió, dejale una ⭐ al repo.
