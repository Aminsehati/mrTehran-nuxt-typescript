<template>
  <div class="chart-artist">
    <nuxt-link :to="`/artist/${artistInfo._id}`">
      <div class="image-artist">
        <img :src="$utils.getImageUrl(artistInfo.imgUrl)" />
      </div>
      <div class="number-artist pl-16 pr-5 text-light text-16">
        <slot />
      </div>
      <div class="artist-info w-100 px-16">
        <h2 class="title text-14">
          {{ artistInfo.name }}
        </h2>
        <p class="text-light text-12">
          <i class="fa-solid fa-user text-12 mr-5"></i>
          {{ artistInfo.Followers }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import './style.scss'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Artist } from '~/Model/artist.model'
@Component({})
export default class ChartArtist extends Vue {
    @Prop() artistInfo!: Artist
}
</script>