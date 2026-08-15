# 📚 BookList SPA - Proyecto de Catálogo Digital

¡Bienvenido a **BookList SPA**! Esta es una aplicación de página única (Single Page Application) desarrollada desde cero con **Vue.js 3** y **Vue Router 4** para la gestión reactiva de una biblioteca digital personal.

El proyecto está estructurado modularmente utilizando la arquitectura **Options API** (`data`, `methods`, `computed`, `props`) y cumple con todos los objetivos del plan de estudios frontend.



## 🚀 Características y Lecciones Cubiertas

*   **Lección 1: Reactividad Básica e Interactividad**
    * Contador interactivo de visitas implementado con lógica reactiva en la página de inicio.
*   **Lección 2: Listado de Datos y Directivas Estructurales**
    * Renderizado dinámico de la colección de libros mediante `v-for`.
    * Control de estados vacíos con interfaces alternativas usando `v-if` / `v-else`.
*   **Lección 3: Formularios Dinámicos con Enlace Bidireccional**
    * Formulario reactivo para añadir libros con enlace de datos bidireccional (`v-model`).
    * Panel integrado para la previsualización del contenido en tiempo real antes de guardar.
*   **Lección 4: Manejo de Eventos y Modificadores**
    * Intercepción y prevención del comportamiento por defecto del navegador usando el modificador `@submit.prevent`.
    * Atajos de teclado del sistema mediante el uso de `@keyup.enter` para un guardado rápido.
*   **Lección 5: Navegación Avanzada y Rutas Dinámicas**
    * Enrutamiento dinámico configurado con `vue-router` para separar las vistas de Inicio, Catálogo y Detalles.
    * Envío desacoplado de identificadores mediante `props: true` hacia la vista de detalles.
    * Centralización y compartición de la colección de libros usando un almacén de datos global simple y reactivo.



## 🛠️ Tecnologías Utilizadas

*   **Framework:** Vue.js 3
*   **Enrutador Oficial:** Vue Router 4
*   **Lenguajes:** JavaScript (ES6+), HTML5, CSS3
*   **Herramienta de Construcción:** Vite
*   **Editor:** Visual Studio Code



## 📁 Estructura del Código Fuente (`src/`)

```text
src/
├── assets/         # Estilos globales y recursos estáticos
├── components/     # Componentes independientes (ej: Libro.vue)
├── router/         # Configuración y definición de rutas de Vue Router
├── store/          # Almacén reactivo global para compartir datos
├── views/          # Páginas principales o vistas completas de la SPA
├── App.vue         # Componente raíz y contenedor principal
└── main.js         # Archivo de inicio y montaje de la aplicación Vue
```