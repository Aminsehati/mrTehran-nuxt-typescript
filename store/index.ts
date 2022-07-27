import { Store } from 'vuex'
import ActivePlayerModule from './ActivePlayerModule'

export function createStore() {
    return new Store({
        modules: {
            ActivePlayerModule
        }
    })
}