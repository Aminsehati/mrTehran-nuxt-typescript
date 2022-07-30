<template>
  <div class="track-chart">
    <div class="track-image">
      <nuxt-link :to="`/track/${trackInfo._id}`">
        <img :src="$utils.getImageUrl(trackInfo.imgUrl)" />
      </nuxt-link>
    </div>
    <div class="number-track pl-16 pr-5 text-light text-16">
      <slot name="number" />
    </div>
    <div class="info-track w-full px-16">
      <div class="track-name">
        <nuxt-link :to="`/track/${trackInfo._id}`">
          {{ trackInfo.trackName }}
        </nuxt-link>
      </div>
      <div class="artist-name">
        <nuxt-link
          :to="`/artist/${artist._id}`"
          class="text-light text-13"
          v-for="artist in trackInfo.artists"
          :key="artist._id"
        >
          {{ artist.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="date-track text-light text-13">
      <i class="fa-solid fa-calendar text-12 mr-5"></i>
      {{
        $utils.convertDateToMiladi(trackInfo.createdAt)
      }}
    </div>
    <div class="count-likes text-light text-13">
      <i class="fa-regular fa-heart mr-5"></i>
      {{ trackInfo.like }}
      Likes
    </div>
    <div class="count-view text-light text-13">
      <i class="fa-solid fa-play mr-5 text-12"></i>
      {{ trackInfo.view }}
      Plays
    </div>
    <span
      @click="pauseTrack"
      :class="[
        'pause-track mr-16',
        {
          'play-track-active': getActivePlayer.idPlayer === trackInfo._id,
        },
      ]"
      v-if="
        getActivePlayer.idPlayer === trackInfo._id && getActivePlayer.playing
      "
    >
      <i class="fa-solid fa-pause"></i>
    </span>
    <span
      class="pause-track mr-16"
      v-else
      :class="[
        'play-track mr-16',
        { 'play-track-active': getActivePlayer.idPlayer === trackInfo._id },
      ]"
      @click="playTrack"
    >
      <i class="fa-solid fa-play"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, getModule } from 'nuxt-property-decorator'
import { ActivePlayer } from '~/Model/activePlayer.model'
import { Track } from '~/Model/track.model'
import ActivePlayerModule from '~/store/ActivePlayerModule'
import './style.scss'
@Component({})
export default class ChartTrack extends Vue {
  @Prop() trackInfo!: Track
  get getActivePlayer(): ActivePlayer {
    const _activePlayerModule = getModule(ActivePlayerModule, this.$store)
    const playerItem = _activePlayerModule.getPlayer

    return playerItem
  }
  playTrack() {}
  pauseTrack() {}
}
</script>