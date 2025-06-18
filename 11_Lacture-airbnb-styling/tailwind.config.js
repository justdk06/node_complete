import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  content: ['./views/*.{html}'],
  theme:{
    extend:{},
  },
  plugins: [
    tailwindcss(),
  ],
})