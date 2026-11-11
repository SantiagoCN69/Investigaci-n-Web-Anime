<div align="center">

# 🎌 AniZen

### Investigación UX sobre el ecosistema digital del anime

**El anime no solo se consume. Se habita.**

![AniZen Search](https://scn.zenlite.workers.dev/anizensearch.png)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## 🌸 ¿Qué es AniZen?

AniZen es un estudio digital completo sobre el ecosistema del anime: hábitos de consumo, plataformas de streaming, perfiles de usuarios y decisiones de producto que dieron forma a una experiencia diseñada para **descubrir, retomar y organizar** anime sin abandonar el mismo recorrido.

Este repositorio contiene el sitio web interactivo donde se presenta toda la investigación — desde el análisis de referentes como Crunchyroll, Netflix y webs abiertas, hasta los prototipos finales de la propuesta.

## ✨ Contenido del sitio

| Sección | Descripción |
| --- | --- |
| 🎬 **Producto** | Evolución de los formatos de acceso y modelos de experiencia |
| 📊 **Consumo** | Hábitos, demografía y necesidades de la audiencia |
| 🧩 **Referentes** | Análisis comparativo de plataformas existentes |
| 👤 **Perfiles & Oportunidades** | Segmentación de usuarios y nichos detectados |
| 💡 **Solución & Funcionalidades** | Propuesta de AniZen, IA y arquitectura de bases |
| 🧪 **Pruebas** | Validación del prototipo y conclusiones |

## 🛠️ Stack

- **React 19** — librería UI
- **Vite 8** — build tool y dev server
- **Tailwind CSS v4** — sistema de diseño con `@tailwindcss/vite`
- **TypeScript 5.7** — tipado estático
- **oxfmt** — formateador

## 🚀 Cómo ejecutarlo

### Prerrequisitos

- Node.js (ver `.mise.toml` para la versión recomendada)
- pnpm

### Instalación y desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo (http://localhost:8444)
pnpm dev

# Build de producción
pnpm build

# Vista previa del build
pnpm preview

# Formatear código
pnpm format
```

## 📁 Estructura del proyecto

```
src/
├── main.tsx          # Entry point de React
├── App.tsx           # Composición principal del sitio
├── index.css         # Estilos globales y tema Tailwind v4
└── components/
    ├── Chrome.tsx    # Navegación, footer y utilidades de secciones
    ├── Part1.tsx     # Producto, consumo, referentes
    ├── Part2.tsx     # Demografía, necesidades, perfiles, oportunidades
    ├── Part3.tsx     # Solución, funcionalidades, UX, IA, bases, conclusiones
    └── Part4.tsx     # Pruebas y validación

public/assets/        # Imágenes y recursos del prototipo
```

## 🎨 Design system

El proyecto usa un tema oscuro editorial con acentos cálidos, tipografía expresiva y animaciones de scroll. Los estilos globales (incluyendo el backdrop ambiental con orbes y glints) viven en `src/index.css` dentro de `@layer base`.

## 📄 Licencia

Proyecto académico — todos los derechos reservados.

---

<div align="center">

Hecho con 💜 para la comunidad del anime

</div>
