// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Gloria Rodríguez Fernández',
      meta: [
        { name: 'description', content: 'Frontend Developer. Never stop learning. Animal lover. Sports' }
      ],
    },
  },
});
