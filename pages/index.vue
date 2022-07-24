<template>
  <div class="home-page">
    <Container>
      <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20">
        <!-- <PlayList
          v-for="item in playListsItems"
          :key="item.id"
          :playListInfo="item"
        /> -->
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { container } from '@/services/Ioc/inversify.config'
import { IPlayListService } from '~/services/IPlayListService'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { PlayList } from '~/Model/playlist.model'
@Component({
  layout: 'main',
   asyncData() {
    try {
      const _PlayListService = container.get<IPlayListService>(
        SYMBOLS.IPlayListService
      )
      console.log(_PlayListService);
      return {
        PlayList: [],
      }
    } catch (error) {
      console.log(error)
    }
  },
})
export default class HomePage extends Vue {
  playlistsItems: PlayList[] = []
}
</script>
