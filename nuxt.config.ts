import { NuxtConfig } from "@nuxt/types";

export default <NuxtConfig>{
  ssr: true,
  loading: {
    color: 'rgb(229,0,118)',
    height: '3px',
    continuous: true,
    duration: 4000
  },
  head: {
    title: 'MrTehran.com - Persian Music Service 24/7',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: "57x57",
        href: '/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "60x60",
        href: '/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "72x72",
        href: '/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "76x76",
        href: '/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "114x114",
        href: '/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "120x120",
        href: '/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "144x144",
        href: '/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "152x152",
        href: '/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: "180x180",
        href: '/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: "image/png",
        sizes: "192x192",
        href: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: "image/png",
        sizes: "32x32",
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: "image/png",
        sizes: "96x96",
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: "image/png",
        sizes: "16x16",
        href: '/favicon-16x16.png',
      },
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
      src: "@/plugins/vue-installer",
      mode: 'client'
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
