<template>
  <div class="spinner-main">
    <div class="spinner-border"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import './style.scss'
export default class LoadingComponents extends Vue {
  public loading: boolean = true
}
</script>