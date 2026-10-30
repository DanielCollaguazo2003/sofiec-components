# Sofiec Components: Design System

Este documento define la arquitectura visual, tokens, paletas y pautas de UI para el desarrollo de nuevas vistas y componentes dentro del ecosistema de Sofiec. Este sistema está profundamente inspirado en lineamientos limpios, priorizando el contenido financiero sin saturar cognitivamente al usuario.

## 1. Topografía y Enfoque (Inter / SF Pro / Roboto)
La jerarquía tipográfica está diseñada para máxima legibilidad, combinando una mezcla de modernidad y precisión numérica (Tabular).

*   **Texto Principal:** `#1D1D1F` (Gris casi negro fluido, disminuye contraste puro).
*   **Texto Secundario / Labels:** `#86868B` (Gris medio, utilizado para metadatos o agrupadores).
*   **Títulos (Héroe/Headers):** Tamaños `text-4xl` a `text-5xl`. Siempre utilizando `font-bold` o `font-semibold` con compensación ajustada de espacios (`tracking-tight`).
*   **Cuerpo General:** `text-base`
*   **Subtextos:** `text-sm` o `text-xs` (`font-medium`).

*Stack CSS global:* `font-family: 'Inter', -apple-system, 'SF Pro', 'Roboto', sans-serif;`

## 2. Paleta de Colores
Colores orientados a minimizar la distracción, siendo estables y semánticos.

### Colores Base
*   **Principal:** `#1890FF` (Color de marca o acción financiera central).
*   **Fondo de Inputs:** `#F2F2F7` (Gris muy suave para denotar editabilidad sin encajonar con bordes negros).
*   **Divisores / Bordes:** `#D1D1D6` (Finos y limitados. Solo útiles cuando el espacio blanco no es suficiente).

### Acentos Pastel (Categorías / Badges)
Destinados para `Pills` (pastillas o tags semánticos):
*   🟢 **Alimentación:** Verde Suave. (`#e8f5e9` o `bg-green-100 text-green-700`)
*   🔵 **Salud:** Azul Pastel. (`#e3f2fd` o `bg-blue-100 text-blue-700`)
*   🔘 **Educación:** Gris Azulado. (`#f1f5f9` o `bg-slate-100 text-slate-700`)

## 3. Fundamentos, Layouts y Geometría

### Esquinas Redondeadas (Border Radius)
Nunca usar curvas picudas agresivas. Todo bloque interactable debe sentirse orgánico.
*   **Medias / Tarjetas (Cards):** `rounded-2xl` (16px base).
*   **Grandes / Modales / Secciones:** `rounded-3xl` (24px base).
*   **Pequeñas / Inputs:** 8px a 12px.

### Elevaciones en Z y Profundidad
Se eliminan los bordes duros de contenedores flotantes a favor de la proyección de sombras ambientales amplias.
*   **Tarjetas y Popups:** Prohibido el uso de bordes sólidos (`border-none`). En lugar de bordes, se utiliza la **Sombra Sofiec**: `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`.
*   **Elementos Flotantes (Navbars/Dropdowns):** Obligatorio el uso de cristales/blur: `backdrop-blur-md` junto con fondos de opacidad menor a 1 (ej. `bg-white/90`).
*   **Negative Spacing (Espacios en blanco):** Las pantallas y tarjetas deben de respirar activamente y no acaparar contenido en los bordes. Utilizar generosamente `p-6` a `p-8` en contenedores.

## 4. Inputs y Formularios

Fomentamos una interfaz limpia y silenciosa hasta que sea tocada por el usuario.
*   **Fondo Input:** Gris suave (`#F2F2F7`).
*   **Bordes:** Estado estático SIN borde oscuro.
*   **Estado Focus:** No utilizar engrosamiento negro. Transicionar sutilmente a un anillo claro de acento o sombra paralela clara: `ring-1 ring-blue-500/30`.

## 5. Micro-interacciones
Todo estado alterado por el usuario debe fluir visualmente, eliminando los "brincos" (snapping) feos de HTML nativo.
*   **Botones Principales:**
    *   Sólidos.
    *   `Efeco Hover`: Escalado sutil. `hover:scale-[1.02]`.
    *   `Efecto Active` (Click): Contraccíon rápida. `active:scale-[0.98]`.
*   **Segmented Controls (Tipo iOS):** Fondos gris claro con un switch de botón color blanco plano que posee una sombra pequeña.
*   **Curvas Generales de Animación:** Duraciones entre `200ms` a `300ms` con curva cúbica suave (`ease-out`).

## 6. Iconografía
*   Se limitarán a trazos finos (Lucide Icons o similares a SF Symbols delgados).
*   Evitar los íconos de "burbuja" rellenos a menos que representen el estado activo de navegación principal.
*   **Colores Iconos:** `#86868B` en estado inactivo. Color primario explícito en estado activo/click.
