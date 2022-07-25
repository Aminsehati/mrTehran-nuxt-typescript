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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
        integrity: "sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==",
        crossorigin: "anonymous",
        referrerpolicy: "referrer"
      }
    ],
  },
  css: [
    '@/assets/css/App.scss'
  ],
  plugins: [
    {
      src: "@/plugins/utils",
    },
    {
      src: "@/plugins/axios-accessor",
    },
    {
      src: "@/plugins/axios",
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
  render: {
    bundleRenderer: {
      runInNewContext: false,
    },
  },
  build: {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-methods", { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      ],
    },
  },
}
