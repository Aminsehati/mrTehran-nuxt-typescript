<template>
  <div class="artist-single-page">
    <Container>
      <Cover :cover-info="artistInfo" />
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
  async asyncData(_ctx: Context) {
    try {
      const artistService = container.get<IArtistService>(
        SYMBOLS.IArtistService
      )
      const getArtist = await artistService.getArtist(_ctx.params.id)
      return {
        artistInfo: getArtist
      }
    } catch (error) {
      _ctx.error({
        statusCode: 404
      })
    }
  }
})
export default class ArtistSinglePage extends Vue {
  artistInfo!: Artist[]
}
</script>
<style lang="css">
.artist-single-page {
  min-height: 100vh;
}
</style>
