<template>
  <div
    class="banner"
    :style="`background-image: url(${$store.state.bannerAbout.img})`"
  >
    <h2>{{ $t('aboutus.banner.title') }}</h2>
    <g-link id="banner-about-cta" class="cta cta-main" :to="$tp('/about')">{{
      $t('aboutus.banner.cta')
    }}</g-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.banner {
  height: 13.92rem;
  background: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.5rem 2rem;
  width: 100%;
  background-size: cover;
  background-position: center;
  h2 {
    color: white;
    text-align: center;
    margin: 0;
    font-size: 1.714rem;
  }
  p {
    font-weight: 400;
  }
}

@media (min-width: $bp-mobile) {
  .banner {
    height: 31.78rem;
    padding: 10rem 20% 8rem 20%;

    h2 {
      font-size: 3.428rem;
      max-width: 50rem;
    }
  }
}
</style>]