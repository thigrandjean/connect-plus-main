<template>
  <section class="page-banner">
    <div class="banner-work" v-if="model === 'work'">
      <h2>{{ $t('workwithus.description') }}</h2>
      <g-link
        id="banner-pages-work-with-us"
        class="cta cta-main"
        :to="$tp('/workwithus')"
        >{{ $t('workwithus.banner.cta') }}</g-link
      >
      <div class="image-wrap">
        <g-image
          alt="Join our team!"
          src="@/assets/images/page-banner-work-with-us-small.jpg"
        />
      </div>
    </div>

    <div class="banner-about" v-if="model === 'about'">
      <h2>{{ $t('aboutus.banner.title') }}</h2>
      <g-link
        id="banner-pages-about"
        class="cta cta-main"
        :to="$tp('/about')"
        >{{ $t('aboutus.banner.cta') }}</g-link
      >
      <div class="image-wrap">
        <g-image
          alt="Join our team!"
          src="@/assets/images/page-banner-work-with-us-small.jpg"
        />
      </div>
    </div>

    <div class="banner-contact">
      <h2>{{ $t('contactus.title') }}</h2>
      <p>{{ $t('contactus.subtitle') }}</p>
      <g-link
        id="banner-pages-contact"
        class="cta cta-main"
        :to="$tp('/contact')"
        >{{ $t('contactus.banner.cta') }}</g-link
      >
    </div>
  </section>
</template>

<script>
export default {
  props: ['model'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.page-banner {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  color: $main-grey;
  h2 {
    color: $headings;
  }
  .banner-work,
  .banner-about {
    background: $main-blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 3rem 2rem 3rem;
    height: 13.928rem;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    h2 {
      color: white;
      z-index: 2;
      text-align: center;
    }
    .cta {
      z-index: 2;
    }
  }
  .banner-about h2 {
    max-width: 30rem;
    margin: 0;
  }

  .banner-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 13.928rem;
    box-sizing: border-box;
    padding: 2rem;
    // border-top: 2rem solid $main-gold;
    h2 {
      color: $headings;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
}

@media (min-width: $bp-mobile) {
  .page-banner {
    grid-template-columns: 1fr 1fr;
    .banner-contact,
    .banner-work,
    .banner-about {
      height: 15.142rem;
    }
    .banner-contact {
      border-top: 0.857rem solid $main-gold;
      p {
        font-size: 1.5rem;
        margin: 1rem 0 1.5rem 0;
      }
    }
  }
}
</style>