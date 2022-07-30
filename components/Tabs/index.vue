<template>
  <div class="tabs_wrapper">
    <li v-for="tab in tabs" :key="tab.id" class="tabs-item">
      <nuxt-link
        :to="tab.path"
        :class="{ active: $route.fullPath === tab.path }"
      >
        {{ tab.name }}
      </nuxt-link>
    </li>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Tab } from '~/Model/tab.model'

import './style.scss'
@Component({})
export default class TabsComponents extends Vue {
  @Prop() tabs!: Tab[]
  // tabs = [
  //   {
  //     id: 1,
  //     name: 'Featured',
  //     path: '/browse',
  //   },
  //   {
  //     id: 2,
  //     name: 'Popular',
  //     path: '/browse/Popular',
  //   },
  //   {
  //     id: 3,
  //     name: 'Latest',
  //     path: '/browse/latest',
  //   },
  //   {
  //     id: 4,
  //     name: 'Podcasts',
  //     path: '/browse/podcasts',
  //   },
  //   {
  //     id: 5,
  //     name: 'Travel',
  //     path: '/browse/travel',
  //   },
  // ]
}
</script>
