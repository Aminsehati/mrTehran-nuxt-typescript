import { Context, Plugin } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import _ from 'lodash'
export class UtilsPlugin {
    public $_: _.LoDashStatic = _


    public countFollowers(count: number) {
        const label = count > 1000 ? "k" : "";
        if (count > 1000) {
            return `${Number(count) / 1000}${label}`;
        } else {
            return `${Number(count)}${label}`;
        }
    }

    getImageUrl(url: string) {
        return url
    }
}

const plugin: Plugin = function (_ctx: Context, inject: Inject) {
    inject('utils', new UtilsPlugin())
}
export default plugin