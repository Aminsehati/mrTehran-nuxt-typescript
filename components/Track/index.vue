<template>
  <div class="track-item">
    <div class="image">
      <nuxt-link to="/">
        <img :src="$utils.getImageUrl(trackInfo.imgUrl)" />
      </nuxt-link>
    </div>
    <div class="content px-15">
      <nuxt-link to="/" class="text-white track-name">
        {{ trackInfo.trackName }}
      </nuxt-link>
      <div class="artists mt-5">
        <nuxt-link
          v-for="(artist, index) in trackInfo.artists"
          :key="artist._id"
          :to="`/artist/${artist._id}`"
          class="text-light text-13"
        >
          {{ artist.name }}
          {{ trackInfo.artists.length === index + 1 ? '' : '&' }}
        </nuxt-link>
      </div>
    </div>
    <div class="play-track">
      <span
        v-if="
          ActivePlayerItem.idPlayer === trackInfo._id &&
          ActivePlayerItem.playing
        "
        :class="[
          'play-track-icon',
          { 'play-track-active': ActivePlayerItem.idPlayer === trackInfo._id }
        ]"
        @click="pauseTrack"
      >
        <i class="fa-solid fa-pause"></i>
      </span>
      <span
        v-else
        :class="[
          'play-track-icon',
          { 'play-track-active': ActivePlayerItem.idPlayer === trackInfo._id }
        ]"
        @click="playTrack(trackInfo)"
      >
        <i class="fa-solid fa-play"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, getModule } from 'nuxt-property-decorator'
import { ActivePlayer } from '~/Model/activePlayer.model'
import { Track } from '~/Model/track.model'
import ActivePlayerModule from '~/store/ActivePlayerModule'
import './style.scss'
@Component({})
export default class TrackComponent extends Vue {
  [x: string]: any
  @Prop() trackInfo!: Track
  public get ActivePlayerItem(): ActivePlayer {
    const _ActivePlayerModule = getModule(ActivePlayerModule, this.$store)
    const getPlayer: ActivePlayer = _ActivePlayerModule.getPlayer
    return getPlayer
  }

  public pauseTrack() {
    const _ActivePlayerModule = getModule(ActivePlayerModule, this.$store)
    _ActivePlayerModule.setChnageStatusPlayer(false)
    this.ActivePlayerItem.audio.pause()
  }

  public playTrack(track: Track) {
    this.ActivePlayerItem.audio.pause()
    const _ActivePlayerModule = getModule(ActivePlayerModule, this.$store)
    if (track._id !== this.ActivePlayerItem.idPlayer) {
      _ActivePlayerModule.setActivePlayer(track)
      this.ActivePlayerItem.audio.src = this.$utils.getAudioUrl(track.audioUrl)
    }
    _ActivePlayerModule.setChnageStatusPlayer(true)
    this.ActivePlayerItem.audio.play()
  }
}
</script>

<style></style>
