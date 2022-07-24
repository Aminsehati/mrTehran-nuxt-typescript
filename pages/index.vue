<template>
  <div class="home-page">
    <Container>
      <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20 mb-20">
        <PlayList
          v-for="item in playlistsItems"
          :key="item._id"
          :play-list-info="item"
        />
      </div>
      <div class="grid xl:grid-cols-3 sm:grid-cols-2 gap-x-20 gap-y-20 mb-20">
        <Artist
          v-for="item in artistItems"
          :key="item._id"
          :artist-info="item"
        />
      </div>
      <div class="grid xl:grid-cols-4 sm:grid-cols-3 gap-x-20 gap-y-20 mb-20">
        <Album v-for="item in albumsItems" :key="item._id" :album-info="item" />
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Album } from '~/Model/album.model'
import { Artist } from '~/Model/artist.model'
import { PlayList } from '~/Model/playlist.model'
import { container } from '~/services/Ioc/inversify.config'
import { SYMBOLS } from '~/services/Ioc/SYMBOLS'
import { IPlayListService } from '~/services/IPlayListService'
// import { PlayList } from '~/Model/playlist.model'
@Component({
  layout: 'main',
  asyncData() {
    try {
      const playlistService = container.get<IPlayListService>(
        SYMBOLS.IPlayListService
      );
      console.log(playlistService);
    } catch (error) {
      console.log(error)
    }
  },
})
export default class HomePage extends Vue {
  playlistsItems: PlayList[] = [
    {
      _id: '1',
      name: 'POP',
      imgUrl: 'https://cdnmrtehran.ir/media/artists/5bf5d6fd91c2c.jpg',
      Followers: 30,
      coverImgUrl: '',
    },
  ]

  artistItems: Artist[] = [
    {
      _id: '1',
      name: 'Mohsen Chavoshi',
      imgUrl: 'https://cdnmrtehran.ir/media/artists/5e25a371ccbdb.jpg',
      coverImgUrl: 'https://cdnmrtehran.ir/media/artists/5e25a371ccbdb.jpg',
      Followers: 20,
    },
  ]

  albumsItems: Album[] = [
    {
      _id: '1',
      name: 'Amir Bi Gazand',
      imgUrl:
        'https://cdnmrtehran.ir/media/mp3s/Mohsen_Chavoshi/Albums/Harmless_Ruler/amire_bi_gazand_thumb_mrtehran.jpg',
      artists: [
        {
          _id: '2',
          name: 'Mohsen Chavoshi',
          imgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          coverImgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          Followers: 23,
        },
      ],
    },
    {
      _id: '2',
      name: 'Amir Bi Gazand',
      imgUrl:
        'https://cdnmrtehran.ir/media/mp3s/Mohsen_Chavoshi/Albums/Harmless_Ruler/amire_bi_gazand_thumb_mrtehran.jpg',
      artists: [
        {
          _id: '2',
          name: 'Mohsen Chavoshi',
          imgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          coverImgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          Followers: 23,
        },
      ],
    },
    {
      _id: '3',
      name: 'Amir Bi Gazand',
      imgUrl:
        'https://cdnmrtehran.ir/media/mp3s/Mohsen_Chavoshi/Albums/Harmless_Ruler/amire_bi_gazand_thumb_mrtehran.jpg',
      artists: [
        {
          _id: '2',
          name: 'Mohsen Chavoshi',
          imgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          coverImgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          Followers: 23,
        },
      ],
    },
    {
      _id: '4',
      name: 'Amir Bi Gazand',
      imgUrl:
        'https://cdnmrtehran.ir/media/mp3s/Mohsen_Chavoshi/Albums/Harmless_Ruler/amire_bi_gazand_thumb_mrtehran.jpg',
      artists: [
        {
          _id: '2',
          name: 'Mohsen Chavoshi',
          imgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          coverImgUrl: 'https://cdnmrtehran.ir/media/artists/5bf6ce135d735.jpg',
          Followers: 23,
        },
      ],
    },
  ]
}
</script>
