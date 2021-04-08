<template>
  <section class="hero">
    <div class="hero-wrap">
      <div class="hero-description">
        <h2>{{ $t('hero.banner.title') }}</h2>
        <p>{{ $t('hero.banner.text') }}</p>
        <p class="msg">{{ $t('hero.banner.msg') }}</p>
        <!-- <g-image
        src="~/assets/images/page-banner-calculator.png"
        alt="Banner Calculator"
        width="790"
        height="551"
      /> -->
      </div>

      <div class="hero-conversor">
        <div class="hero-conversor-wrap">
          <h1>{{ $t('hero.title') }}</h1>
          <conversor />
        </div>
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

  .hero-conversor {
    padding: 2rem 2rem 0.5rem 2rem;
    margin-right: 0;
    box-sizing: border-box;
    max-width: 100vw;
  }
}
.hero-description {
  display: none;
}
@media (min-width: $bp-mobile) {
  h1 {
    margin-top: 0;
    font-size: 2.571rem;
  }
  .hero-wrap {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    padding: 0 3rem;
    box-sizing: border-box;
    h2 {
      margin: 0;
      font-size: 3.428rem;
      color: white;
    }
    p {
      font-size: 1.571rem;
      line-height: 136.8%;
    }
    p.msg {
      text-align: right;
    }
  }

  .hero {
    padding-top: 1.571rem;
    padding-bottom: 1.571rem;
    /* grid-template-columns: auto 1fr; */
    /* gap: 4rem; */
    justify-content: flex-end;
    display: flex;
    background: url('../assets/images/bg-hero-home.jpg');
    background-size: cover;
    background-position: center center;
  }
  .hero-description {
    padding: 2rem 7.785rem 5rem 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: white;
  }
  .hero-conversor {
    padding: 1rem 2rem;
    /* margin-right: 3rem; */
    display: flex;
    justify-content: center;
    background: #f0f0f0;
    max-width: 30.642;
    border-radius: 10px;
    box-sizing: border-box;
    .hero-conversor-wrap {
      /* max-width: 30.64rem; */
    }
  }
}
</style>
