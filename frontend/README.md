# Portfolio Frontend - Nexus System

Este proyecto es un portafolio interactivo con una estética "Sci-Fi / Terminal", diseñado para desarrolladores, ingenieros de software y líderes técnicos. Destaca por incluir un **CMS 100% local**, que te permite gestionar el contenido de la web a través de una interfaz visual sin necesidad de usar bases de datos ni servicios de backend externos.

## 🚀 Características Principales

*   **Diseño Futurista**: Efectos de _glassmorphism_, neón, texto _glitch_ y animaciones sutiles.
*   **Totalmente Editable**: Modifica títulos, la matriz de habilidades, experiencia laboral, proyectos y datos de contacto desde el panel de control.
*   **CMS Local sin Servidor**: Utiliza un plugin personalizado de Vite para guardar los datos directamente en un archivo JSON local mientras desarrollas.
*   **Optimizado para Producción**: Al compilar, se genera un sitio estático súper rápido, seguro y económico (o gratuito) de alojar.

---

## 🛠️ Cómo Funciona el CMS Local

A diferencia de un CMS tradicional (como WordPress o Strapi), este sistema no depende de una base de datos en la nube. Toda la información de tu portafolio vive en el archivo `src/data/portfolio.json`.

Cuando quieres actualizar tu portafolio, sigues este flujo:

1.  **Inicia el entorno de desarrollo:**
    Abre tu terminal en la carpeta `frontend` y ejecuta:
    ```bash
    npm install
    npm run dev
    ```
2.  **Entra al Administrador:**
    En tu navegador, ve a `http://localhost:5173/#admin`. El entorno de desarrollo (Vite) mostrará el panel de control oculto.
3.  **Edita y Guarda:**
    Usa la interfaz para modificar tu contenido. Al presionar **"GUARDAR CAMBIOS"**, el navegador envía la nueva información a Vite, y Vite sobrescribe tu archivo `portfolio.json` localmente de forma automática.
4.  **Consolida los Cambios (¡Muy Importante!):**
    Una vez guardado, los cambios solo existen en tu computadora. Para que se vean en internet, debes subir el nuevo `portfolio.json` a GitHub:
    ```bash
    git add src/data/portfolio.json
    git commit -m "Actualizar datos del portafolio"
    git push origin main
    ```

---

## 📦 Cómo hacer Deploy (Publicar en Producción)

Dado que este proyecto se compila como un sitio estático de React (Single Page Application), puedes alojarlo gratis en múltiples plataformas. El botón del CMS se ocultará automáticamente en el entorno de producción.

### Opción A: Vercel (Recomendado)

1.  Crea una cuenta en [Vercel](https://vercel.com/) y vincula tu cuenta de GitHub.
2.  Haz clic en "Add New..." -> "Project".
3.  Selecciona tu repositorio.
4.  En "Framework Preset", asegúrate de que diga **Vite**.
5.  El "Root Directory" debe ser `frontend` (si tu código está dentro de esta carpeta).
6.  Haz clic en **Deploy**. 
*Nota: Vercel reconstruirá automáticamente tu sitio cada vez que hagas un `git push` con nuevos datos del CMS.*

### Opción B: Netlify

1.  Ve a [Netlify](https://www.netlify.com/) y conecta tu GitHub.
2.  Haz clic en "Add new site" -> "Import an existing project".
3.  Elige tu repositorio.
4.  Configuración de construcción:
    *   **Base directory:** `frontend`
    *   **Build command:** `npm run build`
    *   **Publish directory:** `frontend/dist`
5.  Haz clic en **Deploy site**.

### Opción C: GitHub Pages

1.  En tu terminal (dentro de `frontend`), instala el paquete de gh-pages:
    ```bash
    npm install gh-pages --save-dev
    ```
2.  Edita el archivo `vite.config.js` y añade tu propiedad base (el nombre de tu repositorio, por ejemplo: `base: '/mi-portafolio/',`).
3.  Añade estos scripts a tu `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
4.  Ejecuta `npm run deploy` y activa GitHub Pages en las opciones de tu repositorio (apuntando a la rama `gh-pages`).

---

## 💻 Stack Tecnológico

*   **React + Vite**: Framework principal y herramienta de construcción rápida.
*   **Vanilla CSS**: Para un control total y absoluto de las variables de diseño, glassmorphism y micro-animaciones.
*   **Lucide React**: Biblioteca de iconos modernos y ligeros.
*   **Node.js (Plugin de Vite)**: Encargado de escribir los datos en formato JSON durante la fase de desarrollo.
