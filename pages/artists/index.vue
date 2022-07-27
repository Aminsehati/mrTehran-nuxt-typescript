<template>
  <div class="artists-page">
    <Container>
      <div class="title_ mb-15">
        <Title> Popular Artists </Title>
      </div>
      <div
        class="artist-wrapper grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20 mb-30"
      >
        <Artist
          v-for="artist in listArtists"
          :key="artist._id"
          :artist-info="artist"
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
import { Vue, Component } from 'nuxt-property-decorator'
import { Artist } from '~/Model/artist.model'
import { IArtistService } from '~/services/IArtistService'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
@Component({
  layout: 'main',
  head() {
    return {
      title: `Singers and Artists | Page 1 | MrTehran.com`
    }
  },
  async asyncData(ctx: Context) {
    try {
      const artistsService = container.get<IArtistService>(
        SYMBOLS.IArtistService
      )
      const getArtists: any = await artistsService.getArtists({
        limit: 2,
        skip: 1,
        Followers: -1
      })
      return {
        listArtists: getArtists.items,
        tottalCount: getArtists.tottalCount
      }
    } catch (error) {
      ctx.error({ statusCode: 500 })
    }
  }
})
export default class ArtistPage extends Vue {
  limit: number = 2
  skip: number = 1
  tottalCount: number = 0
  listArtists: Artist[] = []
  async getArtists() {
    try {
      const artistService = container.get<IArtistService>(
        SYMBOLS.IArtistService
      )
      const getArtists: any = await artistService.getArtists({
        limit: this.limit,
        skip: this.skip,
        Followers: 1
      })
      this.listArtists = getArtists.items
    } catch (error) {}
  }

  async chnageSkip(skip: number) {
    this.skip = skip
    await this.getArtists()
  }

  head() {
    return {
      title: `Singers and Artists | Page ${this.skip} | MrTehran.com`
    }
  }
}
</script>
<style lang="scss">
.artists-page {
  min-height: 100vh;
}
</style>
