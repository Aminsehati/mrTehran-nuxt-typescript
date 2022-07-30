<template>
  <div class="chart-top-song-week-page">
    <div class="container-sm">
      <Tabs :tabs="tabs" />
      <div class="title mb-20 flex align-center justify-between">
        <Title> Top Songs Week </Title>
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
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { Tab } from '~/Model/tab.model'
import { Track } from '~/Model/track.model'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { ITrackService } from '~/services/ITrackService'
import items from './items'
@Component({
  layout: 'main',
  async asyncData(ctx: Context) {
    try {
      const tracksService = container.get<ITrackService>(SYMBOLS.ITrackervice)
      const getTracks: any = await tracksService.getTracks({
        limit: 20,
        skip: 1,
      })
      return {
        tracks: getTracks.items,
      }
    } catch (error) {
      ctx.error({ statusCode: 500 })
    }
  },
})
export default class ChartTopSongWeekPage extends Vue {
  tabs: Tab[] = items
  tracks: Track[] = []
}
</script>
<style lang="scss">
.chart-top-song-week-page {
  min-height: 100vh;
}
</style>