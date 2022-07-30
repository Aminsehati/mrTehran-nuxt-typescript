<template>
  <div class="chart-top-artists-page">
    <Container>
      <Tabs :tabs="tabs" />
      <div class="title mb-20 flex align-center justify-between">
        <Title> Popular Artists </Title>
        <div>
          <Button class="mr-15" secondary>
            <i class="fa-solid fa-play mr-10"></i>
            Play All
          </Button>
        </div>
      </div>
      <ChartArtist
        v-for="(artist, index) in artists"
        :key="artist._id"
        :artistInfo="artist"
        class="mb-20"
      >
        {{ index }}
      </ChartArtist>
    </Container>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { Artist } from '~/Model/artist.model'
import { Tab } from '~/Model/tab.model'
import { IArtistService } from '~/services/IArtistService'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import items from '../items'
@Component({
  layout: 'main',
  async asyncData(ctx: Context) {
    try {
      const artistService = container.get<IArtistService>(
        SYMBOLS.IArtistService
      )
      const getArtists: any = await artistService.getArtists({
        limit: 50,
        skip: 1,
      })
      return {
        artists: getArtists.items,
      }
    } catch (error) {
      console.log(error)
      ctx.error({
        statusCode: 500,
      })
    }
  },
})
export default class TopArtists extends Vue {
  tabs: Tab[] = items
  artists: Artist[] = []
}
</script>
<style lang="scss">
.chart-top-artists-page {
  min-height: 100vh;
}
</style>