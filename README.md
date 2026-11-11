<div align="center">

# 🎌 AniZen

### Investigación UX sobre el ecosistema digital del anime

**Proyecto universitario · Diseño de Producto / Experiencia de Usuario**

**El anime no solo se consume. Se habita.**

![AniZen Search](https://scn.zenlite.workers.dev/anizensearch.png)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## 🎓 Proyecto universitario

Este repositorio es el entregable de un **proyecto académico** enfocado en investigación de usuarios y diseño de producto. Combina un estudio UX completo —demografía, necesidades, perfiles, referentes y oportunidades— con la propuesta funcional de **AniZen**, una plataforma pensada para descubrir, retomar y organizar anime en una sola experiencia.

## 🌸 ¿Qué es AniZen?

AniZen es el resultado del estudio: una propuesta de producto digital sobre el ecosistema del anime que responde a hábitos reales de consumo y a las brechas detectadas en plataformas como Crunchyroll, Netflix y webs abiertas.

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

