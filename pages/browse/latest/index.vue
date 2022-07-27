<template>
  <div class="browse-latest-page">
    <Container>
      <Tabs />
      <div class="title mb-20 flex align-center justify-between">
        <Title> LATEST </Title>
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
@Component({
  layout: 'main',
  async asyncData(_ctx: Context) {
    try {
      const _TrackService = container.get<ITrackService>(SYMBOLS.ITrackervice)
      const getTracks: any = await _TrackService.getTracks({
        limit: 3,
        skip: 1
      })
      return {
        listTracks: getTracks.items,
        tottalCount: getTracks.tottalCount
      }
    } catch (error) {
      _ctx.error({ statusCode: 500 })
    }
  }
})
export default class BrowseLatest extends Vue {
  tottalCount: number = 0
  limit: number = 3
  skip: number = 1
  listTracks: Track[] = []
  async getTracks() {
    try {
      const _TrackService = container.get<ITrackService>(SYMBOLS.ITrackervice)
      const getTracks: any = await _TrackService.getTracks({
        limit: this.limit,
        skip: this.skip
      })
      this.listTracks = getTracks.items
    } catch (error) {}
  }

  async chnageSkip(skip: number) {
    this.skip = skip
    await this.getTracks()
  }

  head() {
    return {
      title: `Latest Songs | Page ${this.skip} | MrTehran.com`
    }
  }
}
</script>

<style lang="scss">
.browse-latest-page {
  min-height: 100vh;
}
</style>
