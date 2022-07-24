<template>
  <div class="title_wrapper">
    <h1>
      <slot />
    </h1>
  </div>
</template>

<script lang="ts">
import './style.scss'
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class TitleComponents extends Vue {
    
}
</script>