## Portafolio Espacial – Jose David Rodríguez

Portafolio personal desarrollado con **Next.js**, orientado a mostrar tu experiencia como **Ingeniero de Sistemas / Desarrollador Full Stack**, con una temática espacial y elementos 3D.

### Tecnologías principales

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber

### Secciones del portafolio

- **Sobre mí**: Resumen profesional, presentación y enlace de descarga de tu hoja de vida.
- **Habilidades**: Tecnologías de frontend, backend y herramientas que manejas.
- **Experiencia**: Línea de tiempo de tu experiencia laboral, con:
  - Funciones detalladas por cada empresa.
  - Logros destacados.
  - Datos de jefes directos.
  - Descarga de **certificados laborales** asociados.
- **Datos personales**: Card interactiva con información básica (teléfono, correo, dirección, etc.).
- **Información académica**: Estudios realizados (pregrado y bachillerato).
- **Conocimientos**: Habilidades técnicas y blandas (POO, metodologías ágiles, trabajo en equipo, AWS, etc.).
- **Proyectos**: Ejemplos de proyectos con temática espacial.

### Requisitos

- Node.js (versión recomendada: 18 o superior)
- npm o yarn

### Instalación y ejecución en local

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador:

```text
http://localhost:3000
```

### Scripts disponibles

- `npm run dev` – Inicia el servidor de desarrollo.
- `npm run build` – Genera la build de producción.
- `npm run start` – Levanta la aplicación en modo producción (después de `npm run build`).
- `npm run lint` – Ejecuta ESLint sobre el proyecto.

### Estructura general (resumen)

- `app/` – Entrypoint de la aplicación Next.js.
- `components/` – Componentes principales (navbar, footer, secciones, cards).
- `constants/` – Datos estáticos: experiencia, datos personales, proyectos, enlaces, etc.
- `public/` – Recursos estáticos (imágenes, modelos 3D, certificados laborales, etc.).

### Personalización

Los textos e información de experiencia, estudios y conocimientos se encuentran en:

- `constants/index.ts`

Puedes editar directamente estos arreglos para actualizar tu información profesional sin tocar la lógica de los componentes.

