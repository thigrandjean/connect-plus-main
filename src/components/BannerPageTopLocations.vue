<template>
  <div class="pages-banner">
    <h1>{{ $t('ourlocations.title') }}</h1>
    <h2>{{ $t('ourlocations.description') }}</h2>

    <div class="image-wrap">
      <g-image
        src="@/assets/images/banner-our-locations.jpg"
        :alt="$t('ourlocations.title')"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/style/vars.scss';
/* 
$header-mob-h: 5.357rem;
$header-desk-h: 6.785rem;
$header-menu-desk-h: 4.642rem; */

.pages-banner {
  height: 7.142rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
  position: relative;
  /* overflow: hidden; */
  @media (min-width: $bp-mobile) {
    height: 16.785rem;
  }
  .image-wrap {
    overflow: hidden;
  }
  #search-our-locations {
    position: absolute;
    width: 100%;
    height: 20px;
    background: greenyellow;
    top: -$header-mob-h;
    z-index: 1000000;
    @media (min-width: $bp-mobile) {
      top: -($header-desk-h + $header-menu-desk-h);
    }
  }
  h1 {
    color: white;
    margin: 0;
    text-align: center;
    font-weight: normal;
    z-index: 3;
    font-size: 1.428rem;
    line-height: 0.5rem;
    @media (min-width: $bp-mobile) {
      line-height: 1.9rem;
      font-size: 3.428rem;
    }
  }

  h2 {
    color: white;
    margin: 0;
    margin-top: 1rem;
    text-align: center;
    font-weight: normal;
    z-index: 3;
    font-size: 1.142rem;
    font-weight: 300;
    @media (min-width: $bp-mobile) {
      font-size: 1.71rem;
    }
  }
}
</style>