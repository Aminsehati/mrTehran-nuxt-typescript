<template>
  <div class="home-page">
    <Container>
      <div class="new-albums mb-30">
        <div class="mb-20 flex justify-between items-center">
          <Title> New Albums</Title>
        </div>
        <div
          class="
            grid
            gap-x-15
            lg:grid-cols-4
            sm:grid-cols-2
            xs:grid-cols-2
            grid-cols-1
            gap-y-20
          "
        >
          <Album
            v-for="album in albumsItems"
            :key="album._id"
            :albumInfo="album"
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
            :playListInfo="item"
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
            :ArtistInfo="item"
          />
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Album } from '~/Model/album.model'
import { Artist } from '~/Model/artist.model'
import { PlayList } from '~/Model/playlist.model'
import { IArtistService } from '~/services/IArtistService'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IPlayListService } from '~/services/IPlayListService'
import qs from 'querystring'
import { IAlbumService } from '~/services/IAlbumService'
@Component({
  layout: 'main',
  async asyncData() {
    try {
      const playlistService = container.get<IPlayListService>(
        SYMBOLS.IPlayListService
      )
      const artistService = container.get<IArtistService>(
        SYMBOLS.IArtistService
      )
      const albumService = container.get<IAlbumService>(SYMBOLS.IAlbumService);
      const getPlayLists = await playlistService.getPlaylists({
        limit: 6,
        skip: 1,
        Followers: 1,
      })
      const getArtists = await artistService.getArtists({
        limit: 12,
        skip: 1,
      })
      const getAlbums = await albumService.getAlbums()
      return {
        playlistsItems: getPlayLists,
        artistItems: getArtists,
        albumsItems:getAlbums.items
      }
    } catch (error) {
      console.log(error)
    }
  },
})
export default class HomePage extends Vue {
  playlistsItems: PlayList[] = []
  artistItems: Artist[] = []
  albumsItems: Album[] = []
}
</script>
<style lang="scss">
.home-page {
  min-height: 100vh;
  padding-bottom: 60px;
}
</style>