import { Vue } from 'nuxt-property-decorator'
export default Vue.extend({
    name: 'SiteMixin',
    data() {
        return {
            prevHeight: 0
        }
    },
    methods: {
        countFollowers(count: number) {
            const label = count > 1000 ? "k" : "";
            if (count > 1000) {
                return `${Number(count) / 1000}${label}`;
            } else {
                return `${Number(count)}${label}`;
            }
        }
    }

})