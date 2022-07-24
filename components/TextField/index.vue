<template>
  <div class="form-group">
    <input
      :type="type"
      :placeholder="placeholder"
      :class="[
        'form-control',
        {
          'has-search': search,
        },
      ]"
    />
    <span v-if="search" class="seach-icon">
      <i class="fa-solid fa-magnifying-glass"></i>
    </span>
    <slot name="back" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import './style.scss'
@Component({})
export default class TextFieldComponent extends Vue {
  @Prop({ type: String, default: 'text' }) type!: string
  @Prop({ type: String, default: '' }) value!: string
  @Prop({ type: String, default: '' }) placeholder!: string
  @Prop({ type: Boolean, default: false }) search!: Boolean
}
</script>