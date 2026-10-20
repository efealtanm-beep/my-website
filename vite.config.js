import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Allow the Freebuff preview host(s) passed via env, plus localhost.
// No host is hardcoded here; the preview proxy sets the env var.
const previewHosts = (process.env.PREVIEW_ALLOWED_HOSTS ?? '')
  .split(',')
  .map((h) => h.trim())
  .filter(Boolean)

// Log every incoming Host header so the live preview host can be discovered
// from real browser traffic when it rotates between activations (a 403 from
// an unknown host renders as a blank page, and Vite never logs the hostname).
function hostObserver() {
  let lastLoggedHost = null
  return {
    name: 'freebuff-host-observer',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const host = req.headers.host ?? '(none)'
        if (lastLoggedHost !== host) console.log(`[host-observe] request Host: ${host}`)
        lastLoggedHost = host
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [hostObserver(), react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    allowedHosts: previewHosts,
  },
})
