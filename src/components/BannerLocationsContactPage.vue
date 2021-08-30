<template>
  <div class="banner">
    <h2 class="banner-title">{{ $t('ourlocations.title') }}</h2>
    <g-link
      id="banner-our-location-cta"
      class="cta cta-main cta-banner-locations"
      :to="$tp(link)"
      >{{ $t('ourlocations.cta') }}</g-link
    >
    <div class="img-wrap">
      <g-image
        src="@/assets/images/banner-our-locations.jpg"
        :alt="$t('ourlocations.title')"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.banner {
  height: 10rem;
  /* overflow: hidden; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  box-sizing: border-box;
  padding: 0 2rem;
  overflow: hidden;
  @media (min-width: $bp-mobile) {
    height: 12.857rem;
  }
}

h2 {
  padding: 0 2rem;

  position: relative;
  font-size: 1.5rem;
  color: white;
  margin-top: 0;
  text-align: center;
  @media (min-width: $bp-mobile) {
    font-size: 2.142rem;
  }
}
.cta-banner-locations {
  height: 2.285rem;
  width: unset;
  max-width: unset;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  @media (min-width: $bp-mobile) {
    height: 2.857rem;
  }
}

.img-wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: $layerBg;
}

img {
  position: absolute;
  z-index: 0;
  object-fit: cover;
  width: 100%;
}
</style>