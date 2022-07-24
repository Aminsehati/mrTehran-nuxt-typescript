<template>
  <div class="playlist-item">
    <nuxt-link :to="`/playlist/${playListInfo._id}`">
      <div class="image">
        <img :src="getImageUrl(playListInfo.imgUrl)" />
      </div>
      <div class="content pl-15">
        <h2 class="name-playlist">
          {{ playListInfo.name }}
        </h2>
        <p class="text-light followers">
          <i class="fa-regular fa-user text-12 mr-5"></i>
          {{ $utils.countFollowers(playListInfo.Followers) }}
        </p>
      </div>
      <span class="px-15">
        <i class="fa-solid fa-angle-right text-light text-12"></i>
      </span>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { PlayList } from '@/Model/playlist.model'
import './style.scss'
@Component({})
export default class PlayListComponent extends Vue {
  @Prop({ type: Object }) playListInfo!: PlayList[]
  public getImageUrl(url: string) {
    return url
  }
}
</script>
