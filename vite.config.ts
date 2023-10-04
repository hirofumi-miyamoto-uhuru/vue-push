import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        lang: 'ja',
        name: 'vue push sample',
        short_name: 'vps',
        background_color: '#000',
        theme_color: '#000',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            'src': 'img/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'img/maskable_icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png',
            'purpose': 'any maskable'
          },
          {
            'src': 'img/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          },
          {
            'src': 'img/maskable_icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png',
            'purpose': 'any maskable'
          }
        ]
      }
    })
  ],
})
