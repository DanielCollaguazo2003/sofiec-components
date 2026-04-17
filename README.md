# Sofiec Components 🏦

![Version](https://img.shields.io/npm/v/sofiec-components?style=flat-square&color=1890ff)
![License](https://img.shields.io/npm/l/sofiec-components?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=flat-square)

Librería de componentes UI orientada a aplicaciones financieras y Fintech, construida sobre **React**, **Ant Design** y acelerada con **TailwindCSS v4**.

Desarrollada para ofrecer soluciones modulares como validación estricta de divisas, estandarización de componentes de Ant Design mediante Design Tokens y soporte multi-idioma (i18next).

---

## ⚙️ Instalación

Asegúrate de instalar `sofiec-components` junto con sus peer dependencies en tu proyecto React o Vite:

```bash
npm install sofiec-components react react-dom antd
```

## 🚀 Uso Rápido

Para utilizar los componentes y que funcionen con el tema financiero correcto, primero debes envolver tu aplicación con el `SFConfigProvider`.

```tsx
import { SFConfigProvider, SfButton, SfInputCurrency } from 'sofiec-components';
// Si el entorno requiere inyección del CSS precompilado de la librería:
import 'sofiec-components/style.css'; 

function App() {
  return (
    <SFConfigProvider>
      <div className="p-8 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-4">Nueva Transferencia</h2>
        
        {/* Componentes Fintech Modulares */}
        <SfInputCurrency 
          currency="USD"
          placeholder="0.00"
          className="mb-4"
        />

        <SfButton type="primary" className="w-full">
          Transferir Fondos
        </SfButton>
      </div>
    </SFConfigProvider>
  );
}

export default App;
```

## ✨ Arquitectura y Ecosistema Incluido

Sofiec Components está diseñado bajo estándares *Clean Architecture* e incluye soporte nativo y directo para integraciones complejas:

- **Tailwind Integrado:** Totalmente compatible. Aplica clases `utility` directamente en la propiedad `className` de los componentes nativos.
- **`SfInputCurrency`:** Utiliza internamente librerías numéricas seguras (`big.js`) para evitar problemas de _floating-point_ durante transacciones financieras.
- **Preparado para i18n:** Soporte de traducciones multimoneda desde su core.
- **`SfSelect` Avanzado:** Optimizados por defecto para buscar eficientemente dentro de grandes diccionarios bancarios.

## 💻 Desarrollo Local (Librería)

Si estás contribuyendo a la librería y deseas previsualizar componentes de forma aislada, el proyecto utiliza **Storybook**.

```bash
# Instalar dependencias del repositorio
npm install

# Levantar entorno de previsualización
npm run storybook
```

Si deseas generar el Build publicable localmente:
```bash
npm run build
```

---
**Desarrollado con ❤️ para entornos de alta fiabilidad financiera.**
