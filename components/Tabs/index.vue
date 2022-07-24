<template>
  <div class="tabs_wrapper">
    <li class="tabs-item" v-for="tab in tabs" :key="tab.id">
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
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class TabsComponents extends Vue {
    tabs = [
        {
            id:1,
            name:"sss",
            path:"/"
        }
    ]
}

</script>