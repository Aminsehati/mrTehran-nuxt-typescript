<template>
  <button :class="classesButton" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import './style.scss'
@Component({})
export default class ButtonComponents extends Vue {
  @Prop({ type: Boolean, default: false }) primary!: boolean
  @Prop({ type: Boolean, default: false }) secondary!: boolean
  @Prop({ type: Boolean, default: false }) small!: boolean
  private get classesButton() {
    return [
      'btn',
      {
        'btn-primary': this.primary,
        'btn-secondary': this.secondary,
        'btn-small': this.small,
      },
    ]
  }

  private onClick() {
    this.$emit('onClick')
  }
}
</script>
