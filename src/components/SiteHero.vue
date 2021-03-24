<template>
  <section class="hero">
    <div class="hero-image">
      <g-image
        src="~/assets/images/page-banner-calculator.png"
        alt="Banner Calculator"
        width="790"
        height="551"
      />
    </div>

    <div class="hero-conversor">
      <div class="hero-conversor-wrap">
        <h1>{{ $t('hero.title') }}</h1>
        <conversor />
      </div>
    </div>
  </section>
</template>

<script>
import Conversor from '../components/Conversor.vue'

export default {
  components: { Conversor },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
//  1440 - 873 - 567

h1 {
  font-family: JT Marnie;
  font-style: normal;
  font-weight: 400;
  font-size: 1.714rem;
  margin-bottom: 2rem;
  color: $headings;
}
.hero {
  padding-top: 0;
  padding-bottom: 0;

  display: grid;
  grid-template-columns: 1fr;
  background: $cinza-claro-bg;
  box-sizing: border-box;
  .hero-image {
    display: none;
  }
  .hero-conversor {
    padding: 2rem 2rem 0.5rem 2rem;
    margin-right: 0;
    box-sizing: border-box;
    max-width: 100vw;
  }
}

@media (min-width: $bp-mobile) {
  h1 {
    margin-top: 0;
    font-size: 2.571rem;
  }
  .hero {
    padding-top: 2.714rem;
    padding-bottom: 3rem;
    grid-template-columns: auto 1fr;
    gap: 4rem;
    .hero-image {
      display: block;
      max-width: 56.428rem;
      display: flex;
      align-items: flex-start;
      img {
        max-width: 100%;
        /* width: 100%;
                object-fit: scale-down;
                min-width: 100%; */
      }
    }
    .hero-conversor {
      padding: 1rem 2rem;
      margin-right: 3rem;
      display: flex;
      justify-content: center;
      .hero-conversor-wrap {
        max-width: 30rem;
      }
    }
  }
}
</style>
