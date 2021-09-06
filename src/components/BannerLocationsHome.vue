<template>
  <div class="banner">
    <h2 class="banner-title">{{ $t('ourlocations.description') }}</h2>
    <g-link
      id="banner-our-location-cta"
      class="cta cta-main cta-banner-locations"
      :to="$tp('/locations')"
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

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.banner {
  height: 10rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: $layerBase;
  margin-bottom: 3rem;
  @media (min-width: $bp-mobile) {
    height: 7.142rem;
    flex-direction: row;
    justify-content: center;
    /* margin-top: -2rem; */
  }
}
h2 {
  position: relative;
  font-size: 1.5rem;
  color: white;
  @media (min-width: $bp-mobile) {
    font-size: 2.142rem;
    margin-right: 5rem;
  }
}
.cta-banner-locations {
  height: 2.285rem;
  width: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;
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
  z-index: $layerBase;
  object-fit: cover;
  width: 100%;
}
</style>