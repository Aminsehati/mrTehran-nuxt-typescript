import { Context, Plugin } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import _ from 'lodash'
export class UtilsPlugin {
    public $_: _.LoDashStatic = _
    public baseUrl: string = "http://localhost:5000/"

    public countFollowers(count: number) {
        const label = count > 1000 ? "k" : "";
        if (count > 1000) {
            return `${Number(count) / 1000}${label}`;
        } else {
            return `${Number(count)}${label}`;
        }
    }

    getImageUrl(url: string) {
        return `${this.baseUrl}public/images/${url}`
    }

    getAudioUrl(url: string) {
        return `${this.baseUrl}public/audio/${url}`
    }
}

const plugin: Plugin = function (_ctx: Context, inject: Inject) {
    inject('utils', new UtilsPlugin())
}
export default plugin