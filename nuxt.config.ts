// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN,
  },
});
