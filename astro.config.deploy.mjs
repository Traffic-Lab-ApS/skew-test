import baseConfig from './astro.config.base.mjs'
import { defineConfig } from 'astro/config'

export default defineConfig({
  ...baseConfig,
  integrations: [...baseConfig.integrations],
})
