<template>
  <div class="chart-top-songs-month-page">
    <Container>
      <Tabs :tabs="tabs" />
      <div class="title mb-20 flex align-center justify-between">
        <Title> Top Songs Month </Title>
        <div>
          <Button class="mr-15" secondary>
            <i class="fa-solid fa-play mr-10"></i>
            Play All
          </Button>
        </div>
      </div>
      <ChartTrack
        v-for="(track, index) in tracks"
        :key="track._id"
        :trackInfo="track"
        class="mb-20"
      >
        <template slot="number">
          {{ $utils.numberTrack(index + 1) }}
        </template>
      </ChartTrack>
    </Container>
  </div>
</template>

<script lang="ts">
import items from '../items'
import { Vue, Component } from 'nuxt-property-decorator'
import { Tab } from '~/Model/tab.model'
import { Track } from '~/Model/track.model'
import { Context } from '@nuxt/types'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { ITrackService } from '~/services/ITrackService'
@Component({
  layout: 'main',
  async asyncData(ctx: Context) {
    try {
      const trackService = container.get<ITrackService>(SYMBOLS.ITrackervice)
      const getTracks: any = await trackService.getTracks({
        limit: 30,
        skip: 1,
        view: -1,
      })
      console.log('getTracks', getTracks)
      return {
        tracks: getTracks.items,
      }
    } catch (error) {
      ctx.error({ statusCode: 500 })
    }
  },
})
export default class TopSongMonthPage extends Vue {
  tabs: Tab[] = items
  tracks: Track[] = []
}
</script>
<style lang="scss">
.chart-top-songs-month-page {
  min-height: 100vh;
}
</style>