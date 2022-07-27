<template>
  <div>
    <Header />
    <Navbar @onSearch="showSidebarSearch = !showSidebarSearch" />
    <nuxt />
    <!-- v-if="$route.fullPath !== '/'"  -->
    <Banner v-if="$route.fullPath !== '/'" />
    <Footer />
    <Search
      :show="showSidebarSearch"
      @close="showSidebarSearch = !showSidebarSearch"
    />
     <Player @showList="showSidebarPlayerLists = !showSidebarPlayerLists" />
    <!-- <PlayerLists
      :show="showSidebarPlayerLists"
      @close="showSidebarPlayerLists = !showSidebarPlayerLists"
    /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class MainLayout extends Vue {
  showSidebarSearch: boolean = false
  showSidebarPlayerLists: boolean = false
}
</script>