<template>
  <div class="banner-app">
    <div class="container-sm">
      <a :href="url">
        <img :src="imageCover" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class BannerComponent extends Vue {
  imageCover = require('@/assets/image/apppromotebg.jpeg')
  url: string = '/'
}
</script>