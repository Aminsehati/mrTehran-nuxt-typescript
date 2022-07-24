<template>
  <nav class="navbar">
    <div class="container-sm">
      <ul class="list_navbar flex align-center">
        <li v-for="navbar in navbarItems" :key="navbar.id" class="navbar_item">
          <nuxt-link :to="navbar.path" :class="['text-13 text-light text-400']">
            <!-- <IconBrowse
              v-if="navbar.name === 'Browse'"
              width="15"
              height="15"
              class="mr-10"
            />
            <IconHome
              v-if="navbar.name === 'Home'"
              width="15"
              height="15"
              class="mr-10"
            />
            <IconArtist
              v-if="navbar.name === 'Artists'"
              width="18"
              height="18"
              class="mr-10"
            />
            <IconPlayList
              v-if="navbar.name === 'Playlists'"
              width="15"
              height="15"
              class="mr-10"
            /> -->

            <span>
              {{ navbar.name }}
            </span>
          </nuxt-link>
        </li>
        <li :class="['navbar_item text-light']" @click="$emit('onSearch')">
          <!-- <IconSearch width="15" height="15" /> -->
          <span> Search </span>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import './style.scss'
import items from './items'
import { Navbar } from '@/Model/navbar.model'
@Component({})
export default class NavbarComponent extends Vue {
  navbarItems: Navbar[] = items
}
</script>