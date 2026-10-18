import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This machine's IPv6 loopback (::1) rejects connections, and Vite
    // otherwise binds only to localhost's IPv6 address.
    host: "127.0.0.1",
    port: 5173,
  },
})
