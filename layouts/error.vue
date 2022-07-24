<template>
  <div>
    <div v-if="error.statusCode === 404" class="page404">
      <div>
        <h2 class="title__">404</h2>
        <h4 class="text-center mb-15">Page Or Music Not Found .</h4>
        <div class="text-center">
          <Button @onClick="$router.push('/')" primary small>
            Go to Home
          </Button>
        </div>
      </div>
    </div>
    <div v-if="error.statusCode === 500">500</div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  layout: 'error',
})
export default class ErrorLayout extends Vue {
  @Prop() error: any
}
</script>
<style lang="scss">
.page404 {
  min-height: 100vh;
  background: url('@/assets/image/404bg.jpeg');
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  .title__ {
    font-size: 165px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
  }
  h4 {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    margin-top: -25px;
  }
}
</style>