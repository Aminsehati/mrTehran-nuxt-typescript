import { NuxtConfig } from "@nuxt/types";

export default <NuxtConfig>{
  ssr: true,
  head: {
    title: 'mrTehran-nuxt-typescript',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '@/assets/css/App.scss'
  ],
  plugins: [
    {
      src: "@/plugins/utils",
      mode: "all"
    },
    {
      src: "@/plugins/axios-accessor",
      mode:"serve"
    },
    {
      src: "@/plugins/axios",
      mode:"server"
    },
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  axios: {
    baseURL: 'http://localhost:5000/api/v1',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  build: {},
}
