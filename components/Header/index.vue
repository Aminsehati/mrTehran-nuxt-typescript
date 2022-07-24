<template>
  <header class="header">
    <div class="logo_header">
      <nuxt-link to="/">
        <img :src="logoIcon" class="mx-auto" alt="logo" />
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import './style.scss'
@Component({})
export default class HeaderComponent extends Vue {
    logoIcon = require('@/assets/image/logo.png')
}
</script>