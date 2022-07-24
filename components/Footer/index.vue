<template>
  <footer class="footer">
    <div class="container-sm">
      <div class="footer-social-wrapper">
        <a
          v-for="item in socialItems"
          :key="item.id"
          :href="item.href"
          class="footer-social-item"
        >
          <img :src="item.icon" />
        </a>
      </div>
      <div class="navbar-footer">
        <!-- <li
          v-for="navbarItem in navabrFooterItems"
          :key="navbarItem.id"
          class="navbar-footer-item"
        >
          <a href="/" class="text-14">
            {{ navbarItem.name }}
          </a>
        </li> -->
      </div>
      <div class="copy-right">
        <p class="text-center mb-5 opacity-50 font-300">
          © 2022 mrtehran.com All Rights Reserved. Persian Music Service 24/7
        </p>
        <p class="text-center opacity-50 font-300">
          MrTehran's website is registered in samandehi.ir.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import data from './data'
import { SocialNetwork } from '@/Model/socialNetwork.model'
import './style.scss'
@Component({})
export default class FooterComponents extends Vue {
  socialItems: SocialNetwork[] = data
}
</script>