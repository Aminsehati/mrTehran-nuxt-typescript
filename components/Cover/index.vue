<template>
  <div class="cover-artist">
    <div class="wrapper" :style="coverStyle">
      <div class="wrapper-content">
        <h2 class="text-center text-32 font-700">
          {{ coverInfo.name }}
        </h2>
        <p class="text-13 text-center text-light mb-20">
          {{ $utils.countFollowers(coverInfo.Followers) }}
          Followers
        </p>
        <div class="btn-group">
          <button class="btn_item" @click="$emit('follow')">
            <i class="fa-regular fa-circle text-12 mr-5"></i>
            Follow
          </button>
          <button class="btn_item">
            <i class="fa-solid fa-share-nodes mr-5 text-12"></i>
            Share
          </button>
          <button class="btn_item">
            <i class="fa-solid fa-mobile-screen-button text-12 mr-5"></i>
            Open In App
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Cover } from '@/Model/cover.model'
import './style.scss'
@Component({})
export default class CoverComponent extends Vue {
  @Prop() coverInfo!: Cover
  $utils: any
  get coverStyle() {
    const coverImageUrl: string = this.$utils.getImageUrl(
      this.coverInfo.coverImgUrl
    )
    return {
      background: `url(${coverImageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }
}
</script>
