<template>
  <div v-if="getPageCount > 1" class="pagination_wrapper">
    <paginate
      :page-count="getPageCount"
      :prev-text="''"
      :next-text="''"
      :page-range="3"
      :container-class="'className'"
      :click-handler="changeSkip"
    ></paginate>
  </div>
</template>

<script lang="ts">
import './style.scss'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component({})
export default class Pagination extends Vue {
  @Prop({ type: Number, default: 0 }) tottalCount!: number
  @Prop({ type: Number, default: 0 }) limit!: number
  public get getPageCount() {
    return Math.ceil(this.tottalCount / this.limit)
  }

  public changeSkip(skip:number){
    this.$emit("onChange",skip)
  }
}
</script>
