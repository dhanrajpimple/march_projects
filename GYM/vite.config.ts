import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/dhanrajpimple/gym-template' // Replace with your repo name
})
