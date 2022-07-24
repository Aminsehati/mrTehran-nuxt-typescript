import https from 'https'
import { Plugin } from '@nuxt/types'
const agent = new https.Agent({
  rejectUnauthorized: false
})
const plugin : Plugin = function ({ $axios }) {
  $axios.onRequest((config) => {
    config.httpsAgent = agent
  })
}
export default plugin