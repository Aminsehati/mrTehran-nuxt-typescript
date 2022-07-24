<template>
  <div class="album-track">
    <nuxt-link :to="`/album/${albumInfo._id}`">
      <div class="image-album-track">
        <img :src="$utils.getImageUrl(albumInfo.imgUrl)" />
      </div>
      <div class="trackName">
        {{ albumInfo.name }}
      </div>
    </nuxt-link>
    <div class="artists">
      <nuxt-link
        v-for="artist in albumInfo.artists"
        :key="artist._id"
        :to="`/artist/${artist._id}`"
        class="text-light text-14"
      >
        {{ artist.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import './style.scss'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Album } from '@/Model/album.model'
@Component({})
export default class AlbumComponent extends Vue {
  @Prop() albumInfo!: Album
}
</script>