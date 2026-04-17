/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import babel from '@rolldown/plugin-babel';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(), 
    dts({ include: ['src'], tsconfigPath: './tsconfig.app.json' }),
    babel({
      presets: [reactCompilerPreset()]
    })
  ],
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'SofiecComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled
      external: [
        'react', 
        'react-dom', 
        'react/jsx-runtime',
        'antd', 
        'react-hook-form', 
        'zod', 
        'lucide-react', 
        'i18next', 
        'react-i18next',
        'zustand'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          antd: 'antd'
        }
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});