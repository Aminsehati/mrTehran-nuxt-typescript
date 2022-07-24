import https from 'https'
import { Plugin } from '@nuxt/types'
const agent = new https.Agent({
  rejectUnauthorized: false
})
const plugin : Plugin = function ({ $axios }) {
  $axios.onRequest((config) => {
    config.httpsAgent = agent
    // TODO
    // if (config.data) {
    //   const stringifid:string = JSON.stringify(config.data)
    //   const converted:string = utils.toEnglishNumber(stringifid) as string
    //   const parsed = JSON.parse(converted)
    //   config.data = parsed
    // }
    // console.log({config});
    
  })
  // $axios.onResponse((response) => {
  //   // console.log('response :>> ', response)
  // })
}
export default plugin