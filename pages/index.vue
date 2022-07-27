<template>
  <div class="home-page">
    <Container>
      <Banner />
      <div ref="bestTracks" class="best-of-month mb-30">
        <div class="mb-20 flex justify-between items-center">
          <Title> Best of Month </Title>
          <div class="flex items-center">
            <Button class="mr-15" secondary>
              <i class="fa-solid fa-play mr-10"></i>
              Play All
            </Button>
            <nuxt-link to="/browse/popular" class="text-white">
              See All
              <i class="fa-solid fa-chevron-right ml-10 text-12"></i>
            </nuxt-link>
          </div>
        </div>
        <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-15">
          <Track
            v-for="track in listTracksBestInMonth"
            :key="track.id"
            :track-info="track"
          />
        </div>
      </div>
      <div class="new-albums mb-30">
        <div class="mb-20 flex justify-between items-center">
          <Title> New Albums</Title>
        </div>
        <div
          class="grid gap-x-15 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1 gap-y-20"
        >
          <Album
            v-for="album in albumsItems"
            :key="album._id"
            :album-info="album"
          />
        </div>
      </div>
      <div class="top-play-list mb-30">
        <div class="mb-20 flex justify-between items-center">
          <Title> Top Playlists </Title>
          <div>
            <nuxt-link to="/artists" class="text-white">
              See All
              <i class="fa-solid fa-chevron-right ml-10 text-12"></i>
            </nuxt-link>
          </div>
        </div>
        <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20">
          <PlayList
            v-for="item in playlistsItems"
            :key="item._id"
            :play-list-info="item"
          />
        </div>
      </div>
      <div class="top-artist-list mb-30">
        <div class="mb-20 flex justify-between items-center">
          <Title> Top Artists </Title>
          <div>
            <nuxt-link to="/artists" class="text-white">
              See All
              <i class="fa-solid fa-chevron-right ml-10 text-12"></i>
            </nuxt-link>
          </div>
        </div>
        <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20">
          <Artist
            v-for="item in artistItems"
            :key="item._id"
            :artist-info="item"
          />
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { Album } from '~/Model/album.model'
import { Artist } from '~/Model/artist.model'
import { PlayList } from '~/Model/playlist.model'
import { IArtistService } from '~/services/IArtistService'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IPlayListService } from '~/services/IPlayListService'
import { IAlbumService } from '~/services/IAlbumService'
import { ITrackService } from '~/services/ITrackService'
import { Track } from '~/Model/track.model'
@Component({
  layout: 'main',
  async asyncData(_ctx: Context) {
    try {
      const playlistService = container.get<IPlayListService>(
        SYMBOLS.IPlayListService
      )
      const artistService = container.get<IArtistService>(
        SYMBOLS.IArtistService
      )
      const albumService = container.get<IAlbumService>(SYMBOLS.IAlbumService)
      const trackService = container.get<ITrackService>(SYMBOLS.ITrackervice)
      const getPlayLists: any = await playlistService.getPlaylists({
        limit: 6,
        skip: 1,
        Followers: 1
      })
      const getArtists: any = await artistService.getArtists({
        limit: 12,
        skip: 1
      })
      const getAlbums: any = await albumService.getAlbums()
      const getTracks: any = await trackService.getTracks({
        limit: 20,
        skip: 1
      })
      return {
        playlistsItems: getPlayLists.items,
        artistItems: getArtists.items,
        albumsItems: getAlbums.items,
        listTracksBestInMonth: getTracks.items
      }
    } catch (error) {
      _ctx.error({ statusCode: 500 })
    }
  }
})
export default class HomePage extends Vue {
  playlistsItems: PlayList[] = []
  artistItems: Artist[] = []
  albumsItems: Album[] = []
  listTracksBestInMonth: Track[] = []
}
</script>
<style lang="scss">
.home-page {
  min-height: 100vh;
  padding-bottom: 60px;
}
</style>
