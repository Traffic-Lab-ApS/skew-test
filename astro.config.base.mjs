// @ts-check
import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import node from '@astrojs/node'
import vercel from '@astrojs/vercel'
import vue from '@astrojs/vue'

console.log(
  `VERCEL_SKEW_PROTECTION_ENABLED: ${process.env.VERCEL_SKEW_PROTECTION_ENABLED}`
)
console.log(`VERCEL_DEPLOYMENT_ID: ${process.env.VERCEL_DEPLOYMENT_ID}`)

// @ts-ignore
const env = loadEnv(process.env.NODE_ENV, process.cwd(), '')
const isProduction = env.NODE_ENV === 'production'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: isProduction
    ? vercel({ skewProtection: true })
    : node({
        mode: 'standalone',
      }),
  integrations: [vue()],
})
