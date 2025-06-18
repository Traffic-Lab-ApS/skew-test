// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import vue from '@astrojs/vue'

console.log(
  `VERCEL_SKEW_PROTECTION_ENABLED: ${process.env.VERCEL_SKEW_PROTECTION_ENABLED}`
)
console.log(`VERCEL_DEPLOYMENT_ID: ${process.env.VERCEL_DEPLOYMENT_ID}`)

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    skewProtection: true,
  }),
  integrations: [vue()],
})
