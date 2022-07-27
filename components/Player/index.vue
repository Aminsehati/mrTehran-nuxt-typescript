<template>
  <div v-if="activePlayerItem && activePlayerItem.imgUrl" class="player">
    <div class="player-seection-track">
      <div class="image-track">
        <nuxt-link to="/">
          <img :src="$utils.getImageUrl(activePlayerItem.imgUrl)" />
        </nuxt-link>
      </div>
      <div class="detail-track pl-15">
        <nuxt-link to="/">
          {{ activePlayerItem.trackName }}
        </nuxt-link>
        <div>
          <nuxt-link
            v-for="(artist, index) in activePlayerItem.artists"
            :key="artist._id"
            :to="`/artist/${artist._id}`"
            class="text-light text-12"
          >
            {{ artist.name }}
            {{ activePlayerItem.artists.length === index + 1 ? '' : '&' }}
          </nuxt-link>
        </div>
      </div>
      <div class="vloumn-wrapper">
        <span class="volume-player">
          <i class="fa-solid fa-volume-high"></i>
        </span>
      </div>
      <span class="list-player ml-15" @click="$emit('showList')">
        <i class="fa-solid fa-bars"></i>
      </span>
    </div>
    <div class="player-section-control">
      <span class="player-time-duration pl-20">
        {{ convertTimeAudio(activePlayerItem.audioDuration) }}
      </span>
      <div
        class="prev-player text-center flex-grow cursor-pointer"
        @click="prevPlayer"
      >
        <i class="fa-solid fa-backward-step text-18"></i>
      </div>
      <div class="play">
        <span
          v-if="!activePlayerItem.playing"
          class="play-icon"
          @click="playAudio"
        >
          <i class="fa-solid fa-play"></i>
        </span>
        <span v-else class="pause-icon" @click="pauseAudio">
          <i class="fa-solid fa-pause"></i>
        </span>
      </div>
      <div
        class="next-player text-center flex-grow cursor-pointer"
        @click="nextPlayer"
      >
        <i class="fa-solid fa-backward-step text-18"></i>
      </div>
      <span class="pr-20">
        {{ convertTimeAudio(activePlayerItem.audioCurrentTime) }}
      </span>
    </div>
    <div ref="progress" class="player-progress">
      <div class="bar-progress-player" :style="progressPlayerAudio"></div>
    </div>
  </div>
</template>
<script lang="ts">
import './style.scss'
import { Vue, Component, getModule } from 'nuxt-property-decorator'
import ActivePlayerModule from '~/store/ActivePlayerModule'
import { ActivePlayer } from '~/Model/activePlayer.model'
@Component({})
export default class PlayerComponent extends Vue {
  private chnageCurrentTime: boolean = false
  public get activePlayerItem(): ActivePlayer {
    const _ActivePlayerModule = getModule(ActivePlayerModule, this.$store)
    const getPlayer = _ActivePlayerModule.getPlayer
    return getPlayer
  }

  public init() {
    const _ActivePlayerModule = getModule(ActivePlayerModule, this.$store)
    _ActivePlayerModule.setAudio(new Audio())
    this.activePlayerItem.audio.loop = true
    this.activePlayerItem.audio.addEventListener('progress', () => {})
    this.activePlayerItem.audio.addEventListener('canplay', () => {
      _ActivePlayerModule.setAudioDuration(
        parseFloat(this.activePlayerItem.audio.duration)
      )
    })

    if (!this.chnageCurrentTime) {
      this.activePlayerItem.audio.addEventListener('timeupdate', () => {
        _ActivePlayerModule.setAudioCurrentTime(
          parseFloat(this.activePlayerItem.audio.currentTime)
        )
      })
    }
  }

  public convertTimeAudio(value: any) {
    if (value) {
      return new Date(value * 1000).toISOString().substr(11, 8).slice(3)
    }
  }

  mounted() {
    this.init()
  }

  public get progressPlayerAudio() {
    return {
      width:
        (Number(this.activePlayerItem.audioCurrentTime) /
          Number(this.activePlayerItem.audioDuration)) *
          100 +
        '%'
    }
  }

  nextPlayer() {}
  prevPlayer() {}
  playAudio() {
    const _ActivePlayerModule = getModule(ActivePlayerModule, this.$store)
    _ActivePlayerModule.setChnageStatusPlayer(true)
    this.activePlayerItem.audio.play()
  }

  pauseAudio() {
    const _ActivePlayerModule = getModule(ActivePlayerModule, this.$store)
    _ActivePlayerModule.setChnageStatusPlayer(false)
    this.activePlayerItem.audio.pause()
  }
}
</script>
