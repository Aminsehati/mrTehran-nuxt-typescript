<template>
  <div class="playlists-page">
    <Container>
      <Title class="mb-20"> Exclusive Playlists </Title>
      <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20 mb-30">
        <PlayList
          v-for="item in listPlaylists"
          :key="item._id"
          :play-list-info="item"
        />
      </div>
      <Pagination
        :tottal-count="tottalCount"
        :limit="limit"
        @onChange="chnageSkip"
      />
    </Container>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Component, Vue } from 'nuxt-property-decorator'
import { PlayList } from '~/Model/playlist.model'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IPlayListService } from '~/services/IPlayListService'
@Component({
  layout: 'main',
  head: {
    title: 'Playlists | MrTehran.com'
  },
  async asyncData(ctx: Context) {
    try {
      const playlistsService = container.get<IPlayListService>(
        SYMBOLS.IPlayListService
      )
      const getPlaylists: any = await playlistsService.getPlaylists({
        limit: 1,
        skip: 1
      });
      return {
        listPlaylists: getPlaylists.items,
        tottalCount: getPlaylists.tottalCount
      }
    } catch (error) {
      ctx.error({ statusCode: 500 })
    }
  }
})
export default class PlaylistsPage extends Vue {
  listPlaylists: PlayList[] = []
  limit: number = 2
  skip: number = 1
  tottalCount: number = 0
  async getPlaylists() {
    try {
      const playlistsService = container.get<IPlayListService>(
        SYMBOLS.IPlayListService
      )
      const getPlaylists:any = await playlistsService.getPlaylists({
        limit: this.limit,
        skip: this.skip
      })
      this.listPlaylists = getPlaylists.items
    } catch (error) {
      return this.$nuxt.error({ statusCode: 500 })
    }
  }

  async chnageSkip(skip: number) {
    this.skip = skip;
    await this.getPlaylists()
  }
}
</script>
<style lang="scss">
.playlists-page {
  min-height: 90vh;
}
</style>
