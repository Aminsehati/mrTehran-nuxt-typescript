<template>
  <div class="browse-page">
    <Container>
      <Tabs :tabs="tabs" />
      <div class="title mb-20 flex align-center justify-between">
        <Title> Featured </Title>
        <div>
          <Button class="mr-15" secondary>
            <i class="fa-solid fa-play mr-10"></i>
            Play All
          </Button>
        </div>
      </div>
      <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20 mb-25">
        <Track
          v-for="track in listTracks"
          :key="track._id"
          :track-info="track"
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
import { Track } from '~/Model/track.model'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { ITrackService } from '~/services/ITrackService'
import { Tab } from '~/Model/tab.model'
import items from './items'
@Component({
  layout: 'main',
  async asyncData(ctx: Context) {
    try {
      const trackService = container.get<ITrackService>(SYMBOLS.ITrackervice)
      const getTracks: any = await trackService.getTracks({
        limit: 3,
        skip: 1,
      })
      console.log('getTracks', getTracks)
      return {
        listTracks: getTracks.items,
        tottalCount: getTracks.tottalCount,
      }
    } catch (error) {
      ctx.error({ statusCode: 500 })
    }
  },
})
export default class BrowsePage extends Vue {
  listTracks: Track[] = []
  limit: number = 3
  skip: number = 1
  tottalCount: number = 0
  tabs: Tab[] = items
  public async getTracks() {
    try {
      const trackService = container.get<ITrackService>(SYMBOLS.ITrackervice)
      const getTracks: any = await trackService.getTracks({
        limit: this.limit,
        skip: this.skip,
      })
      this.listTracks = getTracks.items
    } catch (error) {
      /// /
    }
  }

  async chnageSkip(skip: number) {
    this.skip = skip
    await this.getTracks()
  }

  head() {
    return {
      title: `Featured and Top Songs | Page ${this.skip} | MrTehran.com`,
    }
  }
}
</script>

<style lang="scss">
.browse-page {
  min-height: 100vh;
}
</style>
