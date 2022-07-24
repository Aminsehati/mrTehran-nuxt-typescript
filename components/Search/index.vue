<template>
  <div
    :class="[
      'search-box',
      {
        show: show,
      },
    ]"
  >
    <div class="px-15 search_text-field">
      <TextField placeholder="Search....." search>
        <span class="back" slot="back" @click="$emit('close')">
          <i class="fa-solid fa-xmark"></i>
        </span>
      </TextField>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import './style.scss'
@Component({})
export default class SearchComponent extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean
}
</script>