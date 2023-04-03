import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const VITE_BACKEND_URL = process.env.VITE_BACKEND_URL || ''
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 
})
