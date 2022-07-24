<template>
  <div class="container-sm">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class ContainerComponents extends Vue {
    
}
</script>