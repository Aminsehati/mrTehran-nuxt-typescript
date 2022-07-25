<template>
  <div class="artists-page">
    <Container>
      <div
        class="
          artist-wrapper
          grid
          xl:grid-cols-3
          sm:grid-cols-2
          gap-x-20 gap-y-20
          mb-30
        ">
        <Artist
            :ArtistInfo="artist"
            v-for="artist in listArtists"
            :key="artist._id"
          />
      </div>
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
      title: 'Singers and Artists | Page 1 | MrTehran.com',
    }
  },
  async asyncData(ctx: Context) {
    try {
      const artistsService = container.get<IArtistService>(
        SYMBOLS.IArtistService
      )
      const getArtists = await artistsService.getArtists({
        limit: 60,
        skip: 1,
      })
      return {
        listArtists:getArtists
      }
    } catch (error) {
      ctx.error({ statusCode: 500 })
    }
  },
})
export default class ArtistPage extends Vue {
  loading: boolean = true
  listArtists:Artist[] = []
}
</script>
<style lang="scss">
.artists-page {
  min-height: 100vh;
}
</style>