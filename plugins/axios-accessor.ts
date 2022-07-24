import { Context } from '@nuxt/types'
import { initializeAxios } from '~/utils/api'
export default ({ $axios }: Context) => { initializeAxios($axios) }