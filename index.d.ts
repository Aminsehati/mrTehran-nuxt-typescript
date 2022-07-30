import { UtilsPlugin } from "./plugins/utils"

declare module '@nuxt/types' {
    interface Context {
      $utils: UtilsPlugin
    }
  }
  declare module 'vue/types/vue' {
    interface Vue {
      $utils: UtilsPlugin
    }
  }