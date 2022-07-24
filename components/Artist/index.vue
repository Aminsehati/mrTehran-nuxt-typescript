<template>
  <div class="Artist-item">
    <nuxt-link :to="`/artist/${ArtistInfo._id}`">
      <div class="image">
        <img
          :src="$utils.getImageUrl(ArtistInfo.imgUrl)"
          :alt="ArtistInfo.name"
        />
      </div>
      <div class="content pl-15">
        <h2 class="name-artist">
          {{ ArtistInfo.name }}
        </h2>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import './style.scss'
import { Artist } from '@/Model/artist.model'
@Component({})
export default class ArtistComponent extends Vue {
  @Prop({ type: Object }) ArtistInfo!: Artist
}
</script>